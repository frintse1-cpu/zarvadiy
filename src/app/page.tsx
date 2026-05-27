'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { number: '99.9%', label: t.aboutPage.stats.purity },
    { number: '12k+ Tons', label: t.aboutPage.stats.capacity },
    { number: '20+ Countries', label: t.aboutPage.stats.partners },
    { number: 'ISO 9001', label: t.hero.statQuality }
  ];

  const coreProducts = [
    {
      key: 'tubes',
      title: t.products.types.tubes.title,
      desc: t.products.types.tubes.shortDesc,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
          {/* Tubes */}
          <defs>
            <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
          <rect x="15" y="25" width="70" height="12" rx="4" fill="url(#copper-grad)" />
          <rect x="15" y="44" width="70" height="12" rx="4" fill="url(#copper-grad)" opacity="0.9" />
          <rect x="15" y="63" width="70" height="12" rx="4" fill="url(#copper-grad)" opacity="0.8" />
          <ellipse cx="85" cy="31" rx="3" ry="6" fill="#78350f" />
          <ellipse cx="85" cy="50" rx="3" ry="6" fill="#78350f" />
          <ellipse cx="85" cy="69" rx="3" ry="6" fill="#78350f" />
        </svg>
      )
    },
    {
      key: 'fittings',
      title: t.products.types.fittings.title,
      desc: t.products.types.fittings.shortDesc,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
          {/* Elbow Fitting */}
          <path d="M25,75 L25,45 C25,30 35,20 50,20 L80,20" stroke="url(#copper-grad)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25" cy="75" r="11" fill="#78350f" />
          <circle cx="80" cy="20" r="11" fill="#78350f" />
        </svg>
      )
    },
    {
      key: 'pancake',
      title: t.products.types.pancake.title,
      desc: t.products.types.pancake.shortDesc,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
          {/* Pancake spiral coil */}
          <circle cx="50" cy="50" r="38" stroke="url(#copper-grad)" strokeWidth="4" />
          <circle cx="50" cy="50" r="30" stroke="url(#copper-grad)" strokeWidth="4" />
          <circle cx="50" cy="50" r="22" stroke="url(#copper-grad)" strokeWidth="4" />
          <circle cx="50" cy="50" r="14" stroke="url(#copper-grad)" strokeWidth="4" />
          <circle cx="50" cy="50" r="6" stroke="url(#copper-grad)" strokeWidth="4" />
          <path d="M50,12 C52,12 60,18 64,28" stroke="url(#copper-grad)" strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    },
    {
      key: 'lwc',
      title: t.products.types.lwc.title,
      desc: t.products.types.lwc.shortDesc,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
          {/* Level wound reel */}
          <rect x="25" y="15" width="50" height="70" rx="6" stroke="url(#copper-grad)" strokeWidth="4" />
          <line x1="25" y1="25" x2="75" y2="25" stroke="url(#copper-grad)" strokeWidth="6" />
          <line x1="25" y1="35" x2="75" y2="35" stroke="url(#copper-grad)" strokeWidth="6" />
          <line x1="25" y1="45" x2="75" y2="45" stroke="url(#copper-grad)" strokeWidth="6" />
          <line x1="25" y1="55" x2="75" y2="55" stroke="url(#copper-grad)" strokeWidth="6" />
          <line x1="25" y1="65" x2="75" y2="65" stroke="url(#copper-grad)" strokeWidth="6" />
          <line x1="25" y1="75" x2="75" y2="75" stroke="url(#copper-grad)" strokeWidth="6" />
          <circle cx="50" cy="50" r="10" fill="#070b13" stroke="url(#copper-grad)" strokeWidth="3" />
        </svg>
      )
    },
    {
      key: 'grooved',
      title: t.products.types.grooved.title,
      desc: t.products.types.grooved.shortDesc,
      icon: (
        <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
          {/* Inner grooved tube cross section */}
          <circle cx="50" cy="50" r="32" stroke="url(#copper-grad)" strokeWidth="8" />
          <path d="M50,18 L50,22 M50,78 L50,82 M18,50 L22,50 M78,50 L82,50 M27,27 L31,31 M69,69 L73,73 M27,73 L31,69 M69,27 L73,31" stroke="url(#copper-grad)" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="28" stroke="#070b13" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="section" style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0',
        background: 'linear-gradient(180deg, rgba(7,11,19,0.8) 0%, rgba(7,11,19,0.95) 100%), url("/images/hero.png") no-repeat center center / cover',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow Effects */}
        <div style={topGlowStyle}></div>
        <div style={bottomGlowStyle}></div>

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag" style={{ animation: 'fadeInDown 0.8s ease' }}>{t.hero.tagline}</span>
            <h1 className="gradient-text" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.1,
              fontWeight: 800,
              marginBottom: '24px',
              animation: 'fadeInUp 1s ease'
            }}>
              {t.hero.title}
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.25rem)',
              color: 'var(--text-silver)',
              lineHeight: 1.6,
              marginBottom: '40px',
              animation: 'fadeInUp 1.2s ease'
            }}>
              {t.hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-primary">
                {t.hero.cta}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <Link href="/products" className="btn btn-secondary">
                {t.nav.products}
              </Link>
            </div>
          </div>

          {/* STATS OVERLAY */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            marginTop: '60px',
            borderTop: '1px solid rgba(200, 122, 62, 0.15)',
            paddingTop: '40px'
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'var(--primary-copper)',
                  marginBottom: '6px'
                }}>{stat.number}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS PORTFOLIO PREVIEW */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.nav.products}</span>
            <h2 className="section-title">{t.products.title}</h2>
            <p className="section-subtitle">{t.products.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {coreProducts.map((prod) => (
              <div key={prod.key} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: 'var(--border-radius-sm)',
                    background: 'rgba(200, 122, 62, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    {prod.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    color: 'var(--text-white)',
                    marginBottom: '12px'
                  }}>{prod.title}</h3>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    marginBottom: '24px'
                  }}>{prod.desc}</p>
                </div>
                <Link href="/products" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--primary-copper)',
                  fontWeight: 600,
                  fontSize: '0.95rem'
                }}>
                  {t.products.viewDetails}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section" style={{ background: '#04070d' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">{t.whyUs.title}</span>
            <h2 className="section-title" style={{ marginBottom: '24px', textAlign: 'left' }}>
              Built For <span>Long-Term</span> Global Partnerships
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.05rem' }}>
              {t.whyUs.subtitle}
            </p>
            <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <Image
                src="/images/product_tubes.png"
                alt="Premium copper tubes"
                fill
                style={{ objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'linear-gradient(to bottom, rgba(7, 11, 19, 0) 50%, rgba(7, 11, 19, 0.9) 100%)'
              }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={whyUsCardStyle}>
              <div style={whyUsIconWrapperStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div>
                <h3 style={whyUsTitleStyle}>{t.whyUs.standards.title}</h3>
                <p style={whyUsDescStyle}>{t.whyUs.standards.desc}</p>
              </div>
            </div>

            <div style={whyUsCardStyle}>
              <div style={whyUsIconWrapperStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 style={whyUsTitleStyle}>{t.whyUs.supply.title}</h3>
                <p style={whyUsDescStyle}>{t.whyUs.supply.desc}</p>
              </div>
            </div>

            <div style={whyUsCardStyle}>
              <div style={whyUsIconWrapperStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 style={whyUsTitleStyle}>{t.whyUs.comm.title}</h3>
                <p style={whyUsDescStyle}>{t.whyUs.comm.desc}</p>
              </div>
            </div>

            <div style={whyUsCardStyle}>
              <div style={whyUsIconWrapperStyle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div>
                <h3 style={whyUsTitleStyle}>{t.whyUs.team.title}</h3>
                <p style={whyUsDescStyle}>{t.whyUs.team.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONS BRIEF PREVIEW */}
      <section className="section section-alt" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.03)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">{t.nav.operations}</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              See Our Copper Supply Operations In Action
            </h2>
            <p style={{ color: 'var(--text-silver)', marginBottom: '30px' }}>
              We employ strict quality compliance, modern drawing processes, and export-grade packing systems to guarantee our clients receive flawless copper pipes.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Link href="/operations" className="btn btn-primary">
                {t.nav.operations}
              </Link>
              <Link href="/about" className="btn btn-secondary">
                {t.nav.about}
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={{ fontSize: '2rem', color: 'var(--primary-copper)', fontWeight: 800 }}>01</div>
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.operationsPage.processSteps[0].title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {t.operationsPage.processSteps[0].desc}
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={{ fontSize: '2rem', color: 'var(--primary-copper)', fontWeight: 800 }}>02</div>
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.operationsPage.processSteps[1].title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {t.operationsPage.processSteps[1].desc}
                </p>
              </div>
            </div>
            <div className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
              <div style={{ fontSize: '2rem', color: 'var(--primary-copper)', fontWeight: 800 }}>03</div>
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>
                  {t.operationsPage.processSteps[2].title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {t.operationsPage.processSteps[2].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCUSS SOLUTIONS / CONTACT FORM SECTION */}
      <section className="section" id="connect" style={{
        background: 'radial-gradient(circle at 50% 10%, rgba(200, 122, 62, 0.08) 0%, rgba(7, 11, 19, 0) 60%)',
        borderTop: '1px solid rgba(200, 122, 62, 0.1)'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.nav.contact}</span>
            <h2 className="section-title">Let’s Discuss <span>Reliable</span> Copper Supply Solutions</h2>
            <p className="section-subtitle">
              Connect with ZARVADIY LLC for export inquiries, long-term supply partnerships and industrial copper solutions.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

const productIconStyle: React.CSSProperties = {
  width: '40px',
  height: '40px',
};

const whyUsCardStyle: React.CSSProperties = {
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-start',
};

const whyUsIconWrapperStyle: React.CSSProperties = {
  width: '48px',
  height: '48px',
  background: 'rgba(200, 122, 62, 0.1)',
  border: '1px solid rgba(200, 122, 62, 0.2)',
  borderRadius: 'var(--border-radius-sm)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary-copper)',
  flexShrink: 0,
  marginTop: '4px'
};

const whyUsTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1.2rem',
  color: 'var(--text-white)',
  fontWeight: 600,
  marginBottom: '6px'
};

const whyUsDescStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  fontSize: '0.95rem',
  lineHeight: 1.6
};

const topGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-10%',
  left: '10%',
  width: '300px',
  height: '300px',
  background: 'radial-gradient(circle, rgba(200, 122, 62, 0.15) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(40px)',
  zIndex: 1
};

const bottomGlowStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10%',
  right: '10%',
  width: '400px',
  height: '400px',
  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(50px)',
  zIndex: 1
};
