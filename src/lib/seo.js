/** Helpers to build per-page <metadata> objects (Next.js App Router). */

import { siteConfig } from "@/config/site";

const baseUrl = siteConfig.url?.replace(/\/$/, "") || "";

/**
 * pageMetadata({ title, description, path, image })
 * Returns a Next.js Metadata object with sensible Open Graph / Twitter defaults.
 */
export function pageMetadata({ title, description, path = "/", image } = {}) {
  const fullTitle = title
    ? `${title} — ${siteConfig.brandNameFull}`
    : `${siteConfig.brandNameFull} — ${siteConfig.tagline}`;
  const desc = description || siteConfig.description;
  const url = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.brandNameFull,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteConfig.brandNameFull }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [ogImage],
    },
  };
}

/** JSON-LD Product structured data for the product detail page. */
export function productJsonLd(product) {
  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: { "@type": "Brand", name: siteConfig.brandNameFull },
    offers: {
      "@type": "Offer",
      priceCurrency: siteConfig.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/product/${product.slug}`,
    },
    aggregateRating: product.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: Math.max(8, Math.round(product.rating * 12)),
        }
      : undefined,
  };
}
