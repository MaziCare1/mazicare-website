import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Globe, Trophy } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ποιοι Είμαστε */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ποιοι Είμαστε
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
            Η MaziCare είναι ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα, σχεδιασμένη για να υποστηρίζει οικογένειες και ηλικιωμένους με αξιοπρέπεια, ασφάλεια και καινοτομία. Ιδρύθηκε από τον Φώτιο Κουζιώρτη, εμπνευσμένος από την προσωπική του εμπειρία φροντίδας των παππούδων του στην ελληνική επαρχία. Αποστολή μας είναι να κάνουμε τη φροντίδα ηλικιωμένων προσβάσιμη, αξιόπιστη και πολιτισμικά προσαρμοσμένη για κάθε ελληνικό νοικοκυριό.
            </p>
          </div>
        </div>

        {/* Οι Βασικές Μας Αξίες */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Οι Βασικές μας Αξίες
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Ενσυναίσθηση</h4>
                <p className="text-gray-600">
                  Τοποθετούμε τις οικογένειες και τους ηλικιωμένους στο επίκεντρο κάθε απόφασης.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Εμπιστοσύνη</h4>
                <p className="text-gray-600">
                  Επαληθεύουμε κάθε φροντιστή και προστατεύουμε κάθε προσωπικό δεδομένο.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Πολιτισμική Ευαισθησία</h4>
                <p className="text-gray-600">
                  Σεβόμαστε τις ελληνικές παραδόσεις, τη γλώσσα και τη δυναμική της οικογένειας.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-3">Αριστεία</h4>
                <p className="text-gray-600">
                  Δεσμευόμαστε για συνεχή βελτίωση των υπηρεσιών και των προτύπων μας.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

