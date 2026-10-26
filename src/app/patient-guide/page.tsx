import { Brush, CalendarCheck, ClipboardList, Droplets, FileText, HeartPulse, MessageCircle, Pill } from "lucide-react";
import Image from "next/image";
import { generalFaqs } from "@/data/faqs";
import { DEMO_MODE, demoImages } from "@/data/demo";
import { pageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { CtaBand } from "@/components/sections/cta-band";
import { Disclaimer, EmergencyNotice } from "@/components/sections/notices";
import { FAQAccordion } from "@/components/dental/faq-accordion";

export const metadata = pageMetadata({
  title: "Patient Guide · Your First Dental Visit",
  description: "What to bring, what to expect and answers to common questions before your visit to Dr. Sinha's Dental Studio.",
  path: "/patient-guide",
});

const contents = [
  { id: "before", label: "Before your first visit" },
  { id: "consultation", label: "During your consultation" },
  { id: "questions", label: "Asking questions" },
  { id: "oral-care", label: "Everyday oral care" },
  { id: "faqs", label: "FAQs" },
];

const bring = [
  { icon: CalendarCheck, text: "Arrive a few minutes early so you can settle in." },
  { icon: FileText, text: "Bring any previous dental records or X-rays, if you have them." },
  { icon: Pill, text: "Bring a list of any medicines you take." },
  { icon: ClipboardList, text: "Note down any questions or concerns." },
  { icon: HeartPulse, text: "Tell us if you feel nervous. We'll take it slowly." },
];

const consultationSteps = [
  { title: "A conversation", text: "We start by talking about your concerns." },
  { title: "An examination", text: "The dentist checks your teeth and gums." },
  { title: "A clear explanation", text: "You'll hear what the dentist sees, in plain language." },
  { title: "Your decision", text: "Options are discussed, and you decide what's next." },
];

const questions = ["What are my options?", "What happens if I wait?", "What should I expect after treatment?"];

const careTips = [
  { icon: Brush, title: "Brush twice a day", text: "Use a fluoride toothpaste and brush gently for about two minutes." },
  { icon: Droplets, title: "Clean between teeth", text: "Floss or use interdental brushes daily, as the dentist advises." },
  { icon: CalendarCheck, title: "Keep regular check-ups", text: "Ask the dentist how often you should visit." },
];

export default function PatientGuidePage() {
  const oralCareImage = DEMO_MODE ? demoImages.oralCare : null;
  return (
    <>
      <PageHero
        breadcrumbs={[{ name: "Patient guide", path: "/patient-guide" }]}
        eyebrow="Patient guide"
        title="Your visit, made simple"
        description={<p>Everything you need to know before you come in, so your first visit feels easy.</p>}
      />

      <div className="container-site grid gap-12 py-12 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-20">
        <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">On this page</p>
          <ul className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {contents.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border bg-surface px-4 text-[0.9375rem] font-medium text-ink transition-colors hover:bg-mint lg:rounded-xl lg:border-transparent lg:bg-transparent lg:px-3"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0 space-y-20 lg:space-y-24">
          <section id="before" aria-labelledby="before-title" className="scroll-mt-24">
            <Reveal>
              <SectionHeading id="before-title" eyebrow="Step one" title="Before your first visit." />
            </Reveal>
            <RevealGroup as="ul" className="mt-8 grid gap-3">
              {bring.map(({ icon: Icon, text }) => (
                <RevealItem as="li" key={text} className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 text-lg">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-primary-deep">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  {text}
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="consultation" aria-labelledby="consultation-title" className="scroll-mt-24">
            <Reveal>
              <SectionHeading id="consultation-title" eyebrow="Step two" title="During your consultation." />
            </Reveal>
            <ProcessSteps steps={consultationSteps} columns={2} className="mt-8" />
          </section>

          <section id="questions" aria-labelledby="questions-title" className="scroll-mt-24">
            <Reveal className="rounded-[2rem] bg-mint p-8 lg:p-12">
              <MessageCircle aria-hidden className="size-8 text-primary-deep" />
              <h2 id="questions-title" className="mt-5 text-2xl font-bold sm:text-3xl">
                Ask anything. There are no silly questions.
              </h2>
              <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/80">
                Understanding your care helps you make decisions you&apos;re comfortable with. You might ask:
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {questions.map((q) => (
                  <li key={q} className="rounded-full bg-surface px-5 py-3 font-medium text-primary-deep shadow-soft">
                    &ldquo;{q}&rdquo;
                  </li>
                ))}
              </ul>
            </Reveal>
          </section>

          <section id="oral-care" aria-labelledby="oral-care-title" className="scroll-mt-24">
            <Reveal>
              <SectionHeading id="oral-care-title" eyebrow="At home" title="Everyday oral care." />
            </Reveal>
            {oralCareImage && (
              <Reveal className="relative mt-8 aspect-[21/9] overflow-hidden rounded-(--radius-image) border border-border">
                <Image
                  src={oralCareImage.src}
                  alt={oralCareImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50rem, 95vw"
                  className="object-cover"
                  style={{ objectPosition: oralCareImage.position }}
                />
              </Reveal>
            )}
            <RevealGroup as="ul" className="mt-8 grid gap-5 md:grid-cols-3">
              {careTips.map(({ icon: Icon, title, text }) => (
                <RevealItem as="li" key={title} className="rounded-(--radius-card) border border-border bg-surface p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-mint text-primary-deep">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>

          <section id="faqs" aria-labelledby="faqs-title" className="scroll-mt-24">
            <Reveal>
              <SectionHeading id="faqs-title" eyebrow="FAQs" title="Frequently asked questions." />
            </Reveal>
            <Reveal className="mt-8">
              <FAQAccordion items={generalFaqs} />
            </Reveal>
            <EmergencyNotice compact className="mt-6" />
            <Disclaimer className="mt-4">
              This guide is general information, not personal medical advice. Please speak with the dentist about your
              situation.
            </Disclaimer>
          </section>
        </div>
      </div>

      <CtaBand />
    </>
  );
}
