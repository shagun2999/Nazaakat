# Nazaakat — Handcrafted Art & Gifting

The website for **Nazaakat** (नज़ाकत), a small handmade art studio (Instagram: [@nazaakatt_](https://www.instagram.com/nazaakatt_/)). It showcases the studio's seven crafts (resin art, mandala art, lippan art, texture painting, canvas paintings, crochet and gift hampers) and turns visitors into custom orders through Instagram DMs and a commission enquiry form.

The look is soft and elegant: ivory, blush and antique gold, a gold Devanagari wordmark with a small lotus-and-brush mark, arched *jharokha* image frames, and fine-line mandala and lotus details.

## Pages

- `/`: hero, crafts marquee, collections grid, story, occasions, process and the commission section (Instagram DM plus enquiry form)
- `/craft/:slug`: a page for each craft listing the pieces that can be made, ideal occasions and an enquiry form pre-filled with that craft

## Technology

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing) on Netlify
- Tailwind CSS 4, with brand tokens in `src/styles.css`
- Netlify Forms for commission enquiries (submissions appear under **Forms** in the Netlify dashboard)
- Netlify Image CDN for resized, WebP-optimised product imagery

## Run locally

```bash
pnpm install
netlify dev
```

Netlify Forms only receives submissions on a deployed site, not in local dev.

## Updating content

All craft names, descriptions, piece lists and images are in `src/data/crafts.ts`. To use real product photos, add them to `public/img/` and update the `image` paths.
