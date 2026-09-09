import { pageMetadata } from "@/lib/seo";
import { getFeaturedProducts, getNewArrivals } from "@/data/products";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ProductCarousel from "@/components/home/ProductCarousel";
import CategoryHighlights from "@/components/home/CategoryHighlights";
import StoryTeaser from "@/components/home/StoryTeaser";

export const metadata = pageMetadata({
  path: "/",
  description:
    "Libas Clothing — a luxury label of considered essentials in natural fabrics. Shop new arrivals in womenswear, menswear and accessories.",
});

export default function HomePage() {
  const newArrivals = getNewArrivals();
  const featured = getFeaturedProducts();

  return (
    <>
      <Hero />
      <Marquee />
      <ProductCarousel
        kicker="New Arrivals"
        heading="Just landed"
        products={newArrivals}
        viewAllHref="/shop?sort=newest"
      />
      <CategoryHighlights />
      <ProductCarousel
        kicker="Featured Collection"
        heading="The pieces we keep reaching for"
        products={featured}
        viewAllHref="/shop"
      />
      <StoryTeaser />
    </>
  );
}
