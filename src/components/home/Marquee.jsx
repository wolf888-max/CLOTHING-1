/** Decorative scrolling strip of brand phrases. Purely visual (aria-hidden). */
const PHRASES = [
  "Natural fibres",
  "Made in limited runs",
  "Finished by hand",
  "Worldwide shipping",
  "Order via WhatsApp",
];

export default function Marquee() {
  const row = [...PHRASES, ...PHRASES];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ivory py-4" aria-hidden>
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {row.map((p, i) => (
          <span
            key={i}
            className="flex items-center gap-10 text-[11px] font-medium uppercase tracking-luxe text-ink-muted"
          >
            {p}
            <span className="text-gold">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
