"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Users, Star } from "lucide-react";
import { toast } from "sonner";

export function WaitlistSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    customCity: "",
    role: "",
    agreeToTerms: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form submitted with data:", formData);

    // Validate all required fields
    if (!formData.fullName.trim()) {
      toast.error("Παρακαλώ συμπληρώστε το ονοματεπώνυμό σας");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Παρακαλώ συμπληρώστε το email σας");
      return;
    }

    if (!formData.city) {
      toast.error("Παρακαλώ επιλέξτε νομό");
      return;
    }

    // Validate custom city if "other" is selected
    if (formData.city === "other" && !formData.customCity.trim()) {
      toast.error("Παρακαλώ συμπληρώστε την περιοχή σας");
      return;
    }

    if (!formData.role) {
      toast.error("Παρακαλώ επιλέξτε ρόλο");
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error("Παρακαλώ συμφωνήστε με τους όρους χρήσης");
      return;
    }

    setIsSubmitting(true);
    console.log("Starting submission...");

    try {
      // Prepare data - use custom city if "other" is selected
      const cityValue = formData.city === "other" ? formData.customCity : formData.city;
      
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        city: cityValue,
        role: formData.role,
        timestamp: new Date().toISOString(),
      };

      console.log("Sending data to API:", submitData);

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      console.log("API Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("API Error response:", errorText);
        throw new Error("Failed to submit form");
      }

      const responseData = await response.text();
      console.log("API Success response:", responseData);

      setIsSubmitted(true);
      toast.success("Η εγγραφή σας καταχωρήθηκε επιτυχώς!");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Παρουσιάστηκε σφάλμα. Παρακαλώ δοκιμάστε ξανά.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ευχαριστούμε για την εγγραφή σας!
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Θα σας ενημερώσουμε σύντομα για την πρώιμη πρόσβαση στην MaziCare. 
            Ελέγξτε το email σας για περισσότερες πληροφορίες.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12">
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <Star className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Προτεραιότητα</h4>
                <p className="text-sm text-gray-600">
                  Πρώιμη πρόσβαση στην πλατφόρμα
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Αποκλειστικές Λειτουργίες</h4>
                <p className="text-sm text-gray-600">
                  Πρόσβαση σε beta features
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-0">
                <MapPin className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Τοπική Υποστήριξη</h4>
                <p className="text-sm text-gray-600">
                  Προτεραιότητα σε φροντιστές
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Γίνετε μέλος στην κοινότητα MaziCare ΔΩΡΕΑΝ
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Είστε οικογένεια ή φροντιστής; Εξασφαλίστε ΔΩΡΕΑΝ πρώιμη πρόσβαση στην πλατφόρμα MaziCare. Οι θέσεις είναι περιορισμένες — εγγραφείτε στη λίστα αναμονής
          </p>
        </div>

        <Card className="max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Εγγραφή στη Λίστα Αναμονής</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName">Ονοματεπώνυμο *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  placeholder="π.χ. Μαρία Παπαδοπούλου"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="maria@example.com"
                />
              </div>

              <div>
                <Label htmlFor="city">Νομός *</Label>
                <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value, customCity: value !== "other" ? "" : formData.customCity})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Επιλέξτε νομό" />
                  </SelectTrigger>
                  <SelectContent className="max-h-[300px]">
                    <SelectItem value="Έβρου">Έβρου</SelectItem>
                    <SelectItem value="Ροδόπης">Ροδόπης</SelectItem>
                    <SelectItem value="Ξάνθης">Ξάνθης</SelectItem>
                    <SelectItem value="Δράμας">Δράμας</SelectItem>
                    <SelectItem value="Καβάλας">Καβάλας</SelectItem>
                    <SelectItem value="Θεσσαλονίκης">Θεσσαλονίκης</SelectItem>
                    <SelectItem value="Χαλκιδικής">Χαλκιδικής</SelectItem>
                    <SelectItem value="Ημαθίας">Ημαθίας</SelectItem>
                    <SelectItem value="Κιλκίς">Κιλκίς</SelectItem>
                    <SelectItem value="Πέλλας">Πέλλας</SelectItem>
                    <SelectItem value="Πιερίας">Πιερίας</SelectItem>
                    <SelectItem value="Σερρών">Σερρών</SelectItem>
                    <SelectItem value="Κοζάνης">Κοζάνης</SelectItem>
                    <SelectItem value="Φλώρινας">Φλώρινας</SelectItem>
                    <SelectItem value="Γρεβενών">Γρεβενών</SelectItem>
                    <SelectItem value="Καστοριάς">Καστοριάς</SelectItem>
                    <SelectItem value="Ιωαννίνων">Ιωαννίνων</SelectItem>
                    <SelectItem value="Άρτας">Άρτας</SelectItem>
                    <SelectItem value="Πρέβεζας">Πρέβεζας</SelectItem>
                    <SelectItem value="Θεσπρωτίας">Θεσπρωτίας</SelectItem>
                    <SelectItem value="Λάρισας">Λάρισας</SelectItem>
                    <SelectItem value="Καρδίτσας">Καρδίτσας</SelectItem>
                    <SelectItem value="Μαγνησίας">Μαγνησίας</SelectItem>
                    <SelectItem value="Τρικάλων">Τρικάλων</SelectItem>
                    <SelectItem value="Βοιωτίας">Βοιωτίας</SelectItem>
                    <SelectItem value="Ευβοίας">Ευβοίας</SelectItem>
                    <SelectItem value="Ευρυτανίας">Ευρυτανίας</SelectItem>
                    <SelectItem value="Φωκίδας">Φωκίδας</SelectItem>
                    <SelectItem value="Φθιώτιδας">Φθιώτιδας</SelectItem>
                    <SelectItem value="Κεφαλληνίας">Κεφαλληνίας</SelectItem>
                    <SelectItem value="Κέρκυρας">Κέρκυρας</SelectItem>
                    <SelectItem value="Λευκάδας">Λευκάδας</SelectItem>
                    <SelectItem value="Ζακύνθου">Ζακύνθου</SelectItem>
                    <SelectItem value="Αχαΐας">Αχαΐας</SelectItem>
                    <SelectItem value="Ηλείας">Ηλείας</SelectItem>
                    <SelectItem value="Αιτωλοακαρνανίας">Αιτωλοακαρνανίας</SelectItem>
                    <SelectItem value="Αρκαδίας">Αρκαδίας</SelectItem>
                    <SelectItem value="Αργολίδας">Αργολίδας</SelectItem>
                    <SelectItem value="Κορινθίας">Κορινθίας</SelectItem>
                    <SelectItem value="Λακωνίας">Λακωνίας</SelectItem>
                    <SelectItem value="Μεσσηνίας">Μεσσηνίας</SelectItem>
                    <SelectItem value="Αθηνών">Αθηνών</SelectItem>
                    <SelectItem value="Ανατολικής Αττικής">Ανατολικής Αττικής</SelectItem>
                    <SelectItem value="Πειραιώς">Πειραιώς</SelectItem>
                    <SelectItem value="Δυτικής Αττικής">Δυτικής Αττικής</SelectItem>
                    <SelectItem value="Χίου">Χίου</SelectItem>
                    <SelectItem value="Λέσβου">Λέσβου</SelectItem>
                    <SelectItem value="Σάμου">Σάμου</SelectItem>
                    <SelectItem value="Κυκλάδων">Κυκλάδων</SelectItem>
                    <SelectItem value="Δωδεκανήσου">Δωδεκανήσου</SelectItem>
                    <SelectItem value="Ηρακλείου">Ηρακλείου</SelectItem>
                    <SelectItem value="Χανίων">Χανίων</SelectItem>
                    <SelectItem value="Λασιθίου">Λασιθίου</SelectItem>
                    <SelectItem value="Ρεθύμνης">Ρεθύμνης</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {formData.city === "other" && (
                <div className="animate-in slide-in-from-top-2 duration-200">
                  <Label htmlFor="customCity">Ποια περιοχή; *</Label>
                  <Input
                    id="customCity"
                    required
                    value={formData.customCity}
                    onChange={(e) => setFormData({...formData, customCity: e.target.value})}
                    placeholder="π.χ. Εκτός Ελλάδας"
                  />
                </div>
              )}

              <div>
                <Label htmlFor="role">Ρόλος *</Label>
                <Select value={formData.role} onValueChange={(value) => setFormData({...formData, role: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Επιλέξτε ρόλο" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="family">Οικογένεια</SelectItem>
                    <SelectItem value="caregiver">Φροντιστής</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, agreeToTerms: checked as boolean})
                  }
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed">
                  Συμφωνώ με την{" "}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Πολιτική Απορρήτου
                  </a>{" "}
                  και τους{" "}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Όρους Χρήσης
                  </a>
                </Label>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Καταχώρηση..." : "Εγγραφή στη Λίστα Αναμονής"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-12">
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-0">
              <Badge className="mb-3">Πρώιμη Πρόσβαση</Badge>
              <h4 className="font-semibold mb-2">Αποκλειστική Πρόσβαση</h4>
              <p className="text-sm text-gray-600">
                Δοκιμάστε όλες τις λειτουργίες πριν από την επίσημη κυκλοφορία
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-0">
              <Badge variant="secondary" className="mb-3">Προτεραιότητα</Badge>
              <h4 className="font-semibold mb-2">Καλύτερη Αντιστοίχιση</h4>
              <p className="text-sm text-gray-600">
                Προτεραιότητα στην εύρεση του καταλληλότερου φροντιστή
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white/80 backdrop-blur-sm">
            <CardContent className="pt-0">
              <Badge variant="outline" className="mb-3">Υποστήριξη</Badge>
              <h4 className="font-semibold mb-2">Ειδική Φροντίδα</h4>
              <p className="text-sm text-gray-600">
                Προσωπικός σύμβουλος για την εγκατάσταση και τη χρήση
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

