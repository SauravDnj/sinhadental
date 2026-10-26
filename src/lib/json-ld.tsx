import { clinic } from "@/data/clinic";

/** Renders JSON-LD safely (escapes `<` to prevent script injection). */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/**
 * Dentist structured data with verified facts only.
 * Ratings and reviews are intentionally excluded (search-engine policy).
 * Opening hours are added only once confirmed.
 */
export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinic.url}/#dentist`,
    name: clinic.name,
    url: clinic.url,
    telephone: clinic.phone.e164,
    hasMap: clinic.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
      addressLocality: clinic.address.locality,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    image: `${clinic.url}/opengraph-image`,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${clinic.url}${item.path}`,
    })),
  };
}
