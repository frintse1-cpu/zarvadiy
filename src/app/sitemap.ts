import type { MetadataRoute } from 'next';
import { SITE } from '../lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/industrial', priority: 0.9 },
    { path: '/food-gift', priority: 0.9 },
    { path: '/gift', priority: 0.8 },
    { path: '/technology', priority: 0.6 },
    { path: '/about', priority: 0.7 },
    { path: '/how-we-work', priority: 0.7 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy', priority: 0.3 },
  ];
  return pages.map((p) => ({
    url: `${SITE.url}${p.path === '/' ? '' : p.path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p.priority,
  }));
}
