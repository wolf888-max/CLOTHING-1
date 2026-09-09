"use client";

import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/product/ProductCard";

export default function WishlistView() {
  const { items, count, clear, ready } = useWishlist();

  if (!ready) {
    return <div className="container-luxe py-24 text-center text-ink-muted">Loading…</div>;
  }

  if (count === 0) {
    return (
      <div className="container-luxe py-24 text-center">
        <p className="kicker">Wishlist</p>
        <h1 className="mt-3 font-serif text-4xl">Nothing saved yet</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          Tap the heart on any piece to save it here for later.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container-luxe py-10 lg:py-16">
      <header className="mb-10 flex items-end justify-between border-b border-ink/10 pb-6">
        <div>
          <p className="kicker">Wishlist</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
            {count} {count === 1 ? "piece" : "pieces"} saved
          </h1>
        </div>
        <button onClick={clear} className="text-[11px] uppercase tracking-luxe text-ink-muted underline">
          Clear all
        </button>
      </header>

      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} sizes="(max-width: 768px) 50vw, 25vw" />
        ))}
      </div>
    </div>
  );
}
