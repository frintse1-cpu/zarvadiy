import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zarvadiy LLC — B2B Market Access & Business Development | Uzbekistan',
  description: 'Zarvadiy LLC connects Uzbek producers with international buyers and supports international companies entering the Uzbek market. Industrial products, dried fruits, gift collections.',
  keywords: 'Uzbekistan export, B2B market access, copper tubes, dried fruits, Uzbek business, Zarvadiy LLC',
  authors: [{ name: 'Zarvadiy LLC' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Zarvadiy LLC — B2B Market Access & Business Development',
    description: 'Connecting Uzbek producers with international buyers and supporting global companies entering Uzbekistan.',
    url: 'https://www.zarvadiy.com',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <GoogleAnalytics gaId="G-SMB53JG735" />
        <LanguageProvider>
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
