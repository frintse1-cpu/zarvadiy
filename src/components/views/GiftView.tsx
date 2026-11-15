'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Reveal from '../Reveal';
import { MOTION } from '../../lib/motion';
import { GIFT_MEDIA } from '../../lib/giftMedia';
import { cleanSource } from '../../lib/rfq';
import { SITE } from '../../lib/site';

/* Campaign source (QR code etc.) is read in the browser after hydration, so the page itself
   is fully rendered on the server and visible to search engines and slow connections. */
const noopSubscribe = () => () => {};
const readSource = () => {
  const q = new URLSearchParams(window.location.search);
  return cleanSource(q.get('source') ?? q.get('utm_source'));
};
const readSourceOnServer = () => '';

export default function GiftView() {
  const { t } = useLanguage();
  const d = t.giftPage;

  const source = useSyncExternalStore(noopSubscribe, readSource, readSourceOnServer);
  const quoteHref = `/contact?topic=gift${source ? `&source=${source}` : ''}`;
  const hasMedia = GIFT_MEDIA.length > 0;

  // Tap or click a photo to view it larger; Escape or a second tap closes it.
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [zoom]);

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
                <a className={`gift-card gift-card--${c.id}`} href={`#${c.id}`}>
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

      {d.concepts.map((c, i) => (
        <section
          key={c.id}
          id={c.id}
          className={`section ${c.id === 'origin' ? 'section--ivory' : 'section--navy'} gift-tier gift-tier--${c.id}`}
          aria-labelledby={`tier-${c.id}`}
        >
          <div className="container">
            <header className="gift-tier-head">
              <span className="gift-tier-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2 id={`tier-${c.id}`} className="gift-tier-name">{c.name}</h2>
                <p className="gift-tier-tag">{c.text}</p>
              </div>
            </header>

            <div className="gift-tier-intro">
              <span className="eyebrow">{d.collectionLabel}</span>
              <p className="section-lead gift-tier-lead">{c.lead}</p>
              <dl className="gift-facts gift-facts--plain">
                <div><dt>{d.packagingLabel}</dt><dd>{c.packaging}</dd></div>
              </dl>
            </div>

            <div className="gift-sets">
              {([
                { who: 'women', label: d.forWomen, items: c.women },
                { who: 'men', label: d.forMen, items: c.men },
              ] as const).map((set) => (
                <div key={set.who} className="gift-set">
                  <h3 className="gift-set-title">{set.label}</h3>
                  <button type="button" className="media media--4x3 gift-tier-frame gift-zoom-btn" onClick={() => setZoom({ src: `/gift/sets/${c.id}-${set.who}.jpg`, alt: `${c.name} · ${set.label}` })}>
                    <Image src={`/gift/sets/${c.id}-${set.who}.jpg`} alt={`${c.name} · ${set.label}`} fill sizes="(max-width: 899px) 92vw, 560px" className="cover-img" />
                  </button>
                  <p className="caption">{t.common.illustrative}</p>
                  <div className="gift-set-grid">
                    {set.items.map((label, n) => (
                      <figure key={label} className="gift-ind">
                        <button type="button" className="gift-ind-img gift-tier-frame gift-zoom-btn" onClick={() => setZoom({ src: `/gift/sets/${c.id}-${set.who}-${n + 1}.jpg`, alt: label })}>
                          <Image src={`/gift/sets/${c.id}-${set.who}-${n + 1}.jpg`} alt={label} fill sizes="(max-width: 639px) 30vw, 170px" className="cover-img" />
                        </button>
                        <figcaption>{label}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="gift-tier-cta">
              <Link href={quoteHref} className="btn btn-primary">{d.ctaPrimary}</Link>
            </div>

            <div className="gift-individual">
              <span className="eyebrow">{d.individualTitle}</span>
              <p className="gift-individual-note">{d.individualNote}</p>
              <dl className="gift-facts gift-facts--plain">
                <div><dt>{d.mixLabel}</dt><dd>{c.mix}</dd></div>
              </dl>
              <div className="gift-ind-grid">
                {c.individual.map((label, n) => (
                  <figure key={label} className="gift-ind">
                    <button type="button" className="gift-ind-img gift-tier-frame gift-zoom-btn" onClick={() => setZoom({ src: `/gift/boxes/${c.id}-${n + 1}.jpg`, alt: label })}>
                      <Image src={`/gift/boxes/${c.id}-${n + 1}.jpg`} alt={label} fill sizes="(max-width: 639px) 46vw, 200px" className="cover-img" />
                    </button>
                    <figcaption>{label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

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

      {zoom && (
        <div className="gift-lightbox" role="dialog" aria-modal="true" aria-label={zoom.alt} onClick={() => setZoom(null)}>
          <button type="button" className="gift-lightbox-close" aria-label={d.zoomClose} onClick={() => setZoom(null)}>
            ×
          </button>
          <div className="gift-lightbox-frame">
            <Image src={zoom.src} alt={zoom.alt} fill sizes="100vw" className="gift-lightbox-img" />
          </div>
          <p className="gift-lightbox-caption">{zoom.alt}</p>
        </div>
      )}

      <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="gift-wa">
        {d.ctaSecondary}
      </a>

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
