import { Suspense } from "react";
import { pageMetadata } from "@/lib/seo";
import ShopView from "@/components/shop/ShopView";

export const metadata = pageMetadata({
  title: "Shop the Collection",
  path: "/shop",
  description:
    "Browse the full Libas Clothing collection — womenswear, menswear and accessories in natural fabrics. Filter by size, colour and price.",
});

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-24 text-center text-ink-muted">Loading collection…</div>}>
      <ShopView />
    </Suspense>
  );
}
