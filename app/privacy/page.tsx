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
      <Header />
      <main className="overflow-x-hidden py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Πολιτική Απορρήτου
            </h1>
            <p className="text-sm sm:text-base text-gray-500">
              Τελευταία ενημέρωση: 19 Οκτωβρίου 2025
            </p>
          </div>

          <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2">
              Η Προστασία των Δεδομένων σας είναι Προτεραιότητά μας
            </h3>
            <p className="text-sm sm:text-base text-blue-800">
              Στη MaziCare, δεσμευόμαστε για την προστασία της ιδιωτικότητας και την ασφάλεια των προσωπικών σας δεδομένων.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Section 1 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  1. Εισαγωγή
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Καλώς ήρθατε στη MaziCare («εμείς», «μας» ή «εμάς»). Η MaziCare είναι μια εταιρεία με έδρα την Ελλάδα που παρέχει μια ψηφιακή πλατφόρμα η οποία συνδέει ηλικιωμένα άτομα και τις οικογένειές τους με εξειδικευμένους φροντιστές.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα και να σεβόμαστε την ιδιωτικότητά σας.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η παρούσα Πολιτική Απορρήτου εξηγεί πώς συλλέγουμε, χρησιμοποιούμε, αποθηκεύουμε και προστατεύουμε τα προσωπικά σας δεδομένα όταν χρησιμοποιείτε την ιστοσελίδα και τις υπηρεσίες μας.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  2. Δεδομένα που Συλλέγουμε
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Συλλέγουμε μόνο τα προσωπικά δεδομένα που είναι απαραίτητα για την παροχή και βελτίωση των υπηρεσιών μας, όπως:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Ονοματεπώνυμο</li>
                  <li>Διεύθυνση email</li>
                  <li>Αριθμό τηλεφώνου</li>
                  <li>Διεύθυνση χρέωσης</li>
                  <li>Πληροφορίες πληρωμής (οι οποίες επεξεργάζονται με ασφάλεια μέσω PayPal)</li>
                  <li>Πληροφορίες σχετικές με τις ανάγκες φροντίδας του ηλικιωμένου ατόμου</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Δεν συλλέγουμε περιττά ή μη συναφή δεδομένα.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  3. Τρόποι Συλλογής Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Τα προσωπικά δεδομένα συλλέγονται με τους εξής τρόπους:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Όταν εγγράφεστε ή δημιουργείτε λογαριασμό στην ιστοσελίδα μας</li>
                  <li>Όταν επικοινωνείτε με την ομάδα υποστήριξής μας</li>
                  <li>Όταν πραγματοποιείτε πληρωμές μέσω PayPal</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Προς το παρόν <strong>δεν χρησιμοποιούμε cookies ή παρόμοιες τεχνολογίες παρακολούθησης</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Εάν αυτό αλλάξει, οι χρήστες θα ενημερωθούν και θα ζητηθεί ρητή συγκατάθεση, σύμφωνα με την Οδηγία ePrivacy και τον ελληνικό Νόμο 3471/2006.
                </p>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  4. Σκοπός Συλλογής Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Επεξεργαζόμαστε τα προσωπικά σας δεδομένα για τους εξής σκοπούς:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Για την παροχή, λειτουργία και βελτίωση των υπηρεσιών αντιστοίχισης φροντιστών</li>
                  <li>Για επικοινωνία μαζί σας σχετικά με τον λογαριασμό ή τις υπηρεσίες μας</li>
                  <li>Για την επεξεργασία πληρωμών και την έκδοση παραστατικών</li>
                  <li>Για συμμόρφωση με νομικές και λογιστικές υποχρεώσεις</li>
                  <li>Για αποστολή ενημερώσεων, προσφορών ή ενημερωτικών δελτίων (μόνο με τη συγκατάθεσή σας)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Μπορείτε να ανακαλέσετε τη συγκατάθεσή σας για προωθητικές ενέργειες οποτεδήποτε, επικοινωνώντας στο{" "}
                  <a href="mailto:info@mazicare.gr" className="text-blue-600 hover:text-blue-700 break-all font-semibold">
                    info@mazicare.gr
                  </a>.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  5. Νομική Βάση Επεξεργασίας (Άρθρο 6 GDPR)
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Η επεξεργασία των προσωπικών δεδομένων πραγματοποιείται βάσει μίας ή περισσοτέρων από τις παρακάτω νομικές βάσεις:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li><strong>Συναίνεση</strong> σας (Άρθρο 6(1)(α) GDPR)</li>
                  <li><strong>Εκπλήρωση σύμβασης</strong> μαζί σας (Άρθρο 6(1)(β))</li>
                  <li><strong>Συμμόρφωση με νομική υποχρέωση</strong> (Άρθρο 6(1)(γ))</li>
                  <li><strong>Νόμιμο συμφέρον</strong> της MaziCare για τη διασφάλιση της ασφάλειας της πλατφόρμας και την πρόληψη απάτης (Άρθρο 6(1)(στ))</li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  6. Κοινοποίηση Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare <strong>δεν πωλεί ούτε εκμισθώνει</strong> τα προσωπικά σας δεδομένα σε τρίτους για διαφημιστικούς σκοπούς.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3 mb-3">
                  Ενδέχεται να κοινοποιήσουμε περιορισμένα δεδομένα μόνο σε:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li><strong>Αξιόπιστους παρόχους υπηρεσιών</strong>, όπως το PayPal, για την επεξεργασία πληρωμών</li>
                  <li><strong>Παρόχους φιλοξενίας ή τεχνικής υποστήριξης</strong>, οι οποίοι δεσμεύονται από συμβάσεις εμπιστευτικότητας και επεξεργασίας δεδομένων</li>
                  <li><strong>Δημόσιες αρχές</strong>, μόνο όταν αυτό απαιτείται από τον νόμο</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Οι οικογένειες που χρησιμοποιούν την υπηρεσία μπορούν να κοινοποιούν εθελοντικά συγκεκριμένες πληροφορίες φροντίδας απευθείας στους φροντιστές - η κοινοποίηση αυτή είναι <strong>προαιρετική</strong> και <strong>αποκλειστικά υπό τον έλεγχο των χρηστών</strong>.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  7. Διατήρηση Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο είναι απαραίτητο προκειμένου να:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Παρέχουμε τις υπηρεσίες μας, ή</li>
                  <li>Συμμορφωνόμαστε με νομικές, φορολογικές και λογιστικές υποχρεώσεις.</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Κατά κανόνα, τα δεδομένα τηρούνται έως και <strong>πέντε (5) έτη</strong> μετά την τελευταία σας αλληλεπίδραση με τη MaziCare.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Εάν ζητήσετε τη διαγραφή των δεδομένων σας, αυτά θα αφαιρεθούν με ασφάλεια, εκτός εάν η διατήρησή τους απαιτείται από τον νόμο.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  8. Δικαιώματά σας σύμφωνα με τον GDPR
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Ως υποκείμενο δεδομένων βάσει του <strong>Γενικού Κανονισμού για την Προστασία Δεδομένων (GDPR)</strong>, έχετε τα εξής δικαιώματα:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Πρόσβαση στα προσωπικά δεδομένα που τηρούμε για εσάς</li>
                  <li>Διόρθωση ανακριβών ή ελλιπών δεδομένων</li>
                  <li>Διαγραφή των δεδομένων σας («δικαίωμα στη λήθη»)</li>
                  <li>Περιορισμό ή αντίρρηση στην επεξεργασία</li>
                  <li>Φορητότητα δεδομένων</li>
                  <li>Ανάκληση της συγκατάθεσής σας ανά πάσα στιγμή</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε στο{" "}
                  <a href="mailto:info@mazicare.gr" className="text-blue-600 hover:text-blue-700 break-all font-semibold">
                    info@mazicare.gr
                  </a>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Τα αιτήματα εξετάζονται εντός <strong>30 ημερών</strong>, σύμφωνα με τον GDPR.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  9. Ασφάλεια Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mb-3">
                  Εφαρμόζουμε κατάλληλα τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας, όπως:
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700 ml-4">
                  <li>Κρυπτογράφηση SSL για όλες τις επικοινωνίες μέσω της ιστοσελίδας</li>
                  <li>Ασφαλή αποθήκευση δεδομένων σε servers εντός της Ευρωπαϊκής Ένωσης</li>
                  <li>Περιορισμένη πρόσβαση μόνο σε εξουσιοδοτημένο προσωπικό</li>
                  <li>Χρήση αξιόπιστων τρίτων συνεργατών (όπως το PayPal)</li>
                </ul>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Αν και λαμβάνουμε κάθε εύλογο μέτρο προστασίας, κανένα διαδικτυακό σύστημα δεν είναι απολύτως ασφαλές. Συνιστούμε τη χρήση ισχυρών κωδικών πρόσβασης και την άμεση ειδοποίησή μας σε περίπτωση ύποπτης μη εξουσιοδοτημένης πρόσβασης.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  10. Διεθνείς Μεταφορές Δεδομένων
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Τα δεδομένα σας αποθηκεύονται και επεξεργάζονται κυρίως <strong>εντός της Ευρωπαϊκής Ένωσης</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Εάν απαιτηθεί μεταφορά δεδομένων εκτός ΕΕ (π.χ. μέσω PayPal), αυτή θα πραγματοποιείται σύμφωνα με <strong>επαρκείς διασφαλίσεις</strong> που προβλέπονται από τον GDPR, όπως οι <strong>Τυποποιημένες Συμβατικές Ρήτρες</strong> (Standard Contractual Clauses) ή αποφάσεις επάρκειας.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  11. Ενημερώσεις της Πολιτικής Απορρήτου
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Η MaziCare μπορεί να ενημερώνει την παρούσα Πολιτική Απορρήτου περιοδικά ώστε να αντικατοπτρίζει αλλαγές στις πρακτικές μας ή στις νομικές υποχρεώσεις μας.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Η πιο πρόσφατη έκδοση θα είναι πάντοτε διαθέσιμη στην ιστοσελίδα μας, με σαφή ένδειξη ημερομηνίας <strong>«Τελευταία ενημέρωση»</strong>.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words mt-3">
                  Με τη συνέχιση χρήσης των υπηρεσιών μας μετά τη δημοσίευση αλλαγών, αποδέχεστε τους ενημερωμένους όρους.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  12. Επικοινωνία
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">
                  Για οποιαδήποτε απορία, ανησυχία ή αίτημα που αφορά τα προσωπικά σας δεδομένα, επικοινωνήστε με:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm sm:text-base font-semibold text-gray-900">MaziCare</p>
                  <p className="text-sm sm:text-base text-gray-700 mt-2">
                    📧 Email:{" "}
                    <a href="mailto:info@mazicare.gr" className="text-blue-600 hover:text-blue-700 break-all">
                      info@mazicare.gr
                    </a>
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Για ερωτήσεις σχετικά με την πολιτική απορρήτου, επικοινωνήστε μαζί μας στο{" "}
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
