import { CalendarDays, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref } from "@/data/navigation";
import { treatments, type TreatmentCategory } from "@/data/treatments";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Disclaimer } from "@/components/sections/notices";
import { TreatmentCard } from "@/components/dental/treatment-card";

export const metadata = pageMetadata({
  title: "Dental Treatments · Dr. Sinha's Dental Studio",
  description:
    "Explore dental treatments, from check-ups and cleaning to braces and cosmetic care, at our clinic in Palanpur, Surat.",
  path: "/treatments",
});

const categoryOrder: TreatmentCategory[] = ["Preventive", "Restorative", "Orthodontic", "Cosmetic", "Urgent care"];

const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export default function TreatmentsPage() {
  const groups = categoryOrder
    .map((category) => ({ category, items: treatments.filter((t) => t.category === category) }))
    .filter((group) => group.items.length > 0);

  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Treatments", path: "/treatments" }]}
        eyebrow="Our treatments"
        title="Dental treatments at Dr. Sinha's Dental Studio"
        description={
          <p>
            From routine check-ups to braces and cosmetic care, here&apos;s an overview of how we can help. The right
            treatment for you is always decided together, after an examination.
          </p>
        }
      />

      <section className="section-y">
        <div className="container-site">
          <nav aria-label="Treatment categories" className="-mx-1 flex flex-wrap gap-2">
            {groups.map(({ category }) => (
              <a
                key={category}
                href={`#${categorySlug(category)}`}
                className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-[0.9375rem] font-medium text-ink transition-colors hover:border-primary/40 hover:bg-mint"
              >
                {category}
              </a>
            ))}
          </nav>

          <div className="mt-12 space-y-16">
            {groups.map(({ category, items }) => (
              <div key={category} id={categorySlug(category)} className="scroll-mt-24">
                <Reveal>
                  <h2 className="text-2xl font-bold sm:text-3xl">{category}</h2>
                </Reveal>
                <RevealGroup as="ul" className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                  {items.map((treatment) => (
                    <RevealItem as="li" key={treatment.slug}>
                      <TreatmentCard treatment={treatment} />
                    </RevealItem>
                  ))}
                </RevealGroup>
              </div>
            ))}
          </div>

          <Reveal className="mt-16 grid gap-6 rounded-[2rem] bg-mint p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Not sure what you need?</h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/80">
                That&apos;s completely normal. Tell us what&apos;s bothering you and the dentist will explain your options.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={clinic.phone.href} icon={<Phone aria-hidden className="size-4" />}>
                Call the Clinic
              </ButtonLink>
              <ButtonLink href={appointmentHref} variant="secondary" icon={<CalendarDays aria-hidden className="size-4" />}>
                Request an Appointment
              </ButtonLink>
            </div>
          </Reveal>

          <Disclaimer className="mt-8">
            Treatments marked &ldquo;Ask the clinic&rdquo; are being confirmed. Please call to check availability. This
            information is general and educational, not a diagnosis.
          </Disclaimer>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
