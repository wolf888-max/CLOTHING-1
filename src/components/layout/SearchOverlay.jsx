"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "@/components/ui/icons";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/config/site";

/** Full-width search panel that drops from the top of the screen. */
export default function SearchOverlay({ open, onClose }) {
  const [q, setQ] = useState("");
  const router = useRouter();

  const results = useMemo(() => searchProducts(q).slice(0, 6), [q]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) setQ("");
  }, [open]);

  const submit = (e) => {
    e.preventDefault();
    if (!q.trim()) return;
    router.push(`/search?q=${encodeURIComponent(q.trim())}`);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[900]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            aria-label="Close search"
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            tabIndex={-1}
          />
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-ivory px-5 pb-10 pt-6 sm:px-8 lg:px-12"
          >
            <div className="mx-auto max-w-2xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="kicker">Search the collection</span>
                <button onClick={onClose} aria-label="Close" className="p-2 text-ink-muted hover:text-ink">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <form onSubmit={submit} className="flex items-center gap-3 border-b border-ink pb-3">
                <Search className="h-5 w-5 text-ink-muted" />
                {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
                <input
                  autoFocus
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Silk dress, cashmere, tote…"
                  aria-label="Search products"
                  className="w-full bg-transparent py-1 font-serif text-xl placeholder:text-ink-muted/60 focus:outline-none sm:text-2xl"
                />
              </form>

              {q.trim() && (
                <div className="mt-6">
                  {results.length === 0 ? (
                    <p className="text-sm text-ink-muted">No pieces match “{q}”.</p>
                  ) : (
                    <ul className="divide-y divide-ink/10">
                      {results.map((p) => (
                        <li key={p.id}>
                          <Link
                            href={`/product/${p.slug}`}
                            onClick={onClose}
                            className="flex items-center gap-4 py-3 transition-opacity hover:opacity-70"
                          >
                            <div className="relative h-16 w-12 shrink-0 overflow-hidden bg-ivory-deep">
                              <Image src={p.images[0]} alt={p.name} fill sizes="48px" className="object-cover" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="truncate font-serif text-base">{p.name}</p>
                              <p className="text-xs uppercase tracking-widest text-ink-muted">{p.subcategory}</p>
                            </div>
                            <span className="text-sm tabular-nums text-ink-muted">{formatPrice(p.price)}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={submit}
                    className="mt-5 link-underline text-[12px] font-medium uppercase tracking-luxe"
                  >
                    View all results
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
