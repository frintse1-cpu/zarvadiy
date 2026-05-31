'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function MarketsPage() {
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
          <span className="section-tag">{t.nav.markets}</span>
          <h1 className="section-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            color: 'var(--text-white)',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            {language === 'ru' ? 'Рынки Сбыта и Логистические Хабы' : language === 'uz' ? 'Eksport Bozorlari va Logistika Tizimi' : 'Global Markets & Logistics Hubs'}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '20px auto 0 auto', lineHeight: 1.7 }}>
            {t.holding.markets.subtitle}
          </p>
        </div>
      </section>

      {/* 2. GLOBAL MARKETS SECTION */}
      <section className="section" style={{
        background: 'linear-gradient(180deg, #030509 0%, #070b13 100%)',
        borderTop: '1px solid rgba(250,250,250,0.02)'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
            
            {/* World Map Presentation */}
            <div style={{
              height: '450px',
              background: 'radial-gradient(circle at 50% 50%, rgba(184, 115, 51, 0.05) 0%, rgba(7, 11, 19, 0) 70%), rgba(15, 23, 42, 0.4)',
              border: '1px solid rgba(200, 122, 62, 0.15)',
              borderRadius: 'var(--border-radius-lg)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)'
            }}>
              {/* Map grid coordinate overlays */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                backgroundImage: 'radial-gradient(rgba(200, 122, 62, 0.08) 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                opacity: 0.7
              }}></div>

              {/* Tashkent Hub (Main pin) */}
              <div style={{ position: 'absolute', top: '48%', left: '55%' }}>
                <div className="markets-pulse-dot" style={{ backgroundColor: 'var(--primary-copper)', width: '14px', height: '14px' }}></div>
                <span style={{
                  position: 'absolute',
                  top: '18px', left: '-40px',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  backgroundColor: 'rgba(7, 11, 19, 0.85)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  border: '1px solid var(--primary-copper)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'monospace'
                }}>TASHKENT HUB</span>
              </div>

              {/* Europe Pin */}
              <div style={{ position: 'absolute', top: '38%', left: '32%' }}>
                <div className="markets-pulse-dot" style={{ backgroundColor: '#ffffff' }}></div>
                <span style={{
                  position: 'absolute',
                  top: '-30px', left: '-20px',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(7, 11, 19, 0.7)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  whiteSpace: 'nowrap'
                }}>EUROPE</span>
              </div>

              {/* MENA Pin */}
              <div style={{ position: 'absolute', top: '55%', left: '42%' }}>
                <div className="markets-pulse-dot" style={{ backgroundColor: '#ffffff' }}></div>
                <span style={{
                  position: 'absolute',
                  top: '18px', left: '-15px',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(7, 11, 19, 0.7)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  whiteSpace: 'nowrap'
                }}>MENA</span>
              </div>

              {/* East Asia Pin */}
              <div style={{ position: 'absolute', top: '52%', left: '72%' }}>
                <div className="markets-pulse-dot" style={{ backgroundColor: '#ffffff' }}></div>
                <span style={{
                  position: 'absolute',
                  top: '-30px', left: '-15px',
                  color: '#cbd5e1',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  backgroundColor: 'rgba(7, 11, 19, 0.7)',
                  padding: '2px 6px',
                  borderRadius: '3px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  whiteSpace: 'nowrap'
                }}>EAST ASIA</span>
              </div>
            </div>

            {/* Market Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(184, 115, 51, 0.1)', border: '1px solid rgba(184, 115, 51, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-copper)', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 600, marginBottom: '4px' }}>Europe Corridor</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.holding.markets.europe}</p>
                </div>
              </div>

              <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(30, 61, 50, 0.15)', border: '1px solid rgba(30, 61, 50, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#68ebd0', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 600, marginBottom: '4px' }}>MENA Hubs</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.holding.markets.mena}</p>
                </div>
              </div>

              <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-silver)', flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 600, marginBottom: '4px' }}>CIS & East Asia Channels</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{t.holding.markets.cis} / {t.holding.markets.asia}</p>
                </div>
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
