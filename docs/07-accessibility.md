# 07 — Accessibility

[← Back to README](../README.md)

**Target:** WCAG 2.2 Level AA on every page.

## Structure

- Semantic landmarks: header, nav, main, footer; aside where relevant.
- A **skip-to-content** link as the first focusable item, visible on focus.
- One H1 per page; headings in logical order without skipped levels.
- Lists are real lists; tables are only for tabular data (e.g., hours).
- Page language set to English (update if Gujarati/Hindi versions are added).
- Each page has a unique, descriptive title.

## Keyboard

- Every link, button, menu, accordion, carousel and form control works with the keyboard alone.
- Visible focus ring on every interactive element, on every background.
- Logical tab order that follows visual order.
- Mobile menu and dialogs: focus moves inside on open, is trapped, Escape closes, focus returns to the trigger.
- No keyboard traps elsewhere.

## Color and contrast

- Normal text: at least 4.5:1. Large text (24px+, or 19px bold): at least 3:1.
- Icons and control borders: at least 3:1 against their background.
- Check muted text (`#647780`) on mint (`#EAF7F5`) carefully, and use it only at larger sizes if it fails.
- Never use color alone for status, errors, active links or required fields.

## Images and media

- Meaningful images get descriptive alt text (e.g., "Dr. Sinha explaining an X-ray to a patient").
- Decorative images and illustrations get empty alt text.
- Map embed has a title and a text-address alternative.
- No auto-playing video with sound.

## Forms

- Every field has a visible label, not just a placeholder.
- Required fields marked in text ("required"), not only with an asterisk.
- Errors: written message next to the field, linked to it, plus an error summary on submit; focus moves to the summary.
- Helpful input types (tel for phone) and autocomplete hints (name, tel).
- The demo/connected status of the form is announced in text.

## Interaction

- No hover-only content; everything shown on hover is also available on focus and tap.
- Touch targets about 44×44px, with enough spacing between them.
- Carousels: previous/next buttons, keyboard support, pause control if it moves, no unexpected auto-advance.
- Accordion buttons expose expanded/collapsed state.
- External links indicate they open Google Maps or another site.

## Motion

- Respect the reduced-motion setting (see [06-motion-and-animation.md](06-motion-and-animation.md)).
- Nothing flashes more than 3 times per second.
- Important content never relies on animation to be understood.

## Content

- Plain language; explain clinical terms.
- Link text makes sense out of context ("Learn about root canal treatment", not "Click here").
- Phone number is a link and also readable as text.

## Testing checklist

- [ ] Keyboard-only walkthrough of every page.
- [ ] Screen reader spot checks (NVDA on Windows, VoiceOver on iPhone/Mac).
- [ ] Automated scan (axe or Lighthouse accessibility) on every route.
- [ ] Contrast check of every text/background pair in the palette.
- [ ] 200% browser zoom without lost content or horizontal scroll.
- [ ] Reduced-motion setting turned on and site reviewed.
