# Page — Contact (`/contact`)

[← Back to README](../../README.md)

**Goal:** make it effortless to call, find the clinic or request an appointment.
**Primary CTA:** Call the Clinic · **Secondary:** Request an Appointment, Get Directions

## Section order

| # | Section |
|---|---|
| 1 | Hero |
| 2 | Contact details + map |
| 3 | Appointment request form (`#appointment`) |
| 4 | Getting here (optional) |
| 5 | Emergency note |

---

## 1. Hero

- **Eyebrow:** CONTACT
- **H1:** Visit or call Dr. Sinha's Dental Studio
- **Copy:** We're happy to help. Call us, request an appointment, or get directions to the studio.

## 2. Contact details + map

Two columns on desktop, stacked on mobile.

| Item | Content |
|---|---|
| 📞 Phone | +91 78741 14018 (click-to-call), large button |
| 📍 Address | 2nd Floor, Sai Milap Shoppers, 212, Shavion Circle, Gaurav Path Road, Palanpur, Surat, Gujarat 395009 |
| 🧭 Directions | "Get Directions" → Google Maps link (external) |
| 🕗 Hours | Full weekly table **only after confirmation**; until then "Call us for today's timings" |
| ✉️ Email / WhatsApp | Only if supplied |

Map: lazy-loaded embed with a title; the text address is always visible.

## 3. Appointment request form

**Section heading:** Request an appointment

**Visible demo notice (Phase 1):**
> Demo form — no request is sent. To book, please call +91 78741 14018.

| Field | Required | Notes |
|---|---|---|
| Full name | Yes | |
| Phone number | Yes | Validated Indian format |
| Preferred day | No | |
| Preferred time | No | Morning / Afternoon / Evening |
| Reason for visit | No | Short, optional; no detailed medical info |
| Consent checkbox | Yes | "I agree to be contacted about my request" + Privacy Policy link |

**States**

| State | Behavior |
|---|---|
| Validation error | Inline messages + top summary, focus moves to summary |
| Demo submit | Clearly labeled message: "This is a demo. Your details were not sent. Please call us to book." |
| Connected success (later phase) | Real confirmation only after a successful submission |
| Connected error (later phase) | Friendly error + phone fallback |

Hide the floating mobile CTA while the form is on screen.

## 4. Getting here (optional, if supplied)

Landmarks near Shavion Circle / Gaurav Path Road, parking, lift access.

## 5. Emergency note

Small panel: "Dental emergency? Call us directly. If you have difficulty breathing or swallowing, call 112." Link to `/treatments/dental-emergency`.

## SEO

- Title: Contact and Directions · Dr. Sinha's Dental Studio
- Name/address/phone identical to the Google listing. Dentist structured data.
