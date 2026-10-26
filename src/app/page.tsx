import { generalFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { featuredTreatmentSlugs, getTreatment, type Treatment } from "@/data/treatments";
import { pageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { HomeHero } from "@/components/sections/home-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBand } from "@/components/sections/cta-band";
import { TrustStrip } from "@/components/dental/trust-strip";
import { TreatmentCard } from "@/components/dental/treatment-card";
import { DoctorProfile } from "@/components/dental/doctor-profile";
import { GoogleReviewsCard, ReviewCard, ReviewThemes } from "@/components/dental/reviews";
import { ContactCard } from "@/components/dental/contact-card";
import { MapEmbed } from "@/components/dental/map-embed";
import { FAQAccordion } from "@/components/dental/faq-accordion";

export const metadata = pageMetadata({
  title: "Dr. Sinha's Dental Studio · Dentist in Palanpur, Surat",
  description:
    "Calm, clearly explained dental care in Palanpur, Surat. Call +91 78741 14018 or request an appointment.",
  path: "/",
});

const visitSteps = [
  { title: "Contact the clinic", text: "Call us or send an appointment request. We'll help you find a suitable time." },
  { title: "Discuss your concerns", text: "Tell the dentist what's bothering you or what you'd like to improve." },
  { title: "Review your care options", text: "Understand your options clearly before deciding on any treatment." },
];

export default function HomePage() {
  const featured = featuredTreatmentSlugs.map(getTreatment).filter((t): t is Treatment => Boolean(t));

  return (
    <>
      <HomeHero />

      <div className="container-site relative -mt-2 lg:-mt-6">
        <Reveal>
          <h2 className="sr-only">Why patients choose us</h2>
          <TrustStrip />
        </Reveal>
      </div>

      {/* Welcome */}
      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Welcome" title="Dental care that starts with listening." />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted lg:pt-14">
            <p>
              We take time to understand your concerns, explain what we see and talk through your options. No rush and
              no pressure, just clear, careful care.
            </p>
            <p>
              Whether it&apos;s a routine check-up or something that&apos;s been bothering you, you&apos;ll leave knowing
              exactly where you stand.
            </p>
            <TextLink href="/about">About the studio</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Featured treatments */}
      <section className="section-y bg-mint/60">
        <div className="container-site">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="Treatments"
                title="Care for every part of your smile."
                description="From routine check-ups to braces and cosmetic care. The right treatment is always decided together, after an examination."
              />
            </Reveal>
            <Reveal className="shrink-0">
              <TextLink href="/treatments">View all treatments</TextLink>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {featured.map((treatment) => (
              <RevealItem as="li" key={treatment.slug}>
                <TreatmentCard treatment={treatment} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Your visit, made clearer */}
      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="Your visit, made clearer."
              description="Three simple steps, with time for your questions at each one."
              align="center"
            />
          </Reveal>
          <ProcessSteps steps={visitSteps} className="mt-12" />
        </div>
      </section>

      {/* Doctor preview */}
      <section className="section-y border-y border-border bg-surface">
        <div className="container-site">
          <Reveal>
            <DoctorProfile variant="preview" />
          </Reveal>
        </div>
      </section>

      {/* Review highlights */}
      <section className="section-y bg-mint/60">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Patient reviews"
              title="Kind words from our patients."
              description="Patients often mention:"
            />
            <ReviewThemes className="mt-6" />
          </Reveal>
          {reviews.length > 0 && (
            <RevealGroup as="ul" className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(0, 3).map((review) => (
                <RevealItem as="li" key={review.excerpt}>
                  <ReviewCard review={review} />
                </RevealItem>
              ))}
            </RevealGroup>
          )}
          <Reveal className="mt-10">
            <GoogleReviewsCard />
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Location" title="Visit the studio." description="On the 2nd floor of Sai Milap Shoppers, near Shavion Circle on Gaurav Path Road." />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[5fr_7fr]">
            <Reveal>
              <ContactCard className="h-full" />
            </Reveal>
            <Reveal delay={0.1}>
              <MapEmbed className="h-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-y border-t border-border bg-surface">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Good to know before you visit." />
            <div className="mt-6">
              <TextLink href="/patient-guide">More questions? Read the patient guide</TextLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQAccordion items={generalFaqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
