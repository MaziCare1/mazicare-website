"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export function FindCareHero() {
  const [careType, setCareType] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    // This would route to your app's onboarding flow
    window.location.href = `https://app.mazicare.gr/signup?role=family&careType=${careType}&location=${location}`;
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Find trusted elderly care at home in Greece
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Looking for reliable care for your loved one? Find the right caregiver with safety and transparency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-10 justify-center">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Verified caregivers</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Ongoing support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-green-600" />
              <span>Transparent pricing</span>
            </div>
          </div>

          {/* Quick selection widget */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-10 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Tell us what you need
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Care type
                </label>
                <select
                  value={careType}
                  onChange={(e) => setCareType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select care type</option>
                  <option value="companionship">Companionship</option>
                  {/* <option value="24-7">24/7 Live-in care</option> */}
                  <option value="post-hospital">Post-hospital care</option>
                  <option value="dementia">Dementia care</option>
                  <option value="night-care">Night care</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or region"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <Button
              onClick={handleSearch}
              className="w-full sm:w-auto px-8 py-3 text-lg"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 mb-6">
              MaziCare connects families with professional caregivers across Greece, 
              with thorough vetting and ongoing support.
            </p>
            <p className="text-gray-600">
              In just a few steps, you create an account, describe your loved one's needs, 
              and receive suggestions from suitable caregivers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}