// app/pricing/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PricingContent } from "@/components/sections/PricingContent";
import { pageSEO, siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: "Transparent Pricing for Elderly Care | MaziCare",
  description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
  keywords: ["elderly care pricing", "caregiver rates", "platform fees", "transparent pricing", "cost of care Greece"],
  openGraph: {
    title: "Transparent Pricing for Elderly Care | MaziCare",
    description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transparent Pricing for Elderly Care | MaziCare",
    description: "Clear pricing with no surprises. Understand our fees for families and caregivers. Contact us for personalized quotes.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
    languages: {
      "el-GR": `${siteConfig.url}/el/pricing`,
      "en": `${siteConfig.url}/pricing`,
    },
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingContent />
      <Footer />
    </div>
  );
}