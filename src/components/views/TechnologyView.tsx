'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';

export default function TechnologyView() {
  const { t } = useLanguage();
  const d = t.technology;

  return (
    <>
      {/* The image already carries the words "Coming soon" — no second overlay text is added. */}
      <div style={{ paddingTop: 'var(--header-h)', background: 'var(--navy)' }}>
        <div className="tech-banner">
          <Image src="/images/technology-hero.png" alt={t.alt.techHero} fill priority sizes="100vw" className="cover-img" />
        </div>
      </div>
      <section className="tech-text" aria-labelledby="page-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.eyebrow}</span>
            <h1 id="page-title">{d.title}</h1>
            <p>{d.text}</p>
            <Link href="/contact?topic=technology" className="btn btn-outline">{d.cta}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
