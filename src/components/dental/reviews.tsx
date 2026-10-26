import { HandHeart, HeartHandshake, LifeBuoy, ListChecks, MessageCircle, Quote, Star } from "lucide-react";
import { clinic } from "@/data/clinic";
import type { Review } from "@/data/reviews";
import { reviewThemes } from "@/data/reviews";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** A genuine, approved review excerpt with its source. */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col rounded-(--radius-card) border border-border bg-surface p-6 lg:p-7">
      <Quote aria-hidden className="size-7 text-primary/50" />
      <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink">“{review.excerpt}”</blockquote>
      <figcaption className="mt-6 text-sm text-muted">
        {review.author && <span className="font-semibold text-ink">{review.author} · </span>}
        {review.source}
        {review.date && <span> · {review.date}</span>}
      </figcaption>
    </figure>
  );
}

const themeIcons = {
  calm: HandHeart,
  explain: MessageCircle,
  care: HeartHandshake,
  emergency: LifeBuoy,
  thorough: ListChecks,
} as const;

/** Themes from patient feedback, presented as themes rather than quotes. */
export function ReviewThemes({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-3", className)}>
      {reviewThemes.map((theme) => {
        const Icon = themeIcons[theme.icon];
        return (
          <li
            key={theme.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-[0.9375rem] font-medium text-ink"
          >
            <Icon aria-hidden className="size-4 text-primary-deep" />
            {theme.label}
          </li>
        );
      })}
    </ul>
  );
}

/** Links to the live Google listing. Shows the rating only once verified. */
export function GoogleReviewsCard({ className }: { className?: string }) {
  const { rating } = clinic;
  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-(--radius-card) border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between lg:p-8",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-mint">
          <Star aria-hidden className="size-6 fill-primary text-primary" />
        </span>
        <div>
          {rating.verified ? (
            <p className="font-heading text-2xl font-bold text-primary-deep">
              {rating.value.toFixed(1)} on Google <span className="text-base font-medium text-muted">· {rating.count} reviews</span>
            </p>
          ) : (
            <p className="font-heading text-xl font-bold text-primary-deep">Read our reviews on Google</p>
          )}
          <p className="mt-1 text-muted">See every review, and leave your own, on our Google listing.</p>
        </div>
      </div>
      <ButtonLink href={clinic.mapsUrl} external variant="secondary">
        Read all reviews on Google
      </ButtonLink>
    </div>
  );
}
