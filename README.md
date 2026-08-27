# HUDUDI Interiors

Rebrand of [hududi.com](https://www.hududi.com) — single-page scrolling site built with [Astro](https://astro.build) + Tailwind CSS. Static, no backend.

## Structure

One-page site (`src/pages/index.astro`) with anchor-linked sections: Home, Services, Portfolio, About, Contact.

- `src/components/` — Header, Footer
- `src/layouts/Layout.astro` — page shell, fonts, meta
- `public/assets/logo/` — drop the company logo file(s) here
- `public/favicon.svg` — placeholder favicon, replace once logo is in

## Brand

- Orange `#F27A35`, black `#0A0A0A`, white `#FFFFFF` — single fixed theme, no dark/light toggle
- Display font: Space Grotesk · Body font: Inter

## Dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Contact form

No backend — the form currently opens the visitor's email client via `mailto:` prefilled with their message. Swap in a form service (e.g. Formspree, Web3Forms) if a real submit endpoint is wanted later.
