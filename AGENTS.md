# AGENTS.md

## Project

Marketing and showcase site for **Nazaakat**, a handmade art and gifting studio (Instagram `@nazaakatt_`). The site has no e-commerce: orders happen through Instagram DMs (`ig.me/m/nazaakatt_`) and a Netlify Forms commission enquiry.

## Stack

TanStack Start (React 19, TanStack Router), Vite 7, Tailwind CSS 4, deployed on Netlify. pnpm is the package manager.

## Structure

```
public/
  __forms.html        # Hidden static form so Netlify registers the "commission" form at build time
  favicon.svg
  img/                # AI-generated product imagery (served via /.netlify/images, never directly)
src/
  data/crafts.ts      # Single source of truth: crafts, Instagram links, cdn() image helper
  components/
    Ornaments.tsx     # Wordmark (gold Devanagari + lotus/brush), Mandala, FloralDivider, InstagramIcon
    SiteHeader.tsx    # Fixed header, transparent until scrolled
    SiteFooter.tsx
    CommissionForm.tsx# AJAX Netlify Forms submission to /__forms.html
  routes/
    __root.tsx        # Shell, meta, Google Fonts, header and footer
    index.tsx         # Homepage sections
    craft/$slug.tsx   # Craft detail page
  styles.css          # @theme brand tokens and component classes (.arch, .eyebrow, .btn-gold, .btn-outline, .field, .gold-foil)
```

## Conventions and decisions

- **Brand palette** (Tailwind tokens): `ivory`, `cream`, `blush`, `blush-deep`, `rose`, `gold`, `gold-light`, `ink`, `muted`. Fonts: `font-display` (Cormorant Garamond), `font-sans` (Jost), `font-hindi` (Tiro Devanagari Hindi). Keep new UI within this palette; avoid saturated colours.
- The client's real logo file has not been supplied yet. The `Wordmark` component recreates it ("नज़ाकत" in gold with a small lotus and paint brush beneath). Swap in the real logo there when it arrives.
- Images always go through `cdn(src, width)` from `src/data/crafts.ts`, which uses the Netlify Image CDN to output WebP.
- The commission form must POST to `/__forms.html`, not `/`, because the SSR function would intercept `/`. Every field in `CommissionForm.tsx` must also exist in `public/__forms.html`.
- Section headings pair English with a short Hindi word in `font-hindi text-gold`. This is the brand's Indian touch, so keep it subtle.
- Product images are AI-generated placeholders styled to the brand. Replace them with the studio's real photography when it is available.
