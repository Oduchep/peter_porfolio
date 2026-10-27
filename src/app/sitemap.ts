import type { MetadataRoute } from 'next';
import { Projects } from '@/utils/data';

const siteUrl = 'https://www.oduchep.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...Projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
