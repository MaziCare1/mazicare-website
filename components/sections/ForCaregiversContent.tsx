"use client";

import { useLanguage } from "@/lib/language-context";

// For Caregivers Hero Component
function ForCaregiversHero() {
    const { t } = useLanguage();

    return (
        <section className="bg-gradient-to-br from-accent to-background py-20 lg:py-28 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        {t.forCaregivers.hero.title}
                    </h1>

                    {/* Value points */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
                        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
                            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{t.forCaregivers.hero.badge1}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
                            <svg className="h-5 w-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="font-medium">{t.forCaregivers.hero.badge2}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
                            <svg className="h-5 w-5 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="font-medium">{t.forCaregivers.hero.badge3}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-lg border border-border">
                            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="font-medium">{t.forCaregivers.hero.badge4}</span>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto mb-10">
                        <p className="text-lg text-foreground/90 mb-4">
                            {t.forCaregivers.hero.description1}
                        </p>
                        <p className="text-lg text-foreground/90">
                            {t.forCaregivers.hero.description2}
                        </p>
                    </div>

                    <a
                        href="https://app.mazicare.gr/signup?role=caregiver"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                    >
                        {t.forCaregivers.hero.startButton}
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

// Who Can Apply Component
function WhoCanApply() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        {t.forCaregivers.whoCanApply.title}
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                        {t.forCaregivers.whoCanApply.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-accent rounded-xl p-6 border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">{t.forCaregivers.whoCanApply.typesTitle}</h3>
                            <ul className="space-y-3">
                                {[t.forCaregivers.whoCanApply.type1, t.forCaregivers.whoCanApply.type2, t.forCaregivers.whoCanApply.type3, t.forCaregivers.whoCanApply.type4].map((type, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <svg className="h-5 w-5 text-sidebar-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-foreground/90">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                       
                   
                    </div>

                    <div className="bg-accent rounded-xl p-6 border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">{t.forCaregivers.whoCanApply.langTitle}</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-foreground/90">{t.forCaregivers.whoCanApply.langGreek}</span>
                                    <span className="text-sidebar-primary font-medium">{t.forCaregivers.whoCanApply.langGreekLevel}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-foreground/90">{t.forCaregivers.whoCanApply.langEnglish}</span>
                                    <span className="text-foreground/70">{t.forCaregivers.whoCanApply.langEnglishLevel}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-foreground/90">{t.forCaregivers.whoCanApply.langOther}</span>
                                    <span className="text-green-600">{t.forCaregivers.whoCanApply.langOtherLevel}</span>
                                </div>
                            </div>
                        </div>
                    {/* <div className="space-y-6">
                        <div className="bg-accent rounded-xl p-6 border border-border">
                            <h3 className="text-xl font-semibold text-foreground mb-4">{t.forCaregivers.whoCanApply.certTitle}</h3>
                            <ul className="space-y-3">
                                {[t.forCaregivers.whoCanApply.cert1, t.forCaregivers.whoCanApply.cert2, t.forCaregivers.whoCanApply.cert3, t.forCaregivers.whoCanApply.cert4].map((cert, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <svg className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-foreground/90">{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                   
                    </div> */}
                </div>
            </div>
        </section>
    );
}

// Benefits Component
function Benefits() {
    const { t } = useLanguage();

    const benefits = [
        { title: t.forCaregivers.benefits.benefit1Title, description: t.forCaregivers.benefits.benefit1Desc, icon: "👨‍👩‍👧‍👦" },
        { title: t.forCaregivers.benefits.benefit2Title, description: t.forCaregivers.benefits.benefit2Desc, icon: "📱" },
        { title: t.forCaregivers.benefits.benefit3Title, description: t.forCaregivers.benefits.benefit3Desc, icon: "⭐" },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-background to-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        {t.forCaregivers.benefits.title}
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
                        {t.forCaregivers.benefits.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow">
                            <div className="text-3xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                            <p className="text-foreground/90">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-sidebar-primary/10 to-sidebar-primary/5 border border-sidebar-primary/20 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">
                                &quot;{t.forCaregivers.benefits.matchQuote}&quot;
                            </h3>
                            <p className="text-foreground/90">
                                {t.forCaregivers.benefits.matchGoal}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-sidebar-primary">100%</div>
                                <div className="text-foreground/90">{t.forCaregivers.benefits.verifiedFamilies}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Onboarding Process Component
function OnboardingProcess() {
    const { t } = useLanguage();

    const steps = [
        { step: t.forCaregivers.onboarding.step1Title, description: t.forCaregivers.onboarding.step1Desc, time: t.forCaregivers.onboarding.step1Time, docs: t.forCaregivers.onboarding.step1Docs },
        { step: t.forCaregivers.onboarding.step2Title, description: t.forCaregivers.onboarding.step2Desc, time: t.forCaregivers.onboarding.step2Time, docs: t.forCaregivers.onboarding.step2Docs },
        { step: t.forCaregivers.onboarding.step3Title, description: t.forCaregivers.onboarding.step3Desc, time: t.forCaregivers.onboarding.step3Time, docs: t.forCaregivers.onboarding.step3Docs },
        { step: t.forCaregivers.onboarding.step4Title, description: t.forCaregivers.onboarding.step4Desc, time: t.forCaregivers.onboarding.step4Time, docs: t.forCaregivers.onboarding.step4Docs },
        { step: t.forCaregivers.onboarding.step5Title, description: t.forCaregivers.onboarding.step5Desc, time: t.forCaregivers.onboarding.step5Time, docs: t.forCaregivers.onboarding.step5Docs }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        {t.forCaregivers.onboarding.title}
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
                        {t.forCaregivers.onboarding.subtitle}
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className="bg-white rounded-xl p-6 border border-border shadow-sm">
                                        <h3 className="text-xl font-bold text-foreground mb-2">{step.step}</h3>
                                        <p className="text-foreground/90 mb-4">{step.description}</p>
                                        <div className="flex flex-wrap gap-3">
                                            <div className="flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                                                <svg className="h-4 w-4 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-sm text-foreground">{step.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2 bg-accent px-3 py-1 rounded-full">
                                                <svg className="h-4 w-4 text-sidebar-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <span className="text-sm text-foreground">{step.docs}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute lg:relative left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 z-10">
                                    <div className="w-12 h-12 bg-sidebar-primary rounded-full flex items-center justify-center border-4 border-white">
                                        <span className="text-white font-bold">{index + 1}</span>
                                    </div>
                                </div>
                                <div className="lg:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Profile Guide Component
function ProfileGuide() {
    const { t } = useLanguage();

    const profileFeatures = [
        { icon: "📸", title: t.forCaregivers.profile.feature1Title, description: t.forCaregivers.profile.feature1Desc },
        { icon: "📝", title: t.forCaregivers.profile.feature2Title, description: t.forCaregivers.profile.feature2Desc },
        { icon: "🛠️", title: t.forCaregivers.profile.feature3Title, description: t.forCaregivers.profile.feature3Desc },
        { icon: "🗓️", title: t.forCaregivers.profile.feature4Title, description: t.forCaregivers.profile.feature4Desc },
        { icon: "🏆", title: t.forCaregivers.profile.feature5Title, description: t.forCaregivers.profile.feature5Desc },
        { icon: "🌐", title: t.forCaregivers.profile.feature6Title, description: t.forCaregivers.profile.feature6Desc }
    ];

    return (
        <section className="py-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        {t.forCaregivers.profile.title}
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
                        {t.forCaregivers.profile.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
                    {/* Profile Mockup */}
                    <div className="bg-white rounded-2xl p-6 border border-border shadow-lg">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-20 bg-sidebar-primary/10 rounded-full flex items-center justify-center text-3xl">
                                👩‍⚕️
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground">{t.forCaregivers.profile.mockName}</h3>
                                <p className="text-foreground/70">{t.forCaregivers.profile.mockRole}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                    <span className="ml-2 text-sm text-foreground/70">4.9/5 (42 {t.forCaregivers.profile.mockRating})</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-foreground mb-2">{t.forCaregivers.profile.skillsLabel}</h4>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">{t.forCaregivers.profile.skill1}</span>
                                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">{t.forCaregivers.profile.skill2}</span>
                                    <span className="bg-accent px-3 py-1 rounded-full text-sm text-foreground">{t.forCaregivers.profile.skill3}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-2">{t.forCaregivers.profile.availabilityLabel}</h4>
                                <div className="flex items-center gap-2">
                                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-foreground/90">{t.forCaregivers.profile.availabilityValue}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-semibold text-foreground mb-2">{t.forCaregivers.profile.languagesLabel}</h4>
                                <div className="flex gap-2">
                                    <span className="bg-sidebar-primary/10 text-sidebar-primary px-3 py-1 rounded-full text-sm">{t.forCaregivers.whoCanApply.langGreek}</span>
                                    <span className="bg-sidebar-primary/10 text-sidebar-primary px-3 py-1 rounded-full text-sm">{t.forCaregivers.whoCanApply.langEnglish}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Profile Features */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            {t.forCaregivers.profile.featuresTitle}
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {profileFeatures.map((feature, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border border-border">
                                    <div className="text-2xl mb-2">{feature.icon}</div>
                                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                                    <p className="text-sm text-foreground/70">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-sidebar-primary/10 to-green-50 border border-sidebar-primary/20 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                        {t.forCaregivers.profile.tipTitle}
                    </h3>
                    <p className="text-lg text-foreground/90 max-w-2xl mx-auto mb-6">
                        &quot;{t.forCaregivers.profile.tipContent}&quot;
                    </p>
                    <div className="text-sm text-foreground/70">
                        {t.forCaregivers.profile.tipSignature}
                    </div>
                </div>
            </div>
        </section>
    );
}



// Training and Support Component
function TrainingSupport() {
    const { t } = useLanguage();

    const trainingResources = [
        { title: t.forCaregivers.training.resource1Title, description: t.forCaregivers.training.resource1Desc, icon: "📚" },
        { title: t.forCaregivers.training.resource2Title, description: t.forCaregivers.training.resource2Desc, icon: "🎬" },
        { title: t.forCaregivers.training.resource3Title, description: t.forCaregivers.training.resource3Desc, icon: "📖" },
        { title: t.forCaregivers.training.resource4Title, description: t.forCaregivers.training.resource4Desc, icon: "💻" }
    ];

    return (
        <section className="py-20 bg-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        {t.forCaregivers.training.title}
                    </h2>
                    <p className="text-lg text-foreground/90 max-w-3xl mx-auto">
                        {t.forCaregivers.training.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {trainingResources.map((resource, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow text-center">
                            <div className="text-3xl mb-4">{resource.icon}</div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{resource.title}</h3>
                            <p className="text-foreground/90">{resource.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}

// Final CTA Component
function FinalCTA() {
    const { t } = useLanguage();

    return (
        <div className="bg-[#030213] py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-500 blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 blur-3xl -ml-20 -mb-20"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {t.forCaregivers.cta.title}
                </h2>
                <p className="text-gray-300 text-lg lg:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                    {t.forCaregivers.cta.subtitle}
                </p>
                <div className="flex justify-center">
                    <a
                        href="https://app.mazicare.gr/signup?role=caregiver"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-[#030213] bg-white hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-xl"
                    >
                        {t.forCaregivers.cta.button}
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

// Main ForCaregiversContent export
export function ForCaregiversContent() {
    return (
        <main className="pt-16">
            <ForCaregiversHero />
            <WhoCanApply />
            <Benefits />
            <OnboardingProcess />
            <ProfileGuide />
            <TrainingSupport />
            <FinalCTA />
        </main>
    );
}
