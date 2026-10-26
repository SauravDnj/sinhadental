import type { Metadata } from "next";
import { House, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { ButtonLink } from "@/components/ui/button";
import { Sparkle, ToothLineArt } from "@/components/dental/illustrations";

export const metadata: Metadata = {
  title: { absolute: `Page not found · ${clinic.name}` },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-mint blur-3xl" />
      <div className="container-site relative flex flex-col items-center py-20 text-center lg:py-28">
        <div aria-hidden className="relative">
          <ToothLineArt className="w-36 text-primary sm:w-44 motion-safe:[animation-duration:5s]" />
          <Sparkle className="absolute -top-2 -right-4 size-5 text-primary/60 motion-safe:animate-float" />
        </div>
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-4 max-w-xl text-[2.125rem] font-extrabold sm:text-5xl">This page seems to have wandered.</h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
          The page you&apos;re looking for isn&apos;t here, but we can help you find your way.
        </p>
        <div className="mt-9 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink href="/" size="lg" icon={<House aria-hidden className="size-5" />}>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/treatments" variant="secondary" size="lg">
            View Treatments
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Contact Us
          </ButtonLink>
        </div>
        <p className="mt-10 flex items-center gap-2 text-muted">
          <Phone aria-hidden className="size-4 text-primary-deep" />
          Need help now? Call{" "}
          <a href={clinic.phone.href} className="font-semibold text-primary-deep underline underline-offset-4">
            {clinic.phone.display}
          </a>
        </p>
      </div>
    </section>
  );
}
