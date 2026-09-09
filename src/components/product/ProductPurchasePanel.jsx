"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { formatPrice } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { buildProductOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import QuantityStepper from "@/components/ui/QuantityStepper";
import SizeGuideModal from "@/components/ui/SizeGuide";
import StarRating from "@/components/ui/StarRating";
import WishlistButton from "@/components/product/WishlistButton";
import { Check, WhatsApp } from "@/components/ui/icons";

export default function ProductPurchasePanel({ product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : "");
  const [color, setColor] = useState(product.colors[0]?.name || "");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");

  const onSale = product.compareAtPrice && product.compareAtPrice > product.price;

  const validate = () => {
    if (!size) {
      setError("Please select a size.");
      return false;
    }
    setError("");
    return true;
  };

  const handleAdd = () => {
    if (!validate()) return;
    addItem({ productId: product.id, size, color, quantity: qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const whatsappHref = buildWhatsAppLink(
    buildProductOrderMessage(product, { size, color, quantity: qty })
  );

  return (
    <div>
      <p className="kicker">{product.subcategory}</p>
      <h1 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">{product.name}</h1>

      <div className="mt-3 flex items-center gap-4">
        <p className="text-lg tabular-nums">
          {onSale && (
            <span className="mr-2 text-ink-muted line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
          {formatPrice(product.price)}
        </p>
        {product.rating ? <StarRating value={product.rating} /> : null}
      </div>

      <p className="mt-5 max-w-prose text-[15px] leading-relaxed text-ink-muted">
        {product.description}
      </p>

      {/* Colour */}
      <div className="mt-8">
        <div className="mb-2.5 flex items-baseline justify-between">
          <span className="kicker">Colour</span>
          <span className="text-xs text-ink-muted">{color}</span>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              aria-pressed={color === c.name}
              title={c.name}
              className={`h-8 w-8 rounded-full border transition-all ${
                color === c.name ? "border-ink ring-2 ring-ink ring-offset-2 ring-offset-ivory" : "border-ink/25"
              }`}
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mt-7">
        <div className="mb-2.5 flex items-baseline justify-between">
          <span className="kicker">Size</span>
          <SizeGuideModal />
        </div>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSize(s);
                setError("");
              }}
              aria-pressed={size === s}
              className={`min-w-[46px] border px-3.5 py-2.5 text-sm transition-colors ${
                size === s ? "border-ink bg-ink text-ivory" : "border-ink/25 hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p role="alert" className="mt-2 text-xs text-red-600">
            {error}
          </p>
        )}
      </div>

      {/* Quantity */}
      <div className="mt-7">
        <span className="kicker mb-2.5 block">Quantity</span>
        <QuantityStepper value={qty} onChange={setQty} max={10} />
      </div>

      {/* Actions */}
      <div className="mt-8 space-y-3">
        <button onClick={handleAdd} className="btn-primary w-full">
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-flex items-center gap-2"
              >
                <Check className="h-4 w-4" /> Added to cart
              </motion.span>
            ) : (
              <motion.span key="add" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                Add to cart
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!size) {
              e.preventDefault();
              validate();
            }
          }}
          className="btn-whatsapp w-full"
        >
          <WhatsApp className="h-4 w-4" />
          Order via WhatsApp
        </a>

        <div className="flex items-center justify-between pt-1">
          <WishlistButton productId={product.id} variant="inline" />
          <span className="text-[11px] uppercase tracking-luxe text-ink-muted">
            Ships in 1–2 days
          </span>
        </div>
      </div>

      {/* Fabric / care */}
      <dl className="mt-9 space-y-3 border-t border-ink/10 pt-6 text-sm">
        <div className="grid grid-cols-[90px_1fr] gap-3">
          <dt className="kicker">Fabric</dt>
          <dd className="text-ink-muted">{product.material}</dd>
        </div>
        <div className="grid grid-cols-[90px_1fr] gap-3">
          <dt className="kicker">Care</dt>
          <dd className="text-ink-muted">{product.care}</dd>
        </div>
      </dl>
    </div>
  );
}
