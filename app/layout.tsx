import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { Lightbox } from "@/components/layout/Lightbox";
import { Motion } from "@/components/layout/Motion";
import { organization, website } from "@/lib/jsonld";
import { site } from "@/content/site";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/home.css";
import "@/styles/blocks.css";

// Variable font, weights 200–800, downloaded at build time and served from our own origin.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Development & Engineering Teams`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  icons: {
    // Brand mark (bracket + check). Regenerate the PNGs from logo-mark.svg if it changes.
    icon: [{ url: "/images/logo-mark.svg", type: "image/svg+xml" }],
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#153762",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable}${site.whatsapp.replace(/\D/g, "") ? " has-float" : ""}`}>
      <body>
        <a href="#main" className="sr-only">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={[organization(), website()]} />
        <Motion />
        <Lightbox />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
