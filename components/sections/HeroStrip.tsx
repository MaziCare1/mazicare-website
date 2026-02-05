"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function HeroStrip() {
  return (
    <div className="bg-blue-50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2">
          <div className="flex items-center text-sm text-blue-700 mb-2 sm:mb-0">
            <span>✅ Verified elderly care professionals across Greece</span>
          </div>
          <Link 
            href="/#how-it-works" 
            className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            How MaziCare Works
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}