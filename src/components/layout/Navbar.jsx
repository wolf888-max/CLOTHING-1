"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { mainNav } from "@/config/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Menu, X, Search as SearchIcon, Heart, Bag } from "@/components/ui/icons";
import SearchOverlay from "@/components/layout/SearchOverlay";

function Wordmark({ className = "" }) {
  if (siteConfig.logoSrc) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={siteConfig.logoSrc} alt={siteConfig.brandNameFull} className={`h-6 w-auto ${className}`} />;
  }
  return (
    <span className={`font-serif text-2xl font-semibold tracking-[0.32em] ${className}`}>
      {siteConfig.brandName}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { count } = useCart();
  const { count: wishCount } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-[500] border-b transition-colors duration-300 ${
          scrolled ? "border-ink/10 bg-ivory/95 backdrop-blur" : "border-transparent bg-ivory"
        }`}
      >
        <nav className="container-luxe flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Left — mobile menu / desktop links */}
          <div className="flex flex-1 items-center gap-6">
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="-ml-2 p-2 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            <ul className="hidden items-center gap-7 lg:flex">
              {mainNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline text-[11px] font-medium uppercase tracking-luxe text-ink/80 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center — wordmark */}
          <Link href="/" aria-label={`${siteConfig.brandNameFull} — home`} className="shrink-0">
            <Wordmark />
          </Link>

          {/* Right — utilities */}
          <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-ink/80 transition-colors hover:text-ink"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link
              href="/wishlist"
              aria-label={`Wishlist, ${wishCount} items`}
              className="relative p-2 text-ink/80 transition-colors hover:text-ink"
            >
              <Heart className="h-5 w-5" />
              {wishCount > 0 && (
                <span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-ink text-[10px] font-medium text-ivory">
                  {wishCount}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              aria-label={`Cart, ${count} items`}
              className="relative p-2 text-ink/80 transition-colors hover:text-ink"
            >
              <Bag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-0 top-0 grid h-4 w-4 place-items-center rounded-full bg-ink text-[10px] font-medium text-ivory">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[800] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              tabIndex={-1}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex h-full w-[82%] max-w-sm flex-col bg-ivory p-6"
            >
              <div className="mb-10 flex items-center justify-between">
                <Wordmark className="text-xl" />
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="p-2">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {mainNav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-ink/10 py-4 font-serif text-2xl"
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto space-y-1 pt-8 text-[12px] uppercase tracking-luxe text-ink-muted">
                <Link href="/contact" className="block py-2">Contact</Link>
                <Link href="/faq" className="block py-2">FAQ &amp; Size Guide</Link>
                <Link href="/shipping-returns" className="block py-2">Shipping &amp; Returns</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
