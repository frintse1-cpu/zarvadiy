import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';

export const metadata: Metadata = {
  title: 'Copper Tubes & Fittings Exporter | Zarvadiy LLC — Uzbekistan',
  description: 'Zarvadiy LLC exports premium copper tubes, fittings and coils from Uzbekistan to Europe, MENA and Southeast Asia. ISO-quality products. Request a quote today.',
  keywords: 'copper tubes, copper fittings, pancake coils, lwc coils, inner grooved tubes, copper exporter, Uzbekistan copper, HVAC copper, refrigeration copper, Zarvadiy LLC',
  authors: [{ name: 'Zarvadiy LLC' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Copper Tubes & Fittings Exporter | Zarvadiy LLC',
    description: 'Exporting premium copper tubes and fittings for industrial excellence across Europe, MENA, and Southeast Asia.',
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
    <html lang="en">
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
