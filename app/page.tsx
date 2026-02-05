// app/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { pageSEO, siteConfig } from "@/lib/seo.config";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  openGraph: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "el-GR": siteConfig.url,
      "en": `${siteConfig.url}/en`,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Remove the fixed header spacer since Header likely handles this */}
      <main className="pt-0">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
      </main>
      <Footer />
      <CookieConsent/>
      <Toaster />
    </div>
  );
}