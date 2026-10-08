'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';

export default function IndustrialView() {
  const { t } = useLanguage();
  const d = t.industrial;
  const images = [
    { src: '/images/industrial-tubes.png', alt: t.alt.industrialTubes },
    { src: '/images/industrial-components.png', alt: t.alt.industrialComponents },
    { src: '/images/industrial-supply.png', alt: t.alt.industrialSupply },
  ];
  const accent = { '--accent': '#b87333' } as CSSProperties;

  return (
    <>
      <section className="page-hero" style={accent} aria-labelledby="page-title">
        <Image src="/images/industrial-hero.png" alt={t.alt.industrialHero} fill priority sizes="100vw" className={MOTION ? 'cover-img zoom-slow' : 'cover-img'} />
        <div className="container">
          <span className="eyebrow" style={{ color: '#e0a06a' }}>{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="areas-title">
        <div className="container">
          <Reveal><h2 id="areas-title" className="section-title">{d.areasTitle}</h2></Reveal>
          <div className="tile-grid" style={accent}>
            {d.items.map((item, i) => (
              <Reveal key={item.title} className="reveal--fill" delay={i * 120}>
                <article className="tile">
                  <div className="media media--4x3">
                    <Image src={images[i].src} alt={images[i].alt} fill sizes="(max-width: 700px) 92vw, 380px" className="cover-img" />
                  </div>
                  <div className="tile-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="caption">{t.common.illustrative}</p>
        </div>
      </section>

      <section className="section section--navy-2" aria-labelledby="products-title">
        <div className="container">
          <Reveal>
            <h2 id="products-title" className="section-title">{d.productsTitle}</h2>
            <p className="section-lead">{d.productsLead}</p>
          </Reveal>
          <div className="product-grid">
            {d.products.map((p, i) => (
              <Reveal key={p.title} className="reveal--fill" delay={(i % 3) * 110}>
                <article className="product-card">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="card-actions">
                    <Link href={`/contact?topic=industrial&spec=${i}`} className="btn btn-outline btn-sm">{d.specCta}</Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal className="rfq-help">
            <h3>{d.rfqHelpTitle}</h3>
            <ul className="check-list" style={{ marginTop: 18 }}>
              {d.rfqHelp.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="support-title">
        <div className="container">
          <Reveal>
            <h2 id="support-title" className="section-title">{d.supportTitle}</h2>
            <ul className="check-list">
              {d.support.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="note">{d.note}</p>
            <div style={{ marginTop: 40 }}>
              <Link href="/contact?topic=industrial" className="btn btn-dark">{d.cta}</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
