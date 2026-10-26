import { pageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { EmergencyNotice } from "@/components/sections/notices";
import { ContactCard } from "@/components/dental/contact-card";
import { MapEmbed } from "@/components/dental/map-embed";
import { AppointmentForm } from "@/components/dental/appointment-form";

export const metadata = pageMetadata({
  title: "Contact and Directions · Dr. Sinha's Dental Studio",
  description:
    "Address, phone, directions and appointment requests for Dr. Sinha's Dental Studio in Palanpur, Surat.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        eyebrow="Contact"
        title="Visit or call Dr. Sinha's Dental Studio"
        description={<p>We&apos;re happy to help. Call us, request an appointment, or get directions to the studio.</p>}
      />

      <section className="section-y">
        <div className="container-site grid gap-6 lg:grid-cols-[5fr_7fr]">
          <Reveal>
            <h2 className="sr-only">Contact details</h2>
            <ContactCard variant="full" className="h-full" />
          </Reveal>
          <Reveal delay={0.08}>
            <MapEmbed className="h-full min-h-96" />
          </Reveal>
        </div>
      </section>

      <section
        id="appointment"
        data-hide-floating-cta
        aria-labelledby="appointment-title"
        className="section-y scroll-mt-20 border-t border-border bg-mint/60"
      >
        <div className="container-site grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              id="appointment-title"
              eyebrow="Appointments"
              title="Request an appointment."
              description="Tell us how to reach you and when suits you best. The quickest way to book is still a phone call."
            />
            <EmergencyNotice compact className="mt-8" />
          </Reveal>
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
