"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image 
              src="/assets/logo.png" 
              alt="MaziCare Logo" 
              width={40} 
              height={40}
              className="rounded-full" 
            />
            <h1 className="text-2xl font-bold text-primary">MaziCare</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              Ποιοι Είμαστε
            </Link>
            <Link
              href="/#services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Υπηρεσίες
            </Link>
            <Link
              href="/#demo"
              className="text-foreground hover:text-primary transition-colors"
            >
              Demo
            </Link>
            <Link href="/#waitlist">
              <Button variant="default">
                Εγγραφή
              </Button>
            </Link>
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
              <Link
                href="/#about"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Ποιοι Είμαστε
              </Link>
              <Link
                href="/#services"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Υπηρεσίες
              </Link>
              <Link
                href="/#demo"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary transition-colors"
              >
                Demo
              </Link>
              <Link href="/#waitlist" onClick={() => setIsMenuOpen(false)} className="block mt-2">
                <Button className="w-full">
                  Εγγραφή
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

