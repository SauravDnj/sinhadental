import Image from "next/image";
import { clinic } from "@/data/clinic";
import type { DemoImage } from "@/data/demo";
import { cn } from "@/lib/utils";
import { TextLink } from "@/components/ui/button";
import { SmileCurve, Sparkle, ToothLineArt } from "./illustrations";

/**
 * Doctor profile. Shows the approved portrait, qualifications and biography
 * only when the clinic has supplied them; otherwise a neutral illustration
 * and the care approach drawn from patient feedback. Nothing is invented.
 */
export function DoctorProfile({ variant = "preview" }: { variant?: "preview" | "full" }) {
  const { doctor, doctorName } = clinic;
  const full = variant === "full";

  return (
    <div className={cn("grid items-center gap-10 lg:gap-16", full ? "lg:grid-cols-[5fr_6fr]" : "lg:grid-cols-[5fr_7fr]")}>
      <PortraitFrame portrait={doctor.portrait} />

      <div>
        <p className="eyebrow">{full ? "Meet the dentist" : "About Dr. Sinha"}</p>
        <SmileCurve className="mt-3 h-3 w-14 text-primary" />
        <h2 className="mt-4 text-[1.75rem] font-bold sm:text-4xl">Meet {doctorName}</h2>

        {doctor.qualifications.length > 0 && (
          <p className="mt-3 font-semibold text-primary">{doctor.qualifications.join(" · ")}</p>
        )}

        {doctor.biography ? (
          <p className="mt-5 text-lg leading-relaxed text-muted">{doctor.biography}</p>
        ) : (
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Patients often describe {doctorName} as calm and polite, and appreciate how clearly each step is
              explained.
            </p>
            {full && (
              <p>
                That is the heart of how the studio works: listen first, explain what we see in plain language, and
                give you the time and information to decide with confidence.
              </p>
            )}
          </div>
        )}

        {!full && (
          <div className="mt-7">
            <TextLink href="/about">More about the clinic</TextLink>
          </div>
        )}
      </div>
    </div>
  );
}

function PortraitFrame({ portrait }: { portrait: DemoImage | null }) {
  return (
    <div className="relative mx-auto w-[calc(100%-1.5rem)] max-w-md">
      <div aria-hidden className="absolute -inset-3 -rotate-3 rounded-[2rem] bg-mint" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-(--radius-image) border border-border bg-gradient-to-br from-surface via-mint to-mint-strong">
        {portrait ? (
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 1024px) 28rem, 90vw"
            className="object-cover"
            style={{ objectPosition: portrait.position }}
          />
        ) : (
          <div aria-hidden className="absolute inset-0 grid place-items-center">
            <ToothLineArt className="w-1/2 text-primary" />
            <Sparkle className="absolute top-[18%] right-[22%] size-5 text-primary/50" />
            <Sparkle className="absolute bottom-[24%] left-[20%] size-3 text-primary/40" />
          </div>
        )}
      </div>
    </div>
  );
}
