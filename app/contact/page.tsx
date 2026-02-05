// app/contact/page.tsx
import { Metadata } from "next";
import { siteConfig } from "@/lib/seo.config";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact MaziCare | Elderly Care Support in Greece",
  description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
  keywords: ["contact elderly care", "caregiver support", "family assistance", "partnership inquiries", "help Greece"],
  openGraph: {
    title: "Contact MaziCare | Elderly Care Support in Greece",
    description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MaziCare | Elderly Care Support in Greece",
    description: "Get in touch with MaziCare for questions, support, or partnership inquiries. We're here to help with elderly care needs.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
    languages: {
      "el-GR": `${siteConfig.url}/el/contact`,
      "en": `${siteConfig.url}/contact`,
    },
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}