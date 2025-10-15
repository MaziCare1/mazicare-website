"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Η φροντίδα που αξίζει στους{" "}
              <span className="text-blue-600">δικούς σου</span>{" "}
              <span className="text-blue-600">ανθρώπους</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ολοκληρωμένη ψηφιακή πλατφόρμα φροντίδας ηλικιωμένων στην Ελλάδα. Συνδέουμε οικογένειες με επαληθευμένους φροντιστές και παρέχουμε ηρεμία μέσω τεχνολογίας και ενσυναίσθησης.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('demo')}
                className="text-lg px-8 py-3"
              >
                Δοκιμάστε το Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('about')}
                className="text-lg px-8 py-3"
              >
                Μάθετε Περισσότερα
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span>Επαληθευμένοι Φροντιστές</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                <span>Κοινωνική Υποστήριξη</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-600" />
                <span>Οικογενειακή Φροντίδα</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1665567683724-bff463ac1676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwY2FyZSUyMGdyZWVjZSUyMGZhbWlseXxlbnwxfHx8fDE3NTk3NTYwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Φροντίδα ηλικιωμένων με την οικογένεια"
                width={1080}
                height={500}
                className="w-full h-[500px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

