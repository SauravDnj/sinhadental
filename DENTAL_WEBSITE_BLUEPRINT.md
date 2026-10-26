# Dr. Sinha's Dental Studio — Website UI/UX & Build Blueprint

**Domain:** https://sinhadental.in/
**Project type:** Premium, responsive, multi-page dental clinic website
**Scope:** UI/UX and frontend only. No backend, database, payment integration or real appointment submission unless added in a later phase.

> This is the master source of truth. The detailed files in `docs/` expand on each section. If they disagree, this file wins.

---

## 1. Project goal

Build a polished, trustworthy, modern website for Dr. Sinha's Dental Studio in Palanpur, Surat, Gujarat. The experience should feel calm, premium, human and clinically professional, not like a generic hospital template.

The website should help visitors:

- Understand the clinic and the dental treatments available.
- Learn about the dentist and the clinic's approach without invented qualifications.
- Feel reassured by genuine patient-review highlights and clear explanations.
- Find the clinic, call the team and request an appointment easily.
- Browse comfortably on mobile, tablet and desktop.
- Discover treatment pages through useful, local, SEO-friendly content.

**Primary conversion:** Call the clinic or request an appointment.
**Secondary conversions:** Open directions, explore a treatment, read patient reviews.

## 2. Clinic information supplied

Use these details consistently:

| Field | Value | Status |
|---|---|---|
| Clinic name | Dr. Sinha's Dental Studio | Supplied |
| Category | Dental clinic | Supplied |
| Google rating | 5.0 / 5 from 70 reviews | **Verify before publishing.** Ratings and counts change. |
| Address | 2nd Floor, Sai Milap Shoppers, 212, Shavion Circle, Gaurav Path Road, Palanpur, Surat, Gujarat 395009 | Supplied |
| Phone | +91 78741 14018 | Supplied |
| Hours | Open; closes at 8:00 PM | **Confirm full weekly hours** |
| Google Maps | https://maps.app.goo.gl/yCNRjtdtpyK84Nri6?g_st=aw | Supplied |
| Website | https://sinhadental.in/ | Supplied |
| Inclusion notes | LGBTQ+ friendly; identifies as women-owned | **Show only if the clinic confirms** |

### Review themes supplied

Patient feedback mentions a calm and polite doctor, clear explanations, empathetic care, help during a dental emergency, braces treatment, thorough treatment and perceived value.

Use only authentic reviews, with permission and appropriate attribution. Do not fabricate testimonials, patient names, before-and-after results or clinical outcomes.

## 3. Recommended technology stack

Use the existing project stack if there is one. If starting fresh, prefer:

| Purpose | Technology |
|---|---|
| Website and routing | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Accessible UI primitives | shadcn/ui + Radix UI (customize the visual layer) |
| Animation | Motion for React (`motion`) |
| Icons | Lucide React |
| Form validation (client-side only) | React Hook Form + Zod |
| Carousel (optional) | Embla Carousel |
| Images | `next/image` |
| Smoke tests (optional) | Playwright |
| Code quality | ESLint + Prettier |

Install only the libraries that are actually needed. Do not add several animation libraries or several component kits for the same job. Check current official documentation and package compatibility when installing.

## 4. Visual design direction

### Brand personality

- Gentle, reassuring, clean, confident, precise, welcoming.
- Premium but approachable. Not cold, overly corporate, childish or overly clinical.
- Use real clinic, dentist, staff and equipment photography wherever possible, with consent for identifiable people.
- Avoid stock photos that imply a specific doctor or patient belongs to the clinic.

### Color tokens (light theme)

| Token | Value | Usage |
|---|---|---|
| Primary teal | `#087F8C` | Primary actions, links, small highlights |
| Deep teal | `#07545B` | Headings, dark contrast sections |
| Soft mint | `#EAF7F5` | Gentle section backgrounds |
| Warm white | `#FCFDFD` | Main page background |
| White | `#FFFFFF` | Cards and surfaces |
| Ink | `#17313A` | Body text |
| Muted text | `#647780` | Secondary text |
| Border | `#DCE8E9` | Dividers and card outlines |
| Soft accent | `#E7F2FF` | Occasional informational panels |

Adjust the palette after reviewing the clinic logo. Keep strong contrast. Never use pale teal for small text on white, and never use color alone to show status.

### Typography

- Headings: Manrope or Plus Jakarta Sans. Body: Inter. Or one accessible family throughout.
- Headings are confident and editorial with clear line breaks, and not oversized on mobile.
- Body text has a comfortable size and line height.
- Each page has a clear H1 → H2 → H3 hierarchy.

### Layout and shape

- Max content width about 1180–1280px.
- Generous whitespace, 8px spacing rhythm, aligned grids.
- Cards with 16–24px radius; buttons with 10–14px radius.
- Soft, subtle shadows only where they help hierarchy.
- Asymmetric image/text compositions and occasional oversized type for distinctiveness.
- Avoid heavy glassmorphism, neon gradients, noisy backgrounds, floating decorations and dashboard-like cards.

### Photography and illustration (priority order)

1. Authentic dentist portrait and clinic team.
2. Real reception, treatment room and sterilized equipment.
3. Natural patient-care moments, with written consent.
4. High-quality dental close-ups or 3D tooth illustrations as supporting visuals.
5. Subtle line illustrations of a tooth, smile curve or instruments.

Do not use frightening imagery, exaggerated whitening results, graphic procedures or unverified before/after images. Do not generate a fake likeness of Dr. Sinha. If real photos are not available, use tasteful neutral dental imagery and treat it as illustrative.

## 5. Site map and routes

| # | Route | Page |
|---|---|---|
| 1 | `/` | Home |
| 2 | `/about` | About the clinic and Dr. Sinha |
| 3 | `/treatments` | All treatments overview |
| 4 | `/treatments/general-dentistry` | Check-ups, consultation, fillings, general care |
| 5 | `/treatments/teeth-cleaning` | Professional cleaning and oral hygiene |
| 6 | `/treatments/root-canal` | Root canal treatment |
| 7 | `/treatments/braces` | Braces and orthodontic consultation |
| 8 | `/treatments/cosmetic-dentistry` | Cosmetic dentistry overview |
| 9 | `/treatments/teeth-whitening` | Teeth whitening consultation |
| 10 | `/treatments/dental-emergency` | Dental emergency guidance and contact CTA |
| 11 | `/patient-reviews` | Review highlights and link to Google listing |
| 12 | `/patient-guide` | First visit, what to expect, FAQs, aftercare |
| 13 | `/contact` | Contact, directions, hours, appointment request |
| 14 | `/privacy-policy` | Privacy policy placeholder (legal review) |
| 15 | `/terms` | Website terms placeholder (legal review) |
| 16 | `/404` | Friendly not-found page |

Treatment pages are a proposed structure, not a claim that every service is offered. Confirm the service list, protocols and credentials with the clinic. Remove or label any unconfirmed service "Ask the clinic."

## 6. Shared components

AnnouncementBar (optional, verified notices only) · SiteHeader · MobileNavigation · SiteFooter · PrimaryButton · SecondaryButton · TextLink · SectionHeading · TrustStrip · TreatmentCard · DoctorProfile · ReviewCard · FAQAccordion · AppointmentForm · ContactCard · MapEmbed (optional) · FloatingMobileCTA · Breadcrumbs · ScrollProgress (optional).

### Header behavior

- Clean or transparent header over the home hero; white surface with subtle border/shadow after scrolling.
- Consistent header height.
- Desktop links: Home, About, Treatments, Patient Guide, Reviews, Contact.
- Primary action: "Book an Appointment".
- Mobile: accessible menu and persistent call CTA where appropriate.
- Real `tel:+917874114018` link and verified map link.
- No fake online booking system without a booking backend.

See [docs/05-components.md](docs/05-components.md) for full specs.

## 7. Page-by-page UX requirements

Full specs live in [docs/pages/](docs/pages/). Summary:

- **Home:** hero → trust strip → welcome → featured treatments → "Your visit, made clearer" 3 steps → doctor preview → review highlights → location → FAQ preview → final CTA → footer.
- **About:** editorial hero, philosophy, verified biography, gallery, care principles, trust, CTA.
- **Treatments overview:** intro (suitability decided after examination), grid of confirmed services, optional categories, educational disclaimer.
- **Treatment detail template:** breadcrumbs, hero, "When might someone ask about this?", what to expect (3–4 steps), benefits and limitations, aftercare/preparation, FAQs, related treatments, contact CTA.
- **Patient reviews:** verified rating, genuine excerpts, link to Google listing, calm layout.
- **Patient guide:** first-visit prep, consultation, questions, oral hygiene tips, FAQs, general-information notice.
- **Contact:** click-to-call, address, directions, confirmed hours, map, minimal appointment form labeled as demo.
- **Privacy and terms:** readable legal layout; clinic-approved text only.
- **404:** friendly illustration, "This page seems to have wandered," links home, to treatments and to contact.

### Clinical content rules

Do not promise pain-free treatment, guaranteed results, exact durations, prices or suitability without clinic-approved information. Do not diagnose visitors from symptoms. Encourage professional evaluation. For swelling, trauma, uncontrolled bleeding or fever, advise urgent professional care. For difficulty breathing or swallowing, advise emergency services.

## 8. Motion and animation system

- Page entry: fade + 8–16px upward movement, 350–600ms.
- Section reveal once on entering viewport, with light stagger.
- Cards lift 2–4px with shadow change on hover.
- Buttons: subtle color/scale response and clear focus states.
- Hero: gentle image reveal, floating tooth/smile outline or slow background drift.
- Process steps revealed in sequence on scroll.
- Reviews carousel optional and never auto-advances quickly.
- Smooth mobile drawer and active-link indicator.
- Tooth SVG: subtle line drawing or gentle float. Never spins continuously or covers text.
- Route transitions only if compatible with routing, accessibility and back/forward.

Respect `prefers-reduced-motion: reduce`. Do not animate everything. No scroll-jacking, forced delays, heavy blur or unnecessary WebGL. Animate only transform and opacity. Animation must never delay access to content or buttons.

The suggested implementation is a reusable "Reveal" wrapper that checks the reduced-motion setting, fades and lifts content about 14px over about 0.45s once 15% of it is in view, and does nothing when reduced motion is on. Use client components only where interaction or animation requires them.

## 9. Accessibility requirements

WCAG 2.2 AA · semantic landmarks · logical heading order · full keyboard access · visible focus · skip-to-content link · labeled form fields with useful errors · correct contrast · alt text (empty for decorative images) · dialog/menu focus management and Escape to close · no hover-only content · touch targets about 44×44px · reduced motion respected · keyboard-accessible carousels that don't auto-advance · never rely on color or animation alone.

## 10. Responsive behavior

Mobile-first. Test at 360, 390, 768, 1024 and 1440px.

- **Mobile:** no horizontal overflow; hero copy and CTA visible early; large tap targets; one-column cards; phone and directions easy to reach; floating CTA never covers footer, form fields or browser controls.
- **Desktop:** balanced two-column hero; constrained text measure; intentional whitespace; paragraphs never stretch full width.

## 11. SEO and local discoverability

Unique title and meta description per route · one descriptive H1 per page · readable URLs and internal links · natural local phrases ("dentist in Palanpur, Surat", "dental clinic in Surat") without stuffing · Dentist/LocalBusiness structured data only with accurate, visible, verified info · consistent name/address/phone/hours · sitemap, robots.txt, canonical URLs, Open Graph, descriptive alt text · real favicon and social image · no fake rating or review structured data · no promises of ranking.

## 12. Performance and quality targets

Optimize Core Web Vitals (a lab score is not a guarantee) · `next/image` with correct sizes · no large animation bundles on every page · lazy-load below-the-fold media · no layout shift · server components by default · loading, empty, error and success states · verify links, routes, keyboard and mobile menu · test in current Chrome, Safari and Firefox.

## 13. Suggested project structure

See [docs/11-tech-stack.md](docs/11-tech-stack.md). Keep clinic details and treatment content in data files (`clinic`, `treatments`, `faqs`, `reviews`) so verified facts are reused consistently. Never put secrets in frontend environment variables.

## 14. Content and image asset checklist

See [docs/12-content-assets.md](docs/12-content-assets.md). Do not invent missing credentials, awards, years of experience, prices, treatment counts, emergency availability, insurance partnerships or patient outcomes.

## 15–16. Build prompts

The master implementation prompt and page prompts A–J are in [docs/14-build-prompts.md](docs/14-build-prompts.md).

## 17. Definition of done

- [ ] Every route in the sitemap exists and has unique, useful content.
- [ ] Header, mobile navigation and footer are consistent.
- [ ] Clinic phone, address and map link are correct.
- [ ] Rating/review count and opening hours are verified or clearly withheld.
- [ ] Only confirmed treatments are presented as available.
- [ ] No invented credentials, testimonials, outcomes or medical guarantees.
- [ ] Appointment UI honestly states whether it is connected.
- [ ] All pages work at mobile, tablet and desktop sizes.
- [ ] Keyboard, focus, contrast and reduced-motion behavior are checked.
- [ ] Images are optimized and have appropriate alt text.
- [ ] SEO metadata and internal links are present.
- [ ] No broken routes, obvious console errors or horizontal overflow.
- [ ] Clinic has approved final content, images, privacy policy and terms.

## 18. Launch note

This is a design and frontend blueprint, not a clinical or legal review. Before launch, the clinic must approve all treatment descriptions, credentials, hours, testimonials, privacy statements and appointment workflows. Connect the appointment form to a secure, approved destination only after the clinic confirms how enquiries are handled.
