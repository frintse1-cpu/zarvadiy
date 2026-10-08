'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';

type Accent = CSSProperties & { '--accent'?: string; '--accent-text'?: string };

export default function HomeView() {
  const { t } = useLanguage();

  const cards: { id: string; href: string; img: string; alt: string; style: Accent; c: typeof t.cards.industrial }[] = [
    { id: 'industrial', href: '/industrial', img: '/images/card-industrial.png', alt: t.alt.cardIndustrial, style: { '--accent': '#b87333', '--accent-text': '#e0a06a' }, c: t.cards.industrial },
    { id: 'food-gift', href: '/food-gift', img: '/images/card-food.png', alt: t.alt.cardFood, style: { '--accent': '#9b3b3b', '--accent-text': '#e2c27b' }, c: t.cards.food },
    { id: 'technology', href: '/contact?topic=technology', img: '/images/card-technology.png', alt: t.alt.cardTechnology, style: { '--accent': '#2563eb', '--accent-text': '#7aa2f7' }, c: t.cards.technology },
  ];

  const paths = [
    { id: 'go-global', data: t.paths.export, img: '/images/biz-export.png', alt: t.alt.bizExport, href: '/contact?topic=export' },
    { id: 'enter-uzbekistan', data: t.paths.uzbekistan, img: '/images/biz-uzbekistan.png', alt: t.alt.bizUzbekistan, href: '/contact?topic=uzbekistan' },
  ];

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image src="/images/hero-home.jpg" alt={t.alt.heroHome} fill priority sizes="100vw" className={MOTION ? 'cover-img zoom-slow' : 'cover-img'} />
        <div className="container">
          <div className="hero-content">
            <h1 id="hero-title" className="fade-up">{t.hero.title}</h1>
            <p className="hero-body fade-up d1">{t.hero.body}</p>
            <div className="hero-actions fade-up d2">
              <Link href="/contact?topic=export" className="btn btn-primary">{t.hero.ctaGlobal}</Link>
              <Link href="/contact?topic=uzbekistan" className="btn btn-outline">{t.hero.ctaUzbekistan}</Link>
            </div>
            <p className="hero-line fade-up d3">{t.hero.line}</p>
          </div>
        </div>
      </section>

      <section className="section section--navy-2" aria-labelledby="directions-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.cards.eyebrow}</span>
            <h2 id="directions-title" className="section-title">{t.nav.business}</h2>
          </Reveal>
          <div className="dir-grid">
            {cards.map((card, i) => (
              <Reveal key={card.id} className="reveal--fill" delay={i * 120}>
              <Link href={card.href} className="dir-card" style={card.style} id={`card-${card.id}`}>
                <div className="media media--4x3">
                  <Image src={card.img} alt={card.alt} fill sizes="(max-width: 1023px) 90vw, 380px" className="cover-img" />
                </div>
                <div className="dir-body">
                  <h3>{card.c.title}</h3>
                  <p className="dir-sub">{card.c.subtitle}</p>
                  <p className="dir-desc">{card.c.desc}</p>
                  <span className="dir-cta">{card.c.cta}</span>
                </div>
              </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-teaser" aria-labelledby="gift-teaser-title">
        <Image src="/images/food-gift.png" alt={t.alt.foodGift} fill sizes="100vw" className="cover-img" />
        <div className="container">
          <Reveal className="gift-teaser-content">
            <span className="eyebrow">{t.giftPage.teaser.eyebrow}</span>
            <h2 id="gift-teaser-title">{t.giftPage.teaser.title}</h2>
            <p>{t.giftPage.teaser.text}</p>
            <Link href="/gift" className="btn btn-primary">{t.giftPage.teaser.cta}</Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory" aria-labelledby="how-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{t.how.eyebrow}</span>
            <h2 id="how-title" className="section-title">{t.how.title}</h2>
          </Reveal>
          <ol className="steps" style={{ listStyle: 'none', padding: 0 }}>
            {t.how.steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="step" delay={i * 100}>
                <div className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div className="step-body">
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Link href="/how-we-work" className="section-more">{t.how.more}</Link>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="paths-title">
        <div className="container">
          <span className="eyebrow">{t.paths.eyebrow}</span>
          <h2 id="paths-title" className="sr-only">{t.paths.eyebrow}</h2>
          <div className="paths">
            {paths.map((p) => (
              <article key={p.id} className="path" id={p.id}>
                <Image src={p.img} alt={p.alt} fill sizes="(max-width: 899px) 100vw, 50vw" className="cover-img" />
                <div className="path-content">
                  <p className="path-label">{p.data.label}</p>
                  <h3>{p.data.title}</h3>
                  <p className="path-text">{p.data.text}</p>
                  <ul className="path-points">
                    {p.data.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className="btn btn-outline">{p.data.cta}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory approach" aria-labelledby="approach-title">
        <div className="container">
          <Reveal>
            <div className="gold-rule" aria-hidden="true" />
            <h2 id="approach-title">{t.approach.title}</h2>
            <p>{t.approach.text}</p>
          </Reveal>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="rfq-title">
        <div className="container">
          <Reveal>
            <div className="gold-rule" aria-hidden="true" />
            <h2 id="rfq-title">{t.rfqCta.title}</h2>
            <Link href="/contact" className="btn btn-primary">{t.rfqCta.button}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
