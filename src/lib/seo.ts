import type { Metadata } from 'next';
import { SITE } from './site';

/** Builds consistent per-page metadata (title, description, canonical, Open Graph, Twitter). */
export function buildMetadata(opts: { title?: string; description: string; path: string }): Metadata {
  const fullTitle = opts.title ? `${opts.title} | ${SITE.name}` : 'ZARVADIY — B2B Market Access & Business Development';
  const image = { url: SITE.ogImage, width: 1200, height: 630, alt: 'ZARVADIY — B2B Market Access & Business Development' };
  return {
    title: opts.title ? opts.title : { absolute: fullTitle },
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: fullTitle,
      description: opts.description,
      url: opts.path,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: opts.description,
      images: [image.url],
    },
  };
}
