import { Card, CardContent } from "@/components/ui/card";
import { Users, Activity, Heart, DollarSign, MapPin } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Τι Κάνουμε */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Τι Κάνουμε
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Συνδέουμε οικογένειες με επαληθευμένους φροντιστές, παρέχουμε ενημερώσεις φροντίδας σε πραγματικό χρόνο, 
              ενισχύουμε την κοινωνική σύνδεση των ηλικιωμένων και βοηθάμε στη διαχείριση των επαναλαμβανόμενων εξόδων φροντίδας. 
              Η MaziCare συνδυάζει τεχνολογία, ενσυναίσθηση και τοπική εμπειρία για να προσφέρει μια απρόσκοπτη εμπειρία 
              φροντίδας — είτε βρίσκεστε στην Αθήνα είτε σε απομακρυσμένο χωριό.
            </p>
          </div>
        </div>

        {/* Πώς Σας Υποστηρίζουμε */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            Πώς σας Υποστηρίζουμε
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent className="pt-0">
                <Users className="h-10 w-10 text-blue-600 mb-4" />
                <h4 className="text-lg font-semibold mb-3">Αξιόπιστοι Φροντιστές</h4>
                <p className="text-gray-600">
                  Βρείτε αξιόπιστους φροντιστές στην περιοχή σας
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardContent className="pt-0">
                <Activity className="h-10 w-10 text-green-600 mb-4" />
                <h4 className="text-lg font-semibold mb-3">Παρακολούθηση σε Πραγματικό Χρόνο</h4>
                <p className="text-gray-600">
                  Παρακολουθήστε τη φροντίδα του αγαπημένου σας προσώπου σε πραγματικό χρόνο
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <CardContent className="pt-0">
                <Heart className="h-10 w-10 text-purple-600 mb-4" />
                <h4 className="text-lg font-semibold mb-3">Κοινωνική Υποστήριξη</h4>
                <p className="text-gray-600">
                  Κρατήστε τους ηλικιωμένους κοινωνικά ενεργούς και συναισθηματικά υποστηριγμένους
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <CardContent className="pt-0">
                <DollarSign className="h-10 w-10 text-orange-600 mb-4" />
                <h4 className="text-lg font-semibold mb-3">Οικονομική Εξοικονόμηση</h4>
                <p className="text-gray-600">
                  Εξοικονομήστε χρήματα σε επαναλαμβανόμενα προϊόντα φροντίδας
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-teal-500">
              <CardContent className="pt-0">
                <MapPin className="h-10 w-10 text-teal-600 mb-4" />
                <h4 className="text-lg font-semibold mb-3">Ηρεμία από Μακριά</h4>
                <p className="text-gray-600">
                  Αποκτήστε ηρεμία — ακόμα κι αν βρίσκεστε μακριά
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

