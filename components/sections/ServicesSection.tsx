"use client";

import { Card, CardContent } from "@/components/ui/card";
import NextImage from "next/image";
import { useLanguage } from "@/lib/language-context";

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Τι Κάνουμε */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t.services.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t.services.description}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-12">
            {t.services.supportTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-blue-500">
              <CardContent className="pt-0">
                <div className="mb-4">
                  <NextImage src="/images/group.png" alt={t.services.reliableCaregivers} width={48} height={48} className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{t.services.reliableCaregivers}</h4>
                <p className="text-gray-600">
                  {t.services.reliableCaregiversDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-green-500">
              <CardContent className="pt-0">
                <div className="mb-4">
                  <NextImage src="/images/monitor.png" alt={t.services.realTimeMonitoring} width={48} height={48} className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{t.services.realTimeMonitoring}</h4>
                <p className="text-gray-600">
                  {t.services.realTimeMonitoringDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-purple-500">
              <CardContent className="pt-0">
                <div className="mb-4">
                  <NextImage src="/images/social-services.png" alt={t.services.socialSupport} width={48} height={48} className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{t.services.socialSupport}</h4>
                <p className="text-gray-600">
                  {t.services.socialSupportDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-orange-500">
              <CardContent className="pt-0">
                <div className="mb-4">
                  <NextImage src="/images/save-money.png" alt={t.services.financialSavings} width={48} height={48} className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{t.services.financialSavings}</h4>
                <p className="text-gray-600">
                  {t.services.financialSavingsDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-teal-500">
              <CardContent className="pt-0">
                <div className="mb-4">
                  <NextImage src="/images/location.png" alt={t.services.peaceOfMind} width={48} height={48} className="object-contain" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{t.services.peaceOfMind}</h4>
                <p className="text-gray-600">
                  {t.services.peaceOfMindDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

