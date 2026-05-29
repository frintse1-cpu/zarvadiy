'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function IndustrialDivisionPage() {
  const { language, t } = useLanguage();

  const productKeys = ['stainless-tubes', 'carbon-tubes', 'pipe-fittings', 'valves', 'flanges'];
  
  const productIcons = {
    'stainless-tubes': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <rect x="15" y="25" width="70" height="12" rx="4" fill="url(#metallic-copper)" />
        <rect x="15" y="44" width="70" height="12" rx="4" fill="url(#metallic-copper)" opacity="0.9" />
        <rect x="15" y="63" width="70" height="12" rx="4" fill="url(#metallic-copper)" opacity="0.8" />
        <ellipse cx="85" cy="31" rx="3" ry="6" fill="#4b5563" />
        <ellipse cx="85" cy="50" rx="3" ry="6" fill="#4b5563" />
        <ellipse cx="85" cy="69" rx="3" ry="6" fill="#4b5563" />
      </svg>
    ),
    'carbon-tubes': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <rect x="10" y="35" width="80" height="30" rx="6" fill="url(#metallic-silver)" />
        <ellipse cx="90" cy="50" rx="4" ry="15" fill="#1f2937" />
        <ellipse cx="10" cy="50" rx="4" ry="15" fill="#374151" />
      </svg>
    ),
    'pipe-fittings': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <path d="M25,75 L25,45 C25,30 35,20 50,20 L80,20" stroke="url(#metallic-copper)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="75" r="12" fill="#374151" />
        <circle cx="80" cy="20" r="12" fill="#374151" />
      </svg>
    ),
    'valves': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <polygon points="15,25 85,25 50,50 85,75 15,75 50,50" fill="url(#metallic-silver)" stroke="url(#metallic-copper)" strokeWidth="4" />
        <circle cx="50" cy="50" r="12" fill="#0f172a" stroke="url(#metallic-copper)" strokeWidth="4" />
        <rect x="45" y="5" width="10" height="25" fill="url(#metallic-copper)" />
        <rect x="35" y="5" width="30" height="6" rx="2" fill="url(#metallic-silver)" />
      </svg>
    ),
    'flanges': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <circle cx="50" cy="50" r="38" stroke="url(#metallic-copper)" strokeWidth="8" />
        <circle cx="50" cy="50" r="24" stroke="url(#metallic-silver)" strokeWidth="6" />
        <circle cx="50" cy="50" r="12" fill="#0f172a" />
        <circle cx="50" cy="20" r="3.5" fill="#ffffff" />
        <circle cx="50" cy="80" r="3.5" fill="#ffffff" />
        <circle cx="20" cy="50" r="3.5" fill="#ffffff" />
        <circle cx="80" cy="50" r="3.5" fill="#ffffff" />
      </svg>
    )
  };

  return (
    <div className="industrial-theme" style={{ minHeight: '100vh', background: '#0b0f19' }}>
      
      {/* Dynamic Gradients Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="metallic-copper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B87333" />
            <stop offset="50%" stopColor="#e09255" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="metallic-silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. HERO SECTION */}
      <section className="section" style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px 0',
        background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.8) 0%, rgba(11, 15, 25, 0.98) 100%), url("/images/industrial_hero.png") no-repeat center center / cover',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow Effects */}
        <div style={topGlowStyle}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: 'var(--primary-copper-hover)' }}>{t.nav.industries} // Industrial Division</span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.01em'
            }}>
              {t.industrial.heroTitle}
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
              color: '#9ca3af',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '680px'
            }}>
              {t.industrial.heroSubtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#products" className="btn btn-primary">
                View Catalog
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                </svg>
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Request Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT INDUSTRIAL DIVISION */}
      <section className="section" id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">{t.aboutPage.title}</span>
            <h2 className="section-title" style={{ textAlign: 'left', color: '#ffffff', marginBottom: '24px' }}>
              High-Specification <span>Infrastructure</span> Metallurgy
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: '24px' }}>
              {t.industrial.aboutDesc}
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {language === 'ru'
                ? 'Все наши изделия проходят 100% неразрушающий вихретоковый контроль, гидростатические испытания стенок под давлением и детальную проверку геометрических отклонений. Наша тяжелая упаковка гарантирует сохранность при мультимодальной транспортировке.'
                : language === 'uz'
                ? 'Barcha mahsulotlarimiz 100% induksion tok (вихреток) sinovi, gidravlik bosim ostida devor qattiqligini tekshirish va geometrik toleranslarni tahlil qilishdan o‘tadi. Bizning og‘ir mustahkam qadog‘imiz yukning to‘liq butun yetib borishini kafolatlaydi.'
                : 'Every single stainless and carbon steel component complies with exhaustive international benchmarks. Zarvadiy ensures complete traceability of raw metallurgy melts, strict dimensional parameters verification, and robust logistics clearance support for Europe and Middle East destinations.'}
            </p>
          </div>

          {/* Graphic capabilities cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={stepNumStyle}>01</div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.industrial.capabilities.item1.title}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {t.industrial.capabilities.item1.desc}
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={stepNumStyle}>02</div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.industrial.capabilities.item2.title}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {t.industrial.capabilities.item2.desc}
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={stepNumStyle}>03</div>
              <div>
                <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.industrial.capabilities.item3.title}
                </h4>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {t.industrial.capabilities.item3.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="section section-alt" id="products" style={{
        background: 'linear-gradient(180deg, #0b0f19 0%, #060910 100%)',
        borderTop: '1px solid rgba(255,255,255,0.02)'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.industrialProducts.title}</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Engineered <span>B2B Pipeline</span> Portfolio</h2>
            <p className="section-subtitle">{t.industrialProducts.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {productKeys.map((key) => {
              const item = t.industrialProducts.items[key as keyof typeof t.industrialProducts.items];
              return (
                <div key={key} className="tech-product-card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px'
                }}>
                  <div>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--border-radius-sm)',
                      background: 'rgba(184, 115, 51, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}>
                      {productIcons[key as keyof typeof productIcons]}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#ffffff',
                      marginBottom: '12px',
                      fontWeight: 700
                    }}>{item.title}</h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}>{item.shortDesc}</p>
                  </div>
                  <Link href={`/industrial/products/${key}`} className="btn btn-secondary" style={{
                    alignSelf: 'flex-start',
                    padding: '10px 18px',
                    fontSize: '0.85rem'
                  }}>
                    {t.industrialProducts.viewDetails}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LOGISTICS & CERTIFICATIONS */}
      <section className="section" id="logistics" style={{ background: '#070b13' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Logistics Desk</span>
            <h2 className="section-title" style={{ textAlign: 'left', color: '#ffffff', marginBottom: '24px' }}>
              Heavy Export <span>Packaging & Sea</span> Transit
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              {t.industrial.logistics.desc}
            </p>
            <div className="glass-card" style={{ padding: '24px', border: '1px solid rgba(184,115,51,0.1)' }}>
              <span className="technical-badge" style={{ marginBottom: '10px', display: 'inline-block' }}>Compliance Standards</span>
              <p style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 600 }}>
                ASTM A213, EN 10216, ASME B16.9, API 5L, CE Directive 2014/68/EU (PED)
              </p>
            </div>
          </div>

          {/* Certifications showcase */}
          <div className="glass-card" style={{ padding: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#ffffff', marginBottom: '16px', fontWeight: 700 }}>
              {t.industrial.certifications.title}
            </h3>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', marginBottom: '30px' }}>
              {t.industrial.certifications.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-copper-hover)' }}>ISO 9001</div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Quality Management</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-copper-hover)' }}>CE PED</div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Pressure Equipment</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-copper-hover)' }}>TUV</div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Audit Verification</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--primary-copper-hover)' }}>EN 10204</div>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>3.1 Material Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="section" style={{
        background: 'radial-gradient(circle at 50% 10%, rgba(184, 115, 51, 0.08) 0%, rgba(7, 11, 19, 0) 60%), #060910',
        borderTop: '1px solid rgba(184, 115, 51, 0.15)',
        textAlign: 'center',
        padding: '100px 0'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <span className="section-tag" style={{ color: 'var(--primary-copper-hover)' }}>Get Quote</span>
          <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '20px' }}>
            Initiate Your <span>Industrial RFQ</span> Today
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
            Submit your sizes, grades, wall thicknesses, and destination port. Our engineering trading desk will coordinate technical specs and logistics within 24h.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">
              Send Specification Inquiry
            </Link>
            <a href="https://wa.me/998939722986" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              WhatsApp Logistics Coordinator
            </a>
          </div>
        </div>
      </section>
      
    </div>
  );
}

const productIconStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
};

const stepNumStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: 'var(--primary-copper-hover)',
  fontWeight: 800,
  lineHeight: 1
};

const certBadgeStyle: React.CSSProperties = {
  border: '1px solid rgba(255,255,255,0.04)',
  background: 'rgba(255,255,255,0.01)',
  borderRadius: 'var(--border-radius-sm)',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px'
};

const topGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-10%',
  left: '5%',
  width: '350px',
  height: '350px',
  background: 'radial-gradient(circle, rgba(184, 115, 51, 0.15) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(50px)',
  zIndex: 1
};
