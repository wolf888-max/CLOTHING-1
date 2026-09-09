/**
 * ============================================================================
 *  LIBAS CLOTHING — PRODUCT CATALOGUE
 * ============================================================================
 *  The client edits products here. No code knowledge required — copy an
 *  existing block and change the values.
 *
 *  FIELD REFERENCE
 *  ---------------
 *  id            unique number
 *  slug          URL-safe id, used in /product/<slug>  (must be unique, lowercase, dashes)
 *  name          display name
 *  category      "women" | "men" | "accessories"   (must match navigation.js)
 *  subcategory   free text, shown as a small label (e.g. "Outerwear")
 *  price         number, in PKR (no symbol, no commas)
 *  compareAtPrice  optional number — original price, shows a strikethrough
 *  isNew         true = badge + appears in "New Arrivals"
 *  isFeatured    true = appears in the home "Featured Collection" carousel
 *  createdAt     "YYYY-MM-DD" — used for the "Newest first" sort
 *  rating        0–5 (decimal ok), for display only
 *  description   paragraph shown on the product page
 *  material      fabric / composition line
 *  care          care instructions line
 *  sizes         array of strings
 *  colors        array of { name, hex }
 *  images        array of image URLs (first = main). Replace with /public paths later.
 * ============================================================================
 */

export const products = [
  {
    id: 1,
    slug: "aurelia-silk-slip-dress",
    name: "Aurelia Silk Slip Dress",
    category: "women",
    subcategory: "Evening",
    price: 24500,
    compareAtPrice: null,
    isNew: true,
    isFeatured: true,
    createdAt: "2026-08-20",
    rating: 4.9,
    description:
      "A bias-cut slip in weighty sandwashed silk that skims the body and moves like water. Adjustable straps, French seams throughout, and a hidden side slit for ease. Cut to be worn now with bare shoulders, later with knitwear beneath.",
    material: "100% mulberry silk, 19 momme, sandwashed finish",
    care: "Dry clean only. Store on a padded hanger.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Champagne", hex: "#e6d6b8" },
      { name: "Ink Black", hex: "#14130f" },
      { name: "Bordeaux", hex: "#5a2230" },
    ],
    images: [
      "/images/products/aurelia-silk-slip-dress-1.jpg",
      "/images/products/aurelia-silk-slip-dress-2.jpg",
      "/images/products/aurelia-silk-slip-dress-3.jpg",
    ],
  },
  {
    id: 2,
    slug: "atelier-wool-overcoat",
    name: "Atelier Double-Faced Wool Overcoat",
    category: "women",
    subcategory: "Outerwear",
    price: 46000,
    compareAtPrice: 52000,
    isNew: true,
    isFeatured: true,
    createdAt: "2026-08-14",
    rating: 4.8,
    description:
      "An unlined, double-faced wool coat finished entirely by hand — no fusing, no bulk. A relaxed drop shoulder and a single concealed closure keep the line clean from collar to hem. The kind of coat that quietly outlasts a decade of winters.",
    material: "88% virgin wool, 12% cashmere — double-faced, hand-finished seams",
    care: "Dry clean sparingly. Brush after wear. Rest between wears.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Camel", hex: "#b48a5c" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    images: [
      "/images/products/atelier-wool-overcoat-1.jpg",
      "/images/products/atelier-wool-overcoat-2.jpg",
      "/images/products/atelier-wool-overcoat-3.jpg",
    ],
  },
  {
    id: 3,
    slug: "column-tailored-trouser",
    name: "Column High-Waist Tailored Trouser",
    category: "women",
    subcategory: "Tailoring",
    price: 18500,
    compareAtPrice: null,
    isNew: false,
    isFeatured: true,
    createdAt: "2026-07-30",
    rating: 4.7,
    description:
      "A high-rise trouser with a fluid, full-length column leg and a pressed centre crease. Grosgrain-bound waistband, side adjusters, and a clean front with no visible fastening. Designed to elongate and to be worn with heels or flats alike.",
    material: "Tencel–wool blend suiting, 240g",
    care: "Dry clean or gentle cold wash. Cool iron on the reverse.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ivory", hex: "#efe9dd" },
      { name: "Black", hex: "#14130f" },
      { name: "Stone", hex: "#a99e8c" },
    ],
    images: [
      "/images/products/column-tailored-trouser-1.jpg",
      "/images/products/column-tailored-trouser-2.jpg",
    ],
  },
  {
    id: 4,
    slug: "isla-cashmere-knit",
    name: "Isla Boat-Neck Cashmere Knit",
    category: "women",
    subcategory: "Knitwear",
    price: 21000,
    compareAtPrice: null,
    isNew: true,
    isFeatured: false,
    createdAt: "2026-08-22",
    rating: 4.9,
    description:
      "A softly structured boat-neck sweater knitted from grade-A Mongolian cashmere in a fine 12-gauge. Slightly cropped, with a wide neckline that sits just off the shoulder. Warm without weight.",
    material: "100% grade-A Mongolian cashmere, 12-gauge",
    care: "Hand wash cold with cashmere shampoo. Dry flat. De-pill gently.",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Oat", hex: "#d8ccb4" },
      { name: "Fog Grey", hex: "#9a9a94" },
      { name: "Black", hex: "#14130f" },
    ],
    images: [
      "/images/products/isla-cashmere-knit-1.jpg",
      "/images/products/isla-cashmere-knit-2.jpg",
      "/images/products/isla-cashmere-knit-3.jpg",
    ],
  },
  {
    id: 5,
    slug: "linear-poplin-shirt",
    name: "Linear Cotton Poplin Shirt",
    category: "women",
    subcategory: "Shirting",
    price: 12500,
    compareAtPrice: null,
    isNew: false,
    isFeatured: false,
    createdAt: "2026-06-18",
    rating: 4.6,
    description:
      "A relaxed shirt in crisp compact-weave poplin with a narrow placket and a slightly extended cuff. Mother-of-pearl buttons, a clean back yoke, and a hem that sits well tucked or loose.",
    material: "100% long-staple Egyptian cotton poplin",
    care: "Machine wash cold. Iron while damp for a sharp finish.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#f7f5f0" },
      { name: "Pale Blue", hex: "#c7d3da" },
      { name: "Sand", hex: "#cdbfa5" },
    ],
    images: [
      "/images/products/linear-poplin-shirt-1.jpg",
      "/images/products/linear-poplin-shirt-2.jpg",
      "/images/products/linear-poplin-shirt-3.jpg",
    ],
  },
  {
    id: 6,
    slug: "meridian-tailored-blazer-mens",
    name: "Meridian Unstructured Blazer",
    category: "men",
    subcategory: "Tailoring",
    price: 38000,
    compareAtPrice: null,
    isNew: true,
    isFeatured: true,
    createdAt: "2026-08-16",
    rating: 4.8,
    description:
      "A soft-shouldered, half-lined blazer with patch pockets and a natural lapel roll. Cut with a touch of ease through the chest so it layers cleanly over knitwear. Horn buttons, working cuffs.",
    material: "Wool–linen–silk hopsack, 260g",
    care: "Dry clean only. Hang on a shaped hanger.",
    sizes: ["46", "48", "50", "52", "54"],
    colors: [
      { name: "Greige", hex: "#a89f8d" },
      { name: "Navy", hex: "#232a38" },
      { name: "Black", hex: "#14130f" },
    ],
    images: [
      "/images/products/meridian-tailored-blazer-mens-1.jpg",
      "/images/products/meridian-tailored-blazer-mens-2.jpg",
      "/images/products/meridian-tailored-blazer-mens-3.jpg",
    ],
  },
  {
    id: 7,
    slug: "essential-pima-tee-mens",
    name: "Essential Heavyweight Pima Tee",
    category: "men",
    subcategory: "Jersey",
    price: 6500,
    compareAtPrice: null,
    isNew: false,
    isFeatured: false,
    createdAt: "2026-05-10",
    rating: 4.7,
    description:
      "A heavyweight crew in 240g Peruvian pima jersey with a clean-finished collar and a straight, boxy body. Holds its shape wash after wash — the base layer the rest of the wardrobe is built on.",
    material: "100% Peruvian pima cotton, 240g",
    care: "Machine wash cold, inside out. Tumble dry low.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Ivory", hex: "#efe9dd" },
      { name: "Black", hex: "#14130f" },
      { name: "Olive", hex: "#5b5c43" },
      { name: "Slate", hex: "#4a4f57" },
    ],
    images: [
      "/images/products/essential-pima-tee-mens-1.jpg",
      "/images/products/essential-pima-tee-mens-2.jpg",
    ],
  },
  {
    id: 8,
    slug: "atlas-merino-rollneck-mens",
    name: "Atlas Merino Rollneck",
    category: "men",
    subcategory: "Knitwear",
    price: 17500,
    compareAtPrice: 20000,
    isNew: false,
    isFeatured: true,
    createdAt: "2026-07-04",
    rating: 4.8,
    description:
      "A mid-weight rollneck in extra-fine Italian merino with a fully-fashioned shoulder and a fold-over collar that holds its height. Trim through the body without restricting. Wear alone or under tailoring.",
    material: "100% extra-fine merino wool (18.5 micron)",
    care: "Hand wash cold or wool cycle. Dry flat, reshape while damp.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#b48a5c" },
      { name: "Charcoal", hex: "#3a3a3a" },
      { name: "Black", hex: "#14130f" },
    ],
    images: [
      "/images/products/atlas-merino-rollneck-mens-1.jpg",
      "/images/products/atlas-merino-rollneck-mens-2.jpg",
      "/images/products/atlas-merino-rollneck-mens-3.jpg",
    ],
  },
  {
    id: 9,
    slug: "pleated-wide-trouser-mens",
    name: "Single-Pleat Wide Trouser",
    category: "men",
    subcategory: "Tailoring",
    price: 16500,
    compareAtPrice: null,
    isNew: true,
    isFeatured: false,
    createdAt: "2026-08-19",
    rating: 4.6,
    description:
      "A single forward pleat, a high-set waistband, and a wide straight leg with a half-break. Extended tab closure and slant pockets. Tailored from a dry, matte wool that presses sharp and travels well.",
    material: "100% dry-finish tropical wool, 280g",
    care: "Dry clean. Steam to refresh between wears.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: [
      { name: "Stone", hex: "#a99e8c" },
      { name: "Brown", hex: "#5a4636" },
      { name: "Black", hex: "#14130f" },
    ],
    images: [
      "/images/products/pleated-wide-trouser-mens-1.jpg",
      "/images/products/pleated-wide-trouser-mens-2.jpg",
      "/images/products/pleated-wide-trouser-mens-3.jpg",
    ],
  },
  {
    id: 10,
    slug: "orsay-leather-tote",
    name: "Orsay Structured Leather Tote",
    category: "accessories",
    subcategory: "Bags",
    price: 32000,
    compareAtPrice: null,
    isNew: true,
    isFeatured: true,
    createdAt: "2026-08-12",
    rating: 4.9,
    description:
      "A clean-lined north–south tote in full-grain vegetable-tanned leather that develops a deep patina with use. Suede-lined interior, a single interior pocket, and rolled handles set to sit comfortably on the shoulder.",
    material: "Full-grain vegetable-tanned calf leather, suede lining",
    care: "Wipe with a dry cloth. Condition twice a year. Keep from prolonged sun.",
    sizes: ["One Size"],
    colors: [
      { name: "Tan", hex: "#a9743f" },
      { name: "Black", hex: "#14130f" },
      { name: "Chocolate", hex: "#43301f" },
    ],
    images: [
      "/images/products/orsay-leather-tote-1.jpg",
      "/images/products/orsay-leather-tote-2.jpg",
    ],
  },
  {
    id: 11,
    slug: "mulberry-silk-scarf",
    name: "Hand-Rolled Mulberry Silk Scarf",
    category: "accessories",
    subcategory: "Silk",
    price: 9500,
    compareAtPrice: null,
    isNew: false,
    isFeatured: false,
    createdAt: "2026-06-28",
    rating: 4.7,
    description:
      "A generous 90cm square in twill silk with hand-rolled edges, printed with an archival marbled motif drawn in the studio. Equally at home at the neck, in the hair, or knotted to a bag handle.",
    material: "100% mulberry silk twill, 14 momme, hand-rolled hem",
    care: "Dry clean only. Store flat, away from light.",
    sizes: ["90 × 90 cm"],
    colors: [
      { name: "Gold / Ink", hex: "#b8975a" },
      { name: "Ivory / Sepia", hex: "#d8ccb4" },
    ],
    images: [
      "/images/products/mulberry-silk-scarf-1.jpg",
      "/images/products/mulberry-silk-scarf-2.jpg",
    ],
  },
  {
    id: 12,
    slug: "meridian-leather-belt",
    name: "Meridian Hand-Stitched Leather Belt",
    category: "accessories",
    subcategory: "Leather",
    price: 7800,
    compareAtPrice: null,
    isNew: false,
    isFeatured: false,
    createdAt: "2026-05-22",
    rating: 4.6,
    description:
      "A 3cm belt cut from a single hide, hand-stitched with waxed linen thread and finished with a solid brass buckle that dulls beautifully over time. Made to be re-holed and kept.",
    material: "Full-grain bridle leather, solid brass hardware",
    care: "Wipe clean. Condition lightly if it dries out.",
    sizes: ["75", "80", "85", "90", "95", "100"],
    colors: [
      { name: "Cognac", hex: "#8a4f2d" },
      { name: "Black", hex: "#14130f" },
    ],
    images: [
      "/images/products/meridian-leather-belt-1.jpg",
      "/images/products/meridian-leather-belt-2.jpg",
      "/images/products/meridian-leather-belt-3.jpg",
    ],
  },
  {
    id: 13,
    slug: "bias-cut-satin-skirt",
    name: "Bias-Cut Satin Midi Skirt",
    category: "women",
    subcategory: "Skirts",
    price: 16500,
    compareAtPrice: null,
    isNew: true,
    isFeatured: true,
    createdAt: "2026-08-30",
    rating: 4.8,
    description:
      "A fluid midi cut on the true bias so it falls in a clean column and moves with you. Sits at the natural waist with a concealed zip; finished with a deep hem that gives the drape its weight.",
    material: "Triacetate–polyester satin, matte reverse",
    care: "Dry clean, or cold hand-wash and hang to dry.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Ink Black", hex: "#14130f" },
      { name: "Champagne", hex: "#d9c7a3" },
      { name: "Emerald", hex: "#13463a" },
    ],
    images: [
      "/images/products/bias-cut-satin-skirt-1.jpg",
      "/images/products/bias-cut-satin-skirt-2.jpg",
    ],
  },
  {
    id: 14,
    slug: "windsor-double-breasted-blazer",
    name: "Windsor Double-Breasted Blazer",
    category: "women",
    subcategory: "Tailoring",
    price: 32000,
    compareAtPrice: 38000,
    isNew: false,
    isFeatured: true,
    createdAt: "2026-07-18",
    rating: 4.9,
    description:
      "A sharp six-button double-breasted blazer with a softly structured shoulder and a nipped waist. Peak lapels, working cuffs, and a full Bemberg lining. Wear it buttoned as a top, or open over tailoring.",
    material: "Italian wool–silk blend, Bemberg cupro lining",
    care: "Dry clean only. Rest on a broad wooden hanger.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#14130f" },
      { name: "Navy", hex: "#1c2537" },
    ],
    images: [
      "/images/products/windsor-double-breasted-blazer-1.jpg",
      "/images/products/windsor-double-breasted-blazer-2.jpg",
    ],
  },
  {
    id: 15,
    slug: "haldon-garment-dyed-overshirt",
    name: "Haldon Garment-Dyed Overshirt",
    category: "men",
    subcategory: "Shirts",
    price: 14800,
    compareAtPrice: null,
    isNew: true,
    isFeatured: false,
    createdAt: "2026-08-26",
    rating: 4.7,
    description:
      "A shirt-jacket in heavy brushed cotton twill, garment-dyed for a lived-in depth of colour. Two chest pockets, corozo buttons, and a boxy cut made to layer over a tee or under a coat.",
    material: "340gsm organic cotton twill, garment-dyed",
    care: "Machine wash cold with like colours. Tumble dry low.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Tobacco", hex: "#8a6b45" },
      { name: "Sage", hex: "#8b9179" },
      { name: "Charcoal", hex: "#33352f" },
    ],
    images: [
      "/images/products/haldon-garment-dyed-overshirt-1.jpg",
      "/images/products/haldon-garment-dyed-overshirt-2.jpg",
    ],
  },
  {
    id: 16,
    slug: "dune-knit-polo-mens",
    name: "Dune Fine-Knit Polo",
    category: "men",
    subcategory: "Knitwear",
    price: 13200,
    compareAtPrice: null,
    isNew: false,
    isFeatured: true,
    createdAt: "2026-06-12",
    rating: 4.6,
    description:
      "A knitted polo in breathable cotton-linen with a clean ribbed collar and a three-button placket. Holds its shape through the day and reads dressed-up with tailored trousers.",
    material: "62% cotton, 38% linen, fully fashioned knit",
    care: "Hand-wash cold or dry clean. Dry flat.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Black", hex: "#16150f" },
      { name: "Navy", hex: "#1c2537" },
      { name: "Stone", hex: "#c9bda3" },
    ],
    images: [
      "/images/products/dune-knit-polo-mens-1.jpg",
      "/images/products/dune-knit-polo-mens-2.jpg",
    ],
  },
  {
    id: 17,
    slug: "eclipse-acetate-sunglasses",
    name: "Eclipse Acetate Sunglasses",
    category: "accessories",
    subcategory: "Eyewear",
    price: 11200,
    compareAtPrice: null,
    isNew: true,
    isFeatured: false,
    createdAt: "2026-08-10",
    rating: 4.7,
    description:
      "An angular flat-brow frame hand-cut from Italian acetate, with CR-39 lenses that filter 100% UVA/UVB and a subtle gold pin at the temple. Supplied with a hard case and cloth.",
    material: "Mazzucchelli acetate, CR-39 lenses, steel core",
    care: "Clean lenses with the supplied cloth. Store in the case.",
    sizes: ["One size"],
    colors: [
      { name: "Black", hex: "#16150f" },
      { name: "Tortoise", hex: "#5a3a20" },
    ],
    images: ["/images/products/eclipse-acetate-sunglasses-1.jpg"],
  },
  {
    id: 18,
    slug: "carrow-leather-card-holder",
    name: "Carrow Leather Card Holder",
    category: "accessories",
    subcategory: "Leather",
    price: 6400,
    compareAtPrice: null,
    isNew: false,
    isFeatured: false,
    createdAt: "2026-05-30",
    rating: 4.6,
    description:
      "A slim four-pocket holder folded from a single piece of vegetable-tanned leather, edge-painted by hand. Slips into a coat or back pocket and softens into a patina with use.",
    material: "Vegetable-tanned full-grain leather",
    care: "Keep dry. Buff with a soft cloth; condition sparingly.",
    sizes: ["One size"],
    colors: [
      { name: "Chestnut", hex: "#6b4326" },
      { name: "Black", hex: "#16150f" },
    ],
    images: [
      "/images/products/carrow-leather-card-holder-1.jpg",
      "/images/products/carrow-leather-card-holder-2.jpg",
    ],
  },
];

/* -------------------------------------------------------------------------- */
/*  Derived helpers — used across the app. No need to edit below.             */
/* -------------------------------------------------------------------------- */

export const categories = [
  { slug: "women", label: "Women" },
  { slug: "men", label: "Men" },
  { slug: "accessories", label: "Accessories" },
];

export function getAllProducts() {
  return products;
}

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) || null;
}

export function getProductsByCategory(category) {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.isFeatured);
}

export function getNewArrivals() {
  return [...products]
    .filter((p) => p.isNew)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

/* All unique sizes / colors / price bounds — powers the shop filters */
export function getFacets(list = products) {
  const sizes = new Set();
  const colors = new Set();
  let min = Infinity;
  let max = 0;
  list.forEach((p) => {
    p.sizes.forEach((s) => sizes.add(s));
    p.colors.forEach((c) => colors.add(c.name));
    min = Math.min(min, p.price);
    max = Math.max(max, p.price);
  });
  return {
    sizes: [...sizes],
    colors: [...colors],
    priceMin: Number.isFinite(min) ? min : 0,
    priceMax: max,
  };
}

export function searchProducts(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];
  return products.filter((p) => {
    const haystack = [
      p.name,
      p.category,
      p.subcategory,
      p.material,
      p.description,
      ...p.colors.map((c) => c.name),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
