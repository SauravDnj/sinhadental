import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the custom shadow tokens in globals.css.
const twMerge = extendTailwindMerge({
  extend: { theme: { shadow: ["soft", "lift"] } },
});

/** Joins class names and resolves Tailwind conflicts (the last class wins, e.g. `inline-flex` + `hidden`). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** True when `href` is the current page or one of its children ("/" matches only itself). */
export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
