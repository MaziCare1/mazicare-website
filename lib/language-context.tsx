"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
    isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Default to Greek ('el')
    const [language, setLanguageState] = useState<Language>('el');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check localStorage for saved language preference
        const savedLang = localStorage.getItem('mazicare-lang') as Language;
        if (savedLang && (savedLang === 'el' || savedLang === 'en')) {
            setLanguageState(savedLang);
        }
        // Mark loading as complete
        setIsLoading(false);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('mazicare-lang', lang);
    };

    const value = {
        language,
        setLanguage,
        t: translations[language],
        isLoading,
    };

    // Show a minimal loading state while detecting language
    // This prevents flash of wrong language content
    if (isLoading) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="animate-pulse">
                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                </div>
            </div>
        );
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
