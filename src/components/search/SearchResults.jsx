"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { searchProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Search } from "@/components/ui/icons";

export default function SearchResults() {
  const params = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") || "";
  const [q, setQ] = useState(initial);

  const results = useMemo(() => searchProducts(initial), [initial]);

  const submit = (e) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
  };

  return (
    <div className="container-luxe py-12 lg:py-16">
      <form onSubmit={submit} className="mx-auto flex max-w-xl items-center gap-3 border-b border-ink pb-3">
        <Search className="h-5 w-5 text-ink-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search the collection"
          aria-label="Search products"
          className="w-full bg-transparent py-1 font-serif text-xl focus:outline-none sm:text-2xl"
        />
        <button type="submit" className="text-[12px] font-medium uppercase tracking-luxe">
          Go
        </button>
      </form>

      <div className="mt-10">
        {initial ? (
          <p className="kicker text-center">
            {results.length} {results.length === 1 ? "result" : "results"} for “{initial}”
          </p>
        ) : (
          <p className="kicker text-center">Type above to search</p>
        )}

        {initial && results.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl">No pieces match “{initial}”</p>
            <Link href="/shop" className="btn-outline mt-6">
              Browse everything
            </Link>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} sizes="(max-width: 768px) 50vw, 25vw" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
