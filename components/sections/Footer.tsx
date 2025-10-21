import { Heart, Mail, Phone, MapPin, Brain } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MaziCare</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Oλοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. 
              Συνδέουμε οικογένειες με επαληθευμένους φροντιστές με αξιοπρέπεια, ασφάλεια και καινοτομία.
            </p>
            
            {/* Alzheimer Research Notice */}
            <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold text-blue-200">Υποστήριξη Έρευνας Alzheimer</h4>
              </div>
              <p className="text-sm text-blue-100">
                Το 5% των εσόδων μας διατίθεται για την υποστήριξη έρευνας στη νόσο Alzheimer 
                και άλλες μορφές άνοιας, συμβάλλοντας στην εύρεση καλύτερων θεραπειών για το μέλλον.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <Heart className="h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="break-words">Φτιαγμένο με αγάπη για τις ελληνικές οικογένειες</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link href="/#about" className="hover:text-white transition-colors">
                  Ποιοι Είμαστε
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="hover:text-white transition-colors">
                  Εγγραφή
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Συχνές Ερωτήσεις
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Πολιτική Απορρήτου
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Όροι Χρήσης
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@mazicare.gr" className="hover:text-white transition-colors break-all">
                  info@mazicare.gr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+306955117140" className="hover:text-white transition-colors whitespace-nowrap">
                  +30 6955 117 140
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-1" />
                <div>
                  <p>Ελλάδα</p>
                  <p className="text-sm text-gray-400">
                    Σύντομα κοντά σας
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            {/* <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Ιδρυτής: <span className="text-white">Φώτιος Κουζιώρτης</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Εμπνευσμένο από την προσωπική εμπειρία φροντίδας παππούδων
              </p>
            </div> */}
          </div>
        </div>

        {/* Service Areas */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="font-semibold mb-4 text-center">Περιοχές Εξυπηρέτησης</h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Αθήνα (Σύντομα)</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Θεσσαλονίκη (Σύντομα)</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Κρήτη (Σύντομα)</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Πάτρα (Σύντομα)</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">Λάρισα (Σύντομα)</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} MaziCare. Όλα τα δικαιώματα κατοχυρωμένα. 
            Φροντίδα με αξιοπρέπεια για κάθε ελληνική οικογένεια.
          </p>
        </div>
      </div>
    </footer> 
  );
}

