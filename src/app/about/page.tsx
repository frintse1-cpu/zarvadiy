'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t.whyUs.standards.title,
      desc: t.whyUs.standards.desc,
      num: '01'
    },
    {
      title: t.whyUs.supply.title,
      desc: t.whyUs.supply.desc,
      num: '02'
    },
    {
      title: t.whyUs.comm.title,
      desc: t.whyUs.comm.desc,
      num: '03'
    },
    {
      title: t.whyUs.team.title,
      desc: t.whyUs.team.desc,
      num: '04'
    }
  ];

  return (
    <div style={{ background: 'var(--bg-dark)' }}>
      {/* HEADER HERO */}
      <section className="section" style={{
        padding: '120px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(7,11,19,0.9) 0%, rgba(7,11,19,1) 100%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div className="container">
          <span className="section-tag">{t.nav.about}</span>
          <h1 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-white)' }}>
            {t.aboutPage.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '16px auto 0 auto' }}>
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* CORE DETAILS */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: 'var(--text-white)',
              marginBottom: '20px'
            }}>
              {t.aboutPage.storyTitle}
            </h2>
            <p style={{
              color: 'var(--text-silver)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '24px'
            }}>
              {t.aboutPage.storyDesc}
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>
              Uzbekistan has a long history of copper metallurgy, driven by the massive deposits in Almalyk and surrounding regions. Zarvadiy LLC bridges the gap between this world-class raw resource processing and global industrial manufacturers, offering end-to-end supply chains with perfect compliance and high specifications.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="glass-card" style={statCardStyle}>
              <div style={statNumStyle}>99.9%</div>
              <div style={statLabelStyle}>{t.aboutPage.stats.purity}</div>
            </div>
            <div className="glass-card" style={statCardStyle}>
              <div style={statNumStyle}>12K+ t</div>
              <div style={statLabelStyle}>{t.aboutPage.stats.capacity}</div>
            </div>
            <div className="glass-card" style={statCardStyle}>
              <div style={statNumStyle}>20+</div>
              <div style={statLabelStyle}>{t.aboutPage.stats.partners}</div>
            </div>
            <div className="glass-card" style={statCardStyle}>
              <div style={statNumStyle}>ISO</div>
              <div style={statLabelStyle}>{t.aboutPage.stats.experience}</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section section-alt">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className="glass-card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={badgeStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 style={missionTitleStyle}>{t.aboutPage.missionTitle}</h3>
            <p style={missionDescStyle}>{t.aboutPage.missionDesc}</p>
          </div>

          <div className="glass-card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={badgeStyle}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 style={missionTitleStyle}>Our Vision</h3>
            <p style={missionDescStyle}>
              To become the leading regional copper pipeline export hub, serving global refrigeration and HVAC manufacturers with premium custom-sized products, robust packaging, and efficient multi-modal supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Values</span>
            <h2 className="section-title">Our Operating Principles</h2>
            <p className="section-subtitle">
              The core values that guide our export operations, customer coordination, and quality criteria.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '30px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(200, 122, 62, 0.15)',
                  lineHeight: 1
                }}>{v.num}</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                  marginTop: '10px'
                }}>{v.title}</h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const statCardStyle: React.CSSProperties = {
  textAlign: 'center',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

const statNumStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '2rem',
  fontWeight: 700,
  color: 'var(--primary-copper)',
  marginBottom: '8px'
};

const statLabelStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const badgeStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
  borderRadius: 'var(--border-radius-sm)',
  background: 'rgba(200, 122, 62, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary-copper)',
  marginBottom: '20px'
};

const missionTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.5rem',
  color: 'var(--text-white)',
  marginBottom: '14px'
};

const missionDescStyle: React.CSSProperties = {
  color: 'var(--text-silver)',
  fontSize: '0.98rem',
  lineHeight: 1.7
};
