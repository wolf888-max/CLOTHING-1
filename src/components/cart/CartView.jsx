"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, siteConfig } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { buildCartCheckoutMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import QuantityStepper from "@/components/ui/QuantityStepper";
import { WhatsApp, X, ArrowRight } from "@/components/ui/icons";

export default function CartView() {
  const { items, subtotal, count, setQuantity, removeItem, ready } = useCart();

  if (!ready) {
    return <div className="container-luxe py-24 text-center text-ink-muted">Loading your cart…</div>;
  }

  if (count === 0) {
    return (
      <div className="container-luxe py-24 text-center">
        <p className="kicker">Your cart</p>
        <h1 className="mt-3 font-serif text-4xl">Nothing here yet</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
          Once you add pieces they will appear here, ready to send to us on WhatsApp.
        </p>
        <Link href="/shop" className="btn-primary mt-8">
          Browse the collection
        </Link>
      </div>
    );
  }

  const checkoutHref = buildWhatsAppLink(buildCartCheckoutMessage(items));
  const remainingForFreeShip = siteConfig.freeShippingThreshold - subtotal;

  return (
    <div className="container-luxe py-10 lg:py-16">
      <header className="mb-10 border-b border-ink/10 pb-6">
        <p className="kicker">Your cart</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">
          {count} {count === 1 ? "item" : "items"}
        </h1>
      </header>

      <div className="lg:grid lg:grid-cols-[1fr_360px] lg:gap-14">
        {/* Line items */}
        <ul className="divide-y divide-ink/10 border-b border-ink/10">
          {items.map((it) => (
            <li key={it.id} className="flex gap-4 py-6 sm:gap-6">
              <Link
                href={`/product/${it.product.slug}`}
                className="relative h-32 w-24 shrink-0 overflow-hidden bg-ivory-deep sm:h-40 sm:w-32"
              >
                <Image src={it.product.images[0]} alt={it.product.name} fill sizes="128px" className="object-cover" />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="font-serif text-lg">
                      <Link href={`/product/${it.product.slug}`} className="link-underline">
                        {it.product.name}
                      </Link>
                    </h2>
                    <p className="mt-1 text-xs uppercase tracking-luxe text-ink-muted">
                      {it.color} · Size {it.size}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(it.id)}
                    aria-label={`Remove ${it.product.name}`}
                    className="h-8 w-8 shrink-0 text-ink-muted transition-colors hover:text-ink"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-auto flex items-end justify-between pt-4">
                  <QuantityStepper
                    value={it.quantity}
                    onChange={(q) => setQuantity(it.id, q)}
                    size="sm"
                    max={10}
                  />
                  <p className="text-sm tabular-nums">{formatPrice(it.lineTotal)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="mt-10 lg:mt-0">
          <div className="sticky top-28 bg-ivory-deep p-6 sm:p-8">
            <h2 className="font-serif text-2xl">Order summary</h2>

            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink-muted">Subtotal</dt>
                <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-muted">Shipping</dt>
                <dd className="text-ink-muted">Confirmed on WhatsApp</dd>
              </div>
            </dl>

            {remainingForFreeShip > 0 ? (
              <p className="mt-4 text-xs leading-relaxed text-ink-muted">
                Add {formatPrice(remainingForFreeShip)} more for complimentary shipping.
              </p>
            ) : (
              <p className="mt-4 text-xs font-medium text-gold">
                You&apos;ve unlocked complimentary shipping.
              </p>
            )}

            <div className="mt-6 border-t border-ink/15 pt-4">
              <div className="flex justify-between font-serif text-lg">
                <span>Total</span>
                <span className="tabular-nums">{formatPrice(subtotal)}</span>
              </div>
            </div>

            <a
              href={checkoutHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-6 w-full"
            >
              <WhatsApp className="h-4 w-4" />
              Checkout via WhatsApp
            </a>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-ink-muted">
              Your full order opens in WhatsApp. We confirm stock, total and payment there.
            </p>

            <Link
              href="/shop"
              className="mt-4 flex items-center justify-center gap-2 link-underline text-[12px] font-medium uppercase tracking-luxe"
            >
              Continue shopping
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
