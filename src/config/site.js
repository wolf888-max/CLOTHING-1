/**
 * ============================================================================
 *  LIBAS CLOTHING — GLOBAL SITE CONFIG
 * ============================================================================
 *  This is the ONE file the client edits for brand-wide settings.
 *  Everything below is a placeholder — replace with real values before launch.
 *
 *  Product catalogue lives separately in:  src/data/products.js
 * ============================================================================
 */

export const siteConfig = {
  /* ---- Brand identity -------------------------------------------------- */
  brandName: "LIBAS",
  brandNameFull: "Libas Clothing",
  tagline: "Timeless attire, quietly made.",
  description:
    "Libas Clothing — a luxury label of considered essentials in natural fabrics. Editorial silhouettes, quiet craftsmanship, made to last.",
  // Logo: drop an SVG/PNG at /public/logo.svg and set this path.
  logoSrc: "", // e.g. "/logo.svg" — empty = render the text wordmark

  /* ---- Deployment ---------------------------------------------------- */
  url: "https://libasclothing.com", // used for SEO / canonical / sitemap

  /* ---- WhatsApp integration ---------------------------------------------
   * Store's WhatsApp business number in FULL INTERNATIONAL FORMAT,
   * digits only — no "+", no spaces, no dashes.
   * Example: Pakistan +92 300 1234567  ->  "923001234567"
   * ------------------------------------------------------------------- */
  whatsappNumber: "920000000000", // <-- REPLACE

  /* ---- Contact details ---------------------------------------------- */
  contact: {
    email: "hello@libasclothing.com",
    phone: "+92 000 0000000",
    addressLines: ["Studio 4, Design District", "Gulberg III, Lahore", "Pakistan"],
    // Google Maps embed src — replace with your own place embed URL.
    mapEmbedSrc:
      "https://www.google.com/maps?q=Lahore,Pakistan&output=embed",
    hours: "Mon – Sat, 11:00 – 19:00 (PKT)",
  },

  /* ---- Social links (leave "" to hide the icon) -------------------- */
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "",
    pinterest: "",
    youtube: "",
  },

  /* ---- Announcement bar ------------------------------------------- */
  announcement: "Complimentary shipping on orders over PKR 15,000 — worldwide delivery available.",

  /* ---- Commerce ------------------------------------------------------ */
  currency: "PKR",
  currencySymbol: "Rs",
  freeShippingThreshold: 15000,

  /* ---- Newsletter -------------------------------------------------- */
  newsletter: {
    heading: "Join the atelier list",
    subheading:
      "First access to new collections, private events and studio notes. No noise.",
  },
};

/* Convenience helper for prices, e.g. formatPrice(12500) -> "Rs 12,500" */
export function formatPrice(amount) {
  return `${siteConfig.currencySymbol} ${Number(amount).toLocaleString("en-US")}`;
}

export default siteConfig;
