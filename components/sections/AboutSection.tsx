// components/sections/AboutSection.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ποιοι Είμαστε */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#030213] mb-8">
            {t.about.title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-[#717182] leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>

        {/* Οι Βασικές Μας Αξίες */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-[#030213] mb-16">
            {t.about.valuesTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex justify-center">
                  <Image src="/images/heart.png" alt={t.about.empathy} width={60} height={60} className="object-contain" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">{t.about.empathy}</h4>
                <p className="text-[#717182]">
                  {t.about.empathyDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex justify-center">
                  <Image src="/images/shield.png" alt={t.about.trust} width={60} height={60} className="object-contain" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">{t.about.trust}</h4>
                <p className="text-[#717182]">
                  {t.about.trustDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex justify-center">
                  <Image src="/images/worldwide.png" alt={t.about.culturalSensitivity} width={60} height={60} className="object-contain" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">{t.about.culturalSensitivity}</h4>
                <p className="text-[#717182]">
                  {t.about.culturalSensitivityDesc}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-[rgba(0,0,0,0.08)] hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex justify-center">
                  <Image src="/images/tropy.png" alt={t.about.excellence} width={60} height={60} className="object-contain" />
                </div>
                <h4 className="text-xl font-semibold text-[#030213] mb-4">{t.about.excellence}</h4>
                <p className="text-[#717182]">
                  {t.about.excellenceDesc}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}