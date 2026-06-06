# gmmwix

Static Astro port of [georgemadridmagic.com](https://www.georgemadridmagic.com/),
migrated off paid Wix hosting. Single-page marketing site for George Madrid
Magic — Boston-based comedy magician.

Target deploy: GitHub Pages.

## Commands

```sh
pnpm install
pnpm dev      # local at http://localhost:4321
pnpm build    # static output to ./dist/
pnpm preview  # preview the production build
```

## Project layout

- `src/pages/index.astro` — composes the single page from section components
- `src/components/` — Header, Hero, SectionDivider, Services, Testimonials,
  ContactForm, About, Footer
- `src/data/content.ts` — all visible copy in one file; edit here for content changes
- `src/assets/images/` — site imagery (processed by Astro at build time)
- `src/styles/global.css` — Tailwind v4 entry + brand theme tokens
