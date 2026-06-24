'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../../context/LanguageContext';

export default function IndustriesPage() {
  const { language, t } = useLanguage();

  return (
    <div style={{ background: 'var(--bg-dark)' }}>
      {/* 1. HEADER HERO */}
      <section className="section" style={{
        padding: '130px 0 70px 0',
        background: 'linear-gradient(180deg, rgba(7,11,19,0.95) 0%, rgba(7,11,19,1) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative'
      }}>
        <div style={decorGlowStyle}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span className="section-tag">{t.nav.industries}</span>
          <h1 className="section-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            color: 'var(--text-white)',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            {language === 'ru' ? 'Наши Отрасли и Направления' : language === 'uz' ? 'Bizning Sanoat Tarmoqlarimiz' : 'Our Specialized Industries'}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '20px auto 0 auto', lineHeight: 1.7 }}>
            {t.holding.industriesSubtitle}
          </p>
        </div>
      </section>

      {/* 2. INDUSTRIES SECTION */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #070b13 0%, #030509 100%)',
        borderTop: '1px solid rgba(250,250,250,0.02)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '40px' }}>
            
            {/* Industrial Card */}
            <div className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '600px',
              border: '1px solid rgba(184, 115, 51, 0.15)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                <Image
                  src="/images/industrial_hero.png"
                  alt="Industrial Division"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(180deg, transparent 40%, #070b13 100%)'
                }}></div>
                <div style={{ position: 'absolute', bottom: '24px', left: '32px' }}>
                  <span className="technical-badge">Steel & Metallurgy</span>
                </div>
              </div>
              <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: '#ffffff',
                    marginBottom: '16px',
                    fontWeight: 700
                  }}>
                    {t.holding.industrialCard.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-silver)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem',
                    marginBottom: '32px'
                  }}>
                    {t.holding.industrialCard.desc}
                  </p>
                </div>
                <Link href="/industrial" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                  {t.holding.industrialCard.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Agro Card */}
            <div className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              borderRadius: 'var(--border-radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '600px',
              border: '1px solid rgba(30, 61, 50, 0.15)'
            }}>
              <div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
                <Image
                  src="/images/agro_hero.jpg"
                  alt="Agricultural Division"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(180deg, transparent 40%, #070b13 100%)'
                }}></div>
                <div style={{ position: 'absolute', bottom: '24px', left: '32px' }}>
                  <span className="organic-badge" style={{ background: 'rgba(30, 61, 50, 0.8)', color: '#ffffff', borderColor: 'transparent' }}>Organic Certified</span>
                </div>
              </div>
              <div style={{ padding: '40px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: '#ffffff',
                    marginBottom: '16px',
                    fontWeight: 700
                  }}>
                    {t.holding.agroCard.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-silver)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem',
                    marginBottom: '32px'
                  }}>
                    {t.holding.agroCard.desc}
                  </p>
                </div>
                <Link href="/agro" className="btn btn-primary" style={{
                  background: 'linear-gradient(135deg, var(--accent-green) 0%, #162f26 100%)',
                  boxShadow: '0 4px 20px rgba(30, 61, 50, 0.25)',
                  alignSelf: 'flex-start'
                }}>
                  {t.holding.agroCard.cta}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

const decorGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '500px',
  height: '250px',
  background: 'radial-gradient(circle, rgba(184, 115, 51, 0.1) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(40px)',
  zIndex: 1
};
