import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";
import { DEMO_MODE } from "@/data/demo";

export default function robots(): MetadataRoute.Robots {
  // Block all crawling while sample content is switched on.
  if (DEMO_MODE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${clinic.url}/sitemap.xml`,
  };
}
