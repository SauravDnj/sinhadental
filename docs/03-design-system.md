# 03 — Design System

[← Back to README](../README.md)

## 1. Brand personality

| We are | We are not |
|---|---|
| Gentle and reassuring | Cold or clinical |
| Clean and precise | Cluttered or noisy |
| Confident | Boastful or salesy |
| Premium | Luxury-intimidating |
| Welcoming | Childish or cartoonish |
| Human | Corporate hospital template |

**Voice and tone:** warm, plain language, short sentences. Explain, never frighten. Speak to "you". Avoid jargon; if a clinical term is needed, explain it once.

| Do say | Don't say |
|---|---|
| "We'll explain every option before we begin." | "Painless guaranteed treatment!" |
| "Call us and we'll help you find a time." | "Book now!!! Limited slots!" |
| "Your dentist will check if this is right for you." | "This will fix your teeth." |

## 2. Color palette

| Token | Hex | Role | Notes |
|---|---|---|---|
| `primary` | `#087F8C` | Primary buttons, links, small highlights | White text on it passes AA for normal text. Check final logo match. |
| `primary-deep` | `#07545B` | Headings, dark sections, button hover | High contrast on white |
| `mint` | `#EAF7F5` | Soft section backgrounds | Background only; never as text |
| `background` | `#FCFDFD` | Main page background (warm white) | |
| `surface` | `#FFFFFF` | Cards, header, form surfaces | |
| `ink` | `#17313A` | Body text | |
| `muted` | `#5A6D75` | Secondary text, captions | Built value. Darkened from the spec's `#647780`, which failed AA (4.25:1) on mint |
| `border` | `#DCE8E9` | Dividers, card outlines, input borders | |
| `accent-blue` | `#E7F2FF` | Occasional informational panels (e.g., disclaimers) | Background only |

### Functional colors (to define during build)

| Token | Use | Rule |
|---|---|---|
| `success` | Confirmed actions (only for real or clearly demo states) | Always paired with an icon and text |
| `error` | Form errors | Always paired with an icon and a written message |
| `warning` | Emergency notices | Pair with an icon; no flashing |
| `focus-ring` | Keyboard focus | Clearly visible on every background (a 2–3px teal or deep-teal outline with offset) |

### Color rules

- Light theme only. No dark mode in Phase 1.
- Teal is an accent. Most of the page should be warm white, white and mint.
- Never place pale teal or mint text on white.
- Never communicate status through color alone.
- Re-check the palette against the clinic logo once it's supplied.

### Suggested color ratio per page

- ~70% warm white / white
- ~15% mint / soft accent backgrounds
- ~10% ink and deep teal text
- ~5% primary teal (buttons, links, highlights)

## 3. Typography

| Role | Font | Suggested size (mobile → desktop) | Weight | Line height |
|---|---|---|---|---|
| Display / H1 | Manrope or Plus Jakarta Sans | 34px → 56–64px | 700–800 | 1.1 |
| H2 | Manrope or Plus Jakarta Sans | 28px → 40px | 700 | 1.2 |
| H3 | Manrope or Plus Jakarta Sans | 20px → 24px | 600–700 | 1.3 |
| Eyebrow | Inter | 13–14px, uppercase, letter-spaced | 600 | 1.4 |
| Body large | Inter | 18px → 20px | 400 | 1.6 |
| Body | Inter | 16px → 17px | 400 | 1.6–1.7 |
| Small / caption | Inter | 14px | 400–500 | 1.5 |
| Button | Inter | 15–16px | 600 | 1 |

### Rules

- One H1 per page, then H2 for sections and H3 inside sections. Never skip levels.
- Line length for paragraphs: about 60–75 characters (max ~680px).
- Headlines use deliberate line breaks for an editorial feel.
- Do not let headings become huge on mobile.
- Never go below 16px for body text, so mobile browsers don't zoom on form fields.

## 4. Spacing and layout

### Spacing scale (8px rhythm)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 80 · 96 · 128`

| Use | Mobile | Desktop |
|---|---|---|
| Page side padding | 16–20px | 32–48px |
| Section vertical padding | 64px | 96–128px |
| Gap between heading and content | 24px | 32–48px |
| Card padding | 20–24px | 28–32px |
| Grid gap | 16px | 24–32px |

### Grid

- Max content width: 1180–1280px, centered.
- 4 columns on mobile, 8 on tablet, 12 on desktop.
- Use asymmetric splits (5/7 or 7/5) for image + text sections to avoid a template look.

## 5. Shape and elevation

| Element | Radius |
|---|---|
| Cards | 16–24px |
| Images | 20–28px (or one squared corner for an editorial feel) |
| Buttons | 10–14px |
| Inputs | 10–12px |
| Pills / tags | Full |

| Elevation | Use |
|---|---|
| None + border | Default cards |
| Soft shadow (low, wide blur, teal-tinted) | Hovered cards, header after scroll |
| Medium shadow | Mobile menu, dialogs |

Shadows must stay subtle. Most structure comes from whitespace and borders.

## 6. Buttons and links

| Variant | Look | Use |
|---|---|---|
| Primary | Teal fill, white text | "Request an Appointment", main CTA (one per section) |
| Secondary | White or transparent, teal border, teal text | "Call the Clinic", "Get Directions" |
| Ghost / text link | Teal text, underline on hover/focus | "Learn about treatment →", inline links |
| Call button (mobile) | Primary, with phone icon | Floating mobile CTA |

States: default, hover (deep teal), active (slight press), focus (visible ring), disabled (only if truly disabled, with explanation). Minimum height 44px.

## 7. Iconography

- Lucide icons, single stroke style, 1.5–2px stroke.
- Sizes: 16px inline, 20px in buttons, 24–32px in cards.
- Icons support text; they never replace it.
- Suggested icons: phone, map pin, clock, calendar, star (sparingly), shield check, sparkles (cosmetic), smile, stethoscope, message circle, arrow right, chevron down.

## 8. Photography and illustration

### Priority order

1. Authentic portrait of Dr. Sinha and the clinic team.
2. Real reception, treatment room and sterilized equipment.
3. Natural patient-care moments (written consent).
4. High-quality dental close-ups or 3D tooth illustrations as support.
5. Subtle line illustrations: tooth, smile curve, instruments.

### Style

- Bright, natural light, soft shadows, clean surfaces.
- Warm white and teal tones that match the palette.
- Calm faces and relaxed moments.

### Never use

- Frightening or graphic procedure imagery.
- Exaggerated whitening or "perfect smile" results.
- Unverified before/after photos.
- AI-generated or fake likenesses of Dr. Sinha or patients.
- Stock photos that suggest a stranger is the clinic's doctor or patient.

If real photos aren't available yet, use tasteful neutral dental imagery and treat it as illustrative (for example, objects, textures and abstract tooth visuals rather than faces).

## 9. Signature visual motifs

Small, recurring elements make the site feel custom:

- **Smile curve:** a thin teal arc used under headings or as a section divider.
- **Tooth outline:** a minimal line-drawn tooth that draws itself in on the hero and 404.
- **Soft mint blobs:** large, very soft background shapes behind images (low contrast, static or very slow drift).
- **Numbered steps:** large, light numerals (01, 02, 03) for process sections.

## 10. Avoid list

- Heavy glassmorphism.
- Neon or rainbow gradients.
- Noisy or patterned backgrounds.
- Random floating decorations.
- Dashboard-style stat cards.
- Walls of five-star icons.
- Auto-playing videos with sound.
