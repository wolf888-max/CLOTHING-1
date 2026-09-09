"use client";

import { useWishlist } from "@/context/WishlistContext";
import { Heart, HeartFilled } from "@/components/ui/icons";

/** Heart toggle. variant "overlay" for product cards, "inline" for the PDP. */
export default function WishlistButton({ productId, variant = "overlay", className = "" }) {
  const { has, toggle, ready } = useWishlist();
  const active = ready && has(productId);

  if (variant === "inline") {
    return (
      <button
        type="button"
        onClick={() => toggle(productId)}
        aria-pressed={active}
        className={`inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-luxe text-ink-muted transition-colors hover:text-ink ${className}`}
      >
        {active ? <HeartFilled className="h-4 w-4 text-gold" /> : <Heart className="h-4 w-4" />}
        {active ? "Saved" : "Save"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        toggle(productId);
      }}
      aria-label={active ? "Remove from wishlist" : "Add to wishlist"}
      aria-pressed={active}
      className={`grid h-9 w-9 place-items-center bg-ivory/90 text-ink shadow-sm backdrop-blur transition-colors hover:bg-ivory ${className}`}
    >
      {active ? <HeartFilled className="h-4 w-4 text-gold" /> : <Heart className="h-4 w-4" />}
    </button>
  );
}
