import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Lightbox } from "@/components/layout/Lightbox";
import { Motion } from "@/components/layout/Motion";
import { Footer } from "@/components/layout/Footer";
import { GoogleAds } from "@/components/layout/GoogleAds";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
import { IconSprite } from "@/components/ui/SpriteIcons";
import { organization, website } from "@/lib/jsonld";
import { site } from "@/content/site";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/home.css";
import "@/styles/blocks.css";
import "@/styles/resources.css";

// Variable font, weights 200–800, downloaded at build time and served from our own origin.
// Only the upright face is preloaded; the italic, used for a few short notes, loads when a page needs it.
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
  variable: "--font-jakarta",
});

const jakartaItalic = Plus_Jakarta_Sans({
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
  variable: "--font-jakarta-italic",
  preload: false,
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
    <html lang="en" className={`${jakarta.variable} ${jakartaItalic.variable}${site.whatsapp.replace(/\D/g, "") ? " has-float" : ""}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.googleTagManager.id}');`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${site.googleAnalytics.id}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.googleAnalytics.id}');`,
          }}
        />
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${site.clarity.id}");`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.googleTagManager.id}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <IconSprite />
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
        <GoogleAds />
      </body>
    </html>
  );
}
