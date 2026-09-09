import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { shippingReturns } from "@/data/content";
import PageHeader from "@/components/layout/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { Truck } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Shipping & Returns",
  path: "/shipping-returns",
  description:
    "Libas Clothing shipping timelines, international delivery, duties, and our 14-day return and exchange policy.",
});

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHeader
        kicker="Policies"
        title="Shipping & Returns"
        intro="Everything about how your order reaches you, and what to do if something isn't right."
      />

      <div className="container-luxe grid gap-14 py-16 lg:grid-cols-[220px_1fr] lg:gap-20 lg:py-20">
        {/* Quick index */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28 space-y-2 text-[12px] uppercase tracking-luxe text-ink-muted">
            {shippingReturns.sections.map((s) => (
              <a
                key={s.title}
                href={`#${slugify(s.title)}`}
                className="block py-1 transition-colors hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="max-w-2xl space-y-14">
          <div className="flex items-start gap-3 border border-ink/15 bg-ivory-deep p-5">
            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm leading-relaxed text-ink-muted">
              Orders are placed and confirmed over WhatsApp. Once payment is received, the
              timelines below apply.
            </p>
          </div>

          {shippingReturns.sections.map((s) => (
            <Reveal key={s.title} as="section" className="scroll-mt-28" y={16}>
              <div id={slugify(s.title)}>
                <h2 className="font-serif text-2xl">{s.title}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-[15px] leading-relaxed text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <p className="border-t border-ink/10 pt-8 text-sm text-ink-muted">
            Questions about a specific order?{" "}
            <Link href="/contact" className="link-underline text-ink">
              Contact the studio
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}

function slugify(s) {
  return s.toLowerCase().replace(/[^\w]+/g, "-").replace(/(^-|-$)/g, "");
}
