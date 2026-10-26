import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Classic tooth outline in a 100×110 box. Shared by the logo, hero and 404. */
export const TOOTH_PATH =
  "M50 18C38 8 18 8 14 26C10 44 18 58 22 74C25 88 27 102 34 102C41 102 41 84 50 78C59 84 59 102 66 102C73 102 75 88 78 74C82 58 90 44 86 26C82 8 62 8 50 18Z";

type IllustrationProps = SVGProps<SVGSVGElement>;

/** Thin smile arc used under headings as a signature motif. Decorative. */
export function SmileCurve({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 56 14" fill="none" aria-hidden className={className} {...props}>
      <path d="M3 3.5C17 13 39 13 53 3.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Small tooth glyph for the logo and icons. */
export function ToothGlyph({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 100 110" fill="none" aria-hidden className={className} {...props}>
      <path d={TOOTH_PATH} stroke="currentColor" strokeWidth="9" strokeLinejoin="round" />
    </svg>
  );
}

/** Tooth with a bracket and wire, used as the braces treatment icon. */
export function BracesGlyph({ className, ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className} {...props}>
      <path
        d="M12 4.6c-1.3-1-3.6-1-4.1 1-.4 2 .5 3.5 1 5.3.3 1.6.5 3.1 1.3 3.1s.8-2 1.8-2.7c1 .7 1 2.7 1.8 2.7s1-1.5 1.3-3.1c.5-1.8 1.4-3.3 1-5.3-.5-2-2.8-2-4.1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3 9.5h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="10.2" y="8" width="3.6" height="3" rx="0.8" fill="currentColor" />
    </svg>
  );
}

/** Large tooth line drawing that draws itself in once, then gently floats. Decorative. */
export function ToothLineArt({ className, float = true }: { className?: string; float?: boolean }) {
  return (
    <svg viewBox="0 0 100 110" fill="none" aria-hidden className={cn(float && "animate-float", className)}>
      <path
        d={TOOTH_PATH}
        pathLength={1}
        className="line-draw animate-draw"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M30 30C34 22 42 21 46 25"
        pathLength={1}
        className="line-draw animate-draw [animation-delay:0.9s]"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

/** Small four-point sparkle accent. Decorative. */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M12 2c.6 4.8 2.2 6.4 7 7-4.8.6-6.4 2.2-7 7-.6-4.8-2.2-6.4-7-7 4.8-.6 6.4-2.2 7-7Z" fill="currentColor" />
    </svg>
  );
}
