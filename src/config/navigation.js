/**
 * Site navigation — edit labels / hrefs here.
 * `category` values must match the `category` field in src/data/products.js
 */

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/shop?sort=newest" },
  { label: "Women", href: "/shop?category=women" },
  { label: "Men", href: "/shop?category=men" },
  { label: "Accessories", href: "/shop?category=accessories" },
  { label: "Shop All", href: "/shop" },
  { label: "Our Story", href: "/about" },
];

export const footerNav = [
  {
    title: "Shop",
    links: [
      { label: "New Arrivals", href: "/shop?sort=newest" },
      { label: "Women", href: "/shop?category=women" },
      { label: "Men", href: "/shop?category=men" },
      { label: "Accessories", href: "/shop?category=accessories" },
      { label: "Wishlist", href: "/wishlist" },
    ],
  },
  {
    title: "Client Care",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping-returns" },
      { label: "Size Guide", href: "/faq#size-guide" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Craftsmanship", href: "/about#craft" },
      { label: "Journal", href: "/about#journal" },
    ],
  },
];

/* Category tiles on the home page */
export const categoryHighlights = [
  {
    label: "Women",
    href: "/shop?category=women",
    image: "/images/category-women.jpg",
    blurb: "Fluid tailoring & evening",
  },
  {
    label: "Men",
    href: "/shop?category=men",
    image: "/images/category-men.jpg",
    blurb: "Considered essentials",
  },
  {
    label: "Accessories",
    href: "/shop?category=accessories",
    image: "/images/category-accessories.jpg",
    blurb: "Leather, silk & fine metal",
  },
];
