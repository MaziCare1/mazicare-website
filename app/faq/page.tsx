import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
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
  const faqs = [
    {
      question: "Τι είναι η MaziCare και σε ποιους απευθύνεται;",
      answer: "Η MaziCare είναι μια ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. Απευθύνεται σε οικογένειες που αναζητούν αξιόπιστους φροντιστές για τους ηλικιωμένους συγγενείς τους, καθώς και σε επαγγελματίες φροντιστές που θέλουν να προσφέρουν υπηρεσίες μέσω μιας ασφαλούς και οργανωμένης πλατφόρμας."
    },
    {
      question: "Πώς λειτουργεί η αντιστοίχιση φροντιστών με οικογένειες;",
      answer: "Η MaziCare σας επιτρέπει να βρείτε φροντιστές που ταιριάζουν με τις ανάγκες του ηλικιωμένου σας, βάσει κριτηρίων όπως: είδος φροντίδας, τοποθεσία, εμπειρία, διαθεσιμότητα και γλωσσικές προτιμήσεις. Οι οικογένειες μπορούν να δουν αναλυτικά προφίλ φροντιστών, πιστοποιήσεις, αξιολογήσεις από άλλους χρήστες και να επικοινωνήσουν απευθείας πριν την κράτηση. Η διαδικασία είναι απλή, διαφανής και σχεδιασμένη για να προσφέρει ασφάλεια και σιγουριά."
    },
    {
      question: "Είναι ασφαλή τα προσωπικά και ιατρικά δεδομένα που καταχωρώ;",
      answer: "Ναι. Η MaziCare συμμορφώνεται πλήρως με τον Γενικό Κανονισμό για την Προστασία Δεδομένων (GDPR) και την ελληνική νομοθεσία. Όλα τα δεδομένα αποθηκεύονται με κρυπτογράφηση σε ασφαλείς servers και δεν κοινοποιούνται σε τρίτους χωρίς τη ρητή συγκατάθεσή σας."
    },
    {
      question: "Ποιες υπηρεσίες προσφέρει η πλατφόρμα;",
      answer: "Η MaziCare προσφέρει: Αντιστοίχιση με φροντιστές και επαγγελματίες υγείας • Πίνακα ελέγχου φροντίδας με ενημερώσεις σε πραγματικό χρόνο • Κοινωνική σύνδεση για ηλικιωμένους (εκδηλώσεις, βιντεοκλήσεις, άρθρα) • Οικονομικό βοηθό για αγορές προϊόντων φροντίδας • Εργαλεία για οικογένειες και φροντιστές (προγραμματισμός, πληρωμές, αξιολογήσεις)"
    },
    {
      question: "Πώς μπορώ να πληρώσω για τις υπηρεσίες;",
      answer: "Οι πληρωμές πραγματοποιούνται μέσω της πλατφόρμας με ασφαλείς μεθόδους (Viva Wallet, πιστωτική/χρεωστική κάρτα, τραπεζική μεταφορά). Η MaziCare εκδίδει νόμιμα παραστατικά (τιμολόγια ή αποδείξεις) σύμφωνα με την ελληνική φορολογική νομοθεσία."
    },
    {
      question: "Τι γίνεται αν δεν είμαι ικανοποιημένος με τον φροντιστή;",
      answer: "Μπορείτε να αξιολογήσετε τον φροντιστή, να ζητήσετε αλλαγή ή να επικοινωνήσετε με την ομάδα υποστήριξης της MaziCare. Η πλατφόρμα δίνει προτεραιότητα στην ασφάλεια και την ποιότητα φροντίδας, και κάθε φροντιστής υπόκειται σε συνεχή έλεγχο και αξιολόγηση."
    },
    {
      question: "Πώς διασφαλίζεται η ποιότητα των φροντιστών;",
      answer: "Όλοι οι φροντιστές περνούν από αυστηρή διαδικασία επαλήθευσης που περιλαμβάνει: Έλεγχο ποινικού μητρώου • Πιστοποιήσεις και επαγγελματικά προσόντα • Συνεντεύξεις και αξιολογήσεις από προηγούμενους χρήστες • Συνεχή εκπαίδευση μέσω της πλατφόρμας"
    },
    {
      question: "Μπορώ να χρησιμοποιήσω την πλατφόρμα αν ζω εκτός Ελλάδας αλλά έχω συγγενή στην Ελλάδα;",
      answer: "Ναι. Η MaziCare είναι προσβάσιμη από το εξωτερικό και μπορείτε να διαχειρίζεστε τη φροντίδα του συγγενή σας στην Ελλάδα εξ αποστάσεως, μέσω του οικογενειακού πίνακα ελέγχου και των εργαλείων επικοινωνίας."
    },
    {
      question: "Πώς μπορώ να διαγράψω τον λογαριασμό μου και τα δεδομένα μου;",
      answer: "Μπορείτε να ζητήσετε διαγραφή του λογαριασμού και των δεδομένων σας οποιαδήποτε στιγμή μέσω των ρυθμίσεων ή με email στο info@mazicare.gr. Η MaziCare θα διαγράψει όλα τα δεδομένα σας εντός 30 ημερών, εκτός αν υπάρχει νομική υποχρέωση διατήρησης."
    },
    {
      question: "Πώς μπορώ να επικοινωνήσω με την υποστήριξη πελατών;",
      answer: "Μπορείτε να επικοινωνήσετε με την ομάδα υποστήριξης μέσω: 📧 Email: info@mazicare.gr • 📞 Τηλέφωνο: +30 6955117140"
    }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Αρχική", url: siteConfig.url },
    { name: "Συχνές Ερωτήσεις", url: `${siteConfig.url}/faq` },
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
          __html: JSON.stringify(faqSchema),
        }}
        strategy="afterInteractive"
      />
      <Header />
      <main className="overflow-x-hidden py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <HelpCircle className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Συχνές Ερωτήσεις (FAQ)
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Βρείτε απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με την MaziCare
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-sm sm:text-base">{index + 1}</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 break-words">
                        {faq.question}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-3">
              Δεν βρήκατε αυτό που ψάχνετε;
            </h3>
            <p className="text-sm sm:text-base text-blue-800 mb-4">
              Επικοινωνήστε μαζί μας για περισσότερες πληροφορίες
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm sm:text-base">
              <a 
                href="mailto:info@mazicare.gr" 
                className="text-blue-600 hover:text-blue-700 font-medium break-all"
              >
                📧 info@mazicare.gr
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a 
                href="tel:+306955117140" 
                className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
              >
                📞 +30 6955 117 140
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
