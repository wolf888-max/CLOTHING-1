import { siteConfig } from "@/config/site";
import { getAllProducts } from "@/data/products";

export default function sitemap() {
  const base = siteConfig.url.replace(/\/$/, "");
  const staticPaths = [
    "",
    "/shop",
    "/about",
    "/contact",
    "/faq",
    "/shipping-returns",
    "/wishlist",
    "/search",
    "/cart",
  ];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "" || p === "/shop" ? "weekly" : "monthly",
    priority: p === "" ? 1 : 0.7,
  }));

  const productEntries = getAllProducts().map((prod) => ({
    url: `${base}/product/${prod.slug}`,
    lastModified: new Date(prod.createdAt),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}
