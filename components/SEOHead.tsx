'use client';

import Script from 'next/script';
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  serviceSchema,
} from '@/lib/seo.config';

/**
 * SEOHead Component
 * Injects structured data (JSON-LD) for better search engine understanding
 */
export function SEOHead() {
  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Local Business Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Website Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
        strategy="afterInteractive"
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
        strategy="afterInteractive"
      />
    </>
  );
}

