"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Users, Heart } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-[#ececf0] via-white to-[#e9ebef] py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Intro & Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className="lg:pr-8">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#030213] leading-tight mb-6 tracking-tight">
                {t.hero.title}
              </h1>

              <p className="text-xl lg:text-2xl text-[#717182] font-medium mb-8 leading-relaxed">
                {t.hero.subtitle}
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-lg text-[#030213]/90 leading-relaxed">
                  {t.hero.description1}
                </p>
                <p className="text-lg text-[#030213]/90 leading-relaxed">
                  {t.hero.description2}
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-[4/3] relative">
              <Image
                src="/assets/bg_picture.png"
                alt={t.hero.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl font-semibold text-white">
                  {t.hero.imageCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Side-by-Side Boxes */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start sm:pb-16">
          {/* Families Box */}
          <div className="bg-white p-8 rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-lg h-full flex flex-col">
            <h3 className="text-2xl font-bold text-[#030213] mb-4">
              {t.hero.howItWorksFamily}
            </h3>
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                  <span className="font-bold">1</span>
                </div>
                <p className="text-[#030213]/90 pt-1">{t.hero.step1Family}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                  <span className="font-bold">2</span>
                </div>
                <p className="text-[#030213]/90 pt-1">{t.hero.step2Family}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#030213] text-white rounded-full flex items-center justify-center mt-1">
                  <span className="font-bold">3</span>
                </div>
                <p className="text-[#030213]/90 pt-1">{t.hero.step3Family}</p>
              </div>
            </div>

            {/* Reassurance Message */}
            <div className="bg-gray-50 p-4 rounded-xl border border-[rgba(0,0,0,0.05)] mb-6">
              <div className="flex items-start gap-3">
                <Heart className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#030213] text-sm mb-1">
                    {t.hero.teamSupportTitle}
                  </p>
                  <p className="text-[#717182] text-sm leading-relaxed">
                    {t.hero.teamSupportDesc}
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                window.location.href = "/find-care";
              }}
              className="w-full bg-[#030213] hover:bg-[#030213]/90 text-white py-6 text-lg rounded-lg"
            >
              {t.hero.startNow}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Caregiver Box */}
          <div className="bg-white p-8 rounded-2xl border border-[rgba(0,0,0,0.08)] shadow-lg h-full flex flex-col">
            <div className="mb-6 flex-grow">
              <h3 className="text-2xl font-bold text-[#030213] mb-4">
                {t.hero.joinAsCaregiver}
              </h3>
              <p className="text-lg text-[#717182] mb-4">
                {t.hero.joinAsCaregiverDesc}
              </p>

              <div className="space-y-4 mb-6">
                <p className="text-[#030213]/90">
                  {t.hero.joinAsCaregiverNote}
                </p>
              </div>

              {/* Caregiver Steps */}
              <div className="mb-6">
                <h4 className="font-semibold text-[#030213] mb-4">
                  {t.hero.caregiverStepsTitle}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#030213] font-bold text-sm">
                        1
                      </span>
                    </div>
                    <p className="text-sm text-[#030213]/90">
                      {t.hero.step1Caregiver}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#030213] font-bold text-sm">
                        2
                      </span>
                    </div>
                    <p className="text-sm text-[#030213]/90">
                      {t.hero.step2Caregiver}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#030213] font-bold text-sm">
                        3
                      </span>
                    </div>
                    <p className="text-sm text-[#030213]/90">
                      {t.hero.step3Caregiver}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#030213]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#030213] font-bold text-sm">
                        4
                      </span>
                    </div>
                    <p className="text-sm text-[#030213]/90">
                      {t.hero.step4Caregiver}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              onClick={() => {
                window.location.href = "/for-caregivers";
              }}
              className="w-full bg-[#030213] hover:bg-[#030213]/90 text-white py-6 text-lg rounded-lg mt-auto"
            >
              {t.hero.applyAsCaregiver}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Bottom CTA & Trust Section */}
          <div className="mt-16 flex flex-col items-center text-center gap-y-12">
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => (window.location.href = "/find-care")}
                className="text-lg px-8 py-6 bg-[#030213] hover:bg-[#030213]/90 text-white rounded-lg group"
              >
                {t.hero.lookingForCare}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = "/for-caregivers")}
                className="text-lg px-8 py-6 border-2 border-[#030213] text-[#030213] hover:bg-[#030213]/5 rounded-lg bg-white"
              >
                {t.hero.lookingForJob}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm sm:text-base font-medium text-[#030213]">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>{t.hero.verifiedCaregivers}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>{t.hero.backgroundCheck}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>{t.hero.ongoingSupport}</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
