import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Check, CircleAlert, Clock, Info, Minus, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref } from "@/data/navigation";
import { getRelatedTreatments, getTreatment, treatments, type Treatment } from "@/data/treatments";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink, TextLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBand } from "@/components/sections/cta-band";
import { Disclaimer, EmergencyNotice } from "@/components/sections/notices";
import { TreatmentCard } from "@/components/dental/treatment-card";
import { TreatmentIcon } from "@/components/dental/treatment-icon";
import { FAQAccordion } from "@/components/dental/faq-accordion";
import { ContactCard } from "@/components/dental/contact-card";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return pageMetadata({
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    path: `/treatments/${treatment.slug}`,
  });
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const emergency = treatment.icon === "emergency";
  const related = getRelatedTreatments(treatment);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { name: "Treatments", path: "/treatments" },
          { name: treatment.title, path: `/treatments/${treatment.slug}` },
        ]}
        eyebrow={treatment.eyebrow}
        title={treatment.heading}
        description={<p>{treatment.summary}</p>}
        actions={
          emergency ? (
            <ButtonLink href={clinic.phone.href} size="lg" className="sm:text-lg" icon={<Phone aria-hidden className="size-5" />}>
              Call {clinic.phone.display}
            </ButtonLink>
          ) : (
            <>
              <ButtonLink href={appointmentHref} size="lg" icon={<CalendarDays aria-hidden className="size-5" />}>
                Request an Appointment
              </ButtonLink>
              <ButtonLink href={clinic.phone.href} variant="secondary" size="lg" icon={<Phone aria-hidden className="size-5" />}>
                Call the Clinic
              </ButtonLink>
            </>
          )
        }
        aside={<TreatmentVisual treatment={treatment} />}
      />

      {!treatment.confirmed && (
        <div className="container-site pt-8">
          <p className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4 text-[0.9375rem] text-ink">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-primary-deep" />
            <span>
              <strong className="font-semibold">Ask the clinic:</strong> please call to check whether this treatment is
              currently available.
            </span>
          </p>
        </div>
      )}

      {emergency && (
        <div className="container-site grid gap-4 pt-8 lg:grid-cols-2">
          <EmergencyNotice />
          {clinic.emergencyAvailability && (
            <aside
              aria-label="Emergency availability"
              className="flex gap-4 rounded-(--radius-card) border border-border bg-surface p-5 sm:p-6"
            >
              <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-primary-deep" />
              <div className="text-[0.9375rem] leading-relaxed">
                <p className="font-semibold text-primary-deep">When can I get help?</p>
                <p className="mt-1 text-ink">{clinic.emergencyAvailability}</p>
              </div>
            </aside>
          )}
        </div>
      )}

      {/* When might someone ask? */}
      <section className="section-y">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow={emergency ? "Urgent problems" : "Is this for me?"}
              title={emergency ? "When to call us urgently." : "When might someone ask about this?"}
              description={treatment.reasonsIntro}
            />
          </Reveal>
          <RevealGroup as="ul" className="grid gap-3">
            {treatment.reasons.map((reason) => (
              <RevealItem
                as="li"
                key={reason}
                className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-5 text-lg leading-snug"
              >
                <span
                  className={
                    emergency
                      ? "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-warning-bg text-warning"
                      : "mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-mint text-primary-deep"
                  }
                >
                  {emergency ? <CircleAlert aria-hidden className="size-4" /> : <Check aria-hidden className="size-4" />}
                </span>
                {reason}
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-y bg-mint/60">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow={emergency ? "What happens next" : "What to expect"}
              title={emergency ? "Three steps to getting help." : "Your treatment, step by step."}
            />
          </Reveal>
          <ProcessSteps steps={treatment.steps} className="mt-12" />
        </div>
      </section>

      {/* Benefits and limitations */}
      {treatment.benefits.length > 0 && (
        <section className="section-y">
          <div className="container-site">
            <Reveal>
              <SectionHeading eyebrow="An honest picture" title="Benefits and limitations." />
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Reveal className="rounded-(--radius-card) border border-border bg-surface p-6 lg:p-8">
                <h3 className="text-xl font-bold">Possible benefits</h3>
                <ul className="mt-5 space-y-3">
                  {treatment.benefits.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <Check aria-hidden className="mt-1 size-5 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.08} className="rounded-(--radius-card) border border-border bg-surface p-6 lg:p-8">
                <h3 className="text-xl font-bold">Things to know</h3>
                <ul className="mt-5 space-y-3">
                  {treatment.limitations.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed">
                      <Minus aria-hidden className="mt-1 size-5 shrink-0 text-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* Preparation / aftercare */}
      <section className={emergency ? "section-y" : "pb-16 lg:pb-24"}>
        <div className="container-site">
          <Reveal className="rounded-[2rem] border border-border bg-surface p-8 lg:p-12">
            <h2 className="text-2xl font-bold sm:text-3xl">{treatment.care.heading}</h2>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {treatment.care.tips.map((tip, index) => (
                <li key={tip} className="flex gap-4 leading-relaxed">
                  <span aria-hidden className="font-heading text-lg font-extrabold text-primary/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">Always follow the specific advice the dentist gives you.</p>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-y border-y border-border bg-surface">
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Questions" title={`${treatment.title}: common questions.`} />
            <div className="mt-6">
              <TextLink href="/patient-guide">Read the patient guide</TextLink>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="space-y-6">
            <FAQAccordion items={treatment.faqs} />
            <Disclaimer />
          </Reveal>
        </div>
      </section>

      {/* Related + contact */}
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[7fr_5fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-bold sm:text-3xl">Related treatments</h2>
            </Reveal>
            <RevealGroup as="ul" className="mt-6 grid gap-5 sm:grid-cols-2">
              {related.map((item) => (
                <RevealItem as="li" key={item.slug}>
                  <TreatmentCard treatment={item} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Visit or call</h2>
            <ContactCard className="mt-6" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={emergency ? "In pain? Call us now." : undefined}
        description={emergency ? "We'll talk you through the next step." : undefined}
      />
    </>
  );
}

function TreatmentVisual({ treatment }: { treatment: Treatment }) {
  const { image } = treatment;
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-md lg:max-w-none">
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] rounded-br-[5rem] border border-border bg-gradient-to-br from-surface to-mint-strong shadow-lift">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="object-cover"
            style={{ objectPosition: image.position }}
          />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center">
            <span className="grid size-28 place-items-center rounded-[2rem] bg-surface text-primary-deep shadow-soft motion-safe:animate-float sm:size-32">
              <TreatmentIcon icon={treatment.icon} className="size-14" />
            </span>
          </div>
        )}
      </div>
      <span
        aria-hidden
        className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full bg-surface/95 px-4 py-2 text-sm font-semibold text-primary-deep shadow-soft"
      >
        <TreatmentIcon icon={treatment.icon} className="size-4" />
        {treatment.category}
      </span>
    </div>
  );
}
