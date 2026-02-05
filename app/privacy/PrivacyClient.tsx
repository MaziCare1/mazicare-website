"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function PrivacyClient() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-100 p-4 rounded-full">
                                <Shield className="h-8 w-8 sm:h-12 sm:w-12 text-blue-600" />
                            </div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t.legal.privacy.title}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            {t.legal.privacy.lastUpdated}
                        </p>
                    </div>

                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-6 sm:p-10 space-y-8">
                            {/* Introduction */}
                            <section>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                                    {t.legal.privacy.introTitle}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    {t.legal.privacy.introText}
                                </p>
                            </section>

                            {/* Section 1 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s1Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s1P1}</p>
                                    <p>{t.legal.privacy.s1P2}</p>
                                    <p>{t.legal.privacy.s1P3}</p>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s2Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s2P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s2List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s2P2}</p>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s3Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s3P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s3List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s3P2}</p>
                                    <p>{t.legal.privacy.s3P3}</p>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s4Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s4P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s4List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s4P2}</p>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s5Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s5P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s5List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s6Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s6P1}</p>
                                    <p>{t.legal.privacy.s6P2}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s6List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s6P3}</p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s7Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s7P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s7List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s7P2}</p>
                                    <p>{t.legal.privacy.s7P3}</p>
                                </div>
                            </section>

                            {/* Section 8 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s8Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s8P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s8List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s8P2}</p>
                                    <p>{t.legal.privacy.s8P3}</p>
                                </div>
                            </section>

                            {/* Section 9 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s9Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s9P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.privacy.s9List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.privacy.s9P2}</p>
                                </div>
                            </section>

                            {/* Section 10 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s10Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s10P1}</p>
                                    <p>{t.legal.privacy.s10P2}</p>
                                </div>
                            </section>

                            {/* Section 11 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s11Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s11P1}</p>
                                    <p>{t.legal.privacy.s11P2}</p>
                                    <p>{t.legal.privacy.s11P3}</p>
                                </div>
                            </section>

                            {/* Section 12 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.privacy.s12Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.privacy.s12P1}</p>
                                    <div className="bg-gray-50 p-4 rounded-lg inline-block">
                                        <p className="font-medium text-gray-900">MaziCare</p>
                                        <p className="text-gray-600">
                                            {t.legal.privacy.s12EmailLabel} <a href={`mailto:${t.legal.privacy.s12Email}`} className="text-blue-600 hover:text-blue-800 underline">{t.legal.privacy.s12Email}</a>
                                        </p>
                                    </div>
                                </div>
                            </section>

                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
