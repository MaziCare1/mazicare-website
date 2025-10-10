"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, User, CheckCircle } from "lucide-react";

interface CaregiverProfile {
  id: string;
  name: string;
  experience: string;
  rating: number;
  location: string;
  availability: string;
  specialties: string[];
  price: string;
  verified: boolean;
}

export function CaregiverMatchDemo() {
  const [formData, setFormData] = useState({
    area: "",
    careType: "",
    gender: "",
    schedule: "",
  });
  const [showResults, setShowResults] = useState(false);

  const mockCaregivers: CaregiverProfile[] = [
    {
      id: "1",
      name: "Μαρία Παπαδοπούλου",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.9,
      location: "Αθήνα, Κέντρο",
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Άνοια", "Φυσικοθεραπεία", "Διαβήτης"],
      price: "15€/ώρα",
      verified: true,
    },
    {
      id: "2",
      name: "Ελένη Γεωργίου",
      experience: "12 χρόνια εμπειρίας",
      rating: 4.8,
      location: "Αθήνα, Βόρεια Προάστια",
      availability: "Καθημερινά, 24/7",
      specialties: ["Αλτσχάιμερ", "Καρδιολογικά", "Συναισθηματική Υποστήριξη"],
      price: "18€/ώρα",
      verified: true,
    },
    {
      id: "3",
      name: "Ιωάννα Νικολάου",
      experience: "5 χρόνια εμπειρίας",
      rating: 4.7,
      location: "Αθήνα, Νότια Προάστια",
      availability: "Σαββατοκύριακα, 09:00-17:00",
      specialties: ["Κινητικότητα", "Μαγείρεμα", "Καθαριότητα"],
      price: "12€/ώρα",
      verified: true,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Βρείτε τον Κατάλληλο Φροντιστή — Δοκιμάστε το Demo
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Απαντήστε σε μερικές σύντομες ερωτήσεις και δείτε πώς η MerimnaCare σας προτείνει 
            τον κατάλληλο φροντιστή με βάση τις ανάγκες, την τοποθεσία και τις προτιμήσεις σας.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Form */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Στοιχεία Αναζήτησης</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="area">Περιοχή</Label>
                  <Select value={formData.area} onValueChange={(value) => setFormData({...formData, area: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε περιοχή" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="athens-center">Αθήνα, Κέντρο</SelectItem>
                      <SelectItem value="athens-north">Αθήνα, Βόρεια Προάστια</SelectItem>
                      <SelectItem value="athens-south">Αθήνα, Νότια Προάστια</SelectItem>
                      <SelectItem value="thessaloniki">Θεσσαλονίκη</SelectItem>
                      <SelectItem value="crete">Κρήτη</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="careType">Είδος φροντίδας</Label>
                  <Select value={formData.careType} onValueChange={(value) => setFormData({...formData, careType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε είδος φροντίδας" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Βασική φροντίδα</SelectItem>
                      <SelectItem value="medical">Ιατρική φροντίδα</SelectItem>
                      <SelectItem value="specialized">Εξειδικευμένη φροντίδα</SelectItem>
                      <SelectItem value="companionship">Συντροφιά</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="gender">Προτιμώμενο φύλο φροντιστή</Label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε προτίμηση" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female">Γυναίκα</SelectItem>
                      <SelectItem value="male">Άνδρας</SelectItem>
                      <SelectItem value="no-preference">Χωρίς προτίμηση</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="schedule">Ημέρες/ώρες φροντίδας</Label>
                  <Select value={formData.schedule} onValueChange={(value) => setFormData({...formData, schedule: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε πρόγραμμα" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="weekdays">Καθημερινές (Δευ-Παρ)</SelectItem>
                      <SelectItem value="weekends">Σαββατοκύριακα</SelectItem>
                      <SelectItem value="24-7">24/7</SelectItem>
                      <SelectItem value="custom">Προσαρμοσμένο</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Βρείτε Φροντιστές
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results */}
          <div>
            {showResults ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Προτεινόμενοι Φροντιστές</h3>
                {mockCaregivers.map((caregiver) => (
                  <Card key={caregiver.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{caregiver.name}</h4>
                            <p className="text-gray-600">{caregiver.experience}</p>
                          </div>
                        </div>
                        {caregiver.verified && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Επαληθευμένος
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">{caregiver.rating}/5.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{caregiver.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-gray-500" />
                          <span className="text-sm">{caregiver.availability}</span>
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          {caregiver.price}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {caregiver.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full">
                        Δείτε Προφίλ
                      </Button>
                    </CardContent>
                  </Card>
                ))}

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">Θέλετε πλήρη πρόσβαση σε επαληθευμένους φροντιστές;</h4>
                    <p className="text-gray-600 mb-4">
                      Εγγραφείτε στη λίστα αναμονής για να αποκτήσετε πρώιμη πρόσβαση στην πλατφόρμα μας.
                    </p>
                    <Button onClick={scrollToWaitlist}>
                      Εγγραφείτε στη Λίστα Αναμονής
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center bg-gray-50">
                <CardContent className="text-center py-12">
                  <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Συμπληρώστε τη φόρμα
                  </h3>
                  <p className="text-gray-500">
                    Απαντήστε στις ερωτήσεις για να δείτε προτεινόμενους φροντιστές
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

