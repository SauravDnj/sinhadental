import Image from "next/image";
import { CalendarDays, Ear, HandHeart, ListChecks, MessageCircle, Navigation } from "lucide-react";
import { clinic } from "@/data/clinic";
import { DEMO_MODE, demoImages } from "@/data/demo";
import { appointmentHref } from "@/data/navigation";
import { pageMetadata } from "@/lib/metadata";
import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBand } from "@/components/sections/cta-band";
import { DoctorProfile } from "@/components/dental/doctor-profile";
import { GoogleReviewsCard } from "@/components/dental/reviews";
import { Sparkle, ToothLineArt } from "@/components/dental/illustrations";

export const metadata = pageMetadata({
  title: "About Dr. Sinha's Dental Studio · Palanpur, Surat",
  description:
    "Meet the clinic and our patient-first approach to comfortable, clearly explained dental care in Palanpur, Surat.",
  path: "/about",
});

const philosophy = [
  { title: "Comfort first", text: "A calm, welcoming space where nothing is rushed." },
  { title: "Clear explanations", text: "You understand what's happening and why, in plain language." },
  { title: "Informed decisions", text: "Your options are explained, with no pressure to decide on the spot." },
];

const principles = [
  { icon: Ear, title: "Listen first", text: "We start by understanding what matters to you." },
  { icon: MessageCircle, title: "Explain clearly", text: "Plain-language explanations at every step." },
  { icon: HandHeart, title: "Respect your choices", text: "You decide, with all the information you need." },
  { icon: ListChecks, title: "Careful, thorough work", text: "Attention to detail in every treatment." },
];

const journey = [
  { title: "Arrive", text: "A friendly welcome and time to settle in." },
  { title: "Talk", text: "Share your concerns and questions." },
  { title: "Understand", text: "The dentist explains what they see." },
  { title: "Decide", text: "Choose your next step with confidence." },
];

export default function AboutPage() {
  const aboutImage = DEMO_MODE ? demoImages.about : null;
  const gallery = DEMO_MODE ? demoImages.gallery : [];
  const showInclusion =
    clinic.inclusion.lgbtqFriendly.approvedForDisplay || clinic.inclusion.womenOwned.approvedForDisplay;

  return (
    <>
      <PageHero
        eyebrow="About the studio"
        title="Dental care built on calm, clear conversations."
        description={
          <p>
            At {clinic.name} in Palanpur, Surat, we believe good dental care begins with understanding: your concerns,
            your questions and your comfort.
          </p>
        }
        aside={
          <div className="relative mx-auto aspect-[5/4] w-full max-w-md lg:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-[2.5rem] bg-mint-strong" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] rounded-bl-[5rem] border border-border bg-surface shadow-lift">
              {aboutImage ? (
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="object-cover"
                  style={{ objectPosition: aboutImage.position }}
                />
              ) : (
                <div aria-hidden className="grid size-full place-items-center">
                  <ToothLineArt className="w-1/3 text-primary" />
                  <Sparkle className="absolute top-[18%] right-[20%] size-5 text-primary/60" />
                </div>
              )}
            </div>
          </div>
        }
      />

      {/* Philosophy */}
      <section className="section-y">
        <div className="container-site grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <Reveal>
            <SectionHeading eyebrow="Our philosophy" title="Why patients feel at ease here." />
          </Reveal>
          <RevealGroup as="ul" className="space-y-4">
            {philosophy.map((item, index) => (
              <RevealItem
                as="li"
                key={item.title}
                className="flex gap-5 rounded-(--radius-card) border border-border bg-surface p-6"
              >
                <span aria-hidden className="font-heading text-3xl font-extrabold text-primary/30">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{item.text}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Meet the dentist */}
      <section className="section-y border-y border-border bg-surface">
        <div className="container-site">
          <Reveal>
            <DoctorProfile variant="full" />
          </Reveal>
        </div>
      </section>

      {/* Care principles */}
      <section className="section-y bg-mint/60">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Care principles" title="What you can expect from us." align="center" />
          </Reveal>
          <RevealGroup as="ul" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }) => (
              <RevealItem as="li" key={title} className="rounded-(--radius-card) border border-border bg-surface p-6 lg:p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-mint text-primary-deep">
                  <Icon aria-hidden className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Clinic gallery */}
      {gallery.length > 0 && (
        <section className="section-y">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Inside the studio"
                title="A calm, clean space for your care."
                description="Bright treatment rooms, carefully maintained equipment and a relaxed place to wait."
              />
            </Reveal>
            <RevealGroup as="ul" className="mt-12 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 lg:grid-cols-4">
              {gallery.map((photo, index) => (
                <RevealItem
                  as="li"
                  key={photo.src}
                  className={
                    index === 0
                      ? "relative col-span-2 row-span-2 overflow-hidden rounded-(--radius-image)"
                      : "relative overflow-hidden rounded-(--radius-card)"
                  }
                >
                  <figure className="group size-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 40rem, 95vw" : "(min-width: 1024px) 20rem, 48vw"}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ objectPosition: photo.position }}
                    />
                  </figure>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      {/* Patient journey */}
      <section className="section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Your visit" title="Arrive, talk, understand, decide." />
          </Reveal>
          <ProcessSteps steps={journey} className="mt-12" />
        </div>
      </section>

      {/* Trust */}
      <section className="pb-4">
        <div className="container-site space-y-6">
          <Reveal>
            <GoogleReviewsCard />
          </Reveal>
          {showInclusion && (
            <p className="text-center text-muted">
              {[
                clinic.inclusion.lgbtqFriendly.approvedForDisplay && "LGBTQ+ friendly",
                clinic.inclusion.womenOwned.approvedForDisplay && "Women-owned",
              ]
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
          <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
            <ButtonLink href={appointmentHref} size="lg" icon={<CalendarDays aria-hidden className="size-5" />}>
              Request an Appointment
            </ButtonLink>
            <ButtonLink
              href={clinic.mapsUrl}
              external
              variant="secondary"
              size="lg"
              icon={<Navigation aria-hidden className="size-5" />}
            >
              Get Directions
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand title="Come and meet us." />
    </>
  );
}
