'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function OperationsPage() {
  const { t } = useLanguage();

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
          <span className="section-tag">{t.nav.operations}</span>
          <h1 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-white)' }}>
            {t.operationsPage.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '16px auto 0 auto' }}>
            {t.operationsPage.subtitle}
          </p>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: 'var(--text-white)',
              marginBottom: '20px'
            }}>
              {t.operationsPage.prodTitle}
            </h2>
            <p style={{
              color: 'var(--text-silver)',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              marginBottom: '20px'
            }}>
              {t.operationsPage.prodDesc}
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.7
            }}>
              Uzbekistan raw copper production relies on state of the art chemical purification systems. We melt raw copper cathodes into billets, then push them through specialized extrusion dies. Cold drawing processes reduce diameter and wall thickness to microscopic accuracy.
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '350px', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <Image
              src="/images/hero.png"
              alt="Copper production factory"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, rgba(7, 11, 19, 0) 50%, rgba(7, 11, 19, 0.95) 100%)'
            }}></div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Production Workflow</span>
            <h2 className="section-title">Step-By-Step Copper Transformation</h2>
            <p className="section-subtitle">
              How raw high-purity copper cathodes are converted into global industrial solutions.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '30px'
          }}>
            {t.operationsPage.processSteps?.map((step: { title: string; desc: string }, idx: number) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--primary-copper)',
                  color: 'var(--text-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.95rem'
                }}>
                  {idx + 1}
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-white)',
                  fontWeight: 600
                }}>{step.title}</h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY LABS & PACKAGING */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={iconBadgeStyle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 style={sectionCardTitleStyle}>{t.operationsPage.qcTitle}</h3>
            <p style={sectionCardDescStyle}>{t.operationsPage.qcDesc}</p>
          </div>

          <div className="glass-card" style={{ padding: '40px' }}>
            <div style={iconBadgeStyle}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                <rect x="1" y="3" width="22" height="5" rx="1"></rect>
                <line x1="10" y1="12" x2="14" y2="12"></line>
              </svg>
            </div>
            <h3 style={sectionCardTitleStyle}>{t.operationsPage.pkgTitle}</h3>
            <p style={sectionCardDescStyle}>{t.operationsPage.pkgDesc}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

const iconBadgeStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  background: 'rgba(200, 122, 62, 0.1)',
  border: '1px solid rgba(200, 122, 62, 0.2)',
  borderRadius: 'var(--border-radius-sm)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary-copper)',
  marginBottom: '24px'
};

const sectionCardTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.5rem',
  color: 'var(--text-white)',
  marginBottom: '16px'
};

const sectionCardDescStyle: React.CSSProperties = {
  color: 'var(--text-silver)',
  fontSize: '0.98rem',
  lineHeight: 1.7
};
