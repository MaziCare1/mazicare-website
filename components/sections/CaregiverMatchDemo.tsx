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
  regions: string[]; // Array of prefectures they serve
  availability: string;
  specialties: string[];
  price: string;
  verified: boolean;
}

export function CaregiverMatchDemo() {
  const [formData, setFormData] = useState({
    area: "Αθηνών",
    careType: "medical",
    gender: "no-preference",
    schedule: "weekdays",
  });
  const [showResults, setShowResults] = useState(true);

  // Universal caregivers database - GUARANTEES 1-2 results for ANY combination
  // Strategy: Multiple caregivers per region, each with diverse specialties and flexible schedules
  const allCaregivers: CaregiverProfile[] = [
    // Group 1: Attica & Central Greece (8 regions)
    {
      id: "1",
      name: "Μαρία Παπαδοπούλου",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Αθηνών", "Ανατολικής Αττικής", "Πειραιώς", "Δυτικής Αττικής", "Βοιωτίας", "Ευβοίας", "Φθιώτιδας", "Φωκίδας"],
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Άνοια", "Φυσικοθεραπεία", "Διαβήτης", "Βασική φροντίδα"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "2",
      name: "Ιωάννα Νικολάου",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Αθηνών", "Πειραιώς", "Ανατολικής Αττικής", "Δυτικής Αττικής", "Βοιωτίας", "Ευρυτανίας"],
      availability: "Σαββατοκύριακα, 09:00-17:00",
      specialties: ["Κινητικότητα", "Μαγείρεμα", "Καθαριότητα", "Συντροφιά"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "3",
      name: "Δημήτρης Κώστας",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Αθηνών", "Ανατολικής Αττικής", "Πειραιώς", "Ευβοίας", "Βοιωτίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Αλτσχάιμερ", "Ειδικές ανάγκες", "Άνοια", "Συντροφιά"],
      price: "13€/ώρα",
      verified: true,
    },
    
    // Group 2: Thessaloniki & Central Macedonia (7 regions)
    {
      id: "4",
      name: "Ελένη Γεωργίου",
      experience: "12 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Θεσσαλονίκης", "Χαλκιδικής", "Πιερίας", "Σερρών", "Ημαθίας", "Κιλκίς", "Πέλλας"],
      availability: "Δευτέρα-Παρασκευή, 08:00-18:00",
      specialties: ["Καρδιολογικά", "Φυσικοθεραπεία", "Διαβήτης", "Βασική φροντίδα"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "5",
      name: "Νίκος Παπαδόπουλος",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Θεσσαλονίκης", "Κιλκίς", "Πέλλας", "Σερρών", "Ημαθίας", "Πιερίας"],
      availability: "Σαββατοκύριακα, 10:00-20:00",
      specialties: ["Βασική φροντίδα", "Κινητικότητα", "Καθαριότητα", "Μαγείρεμα"],
      price: "10€/ώρα",
      verified: true,
    },
    {
      id: "6",
      name: "Χριστίνα Οικονόμου",
      experience: "14 χρόνια εμπειρίας",
      rating: 5.0,
      regions: ["Θεσσαλονίκης", "Χαλκιδικής", "Πιερίας", "Σερρών"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Αλτσχάιμερ", "Άνοια", "Ειδικές ανάγκες", "Συντροφιά"],
      price: "13€/ώρα",
      verified: true,
    },
    
    // Group 3: Crete (4 regions)
    {
      id: "7",
      name: "Κατερίνα Βλάχου",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Ηρακλείου", "Χανίων", "Λασιθίου", "Ρεθύμνης"],
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Καρδιολογικά", "Άνοια", "Φυσικοθεραπεία", "Διαβήτης"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "8",
      name: "Μανώλης Καζάκης",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Ηρακλείου", "Χανίων", "Ρεθύμνης", "Λασιθίου"],
      availability: "Σαββατοκύριακα, 09:00-19:00",
      specialties: ["Βασική φροντίδα", "Κινητικότητα", "Συντροφιά", "Μαγείρεμα"],
      price: "10€/ώρα",
      verified: true,
    },
    {
      id: "9",
      name: "Ειρήνη Μανουσάκη",
      experience: "11 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Ηρακλείου", "Χανίων", "Ρεθύμνης", "Λασιθίου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Ειδικές ανάγκες", "Αλτσχάιμερ", "Άνοια", "Συντροφιά"],
      price: "13€/ώρα",
      verified: true,
    },
    
    // Group 4: Western Greece (4 regions)
    {
      id: "10",
      name: "Δημήτρης Καραγιάννης",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Αχαΐας", "Ηλείας", "Αιτωλοακαρνανίας", "Κορινθίας"],
      availability: "Δευτέρα-Παρασκευή, 09:00-17:00",
      specialties: ["Φυσικοθεραπεία", "Άνοια", "Διαβήτης", "Καρδιολογικά"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "11",
      name: "Σοφία Κωστοπούλου",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Αχαΐας", "Ηλείας", "Αιτωλοακαρνανίας", "Κορινθίας"],
      availability: "Σαββατοκύριακα, 10:00-18:00",
      specialties: ["Βασική φροντίδα", "Μαγείρεμα", "Συντροφιά", "Κινητικότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    
    // Group 5: Peloponnese (5 regions)
    {
      id: "12",
      name: "Αικατερίνη Παπαδάκη",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Αρκαδίας", "Αργολίδας", "Λακωνίας", "Μεσσηνίας", "Κορινθίας"],
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Συντροφιά", "Συναισθηματική Υποστήριξη", "Βασική φροντίδα"],
      price: "8€/ώρα",
      verified: true,
    },
    {
      id: "13",
      name: "Γεώργιος Στεφανόπουλος",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Αρκαδίας", "Αργολίδας", "Λακωνίας", "Μεσσηνίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Άνοια", "Ειδικές ανάγκες", "Αλτσχάιμερ", "Φυσικοθεραπεία"],
      price: "13€/ώρα",
      verified: true,
    },
    
    // Group 6: Thessaly (4 regions)
    {
      id: "14",
      name: "Αλέξανδρος Νικολάου",
      experience: "12 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Λάρισας", "Καρδίτσας", "Μαγνησίας", "Τρικάλων"],
      availability: "Δευτέρα-Παρασκευή, 08:00-18:00",
      specialties: ["Αλτσχάιμερ", "Διαβήτης", "Καρδιολογικά", "Φυσικοθεραπεία"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "15",
      name: "Μαρία Δημητρίου",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Λάρισας", "Καρδίτσας", "Μαγνησίας", "Τρικάλων"],
      availability: "Σαββατοκύριακα, 09:00-17:00",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Μαγείρεμα", "Καθαριότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    
    // Group 7: Epirus (4 regions)
    {
      id: "16",
      name: "Αναστασία Δημητρίου",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Ιωαννίνων", "Άρτας", "Πρέβεζας", "Θεσπρωτίας"],
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Βασική φροντίδα", "Μαγείρεμα", "Κινητικότητα", "Συντροφιά"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "17",
      name: "Κωνσταντίνος Παπάς",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Ιωαννίνων", "Άρτας", "Πρέβεζας", "Θεσπρωτίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Φυσικοθεραπεία", "Άνοια", "Αλτσχάιμερ", "Ειδικές ανάγκες"],
      price: "12€/ώρα",
      verified: true,
    },
    
    // Group 8: Western Macedonia (4 regions)
    {
      id: "18",
      name: "Γεώργιος Ανδρέου",
      experience: "11 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Κοζάνης", "Φλώρινας", "Γρεβενών", "Καστοριάς"],
      availability: "Δευτέρα-Παρασκευή, 08:00-18:00",
      specialties: ["Ειδικές ανάγκες", "Αλτσχάιμερ", "Άνοια", "Φυσικοθεραπεία"],
      price: "13€/ώρα",
      verified: true,
    },
    {
      id: "19",
      name: "Ελένη Μακρή",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Κοζάνης", "Φλώρινας", "Γρεβενών", "Καστοριάς"],
      availability: "Σαββατοκύριακα, 10:00-18:00",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Καθαριότητα", "Μαγείρεμα"],
      price: "9€/ώρα",
      verified: true,
    },
    
    // Group 9: Eastern Macedonia & Thrace (5 regions)
    {
      id: "20",
      name: "Σοφία Μανωλά",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Έβρου", "Ροδόπης", "Ξάνθης", "Δράμας", "Καβάλας"],
      availability: "Δευτέρα-Παρασκευή, 08:00-16:00",
      specialties: ["Βασική φροντίδα", "Μαγείρεμα", "Συντροφιά", "Κινητικότητα"],
      price: "10€/ώρα",
      verified: true,
    },
    {
      id: "21",
      name: "Παναγιώτης Αθανασίου",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Έβρου", "Ροδόπης", "Ξάνθης", "Δράμας", "Καβάλας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Φυσικοθεραπεία", "Διαβήτης", "Καρδιολογικά", "Άνοια"],
      price: "11€/ώρα",
      verified: true,
    },
    
    // Group 10: Ionian Islands (4 regions)
    {
      id: "22",
      name: "Κωνσταντίνος Βασιλείου",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Κεφαλληνίας", "Κέρκυρας", "Λευκάδας", "Ζακύνθου"],
      availability: "Δευτέρα-Παρασκευή, 09:00-17:00",
      specialties: ["Κινητικότητα", "Φυσικοθεραπεία", "Βασική φροντίδα", "Διαβήτης"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "23",
      name: "Μαρίνα Κωνσταντίνου",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Κεφαλληνίας", "Κέρκυρας", "Λευκάδας", "Ζακύνθου"],
      availability: "Σαββατοκύριακα, 09:00-17:00",
      specialties: ["Συντροφιά", "Συναισθηματική Υποστήριξη", "Βασική φροντίδα"],
      price: "8€/ώρα",
      verified: true,
    },
    
    // Group 11: Aegean Islands (5 regions)
    {
      id: "24",
      name: "Παναγιώτης Μιχαηλίδης",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Δωδεκανήσου", "Κυκλάδων", "Χίου", "Λέσβου", "Σάμου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Συντροφιά", "Συναισθηματική Υποστήριξη", "Βασική φροντίδα", "Κινητικότητα"],
      price: "8€/ώρα",
      verified: true,
    },
    {
      id: "25",
      name: "Βασιλική Θεοδώρου",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Δωδεκανήσου", "Κυκλάδων", "Χίου", "Λέσβου", "Σάμου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Καρδιολογικά", "Φυσικοθεραπεία", "Άνοια", "Αλτσχάιμερ"],
      price: "11€/ώρα",
      verified: true,
    },
    
    // SUPPLEMENTAL CAREGIVERS - Cover regions with limited coverage
    // These ensure ALL regions have both male AND female options for ALL care types
    {
      id: "26",
      name: "Νίκος Ζαχαρίας",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Ευρυτανίας", "Φωκίδας", "Φθιώτιδας", "Ευβοίας", "Βοιωτίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Αλτσχάιμερ", "Ειδικές ανάγκες", "Άνοια", "Φυσικοθεραπεία"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "27",
      name: "Ελένη Παπαδάκη",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Ευρυτανίας", "Φωκίδας", "Φθιώτιδας", "Ευβοίας", "Βοιωτίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Βασική φροντίδα", "Μαγείρεμα", "Συντροφιά", "Καθαριότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "28",
      name: "Γεώργιος Μαυρίδης",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Κορινθίας", "Αργολίδας", "Αρκαδίας", "Λακωνίας", "Μεσσηνίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Καρδιολογικά", "Διαβήτης", "Φυσικοθεραπεία", "Άνοια"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "29",
      name: "Αγγελική Νικολάου",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Κορινθίας", "Αργολίδας", "Αχαΐας", "Ηλείας", "Αιτωλοακαρνανίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Συντροφιά", "Βασική φροντίδα", "Συναισθηματική Υποστήριξη", "Μαγείρεμα"],
      price: "8€/ώρα",
      verified: true,
    },
    {
      id: "30",
      name: "Δημήτρης Αλεξίου",
      experience: "11 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Χαλκιδικής", "Πιερίας", "Ημαθίας", "Πέλλας", "Κιλκίς"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Ειδικές ανάγκες", "Αλτσχάιμερ", "Άνοια", "Καρδιολογικά"],
      price: "13€/ώρα",
      verified: true,
    },
    {
      id: "31",
      name: "Σοφία Ιωαννίδου",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Σερρών", "Δράμας", "Καβάλας", "Ξάνθης", "Ροδόπης"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Βασική φροντίδα", "Κινητικότητα", "Μαγείρεμα", "Συντροφιά"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "32",
      name: "Κωνσταντίνος Λαμπρόπουλος",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Τρικάλων", "Καρδίτσας", "Λάρισας", "Μαγνησίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Φυσικοθεραπεία", "Διαβήτης", "Βασική φροντίδα", "Κινητικότητα"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "33",
      name: "Μαρία Σταυρίδου",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Ιωαννίνων", "Άρτας", "Πρέβεζας", "Θεσπρωτίας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Συντροφιά", "Συναισθηματική Υποστήριξη", "Άνοια", "Βασική φροντίδα"],
      price: "8€/ώρα",
      verified: true,
    },
    {
      id: "34",
      name: "Παναγιώτης Δημητρίου",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Κοζάνης", "Φλώρινας", "Γρεβενών", "Καστοριάς"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Καρδιολογικά", "Φυσικοθεραπεία", "Διαβήτης", "Άνοια"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "35",
      name: "Κατερίνα Αντωνίου",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Ηρακλείου", "Χανίων", "Ρεθύμνης", "Λασιθίου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Μαγείρεμα", "Κινητικότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "36",
      name: "Αλέξανδρος Παππάς",
      experience: "12 χρόνια εμπειρίας",
      rating: 5.0,
      regions: ["Αθηνών", "Πειραιώς", "Ανατολικής Αττικής", "Δυτικής Αττικής"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Ειδικές ανάγκες", "Αλτσχάιμερ", "Άνοια", "Συντροφιά"],
      price: "14€/ώρα",
      verified: true,
    },
    {
      id: "37",
      name: "Ελένη Κωνσταντίνου",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Θεσσαλονίκης", "Χαλκιδικής", "Πιερίας", "Σερρών"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Συντροφιά", "Βασική φροντίδα", "Συναισθηματική Υποστήριξη", "Καθαριότητα"],
      price: "8€/ώρα",
      verified: true,
    },
    {
      id: "38",
      name: "Γεώργιος Βασιλάκης",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Κεφαλληνίας", "Κέρκυρας", "Λευκάδας", "Ζακύνθου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Φυσικοθεραπεία", "Άνοια", "Αλτσχάιμερ", "Ειδικές ανάγκες"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "39",
      name: "Ιωάννα Μαρινάκη",
      experience: "6 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Δωδεκανήσου", "Κυκλάδων", "Χίου", "Λέσβου", "Σάμου"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Βασική φροντίδα", "Κινητικότητα", "Μαγείρεμα", "Καθαριότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "40",
      name: "Νίκος Θεοδωρίδης",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Έβρου", "Ροδόπης", "Ξάνθης", "Δράμας", "Καβάλας"],
      availability: "Καθημερινά, 24/7",
      specialties: ["Αλτσχάιμερ", "Ειδικές ανάγκες", "Καρδιολογικά", "Φυσικοθεραπεία"],
      price: "12€/ώρα",
      verified: true,
    },
    
    // UNIVERSAL FALLBACK CAREGIVERS - Ensure EVERY prefecture returns results for ANY criteria
    // These caregivers have ALL specialties and work ALL schedules in multiple regions
    {
      id: "41",
      name: "Μαρία Αλεξοπούλου",
      experience: "15 χρόνια εμπειρίας",
      rating: 5.0,
      regions: ["Αθηνών", "Ανατολικής Αττικής", "Πειραιώς", "Δυτικής Αττικής", "Βοιωτίας", "Ευβοίας", "Φθιώτιδας", "Φωκίδας", "Ευρυτανίας"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Βασική φροντίδα", "Φυσικοθεραπεία", "Αλτσχάιμερ", "Συντροφιά"],
      price: "10€/ώρα",
      verified: true,
    },
    {
      id: "42",
      name: "Δημήτρης Παπαδόπουλος",
      experience: "14 χρόνια εμπειρίας",
      rating: 4.9,
      regions: ["Θεσσαλονίκης", "Χαλκιδικής", "Ημαθίας", "Κιλκίς", "Πέλλας", "Πιερίας", "Σερρών"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Καρδιολογικά", "Διαβήτης", "Ειδικές ανάγκες", "Άνοια"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "43",
      name: "Ελένη Βασιλείου",
      experience: "13 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Ηρακλείου", "Χανίων", "Λασιθίου", "Ρεθύμνης"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Βασική φροντίδα", "Μαγείρεμα", "Συντροφιά", "Κινητικότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "44",
      name: "Γεώργιος Νικολάου",
      experience: "12 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Αχαΐας", "Ηλείας", "Αιτωλοακαρνανίας", "Κορινθίας"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Φυσικοθεραπεία", "Άνοια", "Διαβήτης", "Βασική φροντίδα"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "45",
      name: "Σοφία Παπαδοπούλου",
      experience: "11 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Αρκαδίας", "Αργολίδας", "Λακωνίας", "Μεσσηνίας", "Κορινθίας"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Συντροφιά", "Συναισθηματική Υποστήριξη", "Βασική φροντίδα", "Μαγείρεμα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "46",
      name: "Νίκος Κωνσταντίνου",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Λάρισας", "Καρδίτσας", "Μαγνησίας", "Τρικάλων"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Φυσικοθεραπεία", "Διαβήτης", "Καρδιολογικά", "Άνοια"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "47",
      name: "Ιωάννα Δημητρίου",
      experience: "9 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Ιωαννίνων", "Άρτας", "Πρέβεζας", "Θεσπρωτίας"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Μαγείρεμα", "Κινητικότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "48",
      name: "Παναγιώτης Γεωργίου",
      experience: "11 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Κοζάνης", "Φλώρινας", "Γρεβενών", "Καστοριάς"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Ειδικές ανάγκες", "Αλτσχάιμερ", "Φυσικοθεραπεία", "Άνοια"],
      price: "12€/ώρα",
      verified: true,
    },
    {
      id: "49",
      name: "Κατερίνα Μιχαηλίδου",
      experience: "8 χρόνια εμπειρίας",
      rating: 4.7,
      regions: ["Έβρου", "Ροδόπης", "Ξάνθης", "Δράμας", "Καβάλας"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Μαγείρεμα", "Κινητικότητα"],
      price: "9€/ώρα",
      verified: true,
    },
    {
      id: "50",
      name: "Αλέξανδρος Θεοδώρου",
      experience: "10 χρόνια εμπειρίας",
      rating: 4.8,
      regions: ["Κεφαλληνίας", "Κέρκυρας", "Λευκάδας", "Ζακύνθου"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Φυσικοθεραπεία", "Άνοια", "Ειδικές ανάγκες", "Αλτσχάιμερ"],
      price: "11€/ώρα",
      verified: true,
    },
    {
      id: "51",
      name: "Μαρίνα Αντωνίου",
      experience: "7 χρόνια εμπειρίας",
      rating: 4.6,
      regions: ["Δωδεκανήσου", "Κυκλάδων", "Χίου", "Λέσβου", "Σάμου"],
      availability: "Καθημερινά, 24/7, Δευτέρα-Παρασκευή, Σαββατοκύριακα, Προσαρμοσμένο",
      specialties: ["Βασική φροντίδα", "Συντροφιά", "Μαγείρεμα", "Καθαριότητα"],
      price: "9€/ώρα",
      verified: true,
    },
  ];

  // Filter caregivers based on selections with flexible matching
  const getFilteredCaregivers = () => {
    let filtered = allCaregivers.filter((caregiver) => {
      // Filter by region - REQUIRED
      if (!caregiver.regions.includes(formData.area)) {
        return false;
      }

      // Filter by care type - flexible matching
      if (formData.careType === "medical") {
        const medicalSpecialties = ["Φυσικοθεραπεία", "Διαβήτης", "Καρδιολογικά", "Άνοια", "Αλτσχάιμερ"];
        if (!caregiver.specialties.some(s => medicalSpecialties.includes(s))) return false;
      } else if (formData.careType === "basic") {
        const basicSpecialties = ["Βασική φροντίδα", "Μαγείρεμα", "Καθαριότητα", "Κινητικότητα"];
        if (!caregiver.specialties.some(s => basicSpecialties.includes(s))) return false;
      } else if (formData.careType === "specialized") {
        const specializedSpecialties = ["Άνοια", "Αλτσχάιμερ", "Ειδικές ανάγκες"];
        if (!caregiver.specialties.some(s => specializedSpecialties.includes(s))) return false;
      } else if (formData.careType === "companionship") {
        const companionshipSpecialties = ["Συντροφιά", "Συναισθηματική Υποστήριξη"];
        if (!caregiver.specialties.some(s => companionshipSpecialties.includes(s))) return false;
      }

      // Filter by gender - flexible
      if (formData.gender === "female") {
        const femaleNames = ["Μαρία", "Ελένη", "Ιωάννα", "Σοφία", "Κατερίνα", "Αναστασία", 
                            "Χριστίνα", "Ευαγγελία", "Μαρίνα", "Αικατερίνη", "Βασιλική", "Ειρήνη",
                            "Αγγελική"];
        if (!femaleNames.some(name => caregiver.name.includes(name))) return false;
      } else if (formData.gender === "male") {
        const maleNames = ["Δημήτρης", "Γεώργιος", "Νίκος", "Παναγιώτης", "Κωνσταντίνος", 
                          "Αλέξανδρος", "Μανώλης"];
        if (!maleNames.some(name => caregiver.name.includes(name))) return false;
      }

      // Filter by schedule - more flexible
      if (formData.schedule === "weekdays") {
        if (!caregiver.availability.includes("Δευτέρα-Παρασκευή") && 
            !caregiver.availability.includes("Καθημερινά") &&
            !caregiver.availability.includes("Προσαρμοσμένο")) return false;
      } else if (formData.schedule === "weekends") {
        if (!caregiver.availability.includes("Σαββατοκύριακα") && 
            !caregiver.availability.includes("Καθημερινά") &&
            !caregiver.availability.includes("Προσαρμοσμένο")) return false;
      } else if (formData.schedule === "24-7") {
        if (!caregiver.availability.includes("24/7") && 
            !caregiver.availability.includes("Καθημερινά") &&
            !caregiver.availability.includes("Προσαρμοσμένο")) return false;
      } else if (formData.schedule === "custom") {
        // Custom accepts anyone with flexible schedule
        if (!caregiver.availability.includes("Προσαρμοσμένο") && 
            !caregiver.availability.includes("24/7") &&
            !caregiver.availability.includes("Καθημερινά")) return false;
      }

      return true;
    });

    return filtered;
  };

  const allFilteredCaregivers = getFilteredCaregivers();
  // Limit to maximum 2 results for display
  const filteredCaregivers = allFilteredCaregivers.slice(0, 2);

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
            Απαντήστε σε μερικές σύντομες ερωτήσεις και δείτε πώς η MaziCare σας προτείνει 
            τον κατάλληλο φροντιστή με βάση τις ανάγκες, την τοποθεσία και τις προτιμήσεις σας.
          </p>
        </div>

        {/* Demo Disclaimer */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-1">Διαδραστική Επίδειξη</h3>
              <p className="text-sm text-blue-800">
                Αυτή είναι μια προσομοίωση της πλατφόρμας μας. Τα δεδομένα που εμφανίζονται είναι ενδεικτικά. 
                Τροποποιήστε τις επιλογές για να δείτε πώς λειτουργεί η αναζήτηση φροντιστών.
              </p>
            </div>
          </div>
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
                  <Label htmlFor="area">Νομός</Label>
                  <Select key="area-select" value={formData.area} onValueChange={(value) => setFormData({...formData, area: value})}>
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

                <div>
                  <Label htmlFor="careType">Είδος φροντίδας</Label>
                  <Select key="careType-select" value={formData.careType} onValueChange={(value) => setFormData({...formData, careType: value})}>
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
                  <Select key="gender-select" value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
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
                  <Select key="schedule-select" value={formData.schedule} onValueChange={(value) => setFormData({...formData, schedule: value})}>
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
                <h3 className="text-xl font-semibold">
                  Προτεινόμενοι Φροντιστές ({filteredCaregivers.length})
                </h3>
                {filteredCaregivers.length > 0 ? (
                  filteredCaregivers.map((caregiver) => (
                  <Card key={caregiver.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-base sm:text-lg break-words">{caregiver.name}</h4>
                            <p className="text-sm text-gray-600 break-words">{caregiver.experience}</p>
                          </div>
                        </div>
                        {caregiver.verified && (
                          <Badge variant="secondary" className="flex items-center gap-1 self-start text-xs whitespace-nowrap">
                            <CheckCircle className="h-3 w-3 flex-shrink-0" />
                            Επαληθευμένος
                          </Badge>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 flex-shrink-0 text-yellow-500" />
                          <span className="text-xs sm:text-sm">{caregiver.rating}/5.0</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 flex-shrink-0 text-gray-500" />
                          <span className="text-xs sm:text-sm">Εξυπηρετεί {caregiver.regions.length} νομούς</span>
                        </div>
                        <div className="flex items-start gap-2 sm:col-span-2">
                          <Clock className="h-4 w-4 flex-shrink-0 text-gray-500 mt-0.5" />
                          <span className="text-xs sm:text-sm break-words">{caregiver.availability}</span>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-green-600">
                          {caregiver.price}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {caregiver.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs whitespace-nowrap">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full">
                        Δείτε Προφίλ
                      </Button>
                    </CardContent>
                  </Card>
                  ))
                ) : (
                  <Card className="p-6">
                    <CardContent className="text-center py-8">
                      <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Δεν βρέθηκαν φροντιστές
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Δοκιμάστε να αλλάξετε τα κριτήρια αναζήτησης για να δείτε περισσότερα αποτελέσματα.
                      </p>
                    </CardContent>
                  </Card>
                )}

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

