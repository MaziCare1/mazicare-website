// components/sections/Header.tsx - Βελτιωμένη μετάφραση με σωστό styling
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
            <Image
              src="/assets/mazi-logo.png"
              alt="Λογότυπο MaziCare"
              width={50}
              height={50}
              className="rounded-full flex-shrink-0"
            />
            <h1 className="text-xl lg:text-2xl font-bold text-primary whitespace-nowrap">MaziCare</h1>
          </Link>

          {/* Trust statement - μόνο για μεγάλες οθόνες */}
          <div className="hidden md:flex items-center text-sm text-[#717182] mx-4 flex-shrink-0">
            <span className="border-l border-gray-300 pl-4 whitespace-nowrap">
              {t.header.verified}
            </span>
          </div>

          {/* Desktop Navigation - optimized spacing for Greek */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-end">
            <div className="flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/find-care"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm whitespace-nowrap px-1.5 xl:px-2 py-1"
              >
                {t.header.findCare}
              </Link>
              <Link
                href="/for-caregivers"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm whitespace-nowrap px-1.5 xl:px-2 py-1"
              >
                {t.header.forCaregivers}
              </Link>
              <Link
                href="/pricing"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm whitespace-nowrap px-1.5 xl:px-2 py-1"
              >
                {t.header.pricing}
              </Link>
              <Link
                href="/contact"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm whitespace-nowrap px-1.5 xl:px-2 py-1"
              >
                {t.header.contact}
              </Link>
            </div>

            {/* Language Dropdown */}
            <div className="flex items-center ml-1.5 xl:ml-3 border-l border-gray-300 pl-1.5 xl:pl-3 flex-shrink-0">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'el')}
                className="text-xs xl:text-sm font-medium text-[#030213] bg-transparent border border-gray-300 rounded px-1.5 xl:px-2 py-1 cursor-pointer hover:border-[#030213] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-colors"
              >
                <option value="en">🇬🇧 EN</option>
                <option value="el">🇬🇷 ΕΛ</option>
              </select>
            </div>

            <Link
             href="https://app.mazicare.gr/login" 
             className="ml-1.5 xl:ml-3 flex-shrink-0">
              <Button variant="default" className="font-medium text-sm px-2.5 xl:px-4 py-2 whitespace-nowrap">
                {t.header.login}
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button - με σύνδεση για μικρές οθόνες */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
             href="https://app.mazicare.gr/login" 

             className="hidden sm:block">
              <Button size="sm" variant="default" className="text-sm">
                {t.header.login}
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="px-3 py-2 text-sm text-[#717182] border-b pb-3 mb-2 bg-[#f3f3f5] rounded-lg">
                {t.header.mobileSubtitle}
              </div>

              <div className="space-y-1">
                <Link
                  href="/find-care"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  {t.header.findCare}
                </Link>
                <Link
                  href="/for-caregivers"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  {t.header.forCaregivers}
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  {t.header.pricing}
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  {t.header.contact}
                </Link>
              </div>

              {/* Language Dropdown Mobile */}
              <div className="px-3 py-4 border-t mt-3 pt-4">
                <label className="block text-sm font-medium text-[#717182] mb-2">Language / Γλώσσα</label>
                <select
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value as 'en' | 'el');
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-sm font-medium text-[#030213] bg-white border border-gray-300 rounded-lg px-3 py-2 cursor-pointer hover:border-[#030213] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-colors"
                >
                  <option value="en">🇬🇧 English</option>
                  <option value="el">🇬🇷 Ελληνικά</option>
                </select>
              </div>

              <div className="pt-4 border-t">
                <Link
                  href="https://app.mazicare.gr/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full bg-[#030213] hover:bg-[#030213]/90">
                    {t.header.loginFull}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}