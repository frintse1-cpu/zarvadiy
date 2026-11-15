'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';
import { GIFT_MEDIA } from '../../lib/giftMedia';
import { cleanSource } from '../../lib/rfq';
import { SITE } from '../../lib/site';

const CONCEPT_IMAGES: Record<string, string> = {
  origin: '/gift/origin-collection.jpg',
  heritage: '/gift/heritage-collection.jpg',
  signature: '/gift/signature-collection.jpg',
};

export default function GiftView() {
  const { t } = useLanguage();
  const params = useSearchParams();
  const d = t.giftPage;

  const source = cleanSource(params.get('source') ?? params.get('utm_source'));
  const quoteHref = `/contact?topic=gift${source ? `&source=${source}` : ''}`;
  const hasMedia = GIFT_MEDIA.length > 0;

  return (
    <>
      <section className="page-hero gift-hero" aria-labelledby="page-title">
        <Image src="/images/food-gift.png" alt={t.alt.foodGift} fill priority sizes="100vw" className={MOTION ? 'cover-img kenburns' : 'cover-img'} />
        <div className="container">
          {source && (
            <div className="gift-welcome" role="status">
              <span className="gift-welcome-title">{d.welcomeTitle}</span>
              <span className="gift-welcome-text">{d.welcome}</span>
            </div>
          )}
          <span className="eyebrow" style={{ color: '#e2c27b' }}>{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
          <div className="gift-actions">
            <Link href={quoteHref} className="btn btn-primary">{d.ctaPrimary}</Link>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{d.ctaSecondary}</a>
          </div>
        </div>
      </section>

      <section className="section section--navy" aria-labelledby="collections-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.collectionsEyebrow}</span>
            <h2 id="collections-title" className="section-title">{d.collectionsTitle}</h2>
            <p className="section-lead">{d.collectionsText}</p>
          </Reveal>
          <div className="gift-cards">
            {d.concepts.map((c, i) => (
              <Reveal key={c.name} className="reveal--fill" delay={i * 140}>
                <a className="gift-card" href={`#${c.id}`}>
                  <span className="gift-card-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{c.name}</h3>
                  <p className="gift-card-text">{c.text}</p>
                  <div className="gift-card-foot">
                    <span className="badge">{d.conceptLabel}</span>
                    <p>{d.conceptNote}</p>
                    <span className="gift-card-more">{d.detailLink} ↓</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="gift-audience">
            <h3>{d.audienceTitle}</h3>
            <ul>
              {d.audience.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory gift-details" aria-label={d.collectionsTitle}>
        <div className="container">
          {d.concepts.map((c, i) => (
            <div key={c.id} id={c.id} className="gift-detail split">
              <div className="gift-detail-media">
                <div className="media media--4x3" style={{ borderRadius: 4 }}>
                  <Image src={CONCEPT_IMAGES[c.id]} alt={`${c.name}. ${d.mediaDefaultAlt}`} fill sizes="(max-width: 899px) 92vw, 560px" className="cover-img" />
                </div>
                <p className="caption">{t.common.illustrative}</p>
              </div>
              <Reveal>
                <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="section-title">{c.name}</h2>
                <p className="section-lead">{c.lead}</p>
                <h3 className="gift-detail-sub">{d.includesTitle}</h3>
                <ul className="check-list" style={{ listStyle: 'none', padding: 0 }}>
                  {c.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <dl className="gift-facts">
                  <div><dt>{d.packagingLabel}</dt><dd>{c.packaging}</dd></div>
                  <div><dt>{d.mixLabel}</dt><dd>{c.mix}</dd></div>
                </dl>
                <Link href={quoteHref} className="btn btn-primary">{d.ctaPrimary}</Link>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {hasMedia && (
        <section className="section section--navy-2" aria-labelledby="gallery-title">
          <div className="container">
            <Reveal>
              <span className="eyebrow">{d.mediaEyebrow}</span>
              <h2 id="gallery-title" className="section-title">{d.mediaTitle}</h2>
            </Reveal>
            <div className="gift-gallery">
              {GIFT_MEDIA.map((m, i) => (
                <figure key={m.src} className={`gift-media${i === 0 ? ' gift-media--lead' : ''}`}>
                  {m.type === 'video' ? (
                    <video controls playsInline preload="none" poster={m.poster} aria-label={m.alt ?? d.mediaDefaultAlt}>
                      <source src={m.src} type="video/mp4" />
                    </video>
                  ) : (
                    <Image src={m.src} alt={m.alt ?? d.mediaDefaultAlt} fill sizes={i === 0 ? '(max-width: 899px) 92vw, 760px' : '(max-width: 899px) 92vw, 380px'} className="cover-img" />
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--ivory" aria-labelledby="process-title">
        <div className="container">
          <Reveal>
            <span className="eyebrow">{d.processEyebrow}</span>
            <h2 id="process-title" className="section-title">{d.processTitle}</h2>
          </Reveal>
          <ol className="steps steps--four" style={{ listStyle: 'none', padding: 0 }}>
            {d.steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="step" delay={i * 110}>
                <div className="step-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</div>
                <div className="step-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="note">{d.note}</p>
          <Link href="/food-gift" className="section-more">{d.bulkLink}</Link>
        </div>
      </section>

      <section className="section cta-band" aria-labelledby="gift-cta-title">
        <div className="container">
          <Reveal>
            <div className="gold-rule" aria-hidden="true" />
            <h2 id="gift-cta-title">{d.closingTitle}</h2>
            <p className="gift-closing">{d.closingText}</p>
            <Link href={quoteHref} className="btn btn-primary">{d.ctaPrimary}</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
