import { CalendarDays, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { appointmentHref } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Sparkle, ToothLineArt } from "@/components/dental/illustrations";

type CtaBandProps = {
  title?: string;
  description?: string;
};

/** Deep-teal closing call to action used at the end of most pages. */
export function CtaBand({
  title = "Ready when you are.",
  description = "Call us or request an appointment and we'll help you find a suitable time.",
}: CtaBandProps) {
  return (
    <section className="section-y">
      <div className="container-site">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary-deep px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <ToothLineArt className="pointer-events-none absolute -right-10 -bottom-16 w-64 text-white/15 sm:w-80" />
          <Sparkle className="absolute top-10 right-[30%] size-4 text-white/30" />
          <div className="relative max-w-2xl">
            <h2 className="text-[1.875rem] font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">{description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={appointmentHref} variant="light" size="lg" icon={<CalendarDays aria-hidden className="size-5" />}>
                Request an Appointment
              </ButtonLink>
              <ButtonLink href={clinic.phone.href} variant="outline-light" size="lg" icon={<Phone aria-hidden className="size-5" />}>
                Call {clinic.phone.display}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
