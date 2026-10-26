"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

/**
 * Mobile-only Call / Book bar. Appears after the first screen and hides
 * whenever an element marked `data-hide-floating-cta` (form, footer) is visible,
 * so it never covers form fields or footer content.
 */
export function FloatingMobileCTA() {
  const pathname = usePathname();
  const [pastHero, setPastHero] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll("[data-hide-floating-cta]");
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      setBlocked(visible.size > 0);
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  const shown = pastHero && !blocked;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-surface/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-lift transition-[transform,visibility] duration-300 md:hidden",
        shown ? "visible translate-y-0" : "invisible translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <ButtonLink href={clinic.phone.href} className="flex-1" icon={<Phone aria-hidden className="size-4" />}>
          Call
        </ButtonLink>
        <ButtonLink
          href={appointmentHref}
          variant="secondary"
          className="flex-1"
          icon={<CalendarDays aria-hidden className="size-4" />}
        >
          Book
        </ButtonLink>
      </div>
    </div>
  );
}
