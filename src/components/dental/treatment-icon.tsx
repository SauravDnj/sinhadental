import { LifeBuoy, ShieldCheck, Sparkles, Stethoscope, Sun, Toothbrush } from "lucide-react";
import type { TreatmentIcon as TreatmentIconKey } from "@/data/treatments";
import { BracesGlyph } from "./illustrations";

const icons = {
  general: Stethoscope,
  cleaning: Toothbrush,
  "root-canal": ShieldCheck,
  braces: BracesGlyph,
  cosmetic: Sparkles,
  whitening: Sun,
  emergency: LifeBuoy,
} as const;

export function TreatmentIcon({ icon, className }: { icon: TreatmentIconKey; className?: string }) {
  const Icon = icons[icon];
  return <Icon aria-hidden className={className} strokeWidth={1.75} />;
}
