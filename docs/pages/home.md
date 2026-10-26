# Page — Home (`/`)

[← Back to README](../../README.md)

**Goal:** make a strong, calm first impression and drive calls and appointment requests.
**Primary CTA:** Request an Appointment · **Secondary:** Call the Clinic

## Section order

| # | Section | Background | Key components |
|---|---|---|---|
| 1 | Hero | Warm white with soft mint shape | Headline, CTAs, hero visual |
| 2 | Trust strip | White, bordered row | TrustStrip |
| 3 | Welcome | Warm white | SectionHeading, short copy |
| 4 | Featured treatments | Mint | TreatmentCard ×3–6 |
| 5 | "Your visit, made clearer" | Warm white | 3 numbered steps |
| 6 | About Dr. Sinha preview | White | DoctorProfile (preview) |
| 7 | Patient review highlights | Mint | ReviewCard ×3 |
| 8 | Clinic location | Warm white | ContactCard, MapEmbed |
| 9 | FAQ preview | White | FAQAccordion (4–5 items) |
| 10 | Final CTA | Deep teal | Headline + 2 CTAs |
| 11 | Footer | — | SiteFooter |

---

## 1. Hero

**Layout:** desktop two columns (copy 7 / visual 5, asymmetric). Mobile stacks copy and CTAs first, then a compact visual.

| Element | Content |
|---|---|
| Eyebrow | Thoughtful dental care in Palanpur, Surat |
| H1 | A healthier smile starts with feeling cared for. |
| Supporting copy | Calm, unhurried visits where every step is explained clearly, so you can make confident decisions about your dental care. |
| Primary CTA | Request an Appointment → `/contact#appointment` |
| Secondary CTA | 📞 Call the Clinic → `tel:+917874114018` |
| Micro line (optional) | 2nd Floor, Sai Milap Shoppers, Gaurav Path Road |
| Visual | Authentic clinic or doctor photo; otherwise a refined tooth/smile visual |

**Motion:** headline and copy fade up; image reveals softly; optional tooth outline draws in once. No rotating tooth. CTAs are clickable immediately.

## 2. Trust strip

- ★ 5.0 Google rating · 70 reviews (**only after verification**, links to `/patient-reviews`)
- 📍 Palanpur, Surat
- 💬 Clear explanations
- 🤝 Patient-first care

Fallback if not verified: "Read our Google reviews →".

## 3. Welcome

- **Eyebrow:** WELCOME
- **H2:** Dental care that starts with listening.
- **Copy (2–3 short sentences):** We take time to understand your concerns, explain what we see and talk through your options. No rush, no pressure, just clear, careful care.
- Optional small clinic photo or smile-curve motif.
- No unsupported clinical promises.

## 4. Featured treatments

- **Eyebrow:** TREATMENTS · **H2:** Care for every part of your smile.
- 3–6 TreatmentCards, **confirmed services only**.
- Link: "View all treatments →" `/treatments`.
- Grid: 1 / 2 / 3 columns. Cards stagger in.

## 5. "Your visit, made clearer"

| Step | Title | Copy |
|---|---|---|
| 01 | Contact the clinic | Call us or send an appointment request. |
| 02 | Discuss your concerns | Tell the dentist what's bothering you or what you'd like to improve. |
| 03 | Review your care options | Understand your options clearly before deciding on any treatment. |

Steps reveal in sequence on scroll; a thin smile-curve or line connects them on desktop.

## 6. About Dr. Sinha preview

- Approved portrait (no AI likeness; placeholder frame until supplied).
- **H2:** Meet Dr. Sinha
- 2–3 sentences from the approved biography + verified credentials only.
- Link: "More about the clinic →" `/about`.

## 7. Patient review highlights

- **Eyebrow:** PATIENT REVIEWS · **H2:** Kind words from our patients.
- 3 genuine, approved excerpts (themes to look for: calm doctor, clear explanations, emergency help, braces).
- Source: "Google review". Link: "Read all reviews on Google ↗".
- Calm layout; no wall of stars. If no approved excerpts yet, show just the Google link card.

## 8. Clinic location

- **H2:** Visit the studio
- Address, phone, hours (or "Call us for today's timings"), "Get Directions" button.
- Optional lazy-loaded map with the text address alongside.

## 9. FAQ preview

4–5 questions (answers approved by the clinic), e.g.:

- How do I book an appointment?
- What should I bring to my first visit?
- What should I do in a dental emergency?
- Do you treat children? *(only after policy confirmed)*

Link: "More questions? Read the patient guide →".

## 10. Final CTA

- Deep teal band, white text.
- **H2:** Ready when you are.
- Copy: Call us or request an appointment and we'll help you find a suitable time.
- Buttons: Request an Appointment (white) · Call +91 78741 14018 (outline).

## Mobile notes

- Hero copy and both CTAs visible on first screen at 390px.
- Floating Call/Book bar appears after the hero.
- Treatment cards one column; reviews swipeable.

## SEO

- Title: Dr. Sinha's Dental Studio · Dentist in Palanpur, Surat
- One H1 (the hero headline). Dentist structured data with verified info.
