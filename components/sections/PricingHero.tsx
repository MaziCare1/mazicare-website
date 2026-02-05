"use client";

import { Button } from "@/components/ui/button";

export function PricingHero() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transparent pricing, no surprises
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Understand exactly what you pay for and what caregivers earn. Clear rates, fair fees, and complete transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => window.location.href = "https://mazicare-webapp.vercel.app/signup"}
              className="px-8 py-3 text-lg"
            >
              See plans and start
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = "#contact"}
              className="px-8 py-3 text-lg"
            >
              Talk to us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}