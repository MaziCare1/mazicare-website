"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Image 
              src="/assets/logo.png" 
              alt="MerimnaCare Logo" 
              width={40} 
              height={40}
              className="rounded-full" 
            />
            <h1 className="text-2xl font-bold text-primary">MerimnaCare</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Ποιοι Είμαστε
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Υπηρεσίες
            </button>
            <button
              onClick={() => scrollToSection('demo')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Demo
            </button>
            <Button
              onClick={() => scrollToSection('waitlist')}
              variant="default"
            >
              Εγγραφή
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Ποιοι Είμαστε
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Υπηρεσίες
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Demo
              </button>
              <Button
                onClick={() => scrollToSection('waitlist')}
                className="w-full mt-2"
              >
                Εγγραφή
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

