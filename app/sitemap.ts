import { MetadataRoute } from 'next';

/**
 * Dynamic sitemap for MaziCare
 * This helps search engines discover and index all pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mazicare.gr';
  
  // Define all routes with their priorities and update frequencies
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          el: `${baseUrl}`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          el: `${baseUrl}/faq`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          el: `${baseUrl}/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
      alternates: {
        languages: {
          el: `${baseUrl}/terms`,
        },
      },
    },
  ];

  return routes;
}

