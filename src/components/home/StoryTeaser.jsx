import Link from "next/link";
import Image from "next/image";
import { storyTeaser } from "@/data/content";
import Reveal, { RevealImage } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/icons";

export default function StoryTeaser() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-luxe grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="kicker">{storyTeaser.kicker}</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
            {storyTeaser.heading}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-muted">
            {storyTeaser.body}
          </p>
          <Link
            href={storyTeaser.cta.href}
            className="mt-8 inline-flex items-center gap-2 link-underline text-[12px] font-medium uppercase tracking-luxe"
          >
            {storyTeaser.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <RevealImage className="order-1 aspect-[4/3] bg-ivory-deep lg:order-2 lg:aspect-[5/6]">
          <Image
            src={storyTeaser.image}
            alt="Inside the Libas studio"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealImage>
      </div>
    </section>
  );
}
