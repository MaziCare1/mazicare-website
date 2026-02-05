"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function PricingContent() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-b from-blue-50 to-white">
            <div className="max-w-3xl w-full text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    {t.pricing.title}
                </h1>
                <p className="text-lg text-gray-600 mb-12">
                    {t.pricing.subtitle}
                </p>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Caregivers Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 flex flex-col hover:border-blue-500 transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{t.pricing.caregiversTitle}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-extrabold text-blue-600">{t.pricing.caregiversPrice}</span>
                            <span className="text-sm font-medium text-gray-500 ml-2">{t.pricing.vat}</span>
                            <span className="text-sm text-gray-500 ml-2">/ {t.pricing.perYear}</span>
                        </div>

                        <div className="space-y-3 mb-8 text-left flex-grow">
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit1}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit2}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit3}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit4}</span>
                            </div>
                        </div>

                        <Link href="https://mazicare-webapp.vercel.app/signup?role=caregiver">
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                                {t.pricing.ctaCaregiver}
                            </button>
                        </Link>
                    </div>

                    {/* Families Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 flex flex-col hover:border-purple-500 transition-colors relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{t.pricing.familiesTitle}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-extrabold text-purple-600">{t.pricing.familiesPrice}</span>
                            <span className="text-sm font-medium text-gray-500 ml-2">{t.pricing.vat}</span>
                            <span className="text-sm text-gray-500 ml-2">/ {t.pricing.perYear}</span>
                        </div>

                        <div className="space-y-3 mb-8 text-left flex-grow">
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit1}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit5}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit3}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700">{t.pricing.benefit4}</span>
                            </div>
                        </div>

                        <Link href="https://mazicare-webapp.vercel.app/signup?role=family">
                            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
                                {t.pricing.ctaFamily}
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mt-12 text-center">
                    <p className="text-sm text-gray-500">
                        {t.pricing.renewal}
                    </p>
                </div>

                <div className="mt-12">
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                        {t.pricing.closing}
                    </p>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base">
                        {t.pricing.contactUs} →
                    </Link>
                </div>
            </div>
        </main>
    );
}
