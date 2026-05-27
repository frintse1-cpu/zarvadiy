'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-logo-desc">
          <Link href="/" className="logo">
            <div className="logo-icon">Z</div>
            <div className="logo-text">
              ZARVADIY <span>LLC</span>
            </div>
          </Link>
          <p className="footer-desc">
            {t.footer.desc}
          </p>
          <div className="footer-socials">
            {/* Telegram */}
            <a href="https://t.me/zarvadiy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Telegram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/company/zarvadiy-llc" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/zarvadiy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/zarvadiy" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="footer-title">{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            <li><Link href="/" className="footer-link">{t.nav.home}</Link></li>
            <li><Link href="/about" className="footer-link">{t.nav.about}</Link></li>
            <li><Link href="/products" className="footer-link">{t.nav.products}</Link></li>
            <li><Link href="/operations" className="footer-link">{t.nav.operations}</Link></li>
            <li><Link href="/contact" className="footer-link">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">{t.footer.contactUs}</h3>
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <strong>{t.contactPage.email}:</strong><br />
                <a href="mailto:sales@zarvadiy.com">sales@zarvadiy.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <strong>{t.contactPage.phone}:</strong><br />
                <a href="tel:+998939722986">+998 93 972 29 86</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <strong>{t.contactPage.address}:</strong><br />
                <span>{t.contactPage.addressValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <div>
          © {currentYear} Zarvadiy LLC. {t.footer.rights}
        </div>
        <div>
          Uzbekistan Copper Export Enterprise
        </div>
      </div>
    </footer>
  );
};
export default Footer;
