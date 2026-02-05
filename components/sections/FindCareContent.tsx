"use client";

import { useLanguage } from "@/lib/language-context";

// Find Care Hero Component
function FindCareHero() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20 lg:py-28 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            {t.findCare.hero.title}
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {t.findCare.hero.subtitle}
          </p>

          {/* Value points */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-blue-100 shadow-sm">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                {t.findCare.hero.badge1}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-teal-100 shadow-sm">
              <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-teal-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                {t.findCare.hero.badge2}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-indigo-100 shadow-sm">
              <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                <svg
                  className="h-4 w-4 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <span className="font-medium text-gray-900">
                {t.findCare.hero.badge3}
              </span>
            </div>
          </div>

          {/* Quick selection widget */}
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-10 max-w-3xl mx-auto border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.findCare.hero.formTitle}
                </h3>
                <p className="text-sm text-gray-600">
                  {t.findCare.hero.formSubtitle}
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.findCare.hero.careTypeLabel}
                </label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                  defaultValue=""
                >
                  <option value="">
                    {t.findCare.hero.careTypePlaceholder}
                  </option>
                  <option value="companionship">
                    {t.findCare.hero.careTypes.companionship}
                  </option>
                  <option value="24-7">
                    {t.findCare.hero.careTypes.liveIn}
                  </option>
                  <option value="post-hospital">
                    {t.findCare.hero.careTypes.postHospital}
                  </option>
                  <option value="dementia">
                    {t.findCare.hero.careTypes.dementia}
                  </option>
                  <option value="night-care">
                    {t.findCare.hero.careTypes.nightCare}
                  </option>
                  <option value="mobility">
                    {t.findCare.hero.careTypes.mobility}
                  </option>
                  <option value="personal-care">
                    {t.findCare.hero.careTypes.personalCare}
                  </option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.findCare.hero.locationLabel}
                </label>
                <input
                  type="text"
                  placeholder={t.findCare.hero.locationPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                />
              </div>
            </div>
            <a
              href="https://mazicare-webapp.vercel.app/signup?role=family"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
            >
              {t.findCare.hero.startButton}
              <svg
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <p className="text-sm text-gray-500 mt-4 text-center">
              {t.findCare.hero.formNote}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-4">
              {t.findCare.hero.questionTitle}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t.findCare.hero.questionAnswer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Component
function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: (
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
          <svg
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.howItWorks.step1Title,
      description: t.findCare.howItWorks.step1Desc,
      reassurance: t.findCare.howItWorks.step1Note,
      color: "blue",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center">
          <svg
            className="h-8 w-8 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-7.645a8.5 8.5 0 01-1.243 11.245M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.howItWorks.step2Title,
      description: t.findCare.howItWorks.step2Desc,
      reassurance: t.findCare.howItWorks.step2Note,
      color: "teal",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center">
          <svg
            className="h-8 w-8 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.howItWorks.step3Title,
      description: t.findCare.howItWorks.step3Desc,
      reassurance: t.findCare.howItWorks.step3Note,
      color: "indigo",
    },
    {
      icon: (
        <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center">
          <svg
            className="h-8 w-8 text-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.howItWorks.step4Title,
      description: t.findCare.howItWorks.step4Desc,
      reassurance: t.findCare.howItWorks.step4Note,
      color: "cyan",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.findCare.howItWorks.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t.findCare.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow text-center relative overflow-hidden group flex flex-col h-full"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-2 bg-${step.color}-500`}
              ></div>
              <div className="flex justify-center mb-6 mt-2">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">{step.description}</p>
              <div className={`p-3 rounded-lg bg-${step.color}-50 mt-auto`}>
                <p className={`text-sm text-${step.color}-700`}>
                  {step.reassurance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why MaziCare Component
function WhyMaziCare() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: (
        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
          <svg
            className="h-6 w-6 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.whyMaziCare.benefit1Title,
      description: t.findCare.whyMaziCare.benefit1Desc,
      color: "blue",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center">
          <svg
            className="h-6 w-6 text-teal-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.whyMaziCare.benefit2Title,
      description: t.findCare.whyMaziCare.benefit2Desc,
      color: "teal",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
          <svg
            className="h-6 w-6 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
      ),
      title: t.findCare.whyMaziCare.benefit3Title,
      description: t.findCare.whyMaziCare.benefit3Desc,
      color: "indigo",
    },
    {
      icon: (
        <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
          <svg
            className="h-6 w-6 text-cyan-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </div>
      ),
      title: t.findCare.whyMaziCare.benefit4Title,
      description: t.findCare.whyMaziCare.benefit4Desc,
      color: "cyan",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.findCare.whyMaziCare.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.findCare.whyMaziCare.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.findCare.whyMaziCare.safetyTitle}
          </h3>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-6">
            {t.findCare.whyMaziCare.safetyDesc}
          </p>
          <a
            href="#safety"
            className="inline-flex items-center text-white font-semibold hover:text-blue-100 bg-white/20 px-4 py-2 rounded-lg"
          >
            {t.findCare.whyMaziCare.safetyLink}
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Safety & Verification Component
function SafetyVerification() {
  const { t } = useLanguage();

  const verificationSteps = [
    {
      step: t.findCare.safety.step1Title,
      description: t.findCare.safety.step1Desc,
      color: "blue",
    },
    {
      step: t.findCare.safety.step2Title,
      description: t.findCare.safety.step2Desc,
      color: "teal",
    },
    
    {
      step: t.findCare.safety.step4Title,
      description: t.findCare.safety.step4Desc,
      color: "cyan",
    },
    {
      step: t.findCare.safety.step5Title,
      description: t.findCare.safety.step5Desc,
      color: "blue",
    },
  ];

  return (
    <section
      id="safety"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.findCare.safety.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.findCare.safety.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {verificationSteps.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-${item.color}-500`}
              ></div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 bg-${item.color}-50 rounded-full flex items-center justify-center`}
                >
                  <span className={`text-${item.color}-600 font-bold`}>
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {item.step}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.findCare.dashboard.feature1Title,
      description: t.findCare.dashboard.feature1Desc,
      icon: "📅",
      color: "blue",
    },
    {
      title: t.findCare.dashboard.feature2Title,
      description: t.findCare.dashboard.feature2Desc,
      icon: "👤",
      color: "teal",
    },
    {
      title: t.findCare.dashboard.feature3Title,
      description: t.findCare.dashboard.feature3Desc,
      icon: "📝",
      color: "indigo",
    },
    {
      title: t.findCare.dashboard.feature4Title,
      description: t.findCare.dashboard.feature4Desc,
      icon: "💬",
      color: "cyan",
    },
    {
      title: t.findCare.dashboard.feature5Title,
      description: t.findCare.dashboard.feature5Desc,
      icon: "💊",
      color: "blue",
    },
    {
      title: t.findCare.dashboard.feature6Title,
      description: t.findCare.dashboard.feature6Desc,
      icon: "💰",
      color: "teal",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
            {t.findCare.dashboard.title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {t.findCare.dashboard.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white rounded-2xl shadow-2xl p-2 transform rotate-1 hover:rotate-0 transition-transform duration-300 border border-gray-200">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl p-6 text-white">
                {/* Mock Dashboard UI */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold">
                      {t.findCare.dashboard.mockTitle}
                    </div>
                    <div className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {t.findCare.dashboard.mockToday}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">
                        {t.findCare.dashboard.mockSchedule}
                      </div>
                      <div className="text-sm">09:00 - 17:00</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        Μ
                      </div>
                      <div>
                        <div className="font-medium">
                          {t.findCare.dashboard.mockCaregiver}
                        </div>
                        <div className="text-sm opacity-80">
                          {t.findCare.dashboard.mockRole}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Notes */}
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-medium mb-2">
                      {t.findCare.dashboard.mockNoteTitle}
                    </div>
                    <div className="text-sm opacity-90">
                      &quot;{t.findCare.dashboard.mockNoteContent}&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              {t.findCare.dashboard.featuresTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow group"
                >
                  <div
                    className={`text-2xl mb-3 bg-${feature.color}-50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-${feature.color}-100 transition-colors`}
                  >
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.findCare.dashboard.peaceTitle}
          </h3>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-6">
            {t.findCare.dashboard.peaceDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{t.findCare.dashboard.badge1}</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>{t.findCare.dashboard.badge2}</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 px-3 py-1 rounded-full">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
              <span>{t.findCare.dashboard.badge3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Find Care CTA Component
function FindCareCTA() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-200 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            {t.findCare.cta.title}
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            {t.findCare.cta.subtitle}
          </p>
          <div className="flex justify-center">
            <a
              href="https://mazicare-webapp.vercel.app/signup?role=family"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all md:py-4 md:text-lg md:px-10"
            >
              {t.findCare.cta.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main FindCareContent export
export function FindCareContent() {
  return (
    <main className="pt-16">
      <FindCareHero />
      <HowItWorks />
      <WhyMaziCare />
      <SafetyVerification />
      <DashboardPreview />
      <FindCareCTA />
    </main>
  );
}
