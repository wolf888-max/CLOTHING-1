import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "@/components/ui/icons";

/**
 * Full-bleed hero. Pure CSS animation (see globals.css) — no JS in the
 * render path, so the headline can never be left invisible.
 *
 * To use a video instead of an image: drop a file at /public/hero.mp4 and
 * replace the <Image> with a <video autoPlay muted loop playsInline poster=…>.
 */
const HERO_IMAGE = "/images/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden bg-ivory">
      <Image
        src={HERO_IMAGE}
        alt="Model wearing the Libas autumn collection"
        fill
        priority
        sizes="100vw"
        className="animate-ken-burns object-cover object-center"
      />

      {/* Legibility wash */}
      <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/45 to-ivory/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-ivory/55 to-transparent" />

      <div className="container-luxe relative flex h-full flex-col items-start justify-end pb-16 lg:pb-24">
        <span
          className="hero-rule mb-6 block h-px w-16 bg-gold"
          style={{ animationDelay: "0.05s" }}
        />
        <p
          className="hero-line text-[11px] font-medium uppercase tracking-luxe text-ink/80"
          style={{ animationDelay: "0.12s" }}
        >
          Autumn / Winter — The Quiet Edit
        </p>

        <h1
          className="hero-line mt-4 max-w-3xl font-serif text-4xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.2s" }}
        >
          {siteConfig.tagline}
        </h1>

        <div
          className="hero-line mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.34s" }}
        >
          <Link href="/shop" className="btn bg-ink text-ivory hover:bg-gold hover:text-ivory">
            Shop the collection
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/shop?category=women"
            className="btn border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-ivory"
          >
            Womenswear
          </Link>
        </div>
      </div>
    </section>
  );
}
