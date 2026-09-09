import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { buildGeneralEnquiryLink } from "@/lib/whatsapp";
import PageHeader from "@/components/layout/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, WhatsApp } from "@/components/ui/icons";

export const metadata = pageMetadata({
  title: "Contact",
  path: "/contact",
  description: `Get in touch with ${siteConfig.brandNameFull} — client care, wholesale, press and studio visits.`,
});

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <>
      <PageHeader
        kicker="Client Care"
        title="Contact"
        intro="Questions on sizing, an order, wholesale or press — we're a small team and we answer personally."
      />

      <div className="container-luxe grid gap-14 py-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
        {/* Details */}
        <div>
          <h2 className="font-serif text-2xl">Reach the studio</h2>

          <ul className="mt-6 space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
              <span>
                {contact.addressLines.map((l) => (
                  <span key={l} className="block text-ink-muted">
                    {l}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 shrink-0 text-gold" />
              <a href={`mailto:${contact.email}`} className="link-underline text-ink-muted">
                {contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-gold" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="link-underline text-ink-muted">
                {contact.phone}
              </a>
            </li>
          </ul>

          <a
            href={buildGeneralEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mt-8"
          >
            <WhatsApp className="h-4 w-4" />
            Message us on WhatsApp
          </a>

          <p className="mt-6 text-[13px] leading-relaxed text-ink-muted">
            Studio hours: {contact.hours}. Visits by appointment only.
          </p>

          {/* Map */}
          <div className="mt-8 aspect-[4/3] w-full overflow-hidden border border-ink/10 grayscale">
            <iframe
              title="Store location map"
              src={contact.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="font-serif text-2xl">Send a message</h2>
          <p className="mt-2 text-sm text-ink-muted">Fields marked * are required.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
