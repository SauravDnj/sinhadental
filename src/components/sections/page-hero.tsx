import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { SmileCurve } from "@/components/dental/illustrations";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

/** Hero for inner pages. Animates with CSS so it is visible before JavaScript loads. */
export function PageHero({ eyebrow, title, description, breadcrumbs, actions, aside, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border bg-mint/50", className)}>
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-mint blur-2xl" />
      <div
        className={cn(
          "container-site relative grid gap-10 pt-8 pb-14 lg:pt-10 lg:pb-20",
          aside && "lg:grid-cols-[7fr_5fr] lg:items-center",
        )}
      >
        <div className="motion-safe:animate-fade-up">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          <p className={cn("eyebrow", breadcrumbs ? "mt-8 lg:mt-10" : "mt-4")}>{eyebrow}</p>
          <SmileCurve className="mt-3 h-3 w-14 text-primary" />
          <h1 className="mt-4 max-w-3xl text-[2.125rem] font-extrabold sm:text-5xl lg:text-[3.5rem]">{title}</h1>
          {description && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-muted lg:text-xl">{description}</div>}
          {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">{actions}</div>}
        </div>
        {aside && <div className="motion-safe:animate-fade-up motion-safe:[animation-delay:120ms]">{aside}</div>}
      </div>
    </section>
  );
}
