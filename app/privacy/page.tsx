import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { pageSEO, siteConfig, generateBreadcrumbSchema } from "@/lib/seo.config";
import Script from "next/script";

export const metadata: Metadata = {
  title: pageSEO.privacy.title,
  description: pageSEO.privacy.description,
  keywords: pageSEO.privacy.keywords,
  openGraph: {
    title: pageSEO.privacy.title,
    description: pageSEO.privacy.description,
    url: `${siteConfig.url}/privacy`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageSEO.privacy.title,
    description: pageSEO.privacy.description,
  },
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
    languages: {
      "el-GR": `${siteConfig.url}/privacy`,
      "en": `${siteConfig.url}/privacy`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

import PrivacyClient from "./PrivacyClient";

export default function PrivacyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Αρχική", url: siteConfig.url },
    { name: "Πολιτική Απορρήτου", url: `${siteConfig.url}/privacy` },
  ]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Script
        id="privacy-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="afterInteractive"
      />
      <PrivacyClient />
    </div>
  );
}
