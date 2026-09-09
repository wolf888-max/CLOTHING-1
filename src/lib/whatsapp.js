/**
 * WhatsApp deep-link helpers.
 * All messages route to siteConfig.whatsappNumber (see src/config/site.js).
 *
 * Format produced:  https://wa.me/<number>?text=<url-encoded message>
 */

import { siteConfig, formatPrice } from "@/config/site";

/** Base wa.me link with an arbitrary pre-filled message. */
export function buildWhatsAppLink(message, phone = siteConfig.whatsappNumber) {
  const number = String(phone).replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Absolute URL for a product (used inside messages so staff can open the page). */
export function productUrl(product) {
  const base = siteConfig.url?.replace(/\/$/, "") || "";
  return `${base}/product/${product.slug}`;
}

/**
 * "Order via WhatsApp" — single product enquiry from the product page.
 * selection = { size, color, quantity }
 */
export function buildProductOrderMessage(product, selection = {}) {
  const { size, color, quantity = 1 } = selection;
  const lines = [
    `Hello ${siteConfig.brandName}, I'd like to order the following:`,
    ``,
    `• Item: ${product.name}`,
    size ? `• Size: ${size}` : `• Size: (please advise)`,
    color ? `• Colour: ${color}` : `• Colour: (please advise)`,
    `• Quantity: ${quantity}`,
    `• Price: ${formatPrice(product.price)} each`,
    ``,
    `Product link: ${productUrl(product)}`,
    ``,
    `Could you confirm availability and next steps? Thank you.`,
  ];
  return lines.join("\n");
}

/**
 * "Checkout via WhatsApp" — full cart summary from the cart page.
 * items = [{ product, size, color, quantity }]
 */
export function buildCartCheckoutMessage(items = []) {
  const header = [
    `Hello ${siteConfig.brandName}, I'd like to place this order:`,
    ``,
  ];

  const body = items.map((it, i) => {
    const lineTotal = it.product.price * it.quantity;
    return [
      `${i + 1}. ${it.product.name}`,
      `   Size: ${it.size || "—"} | Colour: ${it.color || "—"} | Qty: ${it.quantity}`,
      `   ${formatPrice(it.product.price)} × ${it.quantity} = ${formatPrice(lineTotal)}`,
      `   ${productUrl(it.product)}`,
    ].join("\n");
  });

  const subtotal = items.reduce(
    (sum, it) => sum + it.product.price * it.quantity,
    0
  );

  const footer = [
    ``,
    `Subtotal: ${formatPrice(subtotal)}`,
    `(Shipping & any duties to be confirmed.)`,
    ``,
    `Please confirm availability and payment details. Thank you.`,
  ];

  return [...header, body.join("\n\n"), ...footer].join("\n");
}

/** Generic "get in touch" link for headers / contact page. */
export function buildGeneralEnquiryLink() {
  return buildWhatsAppLink(
    `Hello ${siteConfig.brandName}, I have a question about your collection.`
  );
}
