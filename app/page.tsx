import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaregiverMatchDemo } from "@/components/sections/CaregiverMatchDemo";
import { FamilyDashboardDemo } from "@/components/sections/FamilyDashboardDemo";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaregiverMatchDemo />
        <FamilyDashboardDemo />
        <WaitlistSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

