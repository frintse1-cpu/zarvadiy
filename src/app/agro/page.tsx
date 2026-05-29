'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function AgroDivisionPage() {
  const { language, t } = useLanguage();

  const productKeys = ['raisins', 'apricots', 'prunes', 'nuts'];

  // Custom organic drawings/SVG graphics for agricultural products
  const productDrawings = {
    'raisins': (
      <svg viewBox="0 0 100 100" fill="none" style={fruitGraphicStyle}>
        <circle cx="35" cy="45" r="14" fill="#a16207" opacity="0.9" />
        <circle cx="55" cy="35" r="12" fill="#d97706" opacity="0.95" />
        <circle cx="65" cy="55" r="15" fill="#ca8a04" opacity="0.9" />
        <circle cx="45" cy="65" r="13" fill="#854d0e" opacity="0.9" />
        <path d="M50,15 C52,22 55,28 55,35" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    'apricots': (
      <svg viewBox="0 0 100 100" fill="none" style={fruitGraphicStyle}>
        <circle cx="50" cy="50" r="30" fill="url(#apricot-gradient)" />
        <path d="M50,20 C42,20 38,32 38,50 C38,68 45,80 50,80" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M50,12 C48,6 56,8 62,5" stroke="#15803d" strokeWidth="4" strokeLinecap="round" />
        <path d="M54,10 C62,8 70,16 66,24 C62,32 50,30 50,30" fill="#22c55e" opacity="0.8" />
        <defs>
          <radialGradient id="apricot-gradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
        </defs>
      </svg>
    ),
    'prunes': (
      <svg viewBox="0 0 100 100" fill="none" style={fruitGraphicStyle}>
        <ellipse cx="50" cy="50" rx="34" ry="26" fill="url(#prune-gradient)" />
        <path d="M25,50 C25,42 40,36 50,36 C65,36 75,44 75,50" stroke="#312e81" strokeWidth="2.5" opacity="0.3" />
        <path d="M50,24 C52,14 62,18 64,14" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
        <defs>
          <radialGradient id="prune-gradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="60%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#030712" />
          </radialGradient>
        </defs>
      </svg>
    ),
    'nuts': (
      <svg viewBox="0 0 100 100" fill="none" style={fruitGraphicStyle}>
        {/* Walnut shell halves */}
        <path d="M30,50 C30,30 45,22 50,22 C55,22 70,30 70,50 C70,70 55,78 50,78 C45,78 30,70 30,50 Z" fill="#d97706" stroke="#78350f" strokeWidth="4" />
        <path d="M50,22 L50,78 M30,50 C40,50 48,45 50,50 C52,55 60,50 70,50" stroke="#78350f" strokeWidth="3.5" />
      </svg>
    )
  };

  return (
    <div className="agro-theme" style={{ minHeight: '100vh', background: 'var(--bg-earthy-beige)' }}>

      {/* 1. HERO SECTION */}
      <section className="section" style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px 0',
        background: 'linear-gradient(180deg, rgba(249, 246, 240, 0.85) 0%, rgba(249, 246, 240, 0.98) 100%), url("/images/agro_hero.png") no-repeat center center / cover',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(30, 61, 50, 0.08)'
      }}>
        {/* Sun warm soft light overlay */}
        <div style={sunGlowOverlay}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="section-tag" style={{ color: 'var(--accent-green)' }}>
              🌱 {t.nav.industries} // Agriculture Division
            </span>
            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: 'var(--text-earthy-dark)',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              {t.agro.heroTitle}
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
              color: 'var(--text-earthy-muted)',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '680px'
            }}>
              {t.agro.heroSubtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#products" className="agro-btn-primary">
                Explore Catalog
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                </svg>
              </a>
              <Link href="/contact" className="agro-btn-secondary">
                Request Private Label Specs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ORGANIC PRODUCTS */}
      <section className="section" id="about" style={{ background: '#ffffff', borderBottom: '1px solid rgba(30, 61, 50, 0.05)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">{t.aboutPage.title}</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Pure Sunshine Sourced from <span>Orchards of Samarkand</span>
            </h2>
            <p style={{ fontSize: '1.08rem', lineHeight: 1.75, color: 'var(--text-earthy-muted)', marginBottom: '24px' }}>
              {t.agro.aboutDesc}
            </p>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#6b7c74' }}>
              {language === 'ru'
                ? 'Наш агро-дивизион отслеживает качество на каждом этапе — от инспекции почвы садов до бережной вакуумной упаковки. Мы используем оптическую и лазерную chromatic сортировку, гарантируя 99.9% чистоты изюма, кураги, чернослива и ядер грецких орехов.'
                : language === 'uz'
                  ? 'Agro departamentimiz tuproq unumdorligini tekshirishdan tortib mevalarni vakuumli qadoqlashgacha bo‘lgan barcha bosqichlarda sifatni nazorat qiladi. Biz mahsulotlarimizni lazer yordamida saralaymiz va 99.9% tozalik darajasini ta’minlaymiz.'
                  : 'Central Asia yields dried fruits of extraordinary richness due to a unique climate with 300+ days of intense solar radiation. We coordinate raw agricultural supply chains under strict global standards, ensuring zero chemical pesticide residue and full biosecurity tracking for European packing chains.'}
            </p>
          </div>

          <div style={{
            position: 'relative',
            width: '100%',
            height: '380px',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(30, 61, 50, 0.06)',
            border: '1px solid var(--border-earthy)'
          }}>
            <Image
              src="/images/agro_hero.png"
              alt="Premium sun-dried raisins and apricots"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, rgba(249, 246, 240, 0) 40%, rgba(30, 61, 50, 0.4) 100%)'
            }}></div>
          </div>
        </div>
      </section>

      {/* 3. PREPARATION PROCESS TIMELINE */}
      <section className="section" id="process" style={{ borderBottom: '1px solid rgba(30, 61, 50, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.agro.process.title}</span>
            <h2 className="section-title">Chromatically Sorted <span>5-Stage Processing</span></h2>
            <p className="section-subtitle">{t.agro.process.subtitle}</p>
          </div>

          <div className="timeline-process-container">
            {/* Step 1 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.agro.process.step1.title}</h4>
              <p className="timeline-step-desc">{t.agro.process.step1.desc}</p>
            </div>

            {/* Step 2 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.agro.process.step2.title}</h4>
              <p className="timeline-step-desc">{t.agro.process.step2.desc}</p>
            </div>

            {/* Step 3 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.agro.process.step3.title}</h4>
              <p className="timeline-step-desc">{t.agro.process.step3.desc}</p>
            </div>

            {/* Step 4 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.agro.process.step4.title}</h4>
              <p className="timeline-step-desc">{t.agro.process.step4.desc}</p>
            </div>

            {/* Step 5 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.agro.process.step5.title}</h4>
              <p className="timeline-step-desc">{t.agro.process.step5.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT CATALOG */}
      <section className="section" id="products" style={{ background: '#ffffff', borderBottom: '1px solid rgba(30, 61, 50, 0.05)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.agroProducts.title}</span>
            <h2 className="section-title">Organic <span>Dried Fruits & Nuts</span> Calibration</h2>
            <p className="section-subtitle">{t.agroProducts.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {productKeys.map((key) => {
              const item = t.agroProducts.items[key as keyof typeof t.agroProducts.items];
              return (
                <div key={key} className="glass-card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--border-radius-md)',
                  minHeight: '380px'
                }}>
                  <div>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(30, 61, 50, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}>
                      {productDrawings[key as keyof typeof productDrawings]}
                    </div>
                    <span className="organic-badge" style={{ marginBottom: '12px' }}>calibrated</span>
                    <h3 style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.35rem',
                      color: 'var(--text-earthy-dark)',
                      marginBottom: '10px',
                      fontWeight: 700
                    }}>{item.title}</h3>
                    <p style={{
                      color: 'var(--text-earthy-muted)',
                      fontSize: '0.92rem',
                      lineHeight: 1.55,
                      marginBottom: '24px'
                    }}>{item.shortDesc}</p>
                  </div>
                  <Link href={`/agro/products/${key}`} className="agro-btn-secondary" style={{
                    alignSelf: 'flex-start',
                    padding: '8px 16px',
                    fontSize: '0.85rem'
                  }}>
                    {t.agroProducts.viewDetails}
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

      {/* 5. PACKAGING & CERTIFICATIONS */}
      <section className="section" id="certs" style={{ borderBottom: '1px solid rgba(30, 61, 50, 0.05)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">Packaging Options</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              High-Barrier <span>Retail Standup</span> & Bulk Cartons
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--text-earthy-muted)', marginBottom: '24px' }}>
              {t.agro.packaging.desc}
            </p>
            <div className="glass-card" style={{ padding: '24px', border: '1px solid var(--border-earthy)' }}>
              <span className="organic-badge" style={{ marginBottom: '10px' }}>Bulk Shipments</span>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.92rem', fontWeight: 600 }}>
                High moisture barrier polymer bags vacuumized inside double-corrugated export master boxes. Fully fumigated pallets.
              </p>
            </div>
          </div>

          {/* Certifications showcase */}
          <div className="glass-card" style={{ padding: '40px', background: '#ffffff' }}>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.5rem', color: 'var(--text-earthy-dark)', marginBottom: '16px', fontWeight: 700 }}>
              {t.agro.certifications.title}
            </h3>
            <p style={{ color: 'var(--text-earthy-muted)', fontSize: '0.92rem', marginBottom: '30px' }}>
              {t.agro.certifications.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-green)' }}>HACCP</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-earthy-muted)' }}>Food Hazard Analysis</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-green)' }}>ISO 22000</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-earthy-muted)' }}>Food Safety Standard</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-green)' }}>Halal</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-earthy-muted)' }}>Certified Export</span>
              </div>
              <div style={certBadgeStyle}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--accent-green)' }}>Organic</div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-earthy-muted)' }}>Soil Association Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="section" style={{
        background: 'radial-gradient(circle at 50% 10%, rgba(30, 61, 50, 0.08) 0%, rgba(249, 246, 240, 0) 60%), #ffffff',
        borderTop: '1px solid rgba(30, 61, 50, 0.08)',
        textAlign: 'center',
        padding: '100px 0'
      }}>
        <div className="container" style={{ maxWidth: '750px' }}>
          <span className="section-tag">Direct Inquiry</span>
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Request Your <span>Custom Agro Samples</span> Today
          </h2>
          <p style={{ color: 'var(--text-earthy-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '40px' }}>
            Submit your private label specifications, custom weight layouts, and target destination ports. We dispatch fully verified seedless and pitted organic samples within 72h.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="agro-btn-primary">
              Submit Sourcing Request
            </Link>
            <a href="https://wa.me/998939722986" target="_blank" rel="noopener noreferrer" className="agro-btn-secondary">
              WhatsApp Trade desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

const fruitGraphicStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
};

const certBadgeStyle: React.CSSProperties = {
  border: '1px solid rgba(30, 61, 50, 0.08)',
  background: '#f9f6f0',
  borderRadius: 'var(--border-radius-sm)',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px'
};

const sunGlowOverlay: React.CSSProperties = {
  position: 'absolute',
  top: '-15%',
  right: '5%',
  width: '400px',
  height: '400px',
  background: 'radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(50px)',
  zIndex: 1
};
