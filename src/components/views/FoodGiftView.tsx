'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';

export default function FoodGiftView() {
  const { t } = useLanguage();
  const d = t.foodGift;
  const images = [
    { src: '/images/food-dried-fruits.png', alt: t.alt.foodDried },
    { src: '/images/food-nuts.png', alt: t.alt.foodNuts },
  ];
  const accent = { '--accent': '#9b3b3b' } as CSSProperties;

  return (
    <>
      <section className="page-hero" aria-labelledby="page-title">
        <Image src="/images/food-hero.png" alt={t.alt.foodHero} fill priority sizes="100vw" className={MOTION ? 'cover-img zoom-slow' : 'cover-img'} />
        <div className="container">
          <span className="eyebrow" style={{ color: '#e2c27b' }}>{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="bulk-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.bulk.eyebrow}</span>
            <h2 id="bulk-title" className="section-title">{d.bulk.title}</h2>
            <p className="section-lead">{d.bulk.text}</p>
          </Reveal>
          <div className="tile-grid" style={{ ...accent, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            {d.bulk.items.map((item, i) => (
              <article key={item.title} className="tile">
                <div className="media media--16x9">
                  <Image src={images[i].src} alt={images[i].alt} fill sizes="(max-width: 700px) 92vw, 560px" className="cover-img" />
                </div>
                <div className="tile-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="caption">{t.common.illustrative}</p>
          <ul className="check-list">
            {d.bulk.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p className="note">{d.bulk.note}</p>
          <div style={{ marginTop: 40 }}>
            <Link href="/contact?topic=food" className="btn btn-dark">{d.bulk.cta}</Link>
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="gift-title">
        <div className="container">
          <div className="split split--top">
            <div className="sticky-col">
              <div className="media media--4x3" style={{ borderRadius: 4 }}>
                <Image src="/images/food-gift.png" alt={t.alt.foodGift} fill sizes="(max-width: 899px) 92vw, 560px" className="cover-img" />
              </div>
              <p className="caption">{t.common.illustrative}</p>
            </div>
            <Reveal>
              <span className="eyebrow">{d.gift.eyebrow}</span>
              <h2 id="gift-title" className="section-title">{d.gift.title}</h2>
              <p className="section-lead">{d.gift.text}</p>
              <div className="concept-list">
                {d.gift.concepts.map((c) => (
                  <div key={c.name} className="concept">
                    <div className="concept-head">
                      <h3>{c.name}</h3>
                      <span className="badge">{d.gift.conceptLabel}</span>
                    </div>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
              <p className="note">{d.gift.note}</p>
              <div className="gift-links">
                <Link href="/contact?topic=gift" className="btn btn-primary">{d.gift.cta}</Link>
                <Link href="/gift" className="section-more section-more--light">{t.giftPage.teaser.cta}</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
