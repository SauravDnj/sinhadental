/**
 * DEMO CONTENT — sample photos and text used to preview the finished site
 * while the clinic's real details are collected.
 *
 * Set DEMO_MODE to false to remove every sample item at once. The site then
 * falls back to verified clinic facts only (see docs/02-clinic-information.md).
 *
 * While DEMO_MODE is true:
 *  - a "sample content" banner shows on every page,
 *  - every page is marked noindex so search engines never index sample text.
 *
 * Photos: Unsplash (free to use under the Unsplash License). None show the real
 * clinic, its dentist or its patients.
 */
export const DEMO_MODE = true;

export type DemoImage = {
  src: string;
  alt: string;
  /** CSS object-position for cropping, e.g. "70% 40%". */
  position?: string;
};

const img = (file: string, alt: string, position?: string): DemoImage => ({
  src: `/images/demo/${file}.jpg`,
  alt,
  position,
});

export const demoImages = {
  hero: img("hero-clinic", "A bright, modern dental treatment room with a teal dental chair", "55% 60%"),
  about: img("about-consultation", "A dentist talking with a patient in a modern dental clinic", "50% 40%"),
  doctor: img("doctor", "A dentist in blue scrubs and a mask preparing to examine a patient", "72% 35%"),
  oralCare: img("guide-oral-care", "Bamboo toothbrushes in a glass jar beside green leaves"),
  gallery: [
    img("gallery-treatment-room", "A clean treatment room with a dental chair and desk"),
    img("gallery-waiting-area", "A calm waiting area with blue sofas"),
    img("gallery-dental-chair", "A white dental chair beside a window"),
    img("gallery-reception", "A bright reception area with wooden panels"),
    img("gallery-instruments", "A dental mirror and explorer on a white surface"),
  ],
  treatments: {
    "general-dentistry": img("treatment-general", "A dentist showing a patient an image on a screen"),
    "teeth-cleaning": img("treatment-cleaning", "A dentist carefully cleaning a patient's teeth"),
    "root-canal": img("treatment-root-canal", "A dentist reviewing dental X-ray images on a light box", "60% 40%"),
    braces: img("treatment-braces", "Dental models showing teeth with and without braces"),
    "cosmetic-dentistry": img("treatment-cosmetic", "A person with a natural, confident smile", "50% 30%"),
    "teeth-whitening": img("treatment-whitening", "A close-up of a natural smile"),
    "dental-emergency": img("treatment-emergency", "A man touching his jaw with a concerned expression", "45% 35%"),
  } as Record<string, DemoImage>,
};

export const demoDoctor = {
  qualifications: ["BDS", "MDS"],
  biography:
    "Dr. Sinha founded the studio with a simple idea: dental care feels better when you understand it. Every visit starts with a conversation, followed by a careful examination and a clear explanation of what the dentist sees. Patients are shown their options, told honestly what each involves, and given time to decide. Whether it's a routine check-up, braces or an urgent toothache, the aim is the same: calm, thorough care that leaves you confident about your next step.",
  portrait: demoImages.doctor,
};

/** One row per group of days; a "\n" in `hours` starts a second time slot on a new line. */
export const demoHours = [
  { day: "Monday – Saturday", hours: "10:00 AM – 1:30 PM\n4:30 PM – 8:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const demoHoursSummary = "Mon–Sat · 10 AM – 8 PM";

export const demoEmergencyAvailability =
  "During opening hours, call and we'll do our best to see you the same day. Outside opening hours, call the clinic number and follow the guidance given.";

/** Sample reviews written for the demo. Not real patient reviews. */
export const demoReviews = [
  {
    excerpt:
      "The doctor was calm and polite, and explained everything clearly before starting. I never felt rushed.",
    source: "Sample review" as const,
  },
  {
    excerpt:
      "I called with a painful tooth and got help the same evening. Very caring and reassuring throughout.",
    source: "Sample review" as const,
  },
  {
    excerpt:
      "My braces treatment was explained step by step, and every adjustment visit was smooth and on time.",
    source: "Sample review" as const,
  },
  {
    excerpt: "Thorough, gentle treatment and good value. The clinic is spotless and the team is friendly.",
    source: "Sample review" as const,
  },
  {
    excerpt: "I was nervous about dentists, but the doctor took it slowly and answered all my questions.",
    source: "Sample review" as const,
  },
  {
    excerpt: "Clear explanation of my options for a root canal, with no pressure. I knew exactly what to expect.",
    source: "Sample review" as const,
  },
];
