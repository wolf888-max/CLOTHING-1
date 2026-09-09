"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { getAllProducts, getFacets } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FilterControls from "@/components/shop/FilterControls";
import { X } from "@/components/ui/icons";

const PAGE_SIZE = 8;

const SORTS = {
  newest: { label: "Newest first", fn: (a, b) => new Date(b.createdAt) - new Date(a.createdAt) },
  "price-asc": { label: "Price: low to high", fn: (a, b) => a.price - b.price },
  "price-desc": { label: "Price: high to low", fn: (a, b) => b.price - a.price },
  featured: { label: "Featured", fn: (a, b) => Number(b.isFeatured) - Number(a.isFeatured) },
};

export default function ShopView() {
  const allProducts = useMemo(() => getAllProducts(), []);
  const facets = useMemo(() => getFacets(allProducts), [allProducts]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialCategory = searchParams.get("category") || "all";
  const initialSort = SORTS[searchParams.get("sort")] ? searchParams.get("sort") : "newest";

  const [filters, setFilters] = useState({
    category: initialCategory,
    sizes: [],
    colors: [],
    maxPrice: facets.priceMax,
  });
  const [sort, setSort] = useState(initialSort);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* keep the URL in sync (shareable filters) */
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category !== "all") params.set("category", filters.category);
    if (sort !== "newest") params.set("sort", sort);
    const qs = params.toString();
    router.replace(qs ? `/shop?${qs}` : "/shop", { scroll: false });
  }, [filters.category, sort, router]);

  /* react to nav links that change ?category while already on /shop */
  useEffect(() => {
    const c = searchParams.get("category") || "all";
    setFilters((f) => (f.category === c ? f : { ...f, category: c }));
  }, [searchParams]);

  const results = useMemo(() => {
    let list = allProducts.filter((p) => {
      if (filters.category !== "all" && p.category !== filters.category) return false;
      if (filters.sizes.length && !p.sizes.some((s) => filters.sizes.includes(s))) return false;
      if (filters.colors.length && !p.colors.some((c) => filters.colors.includes(c.name)))
        return false;
      if (p.price > filters.maxPrice) return false;
      return true;
    });
    list = [...list].sort(SORTS[sort].fn);
    return list;
  }, [allProducts, filters, sort]);

  useEffect(() => setVisible(PAGE_SIZE), [filters, sort]);

  const shown = results.slice(0, visible);
  const activeCount =
    (filters.category !== "all" ? 1 : 0) +
    filters.sizes.length +
    filters.colors.length +
    (filters.maxPrice < facets.priceMax ? 1 : 0);

  const reset = () =>
    setFilters({ category: "all", sizes: [], colors: [], maxPrice: facets.priceMax });

  return (
    <div className="container-luxe py-10 lg:py-16">
      {/* Page header */}
      <header className="mb-10 border-b border-ink/10 pb-8">
        <p className="kicker">Collection</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl">Shop all</h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted">
          {results.length} {results.length === 1 ? "piece" : "pieces"} — cut in limited runs,
          finished by hand.
        </p>
      </header>

      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
        {/* Desktop filters */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="kicker">Filter</h2>
              {activeCount > 0 && (
                <button onClick={reset} className="text-[11px] uppercase tracking-luxe text-ink-muted underline">
                  Clear ({activeCount})
                </button>
              )}
            </div>
            <FilterControls facets={facets} value={filters} onChange={setFilters} />
          </div>
        </aside>

        <div>
          {/* Toolbar */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="btn-outline !px-4 !py-2.5 lg:hidden"
            >
              Filter{activeCount ? ` (${activeCount})` : ""}
            </button>
            <label className="ml-auto flex items-center gap-2 text-[12px] uppercase tracking-luxe text-ink-muted">
              <span className="hidden sm:inline">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-ink/25 bg-transparent py-2 pl-3 pr-8 text-[12px] uppercase tracking-luxe focus:outline-none"
              >
                {Object.entries(SORTS).map(([key, s]) => (
                  <option key={key} value={key}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Grid */}
          {shown.length === 0 ? (
            <div className="border border-dashed border-ink/20 py-24 text-center">
              <p className="font-serif text-2xl">Nothing matches those filters</p>
              <button onClick={reset} className="btn-outline mt-6">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
              {shown.map((p, i) => (
                <div
                  key={p.id}
                  className="animate-fade-up opacity-0"
                  style={{
                    animationDelay: `${Math.min(i, 8) * 60}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  <ProductCard
                    product={p}
                    priority={i < 3}
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
              ))}
            </div>
          )}

          {visible < results.length && (
            <div className="mt-14 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="btn-outline"
              >
                Load more ({results.length - visible} remaining)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-[800] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close filters"
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              tabIndex={-1}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-ivory"
            >
              <div className="flex items-center justify-between border-b border-ink/10 p-5">
                <h2 className="font-serif text-xl">Filter</h2>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close" className="p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5">
                <FilterControls facets={facets} value={filters} onChange={setFilters} />
              </div>
              <div className="grid grid-cols-2 gap-3 border-t border-ink/10 p-5">
                <button onClick={reset} className="btn-ghost">
                  Clear
                </button>
                <button onClick={() => setDrawerOpen(false)} className="btn-primary">
                  Show {results.length}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
