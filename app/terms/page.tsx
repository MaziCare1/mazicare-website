import { Metadata } from "next";
import { pageSEO, siteConfig, generateBreadcrumbSchema } from "@/lib/seo.config";
import Script from "next/script";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: pageSEO.terms.title,
  description: pageSEO.terms.description,
  keywords: pageSEO.terms.keywords,
  openGraph: {
    title: pageSEO.terms.title,
    description: pageSEO.terms.description,
    url: `${siteConfig.url}/terms`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageSEO.terms.title,
    description: pageSEO.terms.description,
  },
  alternates: {
    canonical: `${siteConfig.url}/terms`,
    languages: {
      "el-GR": `${siteConfig.url}/terms`,
      "en": `${siteConfig.url}/terms`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Αρχική", url: siteConfig.url },
    { name: "Όροι Χρήσης", url: `${siteConfig.url}/terms` },
  ]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Script
        id="terms-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="afterInteractive"
      />
      <TermsClient />
    </div>
  );
}
