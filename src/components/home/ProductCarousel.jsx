"use client";

import { useRef } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";
import { ArrowLeft, ArrowRight } from "@/components/ui/icons";

/**
 * Horizontal scroll carousel of products.
 * Scroll-snap on mobile, arrow controls on desktop.
 */
export default function ProductCarousel({
  kicker = "New Arrivals",
  heading = "Just landed",
  products = [],
  viewAllHref = "/shop?sort=newest",
}) {
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  if (!products.length) return null;

  return (
    <section className="py-20 lg:py-28">
      <div className="container-luxe">
        <Reveal className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="kicker">{kicker}</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{heading}</h2>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={viewAllHref}
              className="hidden link-underline text-[12px] font-medium uppercase tracking-luxe sm:inline-block"
            >
              View all
            </Link>
            <div className="hidden gap-2 lg:flex">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Previous"
                className="grid h-10 w-10 place-items-center border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Next"
                className="grid h-10 w-10 place-items-center border border-ink/20 transition-colors hover:bg-ink hover:text-ivory"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        ref={trackRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-12"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="w-[62%] shrink-0 snap-start sm:w-[40%] lg:w-[23%]"
          >
            <ProductCard product={p} sizes="(max-width: 640px) 62vw, (max-width: 1024px) 40vw, 23vw" />
          </div>
        ))}
      </div>

      <div className="container-luxe mt-8 sm:hidden">
        <Link href={viewAllHref} className="btn-outline w-full">
          View all
        </Link>
      </div>
    </section>
  );
}
