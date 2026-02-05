// app/find-care/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { FindCareContent } from "@/components/sections/FindCareContent";
import { siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
  description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
  keywords: ["φροντίδα ηλικιωμένων Ελλάδα", "αντιστοίχιση φροντιστών", "οικιακή φροντίδα", "επαληθευμένοι φροντιστές", "οικογενειακή υποστήριξη"],
  openGraph: {
    title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
    description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
    url: `${siteConfig.url}/find-care`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Βρείτε Αξιόπιστη Φροντίδα Ηλικιωμένων στο Σπίτι στην Ελλάδα | MaziCare",
    description: "Βρείτε επαληθευμένους φροντιστές με ελέγχους ιστορικού, συνεντεύξεις και συνεχή υποστήριξη για τα αγαπημένα σας πρόσωπα στην Ελλάδα.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/find-care`,
    languages: {
      "el-GR": `${siteConfig.url}/el/find-care`,
      "en": `${siteConfig.url}/find-care`,
    },
  },
};

export default function FindCarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FindCareContent />
      <Footer />
    </div>
  );
}