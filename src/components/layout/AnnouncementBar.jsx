import { siteConfig } from "@/config/site";

/** Thin marquee-style announcement strip above the header. */
export default function AnnouncementBar() {
  if (!siteConfig.announcement) return null;
  return (
    <div className="border-b border-ink/10 bg-ivory-deep text-ink">
      <div className="container-luxe flex items-center justify-center py-2">
        <p className="text-[10.5px] font-medium uppercase tracking-luxe text-gold-light">
          {siteConfig.announcement}
        </p>
      </div>
    </div>
  );
}
