import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, ClipboardList, Users, Settings } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12 text-blue-600" />,
      title: "1. Create a free family account",
      description: "Sign up with your email and basic information to get started."
    },
    {
      icon: <ClipboardList className="h-12 w-12 text-green-600" />,
      title: "2. Tell us about your loved one",
      description: "Fill in basic information about the person who needs care (daily routine, health, hours)."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "3. Get matched with verified caregivers",
      description: "We suggest suitable caregivers and guide you through the selection process."
    },
    {
      icon: <Settings className="h-12 w-12 text-orange-600" />,
      title: "4. Monitor and manage care",
      description: "Meet, choose, and start care. Monitor through your MaziCare dashboard."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            How it works for families
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple steps to find the right care for your loved one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-0">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-50 rounded-2xl text-center">
          <p className="text-lg font-medium text-gray-900 mb-4">
            The MaziCare team is by your side at every step, so you can feel confident about your choice.
          </p>
          <p className="text-gray-600">
            You can change caregivers or adjust the care plan anytime through your digital dashboard.
          </p>
        </div>
      </div>
    </section>
  );
}