# Build Progress — Dr. Sinha's Dental Studio

[← Back to README](README.md) · Detailed checkboxes: [CHECKLIST.md](CHECKLIST.md)

**Last updated:** 2026-10-26
**Current phase:** Phases 2–9 built and verified (UI-only). Waiting on clinic content (Phase 1) and approval (Phase 10).
**Next step:** Collect the clinic items listed under **Open blockers**, then update `src/data/` and launch.

## Status legend

| Icon | Meaning |
|---|---|
| ⬜ | Not started |
| 🟨 | In progress / partly done |
| ✅ | Done |
| ⛔ | Blocked (waiting on clinic content or approval) |

> **How to update:** change the icon, update the %, add a date and a short note. Keep this file and [CHECKLIST.md](CHECKLIST.md) in sync.

---

## Overall progress

| Phase | Name | Status | Progress | Notes |
|---|---|---|---|---|
| 0 | Documentation (MD files) | ✅ | 100% | All planning docs written 2026-10-26 |
| 1 | Clinic content and assets | ⛔ | 5% | Only phone, address, map link and review themes supplied |
| 2 | Project setup | ✅ | 100% | Next.js 16, React 19, Tailwind 4, Motion, Lucide |
| 3 | Design system and shared layout | ✅ | 100% | Tokens, header, footer, mobile menu, floating CTA |
| 4 | Home page | ✅ | 100% | All 10 sections |
| 5 | All other pages | ✅ | 100% | 15 routes; content limited where clinic info is missing |
| 6 | Motion and animation | ✅ | 100% | Reveals, stagger, hero draw-in, menu, reduced motion |
| 7 | Responsive and accessibility polish | ✅ | 90% | Overflow audit passed; screen-reader spot check still to do |
| 8 | SEO and performance | ✅ | 90% | Metadata, sitemap, robots, JSON-LD, OG image; Lighthouse run pending |
| 9 | QA and testing | 🟨 | 80% | Lint, types, build, routes, form, menu verified; Safari/Firefox pending |
| 9b | Demo content preview | ✅ | 100% | Sample photos and content for every missing item (`DEMO_MODE`) |
| 10 | Clinic approval and launch | ⬜ | 0% | Replace demo content, set `DEMO_MODE = false` |

**Overall:** ████████░░ ~80% (build complete, launch blocked on clinic content)

---

## Phase 2 — Project setup ✅

| Item | Status | Notes |
|---|---|---|
| Next.js 16 (App Router) + TypeScript | ✅ | Set up by hand (create-next-app refuses non-empty folders) |
| Tailwind CSS 4 | ✅ | Tokens in `src/app/globals.css` |
| Motion for React | ✅ | `motion/react` |
| Lucide icons | ✅ | |
| ESLint + Prettier | ✅ | Flat config, `eslint-config-next` |
| tailwind-merge | ✅ | Added so conflicting classes resolve correctly |
| shadcn/ui, React Hook Form, Zod | — | Not needed: components are custom and accessible; the 5-field form validates in plain React |

---

## Phase 3 — Shared components ✅

| Component | Status | Notes |
|---|---|---|
| Design tokens (colors, type, spacing) | ✅ | `muted` darkened to #5A6D75 for AA contrast on mint |
| SiteHeader | ✅ | Transparent on home hero, white with shadow after scroll, active underline |
| MobileNavigation | ✅ | Focus trap, Escape, scroll lock, focus return (tested) |
| SiteFooter | ✅ | |
| Buttons and TextLink | ✅ | External links announce "opens in a new tab" |
| SectionHeading | ✅ | With smile-curve motif |
| TrustStrip | ✅ | Rating hidden until verified |
| TreatmentCard | ✅ | Single stretched link, "Ask the clinic" tag |
| DoctorProfile | ✅ | No invented credentials; illustration until portrait supplied |
| ReviewCard / ReviewThemes / GoogleReviewsCard | ✅ | No reviews shown until approved |
| FAQAccordion | ✅ | |
| AppointmentForm (demo) | ✅ | Validation, error summary, honest demo state (tested) |
| ContactCard | ✅ | |
| MapEmbed | ✅ | Click-to-load (nothing sent to Google until clicked) |
| FloatingMobileCTA | ✅ | Hides over the form and footer |
| Breadcrumbs | ✅ | With BreadcrumbList JSON-LD |
| Reveal (animation) | ✅ | |
| AnnouncementBar | — | Skipped (optional; no verified notices) |
| ScrollProgress | — | Skipped (optional; would add clutter) |

---

## Phases 4–5 — Pages

| # | Route | Page | Layout | Content | Responsive | SEO | Status |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Home | ✅ | 🟨 rating/reviews hidden | ✅ | ✅ | ✅ |
| 2 | `/about` | About | ✅ | ⛔ bio, photos | ✅ | ✅ | 🟨 |
| 3 | `/treatments` | Treatments overview | ✅ | ⛔ list unconfirmed | ✅ | ✅ | 🟨 |
| 4 | `/treatments/general-dentistry` | General dentistry | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 5 | `/treatments/teeth-cleaning` | Teeth cleaning | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 6 | `/treatments/root-canal` | Root canal | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 7 | `/treatments/braces` | Braces | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 8 | `/treatments/cosmetic-dentistry` | Cosmetic dentistry | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 9 | `/treatments/teeth-whitening` | Teeth whitening | ✅ | ⛔ dentist review | ✅ | ✅ | 🟨 |
| 10 | `/treatments/dental-emergency` | Dental emergency | ✅ | ⛔ availability | ✅ | ✅ | 🟨 |
| 11 | `/patient-reviews` | Patient reviews | ✅ | ⛔ excerpts | ✅ | ✅ | 🟨 |
| 12 | `/patient-guide` | Patient guide | ✅ | 🟨 policy FAQs held back | ✅ | ✅ | ✅ |
| 13 | `/contact` | Contact | ✅ | ⛔ hours | ✅ | ✅ | 🟨 |
| 14 | `/privacy-policy` | Privacy policy | ✅ | ⛔ legal | ✅ | noindex | 🟨 |
| 15 | `/terms` | Terms | ✅ | ⛔ legal | ✅ | noindex | 🟨 |
| 16 | `/404` | Not found | ✅ | ✅ | ✅ | ✅ | ✅ |

**Pages built:** 16 / 16 · **Pages launch-ready:** 3 / 16 (rest wait on clinic content)

---

## Verification log (2026-10-26)

| Check | Result |
|---|---|
| `npm run typecheck` | ✅ 0 errors |
| `npm run lint` | ✅ 0 problems |
| `npm run build` | ✅ 21 routes, all statically pre-rendered |
| Horizontal overflow, 16 routes × 360/390/768/1024px | ✅ none (after fixing 2 bugs below) |
| Exactly one H1 per route | ✅ |
| Mobile menu: open, focus inside, scroll lock, Escape, focus return | ✅ |
| Form: empty submit → 3 errors + focused summary | ✅ |
| Form: valid submit → honest demo message, fields cleared | ✅ |
| Console errors / hydration warnings | ✅ none |

**Bugs found and fixed during QA:**
1. Header "Book an Appointment" button stayed visible on phones (class conflict), overflowing every page at 360px. Fixed with tailwind-merge.
2. Tilted card behind the doctor portrait poked 3px past the screen edge on narrow phones. Fixed.

---

## Open blockers

| # | Blocker | Affects | Owner | Since |
|---|---|---|---|---|
| B1 | Full weekly opening hours | Contact, footer, structured data | Clinic | 2026-10-26 |
| B2 | Doctor name, qualifications, biography, portrait | Home, About | Clinic | 2026-10-26 |
| B3 | Confirmed treatment list and dentist-approved descriptions | All treatment pages | Clinic | 2026-10-26 |
| B4 | Rating / review count re-verification | Home, Reviews | Team | 2026-10-26 |
| B5 | Emergency availability | Emergency page | Clinic | 2026-10-26 |
| B6 | Privacy policy and terms | Legal pages, form | Clinic / legal | 2026-10-26 |
| B7 | Logo | Header, footer, favicon | Clinic | 2026-10-26 |
| B8 | Appointment destination (who receives requests) | Contact form | Clinic | 2026-10-26 |

---

## Change log

| Date | Update |
|---|---|
| 2026-10-26 | Phase 0 complete: all documentation, progress and checklist files created. |
| 2026-10-26 | Phases 2–9: full frontend built (16 routes), QA run, 2 responsive bugs fixed. |
| 2026-10-26 | Demo mode added: 16 Unsplash photos plus sample doctor bio, hours, rating, reviews, emergency text and legal text. Site-wide preview banner, noindex and robots block while on. Re-verified: types, lint, build, no overflow at 360/768px, all images load. |

## Demo content in place (replace before launch)

| Blocker | Demo stand-in |
|---|---|
| B1 Opening hours | Mon–Sat 10:00 AM – 1:30 PM, 4:30 PM – 8:00 PM; Sunday closed |
| B2 Doctor details | Stock photo of a masked dentist, "BDS, MDS", sample bio |
| B3 Treatments | All 7 shown as offered, each with a stock photo |
| B4 Rating | 5.0 / 70 reviews shown as supplied |
| B5 Emergency availability | Generic same-day-during-hours text |
| B6 Legal | Sample privacy policy and terms matching current site behaviour |
| B7 Logo | Tooth-mark wordmark (built into the site) |
| B8 Appointment destination | Form still labelled demo and sends nothing |
| Clinic photos | Stock gallery of 5 dental-clinic photos |
| Reviews | 6 sample reviews labelled "Sample review" |
