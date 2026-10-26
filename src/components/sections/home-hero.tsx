import Image from "next/image";
import { CalendarDays, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { DEMO_MODE, demoImages } from "@/data/demo";
import { appointmentHref } from "@/data/navigation";
import { ButtonLink } from "@/components/ui/button";
import { SmileCurve, Sparkle, ToothLineArt } from "@/components/dental/illustrations";

/**
 * Home hero. Pure CSS motion (no JavaScript needed), so the headline and both
 * calls to action are readable and clickable immediately.
 */
export function HomeHero() {
  return (
    <section className="relative -mt-16 overflow-hidden pt-16 lg:-mt-[4.5rem] lg:pt-[4.5rem]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-48 -right-40 size-[40rem] rounded-full bg-mint blur-3xl" />
        <div className="absolute top-1/2 -left-48 size-[26rem] rounded-full bg-accent-blue/70 blur-3xl" />
      </div>

      <div className="container-site relative grid items-center gap-12 pt-8 pb-14 sm:pt-12 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div>
          <p className="eyebrow motion-safe:animate-fade-up">Thoughtful dental care in Palanpur, Surat</p>
          <SmileCurve className="mt-3 h-3 w-14 text-primary motion-safe:animate-fade-up" />
          <h1 className="mt-5 text-[2.375rem] leading-[1.08] font-extrabold sm:text-6xl lg:text-[4rem] motion-safe:animate-fade-up motion-safe:[animation-delay:80ms]">
            A healthier smile starts with feeling{" "}
            <span className="relative whitespace-nowrap text-primary">
              cared for.
              <SmileCurve
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-primary/40 sm:-bottom-3 sm:h-4"
              />
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl motion-safe:animate-fade-up motion-safe:[animation-delay:160ms]">
            Calm, unhurried visits where every step is explained clearly, so you can make confident decisions about
            your dental care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
            <ButtonLink href={appointmentHref} size="lg" icon={<CalendarDays aria-hidden className="size-5" />}>
              Request an Appointment
            </ButtonLink>
            <ButtonLink href={clinic.phone.href} variant="secondary" size="lg" icon={<Phone aria-hidden className="size-5" />}>
              Call the Clinic
            </ButtonLink>
          </div>
          <p className="mt-6 flex items-start gap-2 text-[0.9375rem] text-muted motion-safe:animate-fade-up motion-safe:[animation-delay:320ms]">
            <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-primary-deep" />
            Sai Milap Shoppers, Shavion Circle, Gaurav Path Road
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

/**
 * Hero composition: a clinic photo when one is available (otherwise a drawn tooth
 * on a mint panel), with two gentle floating notes.
 */
function HeroVisual() {
  const photo = DEMO_MODE ? demoImages.hero : null;
  return (
    <div className="relative mx-auto w-full max-w-[26rem] motion-safe:animate-scale-in lg:max-w-none">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] border border-border bg-gradient-to-br from-surface via-mint to-mint-strong shadow-lift">
        {photo ? (
          <>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 34rem, (min-width: 640px) 26rem, 90vw"
              className="object-cover"
              style={{ objectPosition: photo.position }}
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-primary-deeper/25 via-transparent to-transparent" />
            <ToothLineArt float={false} className="absolute right-6 bottom-6 w-16 text-white/90" />
          </>
        ) : (
          <div aria-hidden>
            <svg className="absolute inset-0 size-full text-primary/10" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              <circle cx="200" cy="230" r="150" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="200" cy="230" r="205" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 grid place-items-center">
              <ToothLineArt className="w-[52%] text-primary-deep" />
            </div>
            <Sparkle className="absolute top-[16%] right-[20%] size-6 text-primary motion-safe:animate-float" />
            <Sparkle className="absolute top-[30%] left-[16%] size-3.5 text-primary/60" />
            <Sparkle className="absolute bottom-[26%] right-[16%] size-4 text-primary/50" />
          </div>
        )}
      </div>

      <div aria-hidden className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lift motion-safe:animate-float sm:-left-8">
        <span className="grid size-10 place-items-center rounded-xl bg-mint text-primary-deep">
          <MessageCircle className="size-5" />
        </span>
        <span className="text-sm leading-tight">
          <strong className="block font-semibold text-primary-deep">Clear explanations</strong>
          <span className="text-muted">at every step</span>
        </span>
      </div>

      <div aria-hidden className="absolute -right-3 top-12 flex items-center gap-3 rounded-2xl border border-border bg-surface/95 px-4 py-3 shadow-lift motion-safe:animate-float motion-safe:[animation-delay:-3.5s] sm:-right-6">
        <span className="grid size-10 place-items-center rounded-xl bg-primary text-white">
          <MapPin className="size-5" />
        </span>
        <span className="text-sm leading-tight">
          <strong className="block font-semibold text-primary-deep">Palanpur, Surat</strong>
          <span className="text-muted">Shavion Circle</span>
        </span>
      </div>
    </div>
  );
}
