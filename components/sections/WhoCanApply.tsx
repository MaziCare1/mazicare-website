import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Globe } from "lucide-react";

export function WhoCanApply() {
  const criteria = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Types of Professionals",
      items: [
        "Γηροκόμοι (Elderly caregivers)",
        "Αποκλειστικές νοσοκόμες (Private nurses)",
        "Registered nurses",
        "Home health aides"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Minimum Experience",
      items: [
        "1-2 years in elderly care",
        "Experience with specific conditions (dementia, mobility, etc.)",
        "Professional references required"
      ]
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Certifications & Training",
      items: [
        "CPR/First Aid certification",
        "Specialized training in elderly care",
        "Continuous education preferred",
        "Valid professional licenses"
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      title: "Language Requirements",
      items: [
        "Greek language proficiency",
        "English (recommended)",
        "Additional languages are a plus"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Who can apply
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're looking for dedicated professionals committed to quality elderly care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criteria.map((criterion, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {criterion.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {criterion.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {criterion.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}