# 02 — Clinic Information

[← Back to README](../README.md)

> Single source of truth for clinic facts. Every page, the footer and the structured data must use exactly these values. When a value changes, update it here first.

## Verification legend

| Mark | Meaning |
|---|---|
| ✅ Supplied | Given by the clinic owner; can be used |
| ⚠️ Verify | Supplied, but must be re-checked right before launch |
| ❓ Missing | Not yet supplied; do not show on the website |
| 🔒 Permission | Show only if the clinic explicitly agrees |

## Core details

| Field | Value | Status |
|---|---|---|
| Clinic name | Dr. Sinha's Dental Studio | ✅ Supplied |
| Category | Dental clinic | ✅ Supplied |
| Address line 1 | 2nd Floor, Sai Milap Shoppers, 212 | ✅ Supplied |
| Address line 2 | Shavion Circle, Gaurav Path Road | ✅ Supplied |
| Area / City | Palanpur, Surat | ✅ Supplied |
| State / PIN | Gujarat 395009 | ✅ Supplied |
| Country | India | ✅ Supplied |
| Phone (display) | +91 78741 14018 | ✅ Supplied |
| Phone (link) | `tel:+917874114018` | ✅ Supplied |
| Google Maps link | https://maps.app.goo.gl/yCNRjtdtpyK84Nri6?g_st=aw | ✅ Supplied |
| Website | https://sinhadental.in/ | ✅ Supplied |
| Email | — | ❓ Missing |
| WhatsApp number | — | ❓ Missing (confirm if same as phone) |
| Social media links | — | ❓ Missing |

## Opening hours

| Day | Hours | Status |
|---|---|---|
| Monday | ? – 8:00 PM | ❓ Opening time missing |
| Tuesday | ? – 8:00 PM | ❓ |
| Wednesday | ? – 8:00 PM | ❓ |
| Thursday | ? – 8:00 PM | ❓ |
| Friday | ? – 8:00 PM | ❓ |
| Saturday | ? | ❓ |
| Sunday | ? | ❓ |
| Lunch break | ? | ❓ |
| Public holidays | ? | ❓ |

Only "closes at 8:00 PM" was supplied. **Do not display a weekly schedule until the full hours are confirmed.** Until then, show "Call us for today's timings" next to the phone number.

## Google rating

| Field | Value | Status |
|---|---|---|
| Rating | 5.0 / 5 | ⚠️ Verify |
| Review count | 70 reviews | ⚠️ Verify |
| Last verified on | — | Fill in at launch |

Ratings and counts change. Check the live Google listing just before launch and update this table. Never show rating markup in structured data.

## Doctor details

| Field | Value | Status |
|---|---|---|
| Full name | Dr. Sinha (full name needed) | ❓ Missing |
| Degrees / qualifications | — | ❓ Missing |
| Registration number | — | ❓ Missing |
| Years of experience | — | ❓ Missing (never guess) |
| Specializations / interests | — | ❓ Missing |
| Approved biography | — | ❓ Missing |
| Approved portrait | — | ❓ Missing |
| Other team members | — | ❓ Missing |

## Inclusion details

| Detail | Status |
|---|---|
| LGBTQ+ friendly | 🔒 Permission needed before displaying |
| Women-owned | 🔒 Permission needed before displaying |
| Wheelchair access / lift in building | ❓ Missing (2nd floor, so this matters) |
| Parking | ❓ Missing |
| Languages spoken (e.g., Gujarati, Hindi, English) | ❓ Missing |

## Services (proposed, must be confirmed)

| Service | Route | Status |
|---|---|---|
| General dentistry | `/treatments/general-dentistry` | ❓ Confirm |
| Teeth cleaning | `/treatments/teeth-cleaning` | ❓ Confirm |
| Root canal treatment | `/treatments/root-canal` | ❓ Confirm |
| Braces / orthodontics | `/treatments/braces` | ❓ Confirm (mentioned in reviews) |
| Cosmetic dentistry | `/treatments/cosmetic-dentistry` | ❓ Confirm |
| Teeth whitening | `/treatments/teeth-whitening` | ❓ Confirm |
| Dental emergency | `/treatments/dental-emergency` | ❓ Confirm (help in emergency mentioned in reviews; availability hours unknown) |

Any service not confirmed must be removed or labeled **"Ask the clinic."**

## Review themes supplied

Patients mention:

- A calm and polite doctor.
- Clear explanations.
- Empathetic care.
- Help during a dental emergency.
- Braces treatment.
- Thorough treatment.
- Good value.

These are **themes for tone and messaging** (for example, a heading like "Care that's explained clearly"). They are not quotes. Real quotes may only be used from genuine public reviews with appropriate attribution.

## Policies (unknown, must be confirmed before mentioning)

| Topic | Status |
|---|---|
| Payment methods (cash, UPI, card) | ❓ |
| Insurance accepted | ❓ |
| Children's dentistry | ❓ |
| Emergency availability / after hours | ❓ |
| Walk-ins accepted | ❓ |
| Cancellation policy | ❓ |
| Who receives appointment enquiries | ❓ |
