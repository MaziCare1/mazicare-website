"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Calendar, 
  Pill, 
  Heart, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MessageCircle,
  Activity,
  Smile
} from "lucide-react";

interface NotificationItem {
  id: string;
  type: "success" | "warning" | "info";
  message: string;
  time: string;
}

export function FamilyDashboardDemo() {
  const [formData, setFormData] = useState({
    elderlyName: "Μαρία Παπαδοπούλου",
    caregiverName: "Ελένη Γεωργίου",
    schedule: "full-day",
    notifications: ["Ειδοποιήσεις υγείας", "Χαμένα φάρμακα", "Έκτακτες καταστάσεις"] as string[],
  });
  const [showDashboard, setShowDashboard] = useState(true);

  const mockNotifications: NotificationItem[] = [
    {
      id: "1",
      type: "success",
      message: "Φάρμακα λήφθηκαν επιτυχώς στις 09:00",
      time: "πριν 2 ώρες",
    },
    {
      id: "2",
      type: "info",
      message: "Γεύμα ολοκληρώθηκε - καλή όρεξη",
      time: "πριν 3 ώρες",
    },
    {
      id: "3",
      type: "warning",
      message: "Φάρμακο απογεύματος δεν λήφθηκε ακόμα",
      time: "πριν 30 λεπτά",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDashboard(true);
  };

  const handleNotificationChange = (notification: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        notifications: [...formData.notifications, notification],
      });
    } else {
      setFormData({
        ...formData,
        notifications: formData.notifications.filter(n => n !== notification),
      });
    }
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Μείνετε Συνδεδεμένοι — Δείτε τον Οικογενειακό Πίνακα Ελέγχου
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Ο Οικογενειακός Πίνακας Ελέγχου της MaziCare σας προσφέρει ενημερώσεις σε πραγματικό χρόνο 
            για τη φροντίδα του αγαπημένου σας προσώπου — από τα γεύματα και τα φάρμακα μέχρι τη διάθεση 
            και τις καθημερινές δραστηριότητες. Είτε βρίσκεστε κοντά είτε στο εξωτερικό, 
            θα γνωρίζετε πάντα πώς είναι ο ηλικιωμένος σας.
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
                Αυτή είναι μια προσομοίωση του Οικογενειακού Πίνακα Ελέγχου. Τα δεδομένα και οι ειδοποιήσεις 
                είναι ενδεικτικά. Αλλάξτε τις ρυθμίσεις για να εξερευνήσετε τις λειτουργίες.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Setup Form */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Ρυθμίσεις Πίνακα Ελέγχου</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="elderlyName">Όνομα ηλικιωμένου</Label>
                  <Input
                    id="elderlyName"
                    value={formData.elderlyName}
                    onChange={(e) => setFormData({...formData, elderlyName: e.target.value})}
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                  />
                </div>

                <div>
                  <Label htmlFor="caregiverName">Όνομα φροντιστή (προαιρετικό)</Label>
                  <Input
                    id="caregiverName"
                    value={formData.caregiverName}
                    onChange={(e) => setFormData({...formData, caregiverName: e.target.value})}
                    placeholder="π.χ. Ελένη Γεωργίου"
                  />
                </div>

                <div>
                  <Label htmlFor="schedule">Πρόγραμμα φροντίδας</Label>
                  <Select key="schedule-select" value={formData.schedule} onValueChange={(value) => setFormData({...formData, schedule: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε πρόγραμμα" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Πρωινό (08:00-14:00)</SelectItem>
                      <SelectItem value="afternoon">Απογευματινό (14:00-20:00)</SelectItem>
                      <SelectItem value="full-day">Ολοήμερο (08:00-20:00)</SelectItem>
                      <SelectItem value="24-7">24/7</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-4 block">Προτιμήσεις ειδοποιήσεων</Label>
                  <div className="space-y-3">
                    {[
                      "Ειδοποιήσεις υγείας",
                      "Χαμένα φάρμακα",
                      "Αλλαγές διάθεσης",
                      "Γεύματα",
                      "Δραστηριότητες",
                      "Έκτακτες καταστάσεις"
                    ].map((notification) => (
                      <div key={notification} className="flex items-center space-x-2">
                        <Checkbox
                          id={notification}
                          checked={formData.notifications.includes(notification)}
                          onCheckedChange={(checked) => 
                            handleNotificationChange(notification, checked as boolean)
                          }
                        />
                        <Label htmlFor={notification} className="text-sm">
                          {notification}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Δείτε Προεπισκόπηση Πίνακα
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Dashboard Preview */}
          <div>
            {showDashboard ? (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Πίνακας Ελέγχου - {formData.elderlyName}</span>
                      <Badge variant="secondary">Live</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="today" className="w-full">
                      <TabsList className="grid w-full grid-cols-2 gap-1">
                        <TabsTrigger value="today" className="text-xs sm:text-sm">Σήμερα</TabsTrigger>
                        <TabsTrigger value="week" className="text-xs sm:text-sm">Εβδομάδα</TabsTrigger>
                        {/* <TabsTrigger value="messages">Μηνύματα</TabsTrigger> */}
                      </TabsList>

                      <TabsContent value="today" className="space-y-4">
                        {/* Daily Overview */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {formData.notifications.includes("Χαμένα φάρμακα") && (
                            <Card className="p-4">
                              <div className="flex items-center gap-2">
                                <Pill className="h-5 w-5 flex-shrink-0 text-blue-600" />
                                <span className="text-sm font-medium">Φάρμακα</span>
                              </div>
                              <div className="mt-2">
                                <Progress value={75} className="h-2" />
                                <p className="text-xs text-gray-600 mt-1">3/4 δόσεις</p>
                              </div>
                            </Card>
                          )}

                          {formData.notifications.includes("Αλλαγές διάθεσης") && (
                            <Card className="p-4">
                              <div className="flex items-center gap-2">
                                <Heart className="h-5 w-5 flex-shrink-0 text-red-500" />
                                <span className="text-sm font-medium">Διάθεση</span>
                              </div>
                              <div className="mt-2 flex items-center gap-1">
                                <Smile className="h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-sm">Καλή</span>
                              </div>
                            </Card>
                          )}
                        </div>

                        {/* Schedule */}
                        <Card className="p-4">
                          <h4 className="font-medium mb-3 flex items-start gap-2 text-sm sm:text-base">
                            <Calendar className="h-4 w-4 flex-shrink-0 mt-0.5" />
                            <span className="break-words">Σημερινό Πρόγραμμα - {
                              formData.schedule === "morning" ? "Πρωινό (08:00-14:00)" :
                              formData.schedule === "afternoon" ? "Απογευματινό (14:00-20:00)" :
                              formData.schedule === "full-day" ? "Ολοήμερο (08:00-20:00)" :
                              "24/7"
                            }</span>
                          </h4>
                          <div className="space-y-2">
                            {(formData.schedule === "morning" || formData.schedule === "full-day" || formData.schedule === "24-7") && (
                              <>
                                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                                  <span className="break-words">09:00 - Πρωινό φάρμακο</span>
                                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                                </div>
                                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                                  <span className="break-words">12:00 - Γεύμα</span>
                                  <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500" />
                                </div>
                              </>
                            )}
                            {(formData.schedule === "afternoon" || formData.schedule === "full-day" || formData.schedule === "24-7") && (
                              <>
                                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                                  <span className="break-words">15:00 - Απογευματινό φάρμακο</span>
                                  <Clock className="h-4 w-4 flex-shrink-0 text-orange-500" />
                                </div>
                                <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                                  <span className="break-words">19:00 - Δείπνο</span>
                                  <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
                                </div>
                              </>
                            )}
                            {formData.schedule === "24-7" && (
                              <div className="flex items-center justify-between gap-2 text-xs sm:text-sm">
                                <span className="break-words">22:00 - Βραδινό φάρμακο</span>
                                <Clock className="h-4 w-4 flex-shrink-0 text-gray-400" />
                              </div>
                            )}
                          </div>
                        </Card>

                        {/* Notifications */}
                        {formData.notifications.length > 0 && (
                          <Card className="p-4">
                            <h4 className="font-medium mb-3">Πρόσφατες Ειδοποιήσεις</h4>
                            <div className="space-y-2">
                              {mockNotifications
                                .filter((notif) => {
                                  if (notif.type === "success" && formData.notifications.includes("Ειδοποιήσεις υγείας")) return true;
                                  if (notif.type === "warning" && formData.notifications.includes("Χαμένα φάρμακα")) return true;
                                  if (notif.type === "info" && formData.notifications.includes("Γεύματα")) return true;
                                  return false;
                                })
                                .map((notif) => (
                                  <div key={notif.id} className="flex items-start gap-2 text-xs sm:text-sm">
                                    {notif.type === "success" && <CheckCircle className="h-4 w-4 flex-shrink-0 text-green-500 mt-0.5" />}
                                    {notif.type === "warning" && <AlertTriangle className="h-4 w-4 flex-shrink-0 text-orange-500 mt-0.5" />}
                                    {notif.type === "info" && <Activity className="h-4 w-4 flex-shrink-0 text-blue-500 mt-0.5" />}
                                    <div className="min-w-0 flex-1">
                                      <p className="break-words">{notif.message}</p>
                                      <p className="text-gray-500 text-xs">{notif.time}</p>
                                    </div>
                                  </div>
                                ))}
                              {mockNotifications.filter((notif) => {
                                if (notif.type === "success" && formData.notifications.includes("Ειδοποιήσεις υγείας")) return true;
                                if (notif.type === "warning" && formData.notifications.includes("Χαμένα φάρμακα")) return true;
                                if (notif.type === "info" && formData.notifications.includes("Γεύματα")) return true;
                                return false;
                              }).length === 0 && (
                                <p className="text-sm text-gray-500">
                                  Δεν υπάρχουν ειδοποιήσεις για τις επιλεγμένες κατηγορίες.
                                </p>
                              )}
                            </div>
                          </Card>
                        )}
                      </TabsContent>

                      <TabsContent value="week" className="space-y-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-4">Εβδομαδιαία Αναφορά</h4>
                          <div className="space-y-3">
                            {formData.notifications.includes("Χαμένα φάρμακα") && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-sm">Φάρμακα (συμμόρφωση)</span>
                                  <span className="text-sm font-medium">95%</span>
                                </div>
                                <Progress value={95} className="h-2" />
                              </>
                            )}
                            
                            {formData.notifications.includes("Γεύματα") && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-sm">Γεύματα</span>
                                  <span className="text-sm font-medium">100%</span>
                                </div>
                                <Progress value={100} className="h-2" />
                              </>
                            )}
                            
                            {formData.notifications.includes("Δραστηριότητες") && (
                              <>
                                <div className="flex justify-between">
                                  <span className="text-sm">Δραστηριότητες</span>
                                  <span className="text-sm font-medium">85%</span>
                                </div>
                                <Progress value={85} className="h-2" />
                              </>
                            )}

                            {formData.notifications.length === 0 && (
                              <p className="text-sm text-gray-500">
                                Επιλέξτε κατηγορίες ειδοποιήσεων για να δείτε την εβδομαδιαία αναφορά.
                              </p>
                            )}
                          </div>
                        </Card>
                      </TabsContent>

                      {/* <TabsContent value="messages" className="space-y-4">
                        <Card className="p-4">
                          <h4 className="font-medium mb-4 flex items-center gap-2">
                            <MessageCircle className="h-4 w-4" />
                            Μηνύματα με {formData.caregiverName || "Φροντιστή"}
                          </h4>
                          <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <p className="text-sm">
                                &ldquo;{formData.elderlyName ? `Ο/Η ${formData.elderlyName.split(' ')[0]}` : 'Ο/Η ηλικιωμένος/η'} είχε πολύ καλή διάθεση σήμερα. Κάναμε έναν περίπατο στον κήπο.&rdquo;
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{formData.caregiverName.split(' ')[0] || "Φροντιστής"} - 14:30</p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm">
                                &ldquo;Ευχαριστώ για την ενημέρωση! Πώς πήγε το μεσημεριανό γεύμα;&rdquo;
                              </p>
                              <p className="text-xs text-gray-500 mt-1">Εσείς - 15:00</p>
                            </div>
                          </div>
                        </Card>
                      </TabsContent> */}
                    </Tabs>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-semibold mb-2">
                      Θέλετε πλήρη πρόσβαση σε ενημερώσεις φροντίδας σε πραγματικό χρόνο;
                    </h4>
                    <p className="text-gray-600 mb-4">
                      Εγγραφείτε στη λίστα αναμονής για να αποκτήσετε πλήρη πρόσβαση στον Οικογενειακό Πίνακα Ελέγχου.
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
                  <Activity className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">
                    Ρυθμίστε τον Πίνακα Ελέγχου
                  </h3>
                  <p className="text-gray-500">
                    Συμπληρώστε τις πληροφορίες για να δείτε προεπισκόπηση του πίνακα ελέγχου
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

