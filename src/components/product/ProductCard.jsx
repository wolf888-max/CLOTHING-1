import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "@/config/site";
import WishlistButton from "@/components/product/WishlistButton";

/**
 * Product tile for grids and carousels.
 * `priority` for above-the-fold images only.
 */
export default function ProductCard({ product, priority = false, sizes }) {
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <article className="group relative">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-ivory-deep ring-1 ring-ink/5 transition-all duration-500 group-hover:ring-gold/30">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            sizes={sizes || "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
            className="object-cover transition-opacity duration-700 ease-out group-hover:opacity-0"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt=""
              fill
              aria-hidden
              sizes={sizes || "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
              className="scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
            />
          )}

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="bg-ink px-2.5 py-1 text-[10px] font-medium uppercase tracking-luxe text-ivory">
                New
              </span>
            )}
            {onSale && (
              <span className="bg-wine px-2.5 py-1 text-[10px] font-medium uppercase tracking-luxe text-ink">
                Sale
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="absolute right-3 top-3">
        <WishlistButton productId={product.id} />
      </div>

      <div className="mt-3.5">
        <p className="text-[10px] uppercase tracking-luxe text-ink-muted">
          {product.subcategory}
        </p>
        <h3 className="mt-1 font-serif text-[17px] leading-snug">
          <Link href={`/product/${product.slug}`} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm tabular-nums text-ink-muted">
          {onSale && (
            <span className="mr-2 text-ink-muted/60 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          <span className={onSale ? "text-gold-light" : "text-ink"}>
            {formatPrice(product.price)}
          </span>
        </p>
      </div>
    </article>
  );
}
