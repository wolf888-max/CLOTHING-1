# LIBAS — Libas Clothing

A luxury / premium clothing brand e-commerce website built with **Next.js 14 (App Router)**,
**Tailwind CSS** and **Framer Motion**. Orders are placed through **WhatsApp** — there is no
online payment step to maintain.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Requires Node 18.17+ (Node 20+ recommended).

---

## What the client can edit (no coding)

| To change… | Edit this file |
|---|---|
| Brand name, tagline, logo, colours-of-copy | `src/config/site.js` |
| **WhatsApp business number** | `src/config/site.js` → `whatsappNumber` (digits only, full international format, e.g. `923001234567`) |
| Contact details, address, Google Map, social links | `src/config/site.js` |
| Announcement bar text | `src/config/site.js` → `announcement` |
| Free-shipping threshold, currency | `src/config/site.js` |
| **Products, prices, images, sizes, colours** | `src/data/products.js` |
| Navigation menus / footer links | `src/config/navigation.js` |
| FAQ, size chart, shipping & returns policy, About page copy | `src/data/content.js` |

### Adding a product

Open `src/data/products.js`, copy an existing `{ … }` block, and change the values.
Every product needs a **unique `id`** and a **unique `slug`** (lowercase, dashes — this becomes
the URL `/product/<slug>`). Field-by-field notes are at the top of that file.

### Replacing placeholder images

Images currently point at Unsplash URLs for demonstration. For production:

1. Put final images in `public/products/` (e.g. `public/products/silk-dress-1.jpg`).
2. In `products.js`, change the URL to the local path: `"/products/silk-dress-1.jpg"`.
3. Remove the Unsplash/Picsum entries from `next.config.mjs` → `images.remotePatterns` once no
   remote images remain.

Also replace: `src/app/icon.svg` (favicon), and add `public/og-image.jpg` (1200×630) for social
sharing previews. For a video hero, drop `public/hero.mp4` and follow the note in
`src/components/home/Hero.jsx`.

---

## WhatsApp integration

All links are generated as `https://wa.me/<number>?text=<encoded message>` in
`src/lib/whatsapp.js`:

- **Product page** → "Order via WhatsApp" — pre-fills item, size, colour, quantity, price and a
  link back to the product.
- **Cart page** → "Checkout via WhatsApp" — pre-fills the entire cart with per-line totals and a
  subtotal.
- **Floating button + contact page** → general enquiry.

The store number lives in exactly one place: `siteConfig.whatsappNumber`.

---

## Project structure

```
src/
├── app/                     # Routes (App Router)
│   ├── layout.jsx           # Shell: fonts, providers, navbar, footer
│   ├── page.jsx             # Home
│   ├── shop/                # Collection grid + filters + sort + load-more
│   ├── product/[slug]/      # Product detail (static-generated per product)
│   ├── cart/                # Cart + WhatsApp checkout
│   ├── about/               # Our Story
│   ├── contact/             # Contact form + map
│   ├── faq/                 # FAQ + Size Guide (#size-guide)
│   ├── shipping-returns/    # Policy page
│   ├── search/              # Search results
│   ├── wishlist/            # Saved items
│   ├── sitemap.js / robots.js
│   └── icon.svg / not-found.jsx
├── components/
│   ├── layout/              # Navbar, Footer, AnnouncementBar, SearchOverlay, WhatsAppFloat
│   ├── home/                # Hero, Marquee, ProductCarousel, CategoryHighlights, StoryTeaser, Newsletter
│   ├── shop/                # ShopView, FilterControls
│   ├── product/             # Gallery, PurchasePanel, ProductCard, RelatedProducts, WishlistButton
│   ├── cart/ · search/ · wishlist/ · contact/
│   └── ui/                  # Modal, Accordion, QuantityStepper, StarRating, SizeGuide, Reveal, icons
├── context/                 # CartContext, WishlistContext (localStorage-backed)
├── config/                  # site.js, navigation.js
├── data/                    # products.js, content.js
└── lib/                     # whatsapp.js, seo.js, utils.js
```

Cart and wishlist persist in the browser via `localStorage` (`libas.cart`, `libas.wishlist`).

---

## Design system

- **Type:** Playfair Display (serif headings) + Jost (sans body), loaded via `next/font`.
- **Palette:** ink `#111110`, ivory `#f6f2ea`, gold `#b8975a` — defined in `tailwind.config.js`
  and `src/app/globals.css`.
- **Motion:** subtle fade/slide on scroll (`Reveal`), respects `prefers-reduced-motion`.
- **Accessibility:** skip link, visible focus rings, 44px touch targets, labelled controls,
  `aria-live` form feedback.

---

## Deploying

Works out of the box on **Vercel** (recommended) or any Node host.
Set `siteConfig.url` to the live domain before building so SEO tags, the sitemap and WhatsApp
product links use the correct absolute URLs.

---

## Placeholders to replace before launch

- [ ] `whatsappNumber` in `src/config/site.js`
- [ ] Brand name / logo (`siteConfig.brandName`, `logoSrc`, `src/app/icon.svg`)
- [ ] Real product data + images in `src/data/products.js`
- [ ] Contact address, phone, email, Google Map embed, social links
- [ ] `public/og-image.jpg`
- [ ] Newsletter + contact form: connect to your email provider (see `TODO` comments)
- [ ] About page copy & founder note in `src/data/content.js`
