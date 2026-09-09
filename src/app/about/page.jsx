import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { aboutPage } from "@/data/content";
import Reveal, { RevealGroup, RevealItem, RevealImage } from "@/components/ui/Reveal";

export const metadata = pageMetadata({
  title: "Our Story",
  path: "/about",
  description:
    "Libas Clothing is a luxury label making considered essentials in natural fabrics — produced in limited runs and finished by hand in Lahore.",
});

export default function AboutPage() {
  const { hero, values, founderNote, craft } = aboutPage;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="animate-ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-ivory/20" />
        <div className="container-luxe relative py-16 text-ink">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-luxe text-gold-light">
              {hero.kicker}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">
              {hero.heading}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Intro */}
      <section className="container-luxe py-20 lg:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="kicker">Our Story</p>
          <p className="mt-6 font-serif text-2xl leading-relaxed sm:text-3xl">
            Libas began in a small Lahore studio with a single idea — that clothing should be
            made slowly, from honest materials, by people who are paid and credited fairly.
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-muted">
            We are a small team. We release two considered collections a year, plus a handful of
            permanent essentials that we refine season after season. Nothing is designed to be
            replaced.
          </p>
        </Reveal>
      </section>

      {/* Values */}
      <section className="bg-ivory-deep py-20 lg:py-28">
        <div className="container-luxe">
          <Reveal className="mb-12">
            <p className="kicker">What we stand for</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Our values</h2>
          </Reveal>
          <RevealGroup className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <p className="font-serif text-5xl text-gold/40">0{i + 1}</p>
                <h3 className="mt-3 font-serif text-xl">{v.title}</h3>
                <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-muted">{v.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Craft */}
      <section id="craft" className="container-luxe grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <RevealImage className="aspect-[4/5] bg-ivory-deep">
          <Image
            src={craft.image}
            alt="Hand-finishing a garment in the Libas studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealImage>
        <Reveal>
          <p className="kicker">Process</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl">{craft.heading}</h2>
          {craft.body.map((p, i) => (
            <p key={i} className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-muted">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Founder note */}
      <section id="journal" className="border-y border-ink/10 bg-ivory-deep py-20 text-ink lg:py-28">
        <div className="container-luxe max-w-3xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-luxe text-gold-light">
            A note from the founder
          </p>
          <blockquote className="mt-6 font-serif text-2xl italic leading-relaxed sm:text-3xl">
            “{founderNote.quote}”
          </blockquote>
          <p className="mt-6 text-sm uppercase tracking-luxe text-ink-muted">
            {founderNote.name} — {founderNote.role}
          </p>
        </div>
      </section>

      <section className="container-luxe py-20 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl">See the collection</h2>
        <Link href="/shop" className="btn-primary mt-6">
          Shop all pieces
        </Link>
      </section>
    </>
  );
}
