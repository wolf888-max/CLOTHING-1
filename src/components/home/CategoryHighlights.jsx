import Link from "next/link";
import Image from "next/image";
import { categoryHighlights } from "@/config/navigation";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export default function CategoryHighlights() {
  return (
    <section className="bg-ivory-deep py-20 lg:py-28">
      <div className="container-luxe">
        <Reveal className="mb-10 max-w-xl">
          <p className="kicker">Explore</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Shop by category</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Each collection is cut in limited runs and finished by hand in our Lahore studio.
          </p>
        </Reveal>

        <RevealGroup className="grid gap-4 sm:grid-cols-3">
          {categoryHighlights.map((cat) => (
            <RevealItem key={cat.label}>
              <Link href={cat.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
                  <Image
                    src={cat.image}
                    alt={`${cat.label} collection`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover grayscale-[0.15] transition-all duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-ink">
                    <h3 className="font-serif text-2xl">{cat.label}</h3>
                    <p className="mt-1 flex items-center gap-2 text-[11px] uppercase tracking-luxe text-ink/85">
                      {cat.blurb}
                      <ArrowRight className="h-3.5 w-3.5 text-gold transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
