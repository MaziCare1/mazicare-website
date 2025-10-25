import { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { pageSEO, siteConfig, generateBreadcrumbSchema } from "@/lib/seo.config";
import Script from "next/script";

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
      <Header />
      <main className="overflow-x-hidden py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Όροι Χρήσης
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Τελευταία ενημέρωση: 19 Οκτωβρίου 2025
            </p>
            <p className="text-sm text-gray-500">Έκδοση: 2.0</p>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  1. Εισαγωγή
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Καλώς ήλθατε στη MaziCare (&quot;Πλατφόρμα&quot;). Οι παρόντες Όροι Χρήσης (&quot;Όροι&quot;) ρυθμίζουν την πρόσβαση και χρήση της Πλατφόρμας από Επισκέπτες, Εγγεγραμμένες Οικογένειες και Φροντιστές (&quot;Χρήστες&quot;).
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Με την είσοδο ή εγγραφή σας, συμφωνείτε ότι δεσμεύεστε νομικά από τους Όρους αυτούς και αποδέχεστε την Πολιτική Απορρήτου της MaziCare.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  2. Παρεχόμενες Υπηρεσίες
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare λειτουργεί ως <strong>ενδιάμεσος ψηφιακός τόπος διασύνδεσης</strong> μεταξύ οικογενειών που αναζητούν υπηρεσίες φροντίδας και ανεξάρτητων φροντιστών.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η MaziCare <strong>δεν απασχολεί</strong>, <strong>δεν εκπροσωπεί</strong> και <strong>δεν ευθύνεται</strong> για τη συμπεριφορά ή ποιότητα των υπηρεσιών των φροντιστών.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Όλες οι συμφωνίες παροχής υπηρεσιών συνάπτονται <strong>απευθείας</strong> μεταξύ οικογένειας και φροντιστή.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  3. Εγγραφή Χρήστη
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Οι Χρήστες πρέπει να:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Είναι άνω των 18 ετών.</li>
                  <li>Παρέχουν ακριβή και πλήρη στοιχεία.</li>
                  <li>Αποδέχονται τους όρους επεξεργασίας προσωπικών δεδομένων (σύμφωνα με τον GDPR).</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Οι φροντιστές υποχρεούνται να υποβάλουν <strong>δελτίο ταυτότητας, πιστοποιητικό ποινικού μητρώου, βεβαιώσεις προσόντων και συστάσεις</strong>, πριν εγκριθεί ο λογαριασμός τους.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  4. Ασφάλεια Λογαριασμού
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Ο Χρήστης είναι υπεύθυνος για τη διατήρηση της εμπιστευτικότητας των στοιχείων σύνδεσης.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η MaziCare δεν ευθύνεται για απώλεια ή ζημία που προκύπτει από μη εξουσιοδοτημένη πρόσβαση λόγω αμέλειας του Χρήστη.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  5. Έλεγχος και Επαλήθευση
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare δύναται να διενεργεί ή να αναθέτει σε συνεργάτες <strong>ελέγχους ταυτότητας, ποινικού μητρώου και επαγγελματικών προσόντων</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Τα αποτελέσματα χρησιμοποιούνται αποκλειστικά για σκοπούς διασφάλισης αξιοπιστίας και υπόκεινται σε <strong>αυστηρή προστασία προσωπικών δεδομένων</strong>.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  6. Κανόνες Χρήσης
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Απαγορεύεται:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Η χρήση της Πλατφόρμας για παράνομες, ανήθικες ή παραπλανητικές δραστηριότητες.</li>
                  <li>Η άμεση παράκαμψη των μηχανισμών πληρωμής ή αξιολόγησης.</li>
                  <li>Η προσβολή της αξιοπρέπειας άλλων χρηστών ή η δημοσίευση δυσφημιστικού περιεχομένου.</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η MaziCare διατηρεί το δικαίωμα να αναστείλει ή διαγράψει λογαριασμό που παραβιάζει τους όρους.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  7. Πληρωμές & Προμήθειες
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Όλες οι πληρωμές διεκπεραιώνονται <strong>μέσω ασφαλών συνεργαζόμενων παρόχων πληρωμών</strong> (π.χ. Viva Wallet).
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η MaziCare μπορεί να επιβάλλει <strong>προμήθεια ή συνδρομή</strong>, όπως δημοσιεύεται στην ιστοσελίδα.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Σε περίπτωση ακύρωσης ή επιστροφής, εφαρμόζονται οι εκάστοτε πολιτικές επιστροφών.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  8. Περιεχόμενο & Αξιολογήσεις
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Το περιεχόμενο που δημοσιεύεται από χρήστες (κριτικές, μηνύματα, φωτογραφίες) πρέπει να είναι ακριβές και ευπρεπές.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η MaziCare έχει δικαίωμα να αφαιρεί ή να τροποποιεί περιεχόμενο που παραβιάζει τους Όρους ή τον Ν. 2251/1994 περί προστασίας καταναλωτή.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  9. Περιορισμός Ευθύνης
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Η MaziCare δεν ευθύνεται για:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Πράξεις, παραλείψεις ή συμπεριφορές φροντιστών ή οικογενειών.</li>
                  <li>Οποιαδήποτε βλάβη, τραυματισμό ή απώλεια που προκύπτει από ιδιωτική συμφωνία μεταξύ Χρηστών.</li>
                  <li>Τεχνικά προβλήματα, διακοπές ή περιστατικά ανωτέρας βίας.</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Σε καμία περίπτωση η ευθύνη της MaziCare δεν θα υπερβαίνει το συνολικό ποσό συνδρομών που κατέβαλε ο Χρήστης κατά το τελευταίο έτος.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  10. Τερματισμός Λογαριασμού
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare μπορεί να αναστείλει ή να τερματίσει πρόσβαση αν υπάρχει παραβίαση των Όρων ή νομοθεσίας.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Ο Χρήστης μπορεί να ζητήσει διαγραφή λογαριασμού μέσω email στο{" "}
                  <a href="mailto:info@mazicare.gr" className="text-blue-600 hover:text-blue-700 break-all">
                    info@mazicare.gr
                  </a>.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  11. Τροποποιήσεις
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare δύναται να τροποποιεί τους Όρους με σχετική ειδοποίηση.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η συνέχιση χρήσης της Πλατφόρμας μετά από ειδοποίηση θεωρείται αποδοχή των αλλαγών.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  12. Εφαρμοστέο Δίκαιο & Δικαιοδοσία
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Οι παρόντες Όροι διέπονται από το <strong>Ελληνικό Δίκαιο</strong> και ιδίως τις διατάξεις του <strong>Ν. 2251/1994</strong>, <strong>Ν. 4727/2020 (Ψηφιακή Διακυβέρνηση)</strong> και <strong>GDPR (Κανονισμός 2016/679)</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Κάθε διαφορά υπάγεται στην <strong>αποκλειστική αρμοδιότητα των Δικαστηρίων Αθηνών</strong>.
                </p>
              </section>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Για ερωτήσεις σχετικά με τους όρους χρήσης, επικοινωνήστε μαζί μας στο{" "}
              <a href="mailto:info@mazicare.gr" className="text-blue-600 hover:text-blue-700 break-all">
                info@mazicare.gr
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
