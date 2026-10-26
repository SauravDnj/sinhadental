# Dr. Sinha's Dental Studio — Website Documentation

**Domain:** https://sinhadental.in/
**Project type:** Premium, responsive, multi-page dental clinic website
**Current phase:** Frontend built (UI-only); waiting on clinic content before launch
**Last updated:** 2026-10-26

This folder holds the website code and its planning, UI/UX and build documentation. Every design, content and build decision should trace back to these files.

---

## Running the website

Requires Node.js 20.9 or newer.

```bash
npm install          # install dependencies
npm run dev          # development server at http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript
```

### Where to change things

| To change… | Edit |
|---|---|
| Phone, address, map link, hours, rating, doctor details | `src/data/clinic.ts` |
| Treatment text, FAQs per treatment, "Ask the clinic" labels | `src/data/treatments.ts` (`confirmed: true` removes the label) |
| General FAQs | `src/data/faqs.ts` |
| Approved patient review excerpts | `src/data/reviews.ts` |
| Colors, fonts, spacing, animations | `src/app/globals.css` |
| Header links | `src/data/navigation.ts` |

### Demo mode (sample content)

`src/data/demo.ts` holds a single switch, `DEMO_MODE`, which is currently **on**. While it is on, the site shows:

- Unsplash photos (free licence) in `public/images/demo/`: clinic hero, About photo and gallery, doctor photo, one photo per treatment, and an oral-care photo.
- A sample doctor bio and qualifications, sample weekly hours, the 5.0 / 70 rating, sample reviews (labelled "Sample review"), emergency availability text, and sample privacy/terms text (`src/data/legal.ts`).
- A banner on every page saying the content is a sample. Every page is also set to `noindex` and `robots.txt` blocks crawlers, so search engines never index it.

**Before launch:** set `DEMO_MODE = false`, then add the clinic's real photos and details. None of the sample photos show the real clinic, dentist or patients.

### Switches in `src/data/clinic.ts` that unlock content (real mode)

| Switch | Effect when turned on |
|---|---|
| `rating.verified: true` | Shows "5.0 Google rating · 70 reviews" on Home, About and Reviews |
| `hours.confirmed: true` + `hours.weekly` | Shows the weekly hours table instead of "Call us for today's timings" |
| `doctor.qualifications`, `doctor.biography`, `doctor.portrait` | Fill the doctor profile (portrait path under `public/images/`) |
| `inclusion.*.approvedForDisplay: true` | Shows "LGBTQ+ friendly" / "Women-owned" on the About page |
| `appointmentFormConnected: true` | Removes the demo labels (only after a real backend is connected) |

### Code layout

```
src/
  app/            One folder per route; treatments/[slug] renders all 7 treatment pages
  components/
    layout/       Header, mobile menu, footer, breadcrumbs, floating mobile CTA
    ui/           Buttons, section heading, Reveal animation wrappers
    dental/       Treatment cards, doctor profile, reviews, FAQ, form, contact card, map, illustrations
    sections/     Page hero, process steps, CTA band, notices, legal page layout
  data/           All clinic facts and content (single source of truth)
  lib/            Metadata, JSON-LD and class-name helpers
```

---

## Start here

| File | Purpose |
|---|---|
| [DENTAL_WEBSITE_BLUEPRINT.md](DENTAL_WEBSITE_BLUEPRINT.md) | **Master source of truth.** The complete UI/UX and build blueprint. If any other file disagrees with it, the blueprint wins. |
| [PROGRESS.md](PROGRESS.md) | **Status dashboard.** Shows which phase, page and component is not started, in progress, done or blocked. |
| [CHECKLIST.md](CHECKLIST.md) | **Full checkbox list.** Every item that must be built, checked or confirmed before launch. |

## Detailed documentation (`docs/`)

| # | File | What it covers |
|---|---|---|
| 01 | [Project overview](docs/01-project-overview.md) | Goals, conversions, scope, out-of-scope items |
| 02 | [Clinic information](docs/02-clinic-information.md) | Name, address, phone, hours, rating, review themes, what is verified |
| 03 | [Design system](docs/03-design-system.md) | Brand personality, colors, typography, layout, shape, imagery |
| 04 | [Sitemap and routes](docs/04-sitemap-and-routes.md) | All 16 routes, navigation, internal linking |
| 05 | [Shared components](docs/05-components.md) | Header, footer, cards, forms, CTAs and their behavior |
| 06 | [Motion and animation](docs/06-motion-and-animation.md) | Animation rules, timings, reduced motion |
| 07 | [Accessibility](docs/07-accessibility.md) | WCAG 2.2 AA requirements |
| 08 | [Responsive behavior](docs/08-responsive.md) | Breakpoints, mobile and desktop rules |
| 09 | [SEO and local discoverability](docs/09-seo.md) | Metadata, keywords, structured data |
| 10 | [Performance and quality](docs/10-performance-quality.md) | Core Web Vitals, image rules, QA targets |
| 11 | [Tech stack and project structure](docs/11-tech-stack.md) | Recommended libraries and folder layout |
| 12 | [Content and asset checklist](docs/12-content-assets.md) | Everything the clinic must supply or approve |
| 13 | [Content rules (clinical and legal)](docs/13-content-rules.md) | What may and may not be claimed on the site |
| 14 | [Build prompts](docs/14-build-prompts.md) | Master prompt and page-specific prompts for the coding agent |

## Page specifications (`docs/pages/`)

| Page | Route | File |
|---|---|---|
| Home | `/` | [home.md](docs/pages/home.md) |
| About | `/about` | [about.md](docs/pages/about.md) |
| Treatments overview | `/treatments` | [treatments-overview.md](docs/pages/treatments-overview.md) |
| Treatment detail (template + 7 treatments) | `/treatments/*` | [treatment-detail.md](docs/pages/treatment-detail.md) |
| Patient reviews | `/patient-reviews` | [patient-reviews.md](docs/pages/patient-reviews.md) |
| Patient guide | `/patient-guide` | [patient-guide.md](docs/pages/patient-guide.md) |
| Contact | `/contact` | [contact.md](docs/pages/contact.md) |
| Privacy policy and terms | `/privacy-policy`, `/terms` | [legal.md](docs/pages/legal.md) |
| 404 | `/404` | [not-found.md](docs/pages/not-found.md) |

## How to use these docs

1. Read the blueprint once from start to finish.
2. Collect the clinic items in [docs/12-content-assets.md](docs/12-content-assets.md). Many pages depend on them.
3. Build in the order shown in [PROGRESS.md](PROGRESS.md): design tokens and layout first, then Home, then every other page.
4. As each item is finished, tick it in [CHECKLIST.md](CHECKLIST.md) and update its status in [PROGRESS.md](PROGRESS.md).
5. Do not launch until every item in the **Launch blockers** section of the checklist is ticked.

## Golden rules

- **Never invent clinic facts.** That covers qualifications, services, hours, prices, testimonials, patient results and medical promises.
- **Be honest about the form.** Until a backend exists, the appointment form is a labeled demo and never shows a fake success.
- **Light, calm, premium.** Warm white, teal accents, generous whitespace, real photography.
- **Accessible and fast.** WCAG 2.2 AA, reduced-motion support, optimized images.
