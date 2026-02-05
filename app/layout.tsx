import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig, allKeywords } from "@/lib/seo.config";
import { LanguageProvider } from "@/lib/language-context";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.description.el} ${siteConfig.description.en}`,
  keywords: allKeywords,
  authors: [{ name: siteConfig.creator, url: siteConfig.url }],
  creator: siteConfig.creator,
  publisher: siteConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US", "en_GB"],
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description.el,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "MaziCare - Elderly Care Platform",
        type: "image/jpeg",
      },
      {
        url: `${siteConfig.url}/assets/logo.png`,
        width: 800,
        height: 600,
        alt: "MaziCare Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description.en,
    creator: "@mazicare",
    site: "@mazicare",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "el-GR": siteConfig.url,
      "en-US": `${siteConfig.url}/en`,
      "en-GB": `${siteConfig.url}/en`,
      "x-default": siteConfig.url,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    // Note: For Bing verification, add meta tag in head section or use Bing Webmaster Tools
  },
  category: "Healthcare",
  classification: "Elder Care Services",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030213",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" dir="ltr" suppressHydrationWarning className="notranslate" translate="no">
      <head>
        <SEOHead />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Additional meta tags for better SEO */}
        <meta name="geo.region" content="GR" />
        <meta name="geo.placename" content="Athens" />
        <meta name="geo.position" content="37.9838;23.7275" />
        <meta name="ICBM" content="37.9838, 23.7275" />

        {/* Prevent Google Translate from auto-translating (breaks app's language switcher) */}
        <meta name="google" content="notranslate" />

        {/* Language and locale tags */}
        <link rel="alternate" hrefLang="el" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en" href={`${siteConfig.url}/en`} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Microsoft Clarity Analytics */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ttgmb3w4ly");
          `}
        </Script>

        {/* Google Analytics (Add your GA4 ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

