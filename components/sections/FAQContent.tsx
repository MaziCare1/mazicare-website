"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function FAQContent() {
    const { t } = useLanguage();

    return (
        <main className="overflow-x-hidden py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-100 p-4 rounded-full">
                            <HelpCircle className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        {t.faq.title}
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-6">
                    {t.faq.faqs.map((faq, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow">
                            <CardContent className="p-4 sm:p-6">
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                            <span className="text-blue-600 font-bold text-sm sm:text-base">{index + 1}</span>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-3 break-words">
                                            {faq.question}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words whitespace-pre-line">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-900 mb-3">
                        {t.faq.notFound}
                    </h3>
                    <p className="text-sm sm:text-base text-blue-800 mb-4">
                        {t.faq.contactUs}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 text-sm sm:text-base">
                        <a
                            href="mailto:info@mazicare.gr"
                            className="text-blue-600 hover:text-blue-700 font-medium break-all"
                        >
                            📧 info@mazicare.gr
                        </a>
                        <span className="hidden sm:inline text-gray-400">|</span>
                        <a
                            href="tel:+306955140164"
                            className="text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap"
                        >
                            📞 +30 6955 140 164
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}
