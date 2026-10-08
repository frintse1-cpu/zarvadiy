'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { SITE } from '../lib/site';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">
          <Link href="/" aria-label={t.nav.home}>
            <Image src="/images/logo-mark.png" alt={t.alt.logo} width={253} height={240} sizes="72px" className="brand-mark" />
          </Link>
          <p className="legal">{t.footer.company}</p>
          <p>{t.footer.address}</p>
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h2>{t.nav.business}</h2>
            <ul>
              <li><Link href="/industrial">{t.nav.industrial}</Link></li>
              <li><Link href="/food-gift">{t.nav.foodGift}</Link></li>
              <li><Link href="/technology">{t.nav.technology}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>{t.nav.company}</h2>
            <ul>
              <li><Link href="/about">{t.nav.about}</Link></li>
              <li><Link href="/how-we-work">{t.nav.howWeWork}</Link></li>
              <li><Link href="/contact">{t.nav.contact}</Link></li>
              <li><Link href="/privacy">{t.footer.privacy}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2>{t.nav.contact}</h2>
            <ul>
              <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              <li><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">{t.contact.whatsapp}</a></li>
              <li><a href={SITE.telegram} target="_blank" rel="noopener noreferrer">{t.contact.telegram}</a></li>
              <li><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">{t.contact.linkedin}</a></li>
              <li><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">{t.contact.instagram}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {year} {t.footer.company}. {t.footer.rights}
          </span>
          <Link href="/privacy">{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
