# fixerland

Website for **Fixerland Sales & Service** — a mobile phone repair shop at New Bus Stand Building, Kasaragod, Kerala.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Pages

- `/` — Home (hero slider, why Fixerland, story, services, reels, FAQ, store, Google reviews)
- `/about` — About, values, shop gallery, mission & vision
- `/services` — Services, common repairs, repair process, FAQ
- `/contact` — Booking form (sends a pre-filled WhatsApp message), store info and map

## Editing content

Most content lives in `lib/constants.ts`:

- `BUSINESS_INFO` — name, phone, WhatsApp, address, Google Maps links, rating
- `IMAGES`, `SHOP_GALLERY` — photos (real shop photos are in `public/images`)
- `SERVICES_LIST`, `REPAIR_TYPES`, `FAQS`, `HIGHLIGHTS`, `STATS`
- `TESTIMONIALS` — real Google reviews only
- `REELS` — videos in `public/reels` (posters in `public/reels/posters`)

Brand colours are theme tokens in `app/globals.css` (`--color-brand`, `--color-navy`, …).

## Environment

Set `NEXT_PUBLIC_SITE_URL` to the live domain (defaults to `https://fixerland.com`) — used for canonical URLs, the sitemap and structured data.
