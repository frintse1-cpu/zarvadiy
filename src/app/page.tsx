'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <div>
      {/* ── 1. HERO ── */}
      <section
        id="hero"
        style={{
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 0 80px',
          background: '#0a1628',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle gold accent line top */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '760px' }}>
            <p style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: '28px',
              fontWeight: 600,
            }}>
              {t.hero.tagline}
            </p>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: 1.05,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '32px',
            }}>
              {t.hero.title}
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'var(--text-silver)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '620px',
            }}>
              {t.hero.subtitle}
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
              <a href="#industries" className="btn btn-primary" id="hero-cta-global">
                {t.hero.cta}
              </a>
              <a href="#industries" className="btn btn-secondary" id="hero-cta-uzbekistan"
                style={{ borderColor: 'rgba(212,175,55,0.35)', color: 'var(--text-silver)' }}>
                {t.hero.ctaQuote}
              </a>
            </div>

            {/* Tagline bar */}
            <div style={{
              display: 'flex',
              gap: '24px',
              flexWrap: 'wrap',
              paddingTop: '28px',
              borderTop: '1px solid rgba(212,175,55,0.15)',
            }}>
              {[t.hero.statHolding, t.hero.statExport, t.hero.statQuality,
                t.hero.statCoordination
              ].map((item, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THREE CARDS ── */}
      <section
        id="industries"
        className="section"
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '56px' }}>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#b08a3e',
              fontWeight: 700,
              display: 'block',
              marginBottom: '16px',
            }}>
              {t.holding.industriesTitle}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#0a1628',
              marginBottom: '12px',
            }}>
              {t.holding.industriesSubtitle}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}>
            {/* Industrial */}
            <div id="card-industrial" style={cardStyle('#0a1628', 'rgba(184,115,51,0.6)')}>
              <div style={cardAccentLine('#b87333')} />
              <div style={{ padding: '40px 36px 36px' }}>
                <span style={cardBadgeStyle('#b87333')}>
                  {t.holding.badgeIndustrial}
                </span>
                <h3 style={cardTitleStyle('#ffffff')}>
                  {t.holding.industrialCard.title}
                </h3>
                <p style={cardDescStyle('rgba(203,213,225,0.85)')}>
                  {t.holding.industrialCard.desc}
                </p>
                <Link href="/industrial" style={cardCtaStyle('#d4a55a')}>
                  {t.holding.industrialCard.cta}
                </Link>
              </div>
            </div>

            {/* Food & Gift */}
            <div id="card-food-gift" style={cardStyle('#1c0f00', 'rgba(160,90,30,0.5)')}>
              <div style={cardAccentLine('#c8a450')} />
              <div style={{ padding: '40px 36px 36px' }}>
                <span style={cardBadgeStyle('#c8a450')}>
                  {t.holding.badgeAgro}
                </span>
                <h3 style={cardTitleStyle('#ffffff')}>
                  {t.holding.agroCard.title}
                </h3>
                <p style={cardDescStyle('rgba(203,213,225,0.85)')}>
                  {t.holding.agroCard.desc}
                </p>
                <Link href="/agro" style={cardCtaStyle('#e8c46a')}>
                  {t.holding.agroCard.cta}
                </Link>
              </div>
            </div>

            {/* Technology */}
            <div id="card-technology" style={cardStyle('#060d1e', 'rgba(59,130,246,0.3)')}>
              <div style={cardAccentLine('#3b82f6')} />
              <div style={{ padding: '40px 36px 36px' }}>
                <span style={cardBadgeStyle('#3b82f6')}>
                  {t.holding.badgeTech}
                </span>
                <h3 style={cardTitleStyle('#ffffff')}>
                  {t.holding.techCard.title}
                </h3>
                <p style={cardDescStyle('rgba(148,163,184,0.8)')}>
                  {t.holding.techCard.desc}
                </p>
                <a href="#connect" style={cardCtaStyle('#93c5fd')}>
                  {t.holding.techCard.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. HOW WE WORK ── */}
      <section
        id="process"
        className="section"
        style={{
          background: '#f8f6f2',
          borderTop: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '64px', maxWidth: '540px' }}>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#b08a3e',
              fontWeight: 700,
              display: 'block',
              marginBottom: '16px',
            }}>
              {t.holding.process.title}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#0a1628',
              marginBottom: '12px',
            }}>
              {t.holding.process.subtitle}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              t.holding.process.step1,
              t.holding.process.step2,
              t.holding.process.step3,
              t.holding.process.step4,
              t.holding.process.step5,
            ].map((step, i) => (
              <div key={i} id={`step-${i + 1}`} style={{
                display: 'grid',
                gridTemplateColumns: '80px 1fr',
                gap: '0 32px',
                padding: '32px 0',
                borderBottom: i < 4 ? '1px solid rgba(10,22,40,0.08)' : 'none',
                alignItems: 'start',
              }}>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  color: 'rgba(10,22,40,0.12)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  paddingTop: '4px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.15rem',
                    color: '#0a1628',
                    marginBottom: '8px',
                  }}>
                    {step.title}
                  </h4>
                  <p style={{
                    fontSize: '0.97rem',
                    color: '#4a5568',
                    lineHeight: 1.65,
                  }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FOR BUSINESSES ── */}
      <section
        id="for-businesses"
        className="section"
        style={{
          background: '#ffffff',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '56px' }}>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#b08a3e',
              fontWeight: 700,
              display: 'block',
              marginBottom: '16px',
            }}>
              {t.holding.markets.title}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#0a1628',
            }}>
              {t.holding.markets.subtitle}
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2px',
          }}>
            {/* Go Global */}
            <div id="for-export" style={{
              background: '#0a1628',
              padding: '48px 40px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '3px',
                height: '100%',
                background: '#b87333',
              }} />
              <h3 style={{
                fontSize: '1.25rem',
                color: '#ffffff',
                marginBottom: '20px',
              }}>
                {t.holding.markets.europe}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--text-silver)',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}>
                {t.holding.markets.mena}
              </p>
              <a href="#connect" style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#d4a55a',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                borderBottom: '1px solid rgba(212,175,55,0.3)',
                paddingBottom: '2px',
              }}>
                {t.holding.markets.exploreExport}
              </a>
            </div>

            {/* Enter Uzbekistan */}
            <div id="for-entry" style={{
              background: '#f0ebe2',
              padding: '48px 40px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: 0, left: 0,
                width: '3px',
                height: '100%',
                background: '#c8a450',
              }} />
              <h3 style={{
                fontSize: '1.25rem',
                color: '#0a1628',
                marginBottom: '20px',
              }}>
                {t.holding.markets.cis}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#4a5568',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}>
                {t.holding.markets.asia}
              </p>
              <a href="#connect" style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#0a1628',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                borderBottom: '1px solid rgba(10,22,40,0.3)',
                paddingBottom: '2px',
              }}>
                {t.holding.markets.exploreUzbek}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR APPROACH ── */}
      <section
        id="approach"
        className="section"
        style={{
          background: '#0a1628',
          borderTop: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <div className="container" style={{ maxWidth: '680px' }}>
          <span style={{
            fontSize: '0.75rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
            fontWeight: 700,
            display: 'block',
            marginBottom: '24px',
          }}>
            {t.holding.approach.label}
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: '#ffffff',
            marginBottom: '40px',
            letterSpacing: '-0.01em',
          }}>
            {t.holding.industriesHeadline}
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            paddingLeft: '24px',
            borderLeft: '1px solid rgba(212,175,55,0.25)',
          }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
              We say what we do and who we work with.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
              We build relationships between companies and markets.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-silver)', lineHeight: 1.7 }}>
              We focus on real business opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ── 6. CONTACT / RFQ ── */}
      <section
        id="connect"
        className="section"
        style={{
          background: '#f8f6f2',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          paddingBottom: '120px',
        }}
      >
        <div className="container">
          <div style={{ marginBottom: '56px', maxWidth: '540px' }}>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#b08a3e',
              fontWeight: 700,
              display: 'block',
              marginBottom: '16px',
            }}>
              {t.nav.contact}
            </span>
            <h2 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              color: '#0a1628',
              marginBottom: '12px',
            }}>
              {t.holding.ctaBlock.title}
            </h2>
            <p style={{ fontSize: '1rem', color: '#4a5568', lineHeight: 1.6 }}>
              {t.holding.ctaBlock.subtitle}
            </p>
          </div>

          <div style={{ maxWidth: '720px' }}>
            <ContactForm />

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/998939722986"
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  border: '1px solid rgba(37,211,102,0.3)',
                  borderRadius: '6px',
                  color: '#25D366',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: 'rgba(37,211,102,0.05)',
                  transition: 'all 0.2s ease',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.233-1.372a9.95 9.95 0 0 0 4.777 1.22h.005c5.505 0 9.987-4.479 9.988-9.986.002-2.67-1.037-5.18-2.927-7.071A9.92 9.92 0 0 0 12.012 2zm5.835 14.129c-.318.895-1.576 1.637-2.184 1.706-.576.064-1.328.096-2.128-.158a10.15 10.15 0 0 1-4.214-2.52c-1.543-1.543-2.529-3.328-2.905-4.385-.376-1.056-.051-1.633.272-1.954.269-.268.583-.637.776-.895.195-.258.258-.431.388-.716.13-.285.065-.536-.032-.73-.097-.195-.873-2.103-1.198-2.883-.316-.761-.643-.659-.876-.671-.225-.01-.482-.012-.739-.012-.258 0-.677.097-1.032.484-.355.387-1.355 1.322-1.355 3.22 0 1.897 1.38 3.733 1.574 3.991.193.258 2.715 4.146 6.577 5.813.92.397 1.637.633 2.197.81.928.295 1.774.253 2.443.153.744-.11 1.576-.452 1.8-.871.226-.419.226-.774.158-.871-.068-.097-.258-.161-.548-.29z"/>
                </svg>
                {t.holding.ctaBlock.whatsapp}
              </a>
              <a
                href="mailto:info@zarvadiy.com"
                id="email-link"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 24px',
                  border: '1px solid rgba(10,22,40,0.15)',
                  borderRadius: '6px',
                  color: '#0a1628',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                info@zarvadiy.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ── Card helpers ──
const cardStyle = (bg: string, shadow: string): React.CSSProperties => ({
  background: bg,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '380px',
  boxShadow: `inset 0 0 60px ${shadow}`,
  transition: 'transform 0.2s ease',
});

const cardAccentLine = (color: string): React.CSSProperties => ({
  position: 'absolute',
  top: 0, left: 0,
  width: '100%',
  height: '2px',
  background: color,
});

const cardBadgeStyle = (color: string): React.CSSProperties => ({
  display: 'inline-block',
  fontSize: '0.68rem',
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color,
  fontWeight: 700,
  marginBottom: '24px',
  paddingBottom: '6px',
  borderBottom: `1px solid ${color}33`,
});

const cardTitleStyle = (color: string): React.CSSProperties => ({
  fontFamily: 'var(--font-serif)',
  fontSize: '1.45rem',
  color,
  fontWeight: 700,
  marginBottom: '16px',
  lineHeight: 1.25,
});

const cardDescStyle = (color: string): React.CSSProperties => ({
  fontSize: '0.95rem',
  color,
  lineHeight: 1.65,
  marginBottom: '32px',
  flexGrow: 1,
});

const cardCtaStyle = (color: string): React.CSSProperties => ({
  fontSize: '0.85rem',
  fontWeight: 600,
  color,
  textDecoration: 'none',
  letterSpacing: '0.04em',
  borderBottom: `1px solid ${color}55`,
  paddingBottom: '2px',
  display: 'inline-block',
  transition: 'opacity 0.2s',
});
