'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function NotFoundView() {
  const { t } = useLanguage();
  const d = t.notFound;
  return (
    <section className="nf" aria-labelledby="nf-title">
      <div className="container">
        <div className="nf-code" aria-hidden="true">404</div>
        <h1 id="nf-title">{d.title}</h1>
        <p>{d.text}</p>
        <Link href="/" className="btn btn-primary">{d.home}</Link>
        <nav className="nf-links" aria-labelledby="nf-links-title">
          <h2 id="nf-links-title">{d.linksTitle}</h2>
          <Link href="/industrial">{t.nav.industrial}</Link>
          <Link href="/food-gift">{t.nav.foodGift}</Link>
          <Link href="/technology">{t.nav.technology}</Link>
          <Link href="/about">{t.nav.about}</Link>
          <Link href="/contact">{t.nav.contact}</Link>
        </nav>
      </div>
    </section>
  );
}
