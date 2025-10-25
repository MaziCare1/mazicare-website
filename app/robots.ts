import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for MaziCare
 * Guides search engine crawlers on how to index the site
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://mazicare.gr';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*.json$',
          '/admin/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

