# 04 — Sitemap and Routes

[← Back to README](../README.md)

## Site tree

```
sinhadental.in
├── /                                   Home
├── /about                              About the clinic and Dr. Sinha
├── /treatments                         All treatments overview
│   ├── /general-dentistry              Check-ups, consultation, fillings
│   ├── /teeth-cleaning                 Professional cleaning
│   ├── /root-canal                     Root canal treatment
│   ├── /braces                         Braces and orthodontics
│   ├── /cosmetic-dentistry             Cosmetic dentistry
│   ├── /teeth-whitening                Teeth whitening
│   └── /dental-emergency               Dental emergency guidance
├── /patient-reviews                    Review highlights
├── /patient-guide                      First visit, FAQs, aftercare
├── /contact                            Contact, directions, appointment request
├── /privacy-policy                     Privacy policy (legal review)
├── /terms                              Website terms (legal review)
└── /404                                Not found
```

## Route table

| # | Route | Page | H1 (suggested) | Primary CTA | Spec |
|---|---|---|---|---|---|
| 1 | `/` | Home | A healthier smile starts with feeling cared for. | Request an Appointment | [home.md](pages/home.md) |
| 2 | `/about` | About | Dental care built on calm, clear conversations. | Request an Appointment | [about.md](pages/about.md) |
| 3 | `/treatments` | Treatments overview | Dental treatments at Dr. Sinha's Dental Studio | Request an Appointment | [treatments-overview.md](pages/treatments-overview.md) |
| 4 | `/treatments/general-dentistry` | General dentistry | General Dentistry in Palanpur, Surat | Request an Appointment | [treatment-detail.md](pages/treatment-detail.md) |
| 5 | `/treatments/teeth-cleaning` | Teeth cleaning | Professional Teeth Cleaning | Request an Appointment | ↑ |
| 6 | `/treatments/root-canal` | Root canal | Root Canal Treatment | Call the Clinic | ↑ |
| 7 | `/treatments/braces` | Braces | Braces and Orthodontic Consultation | Request an Appointment | ↑ |
| 8 | `/treatments/cosmetic-dentistry` | Cosmetic | Cosmetic Dentistry | Request an Appointment | ↑ |
| 9 | `/treatments/teeth-whitening` | Whitening | Teeth Whitening Consultation | Request an Appointment | ↑ |
| 10 | `/treatments/dental-emergency` | Emergency | Dental Emergency? Call Us First. | **Call the Clinic** | ↑ |
| 11 | `/patient-reviews` | Reviews | What patients say about their visits | Read all reviews on Google | [patient-reviews.md](pages/patient-reviews.md) |
| 12 | `/patient-guide` | Patient guide | Your visit, made simple | Request an Appointment | [patient-guide.md](pages/patient-guide.md) |
| 13 | `/contact` | Contact | Visit or call Dr. Sinha's Dental Studio | Call the Clinic | [contact.md](pages/contact.md) |
| 14 | `/privacy-policy` | Privacy | Privacy Policy | — | [legal.md](pages/legal.md) |
| 15 | `/terms` | Terms | Website Terms of Use | — | [legal.md](pages/legal.md) |
| 16 | `/404` | Not found | This page seems to have wandered. | Back to Home | [not-found.md](pages/not-found.md) |

## Primary navigation (header)

| Order | Label | Route |
|---|---|---|
| 1 | Home | `/` |
| 2 | About | `/about` |
| 3 | Treatments | `/treatments` (optional dropdown listing confirmed treatments) |
| 4 | Patient Guide | `/patient-guide` |
| 5 | Reviews | `/patient-reviews` |
| 6 | Contact | `/contact` |
| CTA | **Book an Appointment** | `/contact#appointment` |

## Footer navigation

| Column | Links |
|---|---|
| Clinic | About · Patient Guide · Reviews · Contact |
| Treatments | All confirmed treatments + "View all treatments" |
| Visit us | Address · Phone · Hours (once confirmed) · Get Directions |
| Legal | Privacy Policy · Terms |

## Breadcrumbs

Shown on all treatment detail pages and deeper routes:

`Home › Treatments › Root Canal Treatment`

## Internal linking plan

| From | Links to |
|---|---|
| Home | About, Treatments, each featured treatment, Reviews, Contact, Patient Guide |
| About | Treatments, Reviews, Contact |
| Treatments overview | Every treatment detail page, Contact |
| Each treatment page | 2–3 related treatments, Patient Guide, Contact, Emergency (where relevant) |
| Patient guide | Treatments, Emergency, Contact |
| Reviews | Google listing (external), Contact |
| Contact | Google Maps (external), Patient Guide |
| 404 | Home, Treatments, Contact |

## Related-treatment suggestions

| Treatment | Related |
|---|---|
| General dentistry | Teeth cleaning, Root canal, Dental emergency |
| Teeth cleaning | General dentistry, Teeth whitening |
| Root canal | General dentistry, Dental emergency |
| Braces | Cosmetic dentistry, General dentistry |
| Cosmetic dentistry | Teeth whitening, Braces |
| Teeth whitening | Cosmetic dentistry, Teeth cleaning |
| Dental emergency | Root canal, General dentistry |

## URL rules

- Lowercase, hyphenated, human readable.
- No trailing file extensions.
- One canonical URL per page.
- If a treatment is not confirmed, remove its route and its links, or keep the page with a clear "Ask the clinic" label.
