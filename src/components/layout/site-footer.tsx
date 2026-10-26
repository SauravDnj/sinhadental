import Link from "next/link";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";
import { Logo } from "./logo";

const clinicLinks = [
  { label: "About", href: "/about" },
  { label: "Patient Guide", href: "/patient-guide" },
  { label: "Patient Reviews", href: "/patient-reviews" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-white">{children}</h2>;
}

const linkClass = "inline-flex min-h-9 items-center text-white/80 transition-colors hover:text-white hover:underline underline-offset-4";

export function SiteFooter() {
  return (
    <footer data-hide-floating-cta className="bg-primary-deep text-white/80">
      <div className="container-site grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr] lg:py-20">
        <div className="max-w-xs">
          <Logo tone="light" />
          <p className="mt-5 text-[0.9375rem] leading-relaxed">
            Calm, clearly explained dental care in Palanpur, Surat.
          </p>
        </div>

        <nav aria-labelledby="footer-clinic">
          <FooterHeading>
            <span id="footer-clinic">Clinic</span>
          </FooterHeading>
          <ul className="mt-4 space-y-1">
            {clinicLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-treatments">
          <FooterHeading>
            <span id="footer-treatments">Treatments</span>
          </FooterHeading>
          <ul className="mt-4 space-y-1">
            {treatments.map((t) => (
              <li key={t.slug}>
                <Link href={`/treatments/${t.slug}`} className={linkClass}>
                  {t.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/treatments"
                className="inline-flex min-h-9 items-center font-semibold text-white underline-offset-4 hover:underline"
              >
                View all treatments
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <FooterHeading>Visit us</FooterHeading>
          <address className="mt-4 space-y-4 not-italic">
            <p className="flex gap-3">
              <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-white" />
              <span>{clinic.address.full}</span>
            </p>
            <p className="flex gap-3">
              <Phone aria-hidden className="mt-1 size-4 shrink-0 text-white" />
              <a href={clinic.phone.href} className="font-semibold text-white underline-offset-4 hover:underline">
                {clinic.phone.display}
              </a>
            </p>
            <p className="flex gap-3">
              <Clock aria-hidden className="mt-1 size-4 shrink-0 text-white" />
              <span>{clinic.hours.summary ?? clinic.hours.fallback}</span>
            </p>
            <p>
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-(--radius-button) border border-white/50 px-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Navigation aria-hidden className="size-4" />
                Get Directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col gap-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {clinic.name}. Website information is general and not a diagnosis.
          </p>
          <ul className="flex gap-5">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
