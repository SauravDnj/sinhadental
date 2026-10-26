import { clinic } from "@/data/clinic";
import { reviews } from "@/data/reviews";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { GoogleReviewsCard, ReviewCard, ReviewThemes } from "@/components/dental/reviews";
import { Star } from "lucide-react";

export const metadata = pageMetadata({
  title: "Patient Reviews · Dr. Sinha's Dental Studio",
  description: "Read what patients say about their visits to our clinic in Palanpur, Surat, and see all reviews on Google.",
  path: "/patient-reviews",
});

export default function PatientReviewsPage() {
  const { rating } = clinic;

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Patient reviews", path: "/patient-reviews" }]}
        eyebrow="Patient reviews"
        title="What patients say about their visits"
        description={<p>Honest words from people who have visited the studio, with a link to every review on Google.</p>}
        aside={
          <div className="mx-auto w-full max-w-sm rounded-[2rem] border border-border bg-surface p-8 text-center shadow-lift">
            <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-mint">
              <Star aria-hidden className="size-7 fill-primary text-primary" />
            </span>
            {rating.verified ? (
              <>
                <p className="mt-5 font-heading text-5xl font-extrabold text-primary-deep">{rating.value.toFixed(1)}</p>
                <p className="mt-1 text-muted">Google rating from {rating.count} reviews</p>
              </>
            ) : (
              <p className="mt-5 font-heading text-2xl font-bold text-primary-deep">Reviewed on Google</p>
            )}
            <ButtonLink href={clinic.mapsUrl} external variant="secondary" className="mt-6 w-full">
              See our Google listing
            </ButtonLink>
          </div>
        }
      />

      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Common themes"
              title="What patients often mention."
              description="These are recurring themes in patient feedback, summarised by the clinic."
            />
            <ReviewThemes className="mt-8" />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-mint/60">
        <div className="container-site">
          {reviews.length > 0 ? (
            <>
              <Reveal>
                <SectionHeading eyebrow="In their words" title="Selected reviews." />
              </Reveal>
              <RevealGroup as="ul" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                  <RevealItem as="li" key={review.excerpt}>
                    <ReviewCard review={review} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </>
          ) : (
            <Reveal>
              <SectionHeading
                eyebrow="In their words"
                title="Read every review on Google."
                description="To keep things genuine and up to date, we link straight to our Google listing rather than copying reviews here."
              />
            </Reveal>
          )}

          <Reveal className="mt-10">
            <GoogleReviewsCard />
          </Reveal>
          <p className="mt-6 text-sm text-muted">Reviews reflect individual experiences. Treatment outcomes vary.</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
