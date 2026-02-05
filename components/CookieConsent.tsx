"use client"

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { useLanguage } from "@/lib/language-context";


interface CookieConsentProps {
    onAccept?: () => void;
    onReject?: () => void;
    showEveryTime?: boolean; // New prop to control if it shows every time
}

const COOKIE_CONSENT_NAME = 'mazicare_cookie_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year in seconds

// Helper functions to manage cookies
const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop()?.split(';').shift() || null;
    }
    return null;
};

const setCookie = (name: string, value: string, maxAge: number) => {
    document.cookie = `${name}=${value}; path=/; max-age=${maxAge}; SameSite=Lax`;
};

export function CookieConsent({ onAccept, onReject, showEveryTime = false }: CookieConsentProps) {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (showEveryTime) {
            // Always show if showEveryTime is true
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            // Check if user has already made a choice via cookie
            const consent = getCookie(COOKIE_CONSENT_NAME);
            if (!consent) {
                // Small delay to let the page load first
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 500);
                return () => clearTimeout(timer);
            }
        }
    }, [showEveryTime]);

    const handleAccept = () => {
        if (!showEveryTime) {
            setCookie(COOKIE_CONSENT_NAME, 'accepted', COOKIE_MAX_AGE);
        }
        setIsVisible(false);
        onAccept?.();
    };

    const handleReject = () => {
        if (!showEveryTime) {
            setCookie(COOKIE_CONSENT_NAME, 'rejected', COOKIE_MAX_AGE);
        }
        setIsVisible(false);
        onReject?.();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-500">
            <div className="bg-background/95 backdrop-blur-lg border-t shadow-2xl">
                <div className="container mx-auto px-4 py-4 md:py-5">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Cookie Icon and Text */}
                        <div className="flex items-start md:items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-full flex-shrink-0">
                                <Cookie className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-foreground text-sm md:text-base">
                                    {t.cookies.title}
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm mt-1">
                                    {t.cookies.description}
                                </p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleReject}
                                className="px-6"
                            >
                                {t.cookies.reject}
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleAccept}
                                className="px-6 bg-primary hover:bg-primary/90"
                            >
                                {t.cookies.accept}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
