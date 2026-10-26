# 14 — Build Prompts

[← Back to README](../README.md)

> Copy these into the coding agent when the build phase starts. The [blueprint](../DENTAL_WEBSITE_BLUEPRINT.md) stays authoritative. After each prompt, update [PROGRESS.md](../PROGRESS.md) and [CHECKLIST.md](../CHECKLIST.md).

## Recommended order

| Step | Prompt | Result |
|---|---|---|
| 1 | Master prompt | Full site foundation and all routes |
| 2 | A — Home | Visual identity polished |
| 3 | B — About | |
| 4 | C — Treatments directory | |
| 5 | D — Treatment detail template | All 7 treatment pages |
| 6 | E — Reviews | |
| 7 | F — Patient guide | |
| 8 | G — Contact | |
| 9 | I — Animation polish | |
| 10 | H — Mobile and accessibility | |
| 11 | J — Final QA | Launch readiness report |

---

## Master implementation prompt

```
You are a senior product designer, UX architect, and senior frontend engineer. Build a premium, production-quality, responsive, multi-page dental clinic website for Dr. Sinha's Dental Studio, domain https://sinhadental.in/, using the requirements in DENTAL_WEBSITE_BLUEPRINT.md and the docs/ folder as the source of truth.

First inspect the existing repository, package manager, framework, and design conventions. Do not overwrite an existing project blindly. If the repo is empty, use Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui where appropriate, Lucide icons, and Motion for React for tasteful interactions.

Implement all routes listed in the blueprint, with a coherent shared design system, reusable components, responsive navigation, footer, breadcrumbs, treatment cards, review components, FAQ accordion, contact details, and appointment-request UI. All routes must have real, page-specific content and layouts; do not create duplicate placeholder pages or a single long landing page pretending to be multi-page.

Follow the light, premium dental visual direction: warm white backgrounds, teal accents, dark readable typography, generous whitespace, real clinic photography where supplied, restrained shadows, clear hierarchy, and elegant tooth/smile-related visuals. Make the design feel custom, calm and trustworthy rather than template-like.

Add tasteful entrance/reveal, hover, menu and process animations. Respect reduced-motion preferences. Optimize image loading and responsiveness. Make keyboard navigation, focus states, semantic HTML, labels, contrast and error states accessible.

Use only the clinic facts provided in docs/02-clinic-information.md. Do not fabricate the dentist's qualifications, services, hours, prices, testimonials, patient results or medical promises. Mark unconfirmed services for clinic verification. The supplied 5.0 rating and 70-review count must be verified before public launch.

This phase is UI only. Do not invent backend endpoints, persist sensitive patient information, or claim an appointment was submitted. If no booking integration exists, label the form as a prototype and make its behavior honest. Use the real phone link and supplied Google Maps listing link.

Add page-specific SEO metadata, accessible image alt text, sensible internal links, and accurate local business structured data only for verified information. Add a README with setup and run instructions.

Work in stages: (1) inspect repo and report a short plan, (2) establish tokens and shared layout, (3) implement the home page, (4) implement every remaining route, (5) add motion and responsive states, (6) run lint/type checks and fix errors, (7) test routes and key interactions. Do not stop after making only the home page. Update PROGRESS.md and CHECKLIST.md as you complete each stage. Finish with a list of completed routes, checks run, and any content/assets that still need clinic confirmation.
```

## Prompt A — Home page

```
Design and implement the home page as a premium dental-clinic experience, following docs/pages/home.md. Create a distinctive hero with a short reassuring headline, concise copy, primary appointment CTA, secondary click-to-call CTA, and authentic dental imagery. Include verified review trust, featured confirmed treatments, patient journey, doctor preview, authentic review excerpts, clinic location and a final CTA. Use elegant asymmetry, restrained tooth/smile illustrations and subtle scroll reveals. Make the mobile hero conversion-focused and avoid generic stock-template layouts.
```

## Prompt B — About page

```
Build an editorial About page for Dr. Sinha's Dental Studio following docs/pages/about.md. Focus on the clinic's patient-first approach, communication and comfort. Use only approved biography, credentials and photos. Create a beautiful portrait section, clinic gallery, care principles and CTA. Do not invent experience, awards or qualifications. Add subtle transitions and responsive image compositions.
```

## Prompt C — Treatments directory

```
Build a polished treatment directory following docs/pages/treatments-overview.md, with a clear intro, category filters only if useful, accessible treatment cards, concise plain-language descriptions and links to individual pages. Use only services confirmed by the clinic. Every card should be scannable on mobile and have clear focus/hover states. Avoid unsupported claims and exaggerated treatment promises.
```

## Prompt D — Treatment detail template

```
Create a reusable, SEO-friendly treatment detail page following docs/pages/treatment-detail.md, with breadcrumbs, a tailored hero, plain-language explanation, when to seek an assessment, what to expect, dentist-reviewed preparation/aftercare information, FAQs, related services and appointment CTA. Make each treatment page genuinely unique. Add a clear educational-information disclaimer and avoid diagnosing visitors or guaranteeing results.
```

## Prompt E — Reviews

```
Build a trustworthy patient reviews page following docs/pages/patient-reviews.md. Show the rating and review count only after verification. Feature a few authentic excerpts supplied or approved by the clinic, clearly identify the source, and link to the live Google listing. Do not invent review text, patient identities, dates or star ratings. Prioritize readability and trust over decorative stars.
```

## Prompt F — Patient guide

```
Build a helpful patient resource page following docs/pages/patient-guide.md, with first-visit preparation, consultation expectations, general oral-care guidance and an accessible FAQ. Have the clinic review all clinical and policy content. Do not invent clinic procedures, payment rules, emergency hours or insurance acceptance. Keep the tone friendly and non-alarming.
```

## Prompt G — Contact and appointment request

```
Build a conversion-focused contact page following docs/pages/contact.md, with click-to-call, full address, directions link, confirmed hours, optional accessible map embed and an appointment-request UI. Keep form fields minimal and validate them accessibly. Since this phase is UI-only, label the form clearly as a demo if no backend is connected, and never display a fake successful submission. Do not collect detailed medical information.
```

## Prompt H — Mobile polish and accessibility

```
Audit all pages at 360px, 390px, 768px, 1024px and 1440px using docs/07-accessibility.md and docs/08-responsive.md. Fix horizontal overflow, text wrapping, image cropping, tap targets, sticky CTA overlap, mobile navigation, focus states, keyboard access, contrast and reduced-motion behavior. Confirm every route and CTA works. Report issues fixed and anything still outstanding.
```

## Prompt I — Animation polish

```
Add a consistent, restrained motion system using Motion for React and CSS, following docs/06-motion-and-animation.md. Use viewport-based reveals, gentle stagger, card hover feedback, button feedback, and accessible menu transitions. Respect prefers-reduced-motion, avoid scroll-jacking and continuous distracting animations, and ensure no animation blocks reading or interaction. Keep the site fast and prevent layout shifts.
```

## Prompt J — Final QA

```
Run the project lint and TypeScript checks. Visit every route and test all internal links, mobile navigation, accordions, forms, phone links, map links, keyboard navigation and reduced-motion behavior. Check metadata, missing images, console errors and responsive overflow. Fix issues rather than merely listing them. Update CHECKLIST.md and PROGRESS.md. Summarize completed work and list every unverified clinic fact or missing asset that prevents launch.
```
