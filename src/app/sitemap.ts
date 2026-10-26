import type { MetadataRoute } from "next";
import { clinic } from "@/data/clinic";
import { treatments } from "@/data/treatments";

// Legal pages are left out until their reviewed text is published.
const staticRoutes = ["/", "/about", "/treatments", "/patient-reviews", "/patient-guide", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...staticRoutes, ...treatments.map((t) => `/treatments/${t.slug}`)];
  return routes.map((route) => ({
    url: `${clinic.url}${route === "/" ? "" : route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : route.startsWith("/treatments/") ? 0.7 : 0.8,
  }));
}
