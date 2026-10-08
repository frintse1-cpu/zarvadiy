import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import { SITE } from '../lib/site';
import { MOTION } from '../lib/motion';

const heading = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a1628',
};

const DESCRIPTION =
  'ZARVADIY helps Uzbek producers reach international buyers and supports international companies entering Uzbekistan through market access, sourcing, business introductions and business development.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'ZARVADIY — B2B Market Access & Business Development',
    template: '%s | ZARVADIY',
  },
  description: DESCRIPTION,
  applicationName: 'ZARVADIY',
  authors: [{ name: 'ZARVADIY' }],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: 'ZARVADIY',
    title: 'ZARVADIY — B2B Market Access & Business Development',
    description: DESCRIPTION,
    url: '/',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'ZARVADIY — B2B Market Access & Business Development' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZARVADIY — B2B Market Access & Business Development',
    description: DESCRIPTION,
    images: [SITE.ogImage],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ZARVADIY',
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/images/logo-gold.png`,
  email: SITE.email,
  address: { '@type': 'PostalAddress', addressLocality: 'Tashkent', addressCountry: 'UZ' },
  sameAs: [SITE.linkedin, SITE.instagram, SITE.telegram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-motion={MOTION ? 'on' : 'off'} className={`${heading.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <GoogleAnalytics gaId="G-SMB53JG735" />
        <LanguageProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
