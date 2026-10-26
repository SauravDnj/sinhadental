import { DEMO_MODE, demoReviews } from "./demo";

/**
 * Approved review excerpts. In real mode, add only genuine, public reviews the
 * clinic has approved for display. Never invent entries. In demo mode, clearly
 * labelled sample reviews are shown instead.
 */
export type Review = {
  excerpt: string;
  author?: string;
  date?: string;
  source: "Google review" | "Sample review";
};

const approvedReviews: Review[] = [];

export const reviews: Review[] = DEMO_MODE ? demoReviews : approvedReviews;

/** Themes the clinic owner reported from patient feedback. Shown as themes, never as quotes. */
export const reviewThemes = [
  { label: "Calm and polite doctor", icon: "calm" },
  { label: "Clear explanations", icon: "explain" },
  { label: "Empathetic care", icon: "care" },
  { label: "Help during a dental emergency", icon: "emergency" },
  { label: "Thorough treatment", icon: "thorough" },
] as const;
