import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNav } from "@/config/navigation";
import Newsletter from "@/components/home/Newsletter";
import {
  Instagram,
  Facebook,
  Pinterest,
  TikTok,
  YouTube,
  Mail,
  Phone,
  MapPin,
} from "@/components/ui/icons";

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  pinterest: Pinterest,
  tiktok: TikTok,
  youtube: YouTube,
};

export default function Footer({ withNewsletter = true }) {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.social).filter(([, url]) => url);

  return (
    <footer className="mt-24 border-t border-ink/10 bg-ivory-deep">
      {withNewsletter && <Newsletter />}

      <div className="container-luxe grid grid-cols-2 gap-10 py-16 md:grid-cols-4 lg:grid-cols-5">
        {/* Brand block */}
        <div className="col-span-2 lg:col-span-2">
          <p className="font-serif text-2xl font-semibold tracking-[0.28em]">
            {siteConfig.brandName}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            {siteConfig.description}
          </p>

          <ul className="mt-6 space-y-2 text-sm text-ink-muted">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{siteConfig.contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              <a href={`mailto:${siteConfig.contact.email}`} className="link-underline">
                {siteConfig.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0" />
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="link-underline">
                {siteConfig.contact.phone}
              </a>
            </li>
          </ul>

          {socials.length > 0 && (
            <div className="mt-6 flex items-center gap-3">
              {socials.map(([key, url]) => {
                const Icon = socialIcons[key];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteConfig.brandName} on ${key}`}
                    className="grid h-9 w-9 place-items-center border border-ink/20 text-ink/70 transition-colors hover:border-ink hover:text-ink"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Link columns */}
        {footerNav.map((col) => (
          <div key={col.title}>
            <h4 className="kicker mb-4 font-sans">{col.title}</h4>
            <ul className="space-y-2.5">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="link-underline text-sm text-ink-muted hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-ink/10">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 py-6 text-[11px] uppercase tracking-luxe text-ink-muted sm:flex-row">
          <p>
            © {year} {siteConfig.brandNameFull}. All rights reserved.
          </p>
          <p>Handmade in limited runs · {siteConfig.contact.hours}</p>
        </div>
      </div>
    </footer>
  );
}
