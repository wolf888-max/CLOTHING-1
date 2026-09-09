/**
 * Editorial + policy copy. All placeholder text — the client rewrites freely.
 */

export const sizeGuide = {
  intro:
    "Measurements are of the body, in centimetres. If you are between sizes, we recommend sizing up for relaxed styles and down for tailoring. Our client care team is happy to advise on fit over WhatsApp.",
  womenswear: {
    columns: ["Size", "Bust", "Waist", "Hip"],
    rows: [
      ["XS", "80–84", "62–66", "88–92"],
      ["S", "85–89", "67–71", "93–97"],
      ["M", "90–94", "72–76", "98–102"],
      ["L", "95–100", "77–82", "103–108"],
      ["XL", "101–106", "83–88", "109–114"],
    ],
  },
  menswear: {
    columns: ["Size", "Chest", "Waist", "Jacket (EU)"],
    rows: [
      ["S", "88–92", "76–80", "46"],
      ["M", "94–98", "82–86", "48"],
      ["L", "100–104", "88–92", "50"],
      ["XL", "106–110", "94–98", "52"],
      ["XXL", "112–116", "100–104", "54"],
    ],
  },
  howToMeasure: [
    ["Chest / Bust", "Measure around the fullest part, keeping the tape level and relaxed."],
    ["Waist", "Measure around the narrowest part of the natural waistline."],
    ["Hip", "Measure around the fullest part of the hips, roughly 20cm below the waist."],
  ],
};

export const faqs = [
  {
    q: "How does ordering via WhatsApp work?",
    a: "On any product page, choose your size and colour, then tap 'Order via WhatsApp'. A message is pre-filled with the item, your selection, quantity and a link to the product. Send it to us and our client care team confirms availability, total, delivery timing and payment. You can also build a full cart on the site and send it all at once from the cart page.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Bank transfer, major cards via a secure payment link, and cash on delivery within selected cities. Payment details are shared once your order is confirmed over WhatsApp.",
  },
  {
    q: "How long does shipping take?",
    a: "Domestic orders are dispatched within 1–2 business days and arrive in 2–4 business days. International orders arrive within 5–10 business days depending on destination and customs.",
  },
  {
    q: "Do you ship internationally?",
    a: "Yes, we ship worldwide. Duties and taxes are calculated at destination and are the responsibility of the recipient unless stated otherwise.",
  },
  {
    q: "What is your return policy?",
    a: "Unworn items with tags attached may be returned within 14 days of delivery for exchange or store credit. Made-to-order pieces, altered garments, swimwear and earrings are final sale. See Shipping & Returns for the full policy.",
  },
  {
    q: "How do I choose the right size?",
    a: "Each product page lists fabric and fit notes, and the Size Guide gives body measurements in centimetres. If you are unsure, message us your usual size in another brand and we will advise.",
  },
  {
    q: "How should I care for my pieces?",
    a: "Care instructions are printed on every product page and on the garment label. As a rule, natural fibres last longest when washed less, aired between wears and stored properly. We are glad to advise on specific pieces.",
  },
  {
    q: "Can I reserve an item that is out of stock?",
    a: "Often, yes. Message us the item and size and we will let you know the next production window or add you to a waitlist.",
  },
];

export const shippingReturns = {
  sections: [
    {
      title: "Dispatch & processing",
      body: [
        "Orders are processed Monday to Saturday, excluding public holidays. In-stock items are dispatched within 1–2 business days of payment confirmation.",
        "You will receive a tracking number by WhatsApp or email once your order leaves the studio.",
      ],
    },
    {
      title: "Domestic shipping",
      body: [
        "Standard delivery: 2–4 business days.",
        "Complimentary on orders over the free-shipping threshold shown at checkout; a flat fee applies below it.",
        "Cash on delivery is available in selected cities.",
      ],
    },
    {
      title: "International shipping",
      body: [
        "Delivery in 5–10 business days via tracked courier.",
        "Import duties and taxes are levied by the destination country and are payable by the recipient.",
        "We cannot mark parcels as gifts or under-declare value.",
      ],
    },
    {
      title: "Returns & exchanges",
      body: [
        "Unworn, unwashed items with all tags attached may be returned within 14 days of delivery.",
        "Returns are offered as an exchange or store credit; we do not offer cash refunds except where required by law or for faulty goods.",
        "Return shipping is arranged by the customer unless the item is faulty or incorrect.",
        "Final sale: made-to-order pieces, altered or repaired garments, earrings, and items marked final sale.",
      ],
    },
    {
      title: "Faulty or incorrect items",
      body: [
        "If something arrives damaged or not as ordered, message us within 48 hours of delivery with photos. We will cover return shipping and prioritise a replacement or full refund.",
      ],
    },
    {
      title: "How to start a return",
      body: [
        "Message us on WhatsApp with your order number and the item you wish to return. We will confirm eligibility and send return instructions the same business day.",
      ],
    },
  ],
};

/* Home + About editorial blocks */
export const storyTeaser = {
  kicker: "Our Story",
  heading: "A wardrobe built to be kept, not replaced",
  body: "Libas began in a small Lahore studio with a single idea — that clothing should be made slowly, from honest materials, by people who are paid and credited fairly. Every piece is cut in limited runs and finished by hand.",
  image: "/images/story.jpg",
  cta: { label: "Read our story", href: "/about" },
};

export const aboutPage = {
  hero: {
    kicker: "Est. 2024 — Lahore",
    heading: "Quiet clothing, made with intention",
    image: "/images/about-hero.jpg",
  },
  values: [
    {
      title: "Natural materials",
      body: "Mulberry silk, grade-A cashmere, long-staple cotton, vegetable-tanned leather. We choose fibres that age well and avoid synthetics wherever the garment allows.",
    },
    {
      title: "Made in limited runs",
      body: "Collections are produced in small batches to reduce waste and keep quality under our eye. When a piece sells out, it returns only if it earns its place.",
    },
    {
      title: "Finished by hand",
      body: "Seams, hems, buttonholes and linings are completed by a small team of tailors we work with directly, season after season.",
    },
    {
      title: "Fair and transparent",
      body: "Everyone who makes our clothes is paid a fair wage. We are working toward publishing our full supply chain.",
    },
  ],
  founderNote: {
    quote:
      "I wanted to make the things I couldn't find — pieces that feel considered, that last, and that don't shout. Libas is my attempt at a wardrobe you can live in for years.",
    name: "A. Rahman",
    role: "Founder & Creative Director",
  },
  craft: {
    heading: "On craftsmanship",
    body: [
      "A garment is only as good as its least-considered detail. We spend a disproportionate amount of time on the parts most brands hide — the inside of a seam, the weight of a button, the way a hem falls after a day of wear.",
      "Our patterns are developed over multiple fittings on real bodies, not just a mannequin. Fabrics are washed and worn before they are approved. Nothing goes into a collection until it has survived a season in our own wardrobes.",
    ],
    image: "/images/about-craft.jpg",
  },
};
