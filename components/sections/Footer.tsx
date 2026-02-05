"use client";

import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Brain,
  Facebook,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MaziCare</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footer.companyDescription}
            </p>

            {/* Alzheimer Research Notice */}
            <div className="bg-blue-900/50 border border-blue-700 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Brain className="h-5 w-5 text-blue-400" />
                <h4 className="font-semibold text-blue-200">
                  {t.footer.alzheimerTitle}
                </h4>
              </div>
              <p className="text-sm text-blue-100">{t.footer.alzheimerDesc}</p>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <Heart className="h-4 w-4 flex-shrink-0 text-red-500" />
              <span className="break-words">{t.footer.madeWithLove}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.whoWeAre}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.services}
                </Link>
              </li>

              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.faq}
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:info@mazicare.gr"
                  className="hover:text-white transition-colors break-all"
                >
                  info@mazicare.gr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+306955140164"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  +30 6955 140 164
                </a>
              </div>
              <div className="flex items-start gap-3">
                <SocialLink href="https://www.facebook.com/profile.php?id=61582675223458&mibextid=wwXIfr">
                  <Facebook className="h-5 w-5 flex-shrink-0 mt-1" />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/mazicare">
                  <Instagram className="h-5 w-5 flex-shrink-0 mt-1" />
                </SocialLink>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        {/* <div className="border-t border-gray-700 mt-12 pt-8">
          <h4 className="font-semibold mb-4 text-center">{t.footer.serviceAreas}</h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{t.footer.athensSoon}</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{t.footer.thessalonikiSoon}</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{t.footer.creteSoon}</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{t.footer.patraSoon}</span>
            <span className="bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">{t.footer.larisaSoon}</span>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} MaziCare. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

const SocialLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block hover:opacity-80 transition-opacity"
  >
    {children}
  </Link>
);
