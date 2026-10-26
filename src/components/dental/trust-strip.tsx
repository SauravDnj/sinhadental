import Link from "next/link";
import { HeartHandshake, MapPin, MessageCircle, Star } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";

/** Short row of trust signals. The Google rating appears only once it has been re-verified. */
export function TrustStrip({ className }: { className?: string }) {
  const { rating } = clinic;
  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-(--radius-card) border border-border bg-border shadow-soft lg:grid-cols-4",
        className,
      )}
    >
      <li className="bg-surface">
        <Link
          href="/patient-reviews"
          className="flex h-full items-center gap-3 p-4 transition-colors hover:bg-mint sm:p-5"
        >
          <Star aria-hidden className="size-5 shrink-0 fill-primary text-primary" />
          <span className="text-sm leading-snug sm:text-[0.9375rem]">
            {rating.verified ? (
              <>
                <strong className="font-semibold text-primary-deep">{rating.value.toFixed(1)} Google rating</strong>
                <span className="block text-muted">{rating.count} reviews</span>
              </>
            ) : (
              <>
                <strong className="font-semibold text-primary-deep">Google reviews</strong>
                <span className="block text-muted">Read what patients say</span>
              </>
            )}
          </span>
        </Link>
      </li>
      <TrustItem icon={<MapPin aria-hidden className="size-5 shrink-0 text-primary-deep" />} title="Palanpur, Surat" text="Gaurav Path Road" />
      <TrustItem
        icon={<MessageCircle aria-hidden className="size-5 shrink-0 text-primary-deep" />}
        title="Clear explanations"
        text="At every step"
      />
      <TrustItem
        icon={<HeartHandshake aria-hidden className="size-5 shrink-0 text-primary-deep" />}
        title="Patient-first care"
        text="Calm and unhurried"
      />
    </ul>
  );
}

function TrustItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <li className="flex items-center gap-3 bg-surface p-4 sm:p-5">
      {icon}
      <span className="text-sm leading-snug sm:text-[0.9375rem]">
        <strong className="font-semibold text-primary-deep">{title}</strong>
        <span className="block text-muted">{text}</span>
      </span>
    </li>
  );
}
