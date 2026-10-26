import type { Metadata } from "next";
import { clinic } from "@/data/clinic";
import { DEMO_MODE } from "@/data/demo";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Builds consistent per-page metadata: title, description, canonical and Open Graph. */
export function pageMetadata({ title, description, path, noIndex }: PageMetaInput): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: clinic.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: DEMO_MODE ? { index: false, follow: false } : noIndex ? { index: false, follow: true } : undefined,
  };
}
