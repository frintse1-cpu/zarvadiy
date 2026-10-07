'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { usePathname } from 'next/navigation';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  const isIndustrial = pathname.startsWith('/industrial');
  const isAgro = pathname.startsWith('/agro');

  // ── Per-division footer description (no unverifiable claims) ──
  const footerDesc = isIndustrial
    ? 'Zarvadiy Industrial — sourcing and market access for copper tubes, coils and components from Central Asia.'
    : isAgro
      ? 'Zarvadiy Food & Gift — Uzbek dried fruits, nuts and gift collections for international buyers.'
      : t.footer.desc;

  // ── Theme vars ──
  let footerBg = '#07101f';
  let footerBorderColor = 'rgba(212,175,55,0.1)';
  let accentColor = 'var(--accent-gold)';
  let textColor = 'var(--text-muted)';
  let titleColor = '#ffffff';
  let footerBottomBg = '#040c18';
  let linkColor = 'var(--text-silver)';

  if (isIndustrial) {
    footerBg = '#070b13';
    footerBorderColor = 'rgba(184,115,51,0.15)';
    accentColor = 'var(--primary-copper)';
    linkColor = 'var(--text-silver)';
  } else if (isAgro) {
    footerBg = '#1E3D32';
    footerBorderColor = 'rgba(255,255,255,0.08)';
    accentColor = '#ebd068';
    textColor = 'rgba(255,255,255,0.70)';
    titleColor = '#ffffff';
    footerBottomBg = '#162f26';
    linkColor = 'rgba(255,255,255,0.7)';
  }

  // ── Quick links ──
  let footerLinks: { name: string; path: string }[] = [];
  if (isIndustrial) {
    footerLinks = [
      { name: 'Industrial Home', path: '/industrial' },
      { name: 'Technical Specs', path: '/industrial#capabilities' },
      { name: 'Products', path: '/industrial#products' },
      { name: 'Logistics', path: '/industrial#logistics' },
      { name: 'Contact', path: '/contact' },
    ];
  } else if (isAgro) {
    footerLinks = [
      { name: 'Food & Gift Home', path: '/agro' },
      { name: 'Processing', path: '/agro#process' },
      { name: 'Catalog', path: '/agro#products' },
      { name: 'Food Safety', path: '/agro#certs' },
      { name: 'Contact', path: '/contact' },
    ];
  } else {
    // Homepage nav — matches new header structure
    const businessLabel = { en: 'Business', ru: 'Направления', uz: "Yo\u02bbnalishlar" }[language];
    footerLinks = [
      { name: { en: 'Industrial', ru: 'Промышленное', uz: 'Sanoat' }[language], path: '/industrial' },
      { name: { en: 'Food & Gift', ru: 'Продукты и подарки', uz: "Oziq-ovqat va sovg\u02bbalar" }[language], path: '/agro' },
      { name: { en: 'About', ru: 'О компании', uz: 'Biz haqimizda' }[language], path: '/about' },
      { name: { en: 'How We Work', ru: 'Как мы работаем', uz: 'Biz qanday ishlaymiz' }[language], path: '/#process' },
      { name: { en: 'Contact', ru: 'Контакты', uz: 'Aloqa' }[language], path: '/contact' },
    ];
    void businessLabel;
  }

  return (
    <footer className="footer" style={{
      background: footerBg,
      borderTop: `1px solid ${footerBorderColor}`,
      color: textColor,
      transition: 'var(--transition-smooth)',
    }}>
      <div className="container footer-grid">
        {/* Brand column */}
        <div className="footer-logo-desc">
          <Link href="/" className="logo">
            <Image src="/images/Logo.png" alt="Zarvadiy Logo" width={120} height={50} style={{ objectFit: 'contain' }} />
          </Link>

          <p className="footer-desc" style={{ color: textColor, marginTop: '20px', lineHeight: 1.7 }}>
            {footerDesc}
          </p>

          {/* Socials: WhatsApp + LinkedIn */}
          <div className="footer-socials" style={{ marginTop: '20px' }}>
            {/* WhatsApp */}
            <a
              href="https://wa.me/998939722986"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
              style={{ borderColor: footerBorderColor, color: isAgro ? '#ffffff' : 'var(--text-silver)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.233-1.372a9.95 9.95 0 0 0 4.777 1.22h.005c5.505 0 9.987-4.479 9.988-9.986.002-2.67-1.037-5.18-2.927-7.071A9.92 9.92 0 0 0 12.012 2zm5.835 14.129c-.318.895-1.576 1.637-2.184 1.706-.576.064-1.328.096-2.128-.158a10.15 10.15 0 0 1-4.214-2.52c-1.543-1.543-2.529-3.328-2.905-4.385-.376-1.056-.051-1.633.272-1.954.269-.268.583-.637.776-.895.195-.258.258-.431.388-.716.13-.285.065-.536-.032-.73-.097-.195-.873-2.103-1.198-2.883-.316-.761-.643-.659-.876-.671-.225-.01-.482-.012-.739-.012-.258 0-.677.097-1.032.484-.355.387-1.355 1.322-1.355 3.22 0 1.897 1.38 3.733 1.574 3.991.193.258 2.715 4.146 6.577 5.813.92.397 1.637.633 2.197.81.928.295 1.774.253 2.443.153.744-.11 1.576-.452 1.8-.871.226-.419.226-.774.158-.871-.068-.097-.258-.161-.548-.29z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/zarvadiy-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
              style={{ borderColor: footerBorderColor, color: isAgro ? '#ffffff' : 'var(--text-silver)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="footer-title" style={{ color: titleColor }}>{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            {footerLinks.map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className="footer-link" style={{ color: linkColor }}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="footer-title" style={{ color: titleColor }}>{t.footer.contactUs}</h3>
          <div className="footer-contacts">
            {/* Email */}
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <div>
                <strong style={{ color: titleColor }}>Email:</strong><br />
                <a href="mailto:info@zarvadiy.com" style={{ color: isAgro ? '#ffffff' : 'var(--text-white)' }}>
                  info@zarvadiy.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <strong style={{ color: titleColor }}>{t.contactPage.address}:</strong><br />
                <span style={{ color: isAgro ? '#ffffff' : 'var(--text-white)' }}>{t.contactPage.addressValue}</span>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="footer-contact-item" style={{ alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: accentColor }}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <Link href="/privacy" style={{ color: linkColor, fontSize: '0.9rem' }}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom-wrapper" style={{
        background: footerBottomBg,
        padding: '24px 0',
        borderTop: isAgro ? 'none' : '1px solid rgba(255,255,255,0.04)',
      }}>
        <div className="container footer-bottom" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: isAgro ? 'rgba(255,255,255,0.45)' : 'var(--text-muted)',
        }}>
          <div>
            © {currentYear} Zarvadiy {language === 'ru' ? 'ООО' : language === 'uz' ? 'MChJ' : 'LLC'}. {t.footer.rights}
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            {/* Tax ID placeholder – clearly marked, do not invent a number */}
            <span style={{ opacity: 0.5 }}>
              {language === 'ru' ? 'ИНН: [не указан]' : language === 'uz' ? 'STIR: [ko\u02bbrsatilmagan]' : 'Tax ID: [not yet listed]'}
            </span>
            <span style={{ opacity: 0.45 }}>Tashkent, Uzbekistan</span>
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
