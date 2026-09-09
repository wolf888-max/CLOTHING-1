import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { faqs } from "@/data/content";
import PageHeader from "@/components/layout/PageHeader";
import Accordion from "@/components/ui/Accordion";
import { SizeGuideContent } from "@/components/ui/SizeGuide";
import { buildGeneralEnquiryLink } from "@/lib/whatsapp";
import { WhatsApp } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "FAQ & Size Guide",
  path: "/faq",
  description:
    "Answers on ordering via WhatsApp, payment, shipping, returns and sizing — plus the full Libas Clothing size guide.",
});

/* FAQ structured data for search engines */
function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />

      <PageHeader
        kicker="Help"
        title="FAQ & Size Guide"
        intro="If your question isn't answered here, message us on WhatsApp — we usually reply within the hour during studio hours."
      />

      <div className="container-luxe py-16 lg:py-20">
        <div className="lg:grid lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <h2 className="mb-2 font-serif text-2xl">Common questions</h2>
            <Accordion items={faqs} defaultOpen={0} />

            <div id="size-guide" className="mt-20 scroll-mt-28">
              <h2 className="mb-6 font-serif text-3xl">Size guide</h2>
              <SizeGuideContent />
            </div>
          </div>

          <aside className="mt-12 lg:mt-0">
            <div className="sticky top-28 bg-ivory-deep p-6">
              <h3 className="font-serif text-xl">Still unsure?</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Tell us your usual size in another brand and what you&apos;re considering — we&apos;ll
                advise on fit.
              </p>
              <a
                href={buildGeneralEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-5 w-full"
              >
                <WhatsApp className="h-4 w-4" />
                Ask on WhatsApp
              </a>
              <Link
                href="/shipping-returns"
                className="mt-3 block text-center link-underline text-[12px] font-medium uppercase tracking-luxe"
              >
                Shipping &amp; Returns
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
