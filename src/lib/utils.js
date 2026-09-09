/** Small shared utilities. */

/** Conditional className joiner. */
export function cn(...parts) {
  return parts.filter(Boolean).join(" ");
}

/** Stable key for a cart line (a product + its chosen variant). */
export function cartLineId(productId, size, color) {
  return `${productId}::${size || "-"}::${color || "-"}`;
}

/** Clamp a number between min and max. */
export function clamp(n, min, max) {
  return Math.min(Math.max(n, min), max);
}

/** Format a rating like 4.9 with a fixed decimal. */
export function formatRating(r) {
  return Number(r || 0).toFixed(1);
}
