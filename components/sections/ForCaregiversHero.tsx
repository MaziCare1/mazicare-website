"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function ForCaregiversHero() {
  return (
    <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join the MaziCare caregiver network
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-700 mb-8">
            Find families who need your services, with fair terms and full support.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Fair pay</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Flexible schedules</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Verified families</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Ongoing support</span>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg text-gray-600 mb-6">
              MaziCare helps professional caregivers find stable collaborations with families across Greece.
            </p>
            <p className="text-lg text-gray-600">
              Create your profile, showcase your experience and skills, and take part in a short introduction with our team.
            </p>
          </div>

          <Button
            onClick={() => window.location.href = "https://mazicare-webapp.vercel.app/signup?role=caregiver"}
            className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
          >
            Apply as Caregiver
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}