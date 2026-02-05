// app/for-caregivers/page.tsx
import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ForCaregiversContent } from "@/components/sections/ForCaregiversContent";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/lib/seo.config";

export const metadata: Metadata = {
  title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
  description: "Δημιουργήστε επαγγελματική καριέρα φροντίδας ηλικιωμένων με δίκαιη πληρωμή, ευέλικτα ωράρια και πλήρη υποστήριξη. Εγγραφείτε τώρα στην MaziCare.",
  keywords: ["καριέρα φροντιστή", "εργασία φροντίδας ηλικιωμένων", "γηροκόμοι Ελλάδα", "επαγγελματίες φροντίδας"],
  openGraph: {
    title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
    description: "Δημιουργήστε επαγγελματική καριέρα φροντίδας ηλικιωμένων με δίκαιη πληρωμή, ευέλικτα ωράρια και πλήρη υποστήριξη.",
    url: `${siteConfig.url}/for-caregivers`,
    siteName: siteConfig.name,
    locale: "el_GR",
    type: "website",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Βρείτε Σταθερά Επαγγέλματα Φροντίδας Ηλικιωμένων στην Ελλάδα | MaziCare",
    description: "Δημιουργήστε επαγγελματική καριέρα φροντίδας ηλικιωμένων με δίκαιη πληρωμή, ευέλικτα ωράρια και πλήρη υποστήριξη.",
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/for-caregivers`,
    languages: {
      "el-GR": `${siteConfig.url}/el/for-caregivers`,
      "en": `${siteConfig.url}/for-caregivers`,
    },
  },
};

export default function ForCaregiversPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ForCaregiversContent />
      <Footer />
      <Toaster />
    </div>
  );
}