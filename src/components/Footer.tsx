'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Determine active brand theme
  const isIndustrial = pathname.startsWith('/industrial');
  const isAgro = pathname.startsWith('/agro');

  // Dynamic content based on division
  const brandName = isIndustrial ? 'INDUSTRIAL' : isAgro ? 'AGRICULTURE' : 'HOLDING';

  const footerDesc = isIndustrial
    ? 'Zarvadiy Industrial Division facilitates the sourcing and export of high-purity copper tubes, pancake coils, level wound coils, and precision fittings conforming to international ASTM, EN, and DIN standards.'
    : isAgro
      ? 'Zarvadiy Agriculture Division supplies premium organic sun-dried apricots, clean chromatic laser-sorted raisins, black prunes, and walnuts compliant with HACCP and ISO 22000.'
      : t.footer.desc;

  // Dynamic styling variables
  let footerBg = '#04070d';
  let footerBorderColor = 'rgba(200, 122, 62, 0.1)';
  let accentColor = 'var(--primary-copper)';
  let linkHoverColor = 'var(--primary-copper-hover)';
  let textColor = 'var(--text-muted)';
  let titleColor = 'var(--text-white)';
  let footerBottomBg = '#030509';

  if (isIndustrial) {
    footerBg = '#070b13';
    footerBorderColor = 'rgba(184, 115, 51, 0.15)';
    accentColor = 'var(--primary-copper)';
    linkHoverColor = 'var(--primary-copper-hover)';
  } else if (isAgro) {
    footerBg = '#1E3D32'; // Deep organic green
    footerBorderColor = 'rgba(255, 255, 255, 0.08)';
    accentColor = '#ebd068'; // Warm earthy gold accent
    linkHoverColor = '#ebd068';
    textColor = 'rgba(255, 255, 255, 0.70)';
    titleColor = '#ffffff';
    footerBottomBg = '#162f26';
  }

  // Dynamic quick links
  let footerLinks: { name: string; path: string }[] = [];
  if (isIndustrial) {
    footerLinks = [
      { name: 'Industrial Home', path: '/industrial' },
      { name: 'Technical Specs', path: '/industrial#capabilities' },
      { name: 'Products', path: '/industrial#products' },
      { name: 'Logistics Desk', path: '/industrial#logistics' },
      { name: 'Trading Desk', path: '/contact' }
    ];
  } else if (isAgro) {
    footerLinks = [
      { name: 'Agriculture Home', path: '/agro' },
      { name: 'Processing Timeline', path: '/agro#process' },
      { name: 'Agro Catalog', path: '/agro#products' },
      { name: 'Food Safety', path: '/agro#certs' },
      { name: 'Trading Desk', path: '/contact' }
    ];
  } else {
    footerLinks = [
      { name: t.nav.home, path: '/' },
      { name: t.nav.about, path: '/about' },
      { name: t.nav.industries, path: '/industries' },
      { name: t.nav.markets, path: '/markets' },
      { name: t.nav.contact, path: '/contact' }
    ];
  }

  return (
    <footer className="footer" style={{
      background: footerBg,
      borderTop: `1px solid ${footerBorderColor}`,
      color: textColor,
      transition: 'var(--transition-smooth)'
    }}>
      <div className="container footer-grid">
        <div className="footer-logo-desc">
          <Link href="/" className="logo">
            <Image src="/images/Logo.png" alt="Zarvadiy Logo" width={120} height={50} style={{ objectFit: "contain" }} />




















          <p className="footer-desc" style={{ color: textColor }}>
            {footerDesc}
          </p>
          <div className="footer-socials">
            {/* Telegram */}
            <a href="https://t.me/zarvadiy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram" style={{
              borderColor: footerBorderColor,
              color: isAgro ? '#ffffff' : 'var(--text-silver)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/zarvadiy-llc" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn" style={{
              borderColor: footerBorderColor,
              color: isAgro ? '#ffffff' : 'var(--text-silver)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/zarvadiy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram" style={{
              borderColor: footerBorderColor,
              color: isAgro ? '#ffffff' : 'var(--text-silver)'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title" style={{ color: titleColor }}>{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className="footer-link" style={{ color: textColor }}>
                  {link.name}

                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title" style={{ color: titleColor }}>{t.footer.contactUs}</h3>
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong style={{ color: titleColor }}>{t.contactPage.email}:</strong><br />
                <a 
                  href="mailto:sales@zarvadiy.com" 
                  title="Email undergoing system maintenance. Please submit the contact form or message us via WhatsApp."
                  style={{ color: isAgro ? '#ffffff' : 'var(--text-white)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Our email server is currently undergoing scheduled maintenance. Please submit your request using the contact form or contact our WhatsApp Trade Desk directly.");
                  }}
                >
                  sales@zarvadiy.com
                </a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <strong style={{ color: titleColor }}>{t.contactPage.phone}:</strong><br />
                <a href="tel:+998939722986" style={{ color: isAgro ? '#ffffff' : 'var(--text-white)' }}>+998 93 972 29 86</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong style={{ color: titleColor }}>{t.contactPage.address}:</strong><br />
                <span style={{ color: isAgro ? '#ffffff' : 'var(--text-white)' }}>{t.contactPage.addressValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-wrapper" style={{
        background: footerBottomBg,
        padding: '30px 0',
        borderTop: isAgro ? 'none' : '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container footer-bottom" style={{
          display: 'flex',
          justifyContent: 'between',
          alignItems: 'center',
          fontSize: '0.85rem',
          color: isAgro ? 'rgba(255, 255, 255, 0.50)' : 'var(--text-muted)'
        }}>
          <div>
            © {currentYear} Zarvadiy LLC. {t.footer.rights}
          </div>
          <div>
            Zarvadiy Multi-Industry International Holding
          </div>
        </div>
      </div>
      <style jsx global>{`
        .footer::before {
          display: ${isAgro ? 'none !important' : 'block'};
        }
      `}</style>
    </footer>
  );
};

export default Footer;
