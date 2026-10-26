"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref, mainNav } from "@/data/navigation";
import { cn, isActivePath } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNavigation } from "./mobile-navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-200",
        transparent ? "border-transparent bg-transparent" : "border-border bg-surface",
        scrolled && "shadow-soft",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex min-h-11 items-center rounded-lg px-3 text-[0.9375rem] font-medium transition-colors",
                      active ? "text-primary-deep" : "text-ink/80 hover:text-primary-deep",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 bottom-1.5 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={clinic.phone.href}
            className="hidden min-h-11 items-center gap-2 rounded-lg px-3 text-[0.9375rem] font-semibold text-primary-deep hover:bg-mint xl:inline-flex"
          >
            <Phone aria-hidden className="size-4" />
            {clinic.phone.display}
          </a>
          <ButtonLink
            href={appointmentHref}
            className="hidden sm:inline-flex"
            icon={<CalendarDays aria-hidden className="size-4" />}
          >
            Book an Appointment
          </ButtonLink>
          <a
            href={clinic.phone.href}
            className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-primary-deep sm:hidden"
          >
            <Phone aria-hidden className="size-5" />
            <span className="sr-only">Call the clinic on {clinic.phone.display}</span>
          </a>
          <MobileNavigation pathname={pathname} />
        </div>
      </div>
    </header>
  );
}
