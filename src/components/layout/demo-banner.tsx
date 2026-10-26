import { Eye } from "lucide-react";
import { DEMO_MODE } from "@/data/demo";

/** Thin notice shown on every page while sample content is switched on. */
export function DemoBanner() {
  if (!DEMO_MODE) return null;
  return (
    <div className="bg-primary-deeper text-white">
      <p className="container-site flex items-center justify-center gap-2 py-2 text-center text-[0.8125rem] leading-snug">
        <Eye aria-hidden className="size-4 shrink-0" />
        <span>
          <strong className="font-semibold">Website preview:</strong> photos, doctor details, hours, reviews and policies
          are sample content.
        </span>
      </p>
    </div>
  );
}
