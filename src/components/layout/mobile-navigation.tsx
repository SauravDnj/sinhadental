"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CalendarDays, MapPin, Menu, Phone, X } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref, mainNav } from "@/data/navigation";
import { cn, isActivePath } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const noopSubscribe = () => () => {};

/** False during SSR and hydration, true afterwards, so the portal never affects hydration. */
function useMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export function MobileNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const mounted = useMounted();

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  const duration = reduceMotion ? 0 : 0.3;

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(true)}
        className="grid size-11 place-items-center rounded-xl border border-border bg-surface text-primary-deep lg:hidden"
      >
        <Menu aria-hidden className="size-5" />
        <span className="sr-only">Open menu</span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <motion.div
                  className="absolute inset-0 bg-primary-deeper/40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration }}
                  onClick={close}
                  aria-hidden
                />
                <motion.div
                  ref={panelRef}
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Main menu"
                  className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto bg-surface shadow-lift"
                  initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
                  animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
                  exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
                  transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex h-16 items-center justify-between border-b border-border px-5">
                    <Logo />
                    <button
                      type="button"
                      onClick={close}
                      className="grid size-11 place-items-center rounded-xl border border-border text-primary-deep"
                    >
                      <X aria-hidden className="size-5" />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>

                  <nav aria-label="Main" className="px-3 py-4">
                    <ul>
                      {mainNav.map((item, index) => {
                        const active = isActivePath(pathname, item.href);
                        return (
                          <motion.li
                            key={item.href}
                            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.05 + index * 0.04 }}
                          >
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "flex min-h-12 items-center justify-between rounded-xl px-4 font-heading text-lg font-semibold",
                                active ? "bg-mint text-primary-deep" : "text-ink hover:bg-mint/60",
                              )}
                            >
                              {item.label}
                              {active && <span aria-hidden className="size-2 rounded-full bg-primary" />}
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </nav>

                  <div className="mt-auto space-y-3 border-t border-border p-5">
                    <ButtonLink
                      href={clinic.phone.href}
                      size="lg"
                      className="w-full"
                      icon={<Phone aria-hidden className="size-5" />}
                    >
                      Call {clinic.phone.display}
                    </ButtonLink>
                    <ButtonLink
                      href={appointmentHref}
                      variant="secondary"
                      size="lg"
                      className="w-full"
                      onClick={() => setOpen(false)}
                      icon={<CalendarDays aria-hidden className="size-5" />}
                    >
                      Book an Appointment
                    </ButtonLink>
                    <p className="flex gap-2 pt-2 text-sm text-muted">
                      <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-primary-deep" />
                      {clinic.address.full}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
