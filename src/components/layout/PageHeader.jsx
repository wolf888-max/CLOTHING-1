import Reveal from "@/components/ui/Reveal";

/** Simple editorial page header used on secondary pages. */
export default function PageHeader({ kicker, title, intro, align = "left" }) {
  return (
    <header
      className={`container-luxe border-b border-ink/10 py-14 lg:py-20 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      <Reveal>
        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro && (
          <p
            className={`mt-4 text-[15px] leading-relaxed text-ink-muted ${
              align === "center" ? "mx-auto max-w-xl" : "max-w-xl"
            }`}
          >
            {intro}
          </p>
        )}
      </Reveal>
    </header>
  );
}
