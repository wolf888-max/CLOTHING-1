import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { pageMetadata, productJsonLd } from "@/lib/seo";
import ProductGallery from "@/components/product/ProductGallery";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";
import RelatedProducts from "@/components/product/RelatedProducts";

/* Pre-render every product page at build time */
export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) return pageMetadata({ title: "Product not found" });
  return pageMetadata({
    title: product.name,
    description: `${product.name} — ${product.material}. ${product.description.slice(0, 120)}…`,
    path: `/product/${product.slug}`,
    image: product.images[0],
  });
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />

      <div className="container-luxe py-6 lg:py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-[11px] uppercase tracking-luxe text-ink-muted">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href={`/shop?category=${product.category}`} className="hover:text-ink capitalize">
                {product.category}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <ProductGallery images={product.images} name={product.name} />
          <ProductPurchasePanel product={product} />
        </div>
      </div>

      <RelatedProducts products={related} />
    </>
  );
}
