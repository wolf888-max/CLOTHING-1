import { siteConfig } from "@/config/site";

export default function robots() {
  const base = siteConfig.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/search"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
