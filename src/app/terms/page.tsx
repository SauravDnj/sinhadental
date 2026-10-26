import { pageMetadata } from "@/lib/metadata";
import { termsSections } from "@/data/legal";
import { LegalPage } from "@/components/sections/legal-page";

// noIndex until the clinic publishes legally reviewed text.
export const metadata = pageMetadata({
  title: "Terms of Use · Dr. Sinha's Dental Studio",
  description: "Terms for using the Dr. Sinha's Dental Studio website.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return <LegalPage title="Website Terms of Use" path="/terms" sections={termsSections} />;
}
