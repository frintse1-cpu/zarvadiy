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

      <section className="section section--navy" aria-labelledby="market-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.market.eyebrow}</span>
            <h2 id="market-title" className="section-title">{d.market.title}</h2>
            <p className="section-lead">{d.market.text}</p>
          </Reveal>
          <dl className="food-stats">
            {d.market.stats.map((st) => (
              <div key={st.label} className="food-stat">
                <dt>{st.label}</dt>
                <dd>
                  <span className="food-stat-value">{st.value}</span>
                  <span className="food-stat-sub">{st.sub}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="food-rank">{d.market.rank}</p>
          <p className="caption">{d.market.source}</p>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="products-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.products.eyebrow}</span>
            <h2 id="products-title" className="section-title">{d.products.title}</h2>
            <p className="section-lead">{d.products.text}</p>
          </Reveal>
          <div className="tile-grid" style={{ ...accent, gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
            {d.products.items.map((item, i) => (
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
          <div className="food-list">
            {d.products.list.map((item) => (
              <div key={item.title} className="food-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="food-work">
            <h2 className="section-title">{d.work.title}</h2>
            <p className="section-lead">{d.work.text}</p>
            <ul className="check-list">
              {d.work.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="note">{d.work.note}</p>
            <div className="food-actions">
              <Link href="/contact?topic=food" className="btn btn-dark">{d.work.cta}</Link>
              <Link href="/gift" className="section-more">{d.giftLink}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
