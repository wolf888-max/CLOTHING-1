import "./globals.css";
import { Playfair_Display, Jost } from "next/font/google";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";
import Providers from "@/components/providers/Providers";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

/* Elegant serif for headings, clean sans for body — loaded via next/font */
// Both are variable fonts — no `weight` needed; all weights are available.
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  ...pageMetadata({}),
};

export const viewport = {
  themeColor: "#1c1c1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
          >
            Skip to content
          </a>
          <AnnouncementBar />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppFloat />
          {/* Atmosphere — fine grain + edge vignette across the whole site */}
          <div className="vignette-overlay" aria-hidden="true" />
          <div className="grain-overlay" aria-hidden="true" />
        </Providers>
      </body>
    </html>
  );
}
