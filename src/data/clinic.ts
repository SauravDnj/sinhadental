/**
 * Single source of truth for clinic facts. Mirrors docs/02-clinic-information.md.
 * Anything not yet confirmed by the clinic is flagged and kept off the public site,
 * unless DEMO_MODE (src/data/demo.ts) fills it with clearly-marked sample content.
 */
import {
  DEMO_MODE,
  demoDoctor,
  demoEmergencyAvailability,
  demoHours,
  demoHoursSummary,
  type DemoImage,
} from "./demo";

export const clinic = {
  name: "Dr. Sinha's Dental Studio",
  shortName: "Sinha Dental",
  doctorName: "Dr. Sinha",
  url: "https://sinhadental.in",

  phone: {
    display: "+91 78741 14018",
    href: "tel:+917874114018",
    e164: "+917874114018",
  },

  address: {
    line1: "2nd Floor, Sai Milap Shoppers, 212",
    line2: "Shavion Circle, Gaurav Path Road",
    locality: "Palanpur, Surat",
    region: "Gujarat",
    postalCode: "395009",
    country: "IN",
    full: "2nd Floor, Sai Milap Shoppers, 212, Shavion Circle, Gaurav Path Road, Palanpur, Surat, Gujarat 395009",
  },

  mapsUrl: "https://maps.app.goo.gl/yCNRjtdtpyK84Nri6?g_st=aw",

  rating: {
    value: 5.0,
    count: 70,
    // Real mode: flip to true only after re-checking the live Google listing, and record the date.
    verified: DEMO_MODE,
    verifiedOn: null as string | null,
  },

  hours: {
    // Real mode: only "closes at 8:00 PM" was supplied, so weekly hours stay hidden until confirmed.
    confirmed: DEMO_MODE,
    weekly: DEMO_MODE ? demoHours : ([] as { day: string; hours: string }[]),
    summary: DEMO_MODE ? demoHoursSummary : null,
    fallback: "Call us for today's timings",
  },

  inclusion: {
    // Display only with the clinic's explicit permission.
    lgbtqFriendly: { value: true, approvedForDisplay: DEMO_MODE },
    womenOwned: { value: true, approvedForDisplay: DEMO_MODE },
  },

  doctor: {
    qualifications: DEMO_MODE ? demoDoctor.qualifications : ([] as string[]),
    biography: DEMO_MODE ? demoDoctor.biography : (null as string | null),
    portrait: DEMO_MODE ? demoDoctor.portrait : (null as DemoImage | null),
  },

  emergencyAvailability: DEMO_MODE ? demoEmergencyAvailability : null,

  emergencyNumber: "112",

  // The appointment form is a UI prototype until a real destination is approved.
  appointmentFormConnected: false,

  demo: DEMO_MODE,
} as const;

export type Clinic = typeof clinic;
