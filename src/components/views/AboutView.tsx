'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';

export default function AboutView() {
  const { t } = useLanguage();
  const d = t.about;

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <Image src="/images/about-hero.png" alt={t.alt.aboutHero} fill priority sizes="100vw" className={MOTION ? 'cover-img zoom-slow' : 'cover-img'} />
        <div className="container">
          <span className="eyebrow">{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="intro-title">
        <div className="container">
          <div className="split split--top">
            <Reveal>
              <h2 id="intro-title" className="section-title">{d.intro}</h2>
              <p className="section-lead">{d.p1}</p>
              <p className="section-lead">{d.p2}</p>
            </Reveal>
            <Reveal delay={140}>
              <h3 style={{ fontSize: '1.8rem' }}>{d.whatTitle}</h3>
              <ul className="check-list">
                {d.what.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--ivory" style={{ paddingTop: 0 }} aria-labelledby="transparent-title">
        <div className="container">
          <Reveal className="quote-block">
            <h2 id="transparent-title">{d.transparentTitle}</h2>
            <p>{d.transparent}</p>
            <div style={{ marginTop: 28 }}>
              <Link href="/contact" className="btn btn-primary">{d.cta}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
