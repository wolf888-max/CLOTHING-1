import ProductCard from "@/components/product/ProductCard";
import Reveal from "@/components/ui/Reveal";

export default function RelatedProducts({ products = [] }) {
  if (!products.length) return null;
  return (
    <section className="container-luxe border-t border-ink/10 py-20">
      <Reveal className="mb-10">
        <p className="kicker">You may also like</p>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Complete the look</h2>
      </Reveal>
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} sizes="(max-width: 768px) 50vw, 25vw" />
        ))}
      </div>
    </section>
  );
}
