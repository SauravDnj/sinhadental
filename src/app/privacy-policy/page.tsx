import { pageMetadata } from "@/lib/metadata";
import { privacySections } from "@/data/legal";
import { LegalPage } from "@/components/sections/legal-page";

// noIndex until the clinic publishes legally reviewed text.
export const metadata = pageMetadata({
  title: "Privacy Policy · Dr. Sinha's Dental Studio",
  description: "How the Dr. Sinha's Dental Studio website handles information.",
  path: "/privacy-policy",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy" path="/privacy-policy" sections={privacySections} />;
}
