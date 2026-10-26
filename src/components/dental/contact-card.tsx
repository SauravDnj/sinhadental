import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";

/** Phone, address, hours and directions. `full` adds larger actions for the contact page. */
export function ContactCard({ variant = "compact", className }: { variant?: "compact" | "full"; className?: string }) {
  const full = variant === "full";
  const { hours } = clinic;

  return (
    <div className={cn("rounded-(--radius-card) border border-border bg-surface p-6 shadow-soft sm:p-8", className)}>
      <dl className="space-y-6">
        <ContactRow icon={<Phone aria-hidden className="size-5" />} label="Phone">
          <a
            href={clinic.phone.href}
            className={cn("font-heading font-bold text-primary-deep underline-offset-4 hover:underline", full ? "text-2xl" : "text-xl")}
          >
            {clinic.phone.display}
          </a>
        </ContactRow>
        <ContactRow icon={<MapPin aria-hidden className="size-5" />} label="Address">
          <address className="not-italic leading-relaxed">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
            <br />
            {clinic.address.locality}, {clinic.address.region} {clinic.address.postalCode}
          </address>
        </ContactRow>
        <ContactRow icon={<Clock aria-hidden className="size-5" />} label="Opening hours">
          {hours.confirmed ? (
            <table className="w-full text-left">
              <caption className="sr-only">Weekly opening hours</caption>
              <tbody>
                {hours.weekly.map((row) => (
                  <tr key={row.day} className="align-top">
                    <th scope="row" className="py-1 pr-4 font-medium">
                      {row.day}
                    </th>
                    <td className="py-1 whitespace-pre-line">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>{hours.fallback}</p>
          )}
        </ContactRow>
      </dl>

      <div className={cn("mt-8 flex flex-col gap-3", full && "sm:flex-row")}>
        <ButtonLink href={clinic.phone.href} size={full ? "lg" : "md"} icon={<Phone aria-hidden className="size-4" />}>
          Call the Clinic
        </ButtonLink>
        <ButtonLink
          href={clinic.mapsUrl}
          external
          variant="secondary"
          size={full ? "lg" : "md"}
          icon={<Navigation aria-hidden className="size-4" />}
        >
          Get Directions
        </ButtonLink>
      </div>
    </div>
  );
}

function ContactRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mint text-primary-deep">{icon}</span>
      <div className="min-w-0 flex-1">
        <dt className="text-sm font-semibold uppercase tracking-[0.1em] text-muted">{label}</dt>
        <dd className="mt-1 text-ink">{children}</dd>
      </div>
    </div>
  );
}
