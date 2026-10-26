# 05 — Shared Components

[← Back to README](../README.md)

All components are reusable, responsive and accessible. They use the tokens in [03-design-system.md](03-design-system.md).

## Component inventory

| Component | Used on | Required? |
|---|---|---|
| AnnouncementBar | All pages (top) | Optional, only for verified notices |
| SiteHeader | All pages | Required |
| MobileNavigation | All pages (mobile) | Required |
| SiteFooter | All pages | Required |
| PrimaryButton / SecondaryButton / TextLink | Everywhere | Required |
| SectionHeading | Everywhere | Required |
| TrustStrip | Home, About, Reviews | Required (rating shown only once verified) |
| TreatmentCard | Home, Treatments, related treatments | Required |
| DoctorProfile | Home, About | Required |
| ReviewCard | Home, Reviews | Required |
| FAQAccordion | Home, Treatments, Patient guide | Required |
| AppointmentForm | Contact (and optional dialog) | Required (demo label) |
| ContactCard | Home, Contact, treatment pages | Required |
| MapEmbed | Contact, Home location | Optional |
| FloatingMobileCTA | All pages (mobile) | Required |
| Breadcrumbs | Treatment detail and deeper pages | Required |
| ScrollProgress | Long pages | Optional; omit if cluttered |
| Reveal (animation wrapper) | Section entrances | Required |

---

## AnnouncementBar

- Thin bar above the header, mint background, ink text.
- Only for verified notices (e.g., holiday closure).
- Dismissible with a labeled close button. Remembers dismissal per visitor.
- Hidden entirely when there's nothing to announce.

## SiteHeader

| State | Look |
|---|---|
| At top of Home hero | Transparent or clean white, no shadow |
| After scrolling | White surface, 1px border or soft shadow |
| Other pages | White surface from the start |

- Consistent height (about 72px desktop, 64px mobile). No jumping.
- **Left:** logo or "Dr. Sinha's Dental Studio" wordmark, linking to Home.
- **Center/right:** Home, About, Treatments, Patient Guide, Reviews, Contact.
- **Right:** "Book an Appointment" primary button. On desktop, optionally a small phone link.
- Current page shows an active indicator (underline or dot), not color alone.
- Optional Treatments dropdown: keyboard operable, closes on Escape and outside click.

## MobileNavigation

- Opened by a menu button with an accessible label ("Open menu"/"Close menu").
- Full-height drawer or dropdown with smooth slide/fade.
- Focus moves into the menu on open, is trapped inside, and returns to the button on close.
- Escape closes it. Background scroll is locked while open.
- Contains all nav links, a large "Call the Clinic" button and a "Book an Appointment" button.
- Phone number visible in the menu.

## SiteFooter

- Deep teal or mint background with strong contrast.
- Columns: clinic intro + logo, Clinic links, Treatments, Visit us (address, phone, hours, directions), Legal.
- Click-to-call phone and "Get Directions" link.
- Copyright line: "© [year] Dr. Sinha's Dental Studio".
- Short note: "Website information is general and not a diagnosis."
- Mobile: columns stack; add bottom padding so the floating CTA never covers footer content.

## Buttons and links

| Component | Spec |
|---|---|
| PrimaryButton | Teal fill, white text, 10–14px radius, min 44px tall, optional leading icon |
| SecondaryButton | White/transparent with teal border and teal text |
| TextLink | Teal, underline on hover and focus, optional trailing arrow that nudges 2px on hover |

All have visible focus rings. Links that open external sites (Google Maps, Google reviews) say so for screen readers and open safely.

## SectionHeading

- **Eyebrow:** small uppercase label (e.g., "OUR TREATMENTS").
- **Heading:** H2 (or H1 in heroes).
- **Supporting text:** one or two sentences, muted color, max ~60ch.
- Alignment: left by default; centered only for short, standalone sections.

## TrustStrip

- A horizontal row of 3–4 short items with icons, e.g.:
  - ★ 5.0 Google rating · 70 reviews (**only after verification**, linked to reviews)
  - 📍 Palanpur, Surat
  - 💬 Clear explanations
  - 🤝 Patient-first care
- If the rating is not verified, replace it with "Read our Google reviews" (link).
- Mobile: wraps to 2×2 or scrolls horizontally with visible overflow cue.

## TreatmentCard

- Icon or small visual, title (H3), 1–2 line plain-language description, "Learn about treatment →" link.
- Whole card is clickable with one accessible link (no nested links).
- Hover: lifts 2–4px, shadow softens in, arrow nudges.
- Optional "Ask the clinic" tag for unconfirmed services.

## DoctorProfile

- Approved portrait (no AI likeness), name, verified credentials, short biography.
- Variant **preview** (Home): portrait + 2–3 sentences + "Meet Dr. Sinha" link.
- Variant **full** (About): larger portrait, full approved biography, qualifications list.
- Missing data is omitted, never guessed.

## ReviewCard

- Genuine excerpt in quotes, source ("Google review"), date if available, reviewer name only if public and appropriate.
- Link to the source listing.
- Calm design: a single small rating line, not a big row of stars.
- No fabricated names, dates or ratings.

## FAQAccordion

- Each question is a real button with `aria-expanded`.
- Enter/Space toggles; content is reachable without hover.
- Smooth height animation (disabled with reduced motion).
- Plus/chevron icon rotates on open.
- Multiple items can be open at once.

## AppointmentForm

| Field | Type | Required | Notes |
|---|---|---|---|
| Full name | Text | Yes | |
| Phone number | Tel | Yes | Indian number format hint |
| Preferred day | Date or select | No | |
| Preferred time | Select (Morning / Afternoon / Evening) | No | |
| Reason for visit | Short text or select | No | Do not request detailed medical info |
| Consent | Checkbox | Yes | Links to Privacy Policy |

- Labels always visible (no placeholder-only labels).
- Inline errors with text and icon, linked to the field, plus a summary at the top on submit.
- **Phase 1 (UI only):** a visible notice: **"Demo form — no request is sent. Please call +91 78741 14018 to book."** The submit shows a clearly labeled demo message, never a fake "Appointment confirmed."
- **Later phase:** real success and error states only once connected to an approved destination.

## ContactCard

- Phone (click-to-call), address, hours (or "Call for timings"), "Get Directions" button.
- Variants: compact (treatment pages) and full (contact page).

## MapEmbed

- Google Maps embed with an approved embed URL, lazy loaded.
- Always accompanied by the text address and a "Get Directions" link as an accessible alternative.
- Has a descriptive title for screen readers.

## FloatingMobileCTA

- Mobile only. A bottom bar with two buttons: **Call** and **Book**.
- Appears after the visitor scrolls past the hero CTA.
- Must not cover form fields, footer content, cookie/consent controls or browser UI. Hide it on the contact form section.
- Respects safe-area insets on phones.

## Breadcrumbs

- `Home › Treatments › [Treatment]`.
- Proper navigation landmark labeled "Breadcrumb"; current page marked as current.
- Mobile: truncate the middle if needed; never wrap awkwardly.

## ScrollProgress (optional)

- 2px teal line at the top of long pages (Patient guide, treatment pages).
- Omit if it adds clutter. Hidden with reduced motion.

## Reveal (animation wrapper)

- Wraps a section or group so it fades in and lifts slightly when it enters the viewport, once.
- Does nothing when the visitor prefers reduced motion.
- See [06-motion-and-animation.md](06-motion-and-animation.md).
