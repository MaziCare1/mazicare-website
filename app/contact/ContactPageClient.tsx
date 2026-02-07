// // app/contact/ContactPageClient.tsx
// "use client";

// import { Header } from "@/components/sections/Header";
// import { Footer } from "@/components/sections/Footer";
// import { Toaster } from "@/components/ui/sonner";
// import { useLanguage } from "@/lib/language-context";

// // Contact Form Component
// function ContactForm() {
//     const { t } = useLanguage();

//     return (
//         <div className="bg-white rounded-xl shadow-lg p-8 border border-[rgba(0,0,0,0.1)]">
//             <h3 className="text-2xl font-bold text-[#030213] mb-6">
//                 {t.contact.form.title}
//             </h3>

//             <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-[#030213] mb-2">
//                             {t.contact.form.firstName} {t.contact.form.required}
//                         </label>
//                         <input
//                             type="text"
//                             id="firstName"
//                             name="firstName"
//                             required
//                             className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
//                             placeholder={t.contact.form.firstNamePlaceholder}
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-[#030213] mb-2">
//                             {t.contact.form.lastName} {t.contact.form.required}
//                         </label>
//                         <input
//                             type="text"
//                             id="lastName"
//                             name="lastName"
//                             required
//                             className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
//                             placeholder={t.contact.form.lastNamePlaceholder}
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-[#030213] mb-2">
//                         {t.contact.form.email} {t.contact.form.required}
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
//                         placeholder={t.contact.form.emailPlaceholder}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-[#030213] mb-2">
//                         {t.contact.form.phone}
//                     </label>
//                     <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
//                         placeholder={t.contact.form.phonePlaceholder}
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-[#030213] mb-2">
//                         {t.contact.form.subject} {t.contact.form.required}
//                     </label>
//                     <select
//                         id="subject"
//                         name="subject"
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
//                     >
//                         <option value="">{t.contact.form.subjectPlaceholder}</option>
//                         <option value="general">{t.contact.form.subjectGeneral}</option>
//                         <option value="family">{t.contact.form.subjectFamily}</option>
//                         <option value="caregiver">{t.contact.form.subjectCaregiver}</option>
//                         <option value="partnership">{t.contact.form.subjectPartnership}</option>
//                         <option value="support">{t.contact.form.subjectSupport}</option>
//                         <option value="other">{t.contact.form.subjectOther}</option>
//                     </select>
//                 </div>

//                 <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-[#030213] mb-2">
//                         {t.contact.form.message} {t.contact.form.required}
//                     </label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         rows={6}
//                         required
//                         className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all resize-none"
//                         placeholder={t.contact.form.messagePlaceholder}
//                     ></textarea>
//                 </div>

//                 <div className="flex items-center">
//                     <input
//                         type="checkbox"
//                         id="privacy"
//                         name="privacy"
//                         required
//                         className="w-4 h-4 text-[#030213] border-[rgba(0,0,0,0.1)] rounded focus:ring-[#030213] focus:ring-2"
//                     />
//                     <label htmlFor="privacy" className="ml-2 text-sm text-[#717182]">
//                         {t.contact.form.privacyConsent} {t.contact.form.required}
//                     </label>
//                 </div>

//                 <button
//                     type="submit"
//                     className="w-full bg-[#030213] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg"
//                 >
//                     {t.contact.form.submit}
//                 </button>
//             </form>
//         </div>
//     );
// }

// // Contact Info Component
// function ContactInfo() {
//     const { t } = useLanguage();

//     return (
//         <div className="space-y-8">
//             <div>
//                 <h3 className="text-2xl font-bold text-[#030213] mb-6">
//                     {t.contact.info.title}
//                 </h3>

//                 <div className="space-y-6">
//                     {/* <div className="flex items-start gap-4">
//                         <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-[#030213]">{t.contact.info.address}</h4>
//                             <p className="text-[#717182] whitespace-pre-line">{t.contact.info.addressValue}</p>
//                         </div>
//                     </div> */}

//                     <div className="flex items-start gap-4">
//                         <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-[#030213]">{t.contact.info.phone}</h4>
//                             <p className="text-[#717182]">
//                                 <a href="tel:306955140164" className="hover:text-[#030213] transition-colors">
//                                 +30 6955 140 164
//                                 </a>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                         <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                 <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-[#030213]">{t.contact.info.email}</h4>
//                             <p className="text-[#717182]">
//                                 <a href="mailto:info@mazicare.gr" className="hover:text-[#030213] transition-colors">
//                                     info@mazicare.gr
//                                 </a>
//                             </p>
//                         </div>
//                     </div>

//                     <div className="flex items-start gap-4">
//                         <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
//                             <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
//                                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                             </svg>
//                         </div>
//                         <div>
//                             <h4 className="font-semibold text-[#030213]">{t.contact.info.hours}</h4>
//                             <p className="text-[#717182]">
//                                 {t.contact.info.hoursWeekdays}<br />
                            
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="bg-gradient-to-br from-[#e9ebef] to-[#ececf0] rounded-xl p-6">
//                 <h4 className="font-bold text-[#030213] text-lg mb-4">
//                     {t.contact.faq.title}
//                 </h4>
//                 <div className="space-y-4">
//                     <div>
//                         <p className="font-medium text-[#030213] mb-1">
//                             {t.contact.faq.q1}
//                         </p>
//                         <p className="text-sm text-[#717182]">
//                             {t.contact.faq.a1}
//                         </p>
//                     </div>

//                     <div>
//                         <p className="font-medium text-[#030213] mb-1">
//                             {t.contact.faq.q3}
//                         </p>
//                         <p className="text-sm text-[#717182]">
//                             {t.contact.faq.a3}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function ContactPageClient() {
//     return (
//         <div className="min-h-screen bg-white overflow-x-hidden">
//             <Header />
//             <main className="overflow-x-hidden">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
//                     <div className="grid lg:grid-cols-2 gap-12">
//                         <ContactForm />
//                         <ContactInfo />
//                     </div>
//                 </div>
//             </main>
//             <Footer />
//             <Toaster />
//         </div>
//     );
// }


// app/contact/ContactPageClient.tsx
"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner"; 
import { useLanguage } from "@/lib/language-context";
import { useState } from "react";

// Contact Form Component
function ContactForm() {
    const { t } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        const form = e.currentTarget; 
        const formData = new FormData(form);
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };
    
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            const result = await response.json();
    
            if (response.ok) {
                toast.success(t.contact.form.successMessage || 'Message sent successfully!');
                form.reset(); // Use the saved reference
            } else {
                toast.error(t.contact.form.errorMessage || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error(t.contact.form.errorMessage || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-[rgba(0,0,0,0.1)]">
            <h3 className="text-2xl font-bold text-[#030213] mb-6">
                {t.contact.form.title}
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#030213] mb-2">
                            {t.contact.form.firstName} {t.contact.form.required}
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
                            placeholder={t.contact.form.firstNamePlaceholder}
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#030213] mb-2">
                            {t.contact.form.lastName} {t.contact.form.required}
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
                            placeholder={t.contact.form.lastNamePlaceholder}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#030213] mb-2">
                        {t.contact.form.email} {t.contact.form.required}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
                        placeholder={t.contact.form.emailPlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#030213] mb-2">
                        {t.contact.form.phone}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
                        placeholder={t.contact.form.phonePlaceholder}
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#030213] mb-2">
                        {t.contact.form.subject} {t.contact.form.required}
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all"
                    >
                        <option value="">{t.contact.form.subjectPlaceholder}</option>
                        <option value="general">{t.contact.form.subjectGeneral}</option>
                        <option value="family">{t.contact.form.subjectFamily}</option>
                        <option value="caregiver">{t.contact.form.subjectCaregiver}</option>
                        <option value="partnership">{t.contact.form.subjectPartnership}</option>
                        <option value="support">{t.contact.form.subjectSupport}</option>
                        <option value="other">{t.contact.form.subjectOther}</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#030213] mb-2">
                        {t.contact.form.message} {t.contact.form.required}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-[rgba(0,0,0,0.1)] bg-[#f3f3f5] focus:outline-none focus:ring-2 focus:ring-[#030213] focus:border-transparent transition-all resize-none"
                        placeholder={t.contact.form.messagePlaceholder}
                    ></textarea>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="w-4 h-4 text-[#030213] border-[rgba(0,0,0,0.1)] rounded focus:ring-[#030213] focus:ring-2"
                    />
                    <label htmlFor="privacy" className="ml-2 text-sm text-[#717182]">
                        {t.contact.form.privacyConsent} {t.contact.form.required}
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#030213] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (t.contact.form.sending || 'Sending...') : t.contact.form.submit}
                </button>
            </form>
        </div>
    );
}

// Contact Info Component
function ContactInfo() {
    const { t } = useLanguage();

    return (
        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-[#030213] mb-6">
                    {t.contact.info.title}
                </h3>

                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#030213]">{t.contact.info.phone}</h4>
                            <p className="text-[#717182]">
                                <a href="tel:306955140164" className="hover:text-[#030213] transition-colors">
                                +30 6955 140 164
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#030213]">{t.contact.info.email}</h4>
                            <p className="text-[#717182]">
                                <a href="mailto:info@mazicare.gr" className="hover:text-[#030213] transition-colors">
                                    info@mazicare.gr
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#030213] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-semibold text-[#030213]">{t.contact.info.hours}</h4>
                            <p className="text-[#717182]">
                                {t.contact.info.hoursWeekdays}<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-br from-[#e9ebef] to-[#ececf0] rounded-xl p-6">
                <h4 className="font-bold text-[#030213] text-lg mb-4">
                    {t.contact.faq.title}
                </h4>
                <div className="space-y-4">
                    <div>
                        <p className="font-medium text-[#030213] mb-1">
                            {t.contact.faq.q1}
                        </p>
                        <p className="text-sm text-[#717182]">
                            {t.contact.faq.a1}
                        </p>
                    </div>

                    <div>
                        <p className="font-medium text-[#030213] mb-1">
                            {t.contact.faq.q3}
                        </p>
                        <p className="text-sm text-[#717182]">
                            {t.contact.faq.a3}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ContactPageClient() {
    return (
        <div className="min-h-screen bg-white overflow-x-hidden">
            <Header />
            <main className="overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}