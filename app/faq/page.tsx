import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FAQContent } from "@/components/sections/FAQContent";
import { pageSEO, siteConfig, generateBreadcrumbSchema } from "@/lib/seo.config";
import Script from "next/script";

export const metadata: Metadata = {
  title: pageSEO.faq.title,
  description: pageSEO.faq.description,
  keywords: pageSEO.faq.keywords,
  openGraph: {
    title: pageSEO.faq.title,
    description: pageSEO.faq.description,
    url: `${siteConfig.url}/faq`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageSEO.faq.title,
    description: pageSEO.faq.description,
  },
  alternates: {
    canonical: `${siteConfig.url}/faq`,
    languages: {
      "el-GR": `${siteConfig.url}/faq`,
      "en": `${siteConfig.url}/faq`,
    },
  },
};

export default function FAQPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Αρχική", url: siteConfig.url },
    { name: "Συχνές Ερωτήσεις", url: `${siteConfig.url}/faq` },
  ]);

  // FAQ Schema is now handled dynamically by the translations
  const faqSchemaEl = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Τι είναι η MaziCare και σε ποιους απευθύνεται;",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Η MaziCare είναι μια ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Script
        id="faq-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaEl),
        }}
        strategy="afterInteractive"
      />
      <Header />
      <FAQContent />
      <Footer />
    </div>
  );
}
