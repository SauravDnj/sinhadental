import Link from "next/link";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { ToothGlyph } from "@/components/dental/illustrations";

/** Wordmark used until the clinic supplies its logo file. */
export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  const light = tone === "light";
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${clinic.name}, home`}>
      <span
        className={cn(
          "grid size-10 place-items-center rounded-xl transition-transform duration-300 group-hover:-rotate-6",
          light ? "bg-white/15 text-white" : "bg-primary text-white",
        )}
      >
        <ToothGlyph className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-heading text-[1.0625rem] font-extrabold tracking-tight", light ? "text-white" : "text-primary-deep")}>
          Dr. Sinha&apos;s
        </span>
        <span className={cn("mt-1 text-[0.6875rem] font-semibold uppercase tracking-[0.18em]", light ? "text-white/80" : "text-muted")}>
          Dental Studio
        </span>
      </span>
    </Link>
  );
}
