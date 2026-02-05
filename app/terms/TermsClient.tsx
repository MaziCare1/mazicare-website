"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

export default function TermsClient() {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            {t.legal.terms.title}
                        </h1>
                        <p className="text-sm sm:text-base text-gray-500">
                            {t.legal.terms.lastUpdated}
                        </p>
                    </div>

                    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                        <CardContent className="p-6 sm:p-10 space-y-8">

                            {/* Section 1 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s1Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s1P1}</p>
                                    <p>{t.legal.terms.s1P2}</p>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s2Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s2P1}</p>
                                    <p>{t.legal.terms.s2P2}</p>
                                    <p>{t.legal.terms.s2P3}</p>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s3Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s3P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.terms.s3List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.terms.s3P2}</p>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s4Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s4P1}</p>
                                    <p>{t.legal.terms.s4P2}</p>
                                </div>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s5Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s5P1}</p>
                                    <p>{t.legal.terms.s5P2}</p>
                                </div>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s6Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s6P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.terms.s6List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.terms.s6P2}</p>
                                </div>
                            </section>

                            {/* Section 7 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s7Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s7P1}</p>
                                    <p>{t.legal.terms.s7P2}</p>
                                    <p>{t.legal.terms.s7P3}</p>
                                </div>
                            </section>

                            {/* Section 8 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s8Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s8P1}</p>
                                    <p>{t.legal.terms.s8P2}</p>
                                </div>
                            </section>

                            {/* Section 9 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s9Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s9P1}</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        {t.legal.terms.s9List.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                    <p>{t.legal.terms.s9P2}</p>
                                </div>
                            </section>

                            {/* Section 10 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s10Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s10P1}</p>
                                    <p>{t.legal.terms.s10P2}</p>
                                </div>
                            </section>

                            {/* Section 11 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s11Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s11P1}</p>
                                    <p>{t.legal.terms.s11P2}</p>
                                </div>
                            </section>

                            {/* Section 12 */}
                            <section>
                                <h2 className="text-lg font-bold text-gray-900 mb-3">{t.legal.terms.s12Title}</h2>
                                <div className="space-y-4 text-gray-700 leading-relaxed">
                                    <p>{t.legal.terms.s12P1}</p>
                                    <p>{t.legal.terms.s12P2}</p>
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
