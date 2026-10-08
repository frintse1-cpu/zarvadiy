'use client';

import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';

export default function HowWeWorkView() {
  const { t } = useLanguage();
  const d = t.howPage;

  return (
    <>
      <section className="plain-hero" aria-labelledby="page-title">
        <div className="container">
          <span className="eyebrow">{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <ol className="process-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {t.how.steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="process-row" delay={80}>
                <div className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h2>{s.title}</h2>
                  <p>{s.long}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <div className="gold-rule" aria-hidden="true" />
            <h2>{t.rfqCta.title}</h2>
            <Link href="/contact" className="btn btn-primary">{d.cta}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
