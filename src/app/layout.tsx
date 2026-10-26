import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { clinic } from "@/data/clinic";
import { dentistSchema, JsonLd } from "@/lib/json-ld";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { FloatingMobileCTA } from "@/components/layout/floating-mobile-cta";
import { DemoBanner } from "@/components/layout/demo-banner";
import { DEMO_MODE } from "@/data/demo";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(clinic.url),
  title: {
    default: `${clinic.name} · Dentist in Palanpur, Surat`,
    template: `%s · ${clinic.name}`,
  },
  description:
    "Calm, clearly explained dental care in Palanpur, Surat. Call +91 78741 14018 or request an appointment.",
  applicationName: clinic.name,
  formatDetection: { telephone: false },
  // Sample content must never be indexed by search engines.
  robots: DEMO_MODE ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#FCFDFD",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-lg bg-primary-deep px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <DemoBanner />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
        <FloatingMobileCTA />
        <JsonLd data={dentistSchema()} />
      </body>
    </html>
  );
}
