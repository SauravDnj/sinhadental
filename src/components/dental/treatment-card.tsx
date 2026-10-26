import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";
import { cn } from "@/lib/utils";
import { TreatmentIcon } from "./treatment-icon";

/** Whole card is clickable through a single stretched link (no nested links). */
export function TreatmentCard({ treatment, className }: { treatment: Treatment; className?: string }) {
  const { image } = treatment;
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-(--radius-card) border border-border bg-surface transition-[transform,box-shadow,border-color] duration-200",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift focus-within:shadow-lift",
        className,
      )}
    >
      {image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-mint">
          <Image
            src={image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            style={{ objectPosition: image.position }}
          />
        </div>
      )}
      <div className={cn("flex flex-1 flex-col p-6 lg:p-7", image && "pt-0")}>
        <div className="flex items-start justify-between gap-3">
          <span
            className={cn(
              "grid size-12 place-items-center rounded-2xl bg-mint text-primary-deep transition-colors duration-200 group-hover:bg-primary group-hover:text-white",
              image && "relative -mt-6 border-4 border-surface",
            )}
          >
            <TreatmentIcon icon={treatment.icon} className="size-6" />
          </span>
          {!treatment.confirmed && (
            <span className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted">
              Ask the clinic
            </span>
          )}
        </div>
        <h3 className="mt-5 text-xl font-bold">
          <Link
            href={`/treatments/${treatment.slug}`}
            className="after:absolute after:inset-0 after:rounded-(--radius-card) focus-visible:outline-none focus-visible:after:outline-3 focus-visible:after:outline-offset-2 focus-visible:after:outline-primary"
          >
            {treatment.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{treatment.cardDescription}</p>
        <span aria-hidden className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-primary-deep">
          Learn about treatment
          <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}
