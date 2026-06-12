'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import ContactForm from '../components/ContactForm';

export default function Home() {
  const { language, t } = useLanguage();

  const stats = [
    { number: '2', label: t.hero.statHolding },
    { number: '25+', label: t.hero.statExport },
    { number: '100%', label: t.hero.statQuality }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="section" style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 0',
        background: 'linear-gradient(180deg, rgba(7, 11, 19, 0.75) 0%, rgba(7, 11, 19, 0.95) 100%), url("/images/holding_hero.png") no-repeat center center / cover',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Cinematic layer glows */}
        <div style={topGlowStyle}></div>
        <div style={bottomGlowStyle}></div>

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '50px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-tag" style={{ animation: 'fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              {t.hero.tagline}
            </span>
            <h1 className="gradient-text" style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              animation: 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              {t.hero.title}
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.35rem)',
              color: 'var(--text-silver)',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '720px',
              margin: '0 auto 40px auto',
              animation: 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
              {t.hero.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeInUp 1.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <a href="#industries" className="btn btn-primary">
                {t.hero.cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#connect" className="btn btn-secondary">
                {t.hero.ctaQuote}
              </a>
            </div>
          </div>

          {/* Stats Segment */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '30px',
            marginTop: '80px',
            borderTop: '1px solid rgba(250, 250, 250, 0.08)',
            paddingTop: '50px'
          }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: 'var(--primary-copper-hover)',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em'
                }}>{stat.number}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES SECTION */}
      <section className="section" id="industries" style={{
        background: 'linear-gradient(180deg, #070b13 0%, #030509 100%)',
        borderTop: '1px solid rgba(250,250,250,0.02)'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.holding.industriesTitle}</span>
            <h2 className="section-title">Two Business Worlds. One <span>Global Standards</span> Ecosystem.</h2>
            <p className="section-subtitle">{t.holding.industriesSubtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '30px' }}>
            
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
                  src="/images/agro_hero.png"
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

      {/* 3. EXPORT PROCESS TIMELINE */}
      <section className="section" style={{
        background: '#04070d',
        borderTop: '1px solid rgba(250, 250, 250, 0.01)',
        paddingBottom: '120px'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.holding.process.title}</span>
            <h2 className="section-title">Streamlined B2B Trade from <span>Inquiry to Warehouse</span></h2>
            <p className="section-subtitle">{t.holding.process.subtitle}</p>
          </div>

          <div className="timeline-process-container">
            {/* Step 1 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.holding.process.step1.title}</h4>
              <p className="timeline-step-desc">{t.holding.process.step1.desc}</p>
            </div>

            {/* Step 2 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.holding.process.step2.title}</h4>
              <p className="timeline-step-desc">{t.holding.process.step2.desc}</p>
            </div>

            {/* Step 3 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.holding.process.step3.title}</h4>
              <p className="timeline-step-desc">{t.holding.process.step3.desc}</p>
            </div>

            {/* Step 4 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.holding.process.step4.title}</h4>
              <p className="timeline-step-desc">{t.holding.process.step4.desc}</p>
            </div>

            {/* Step 5 */}
            <div className="timeline-process-step">
              <div className="timeline-step-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h4 className="timeline-step-title">{t.holding.process.step5.title}</h4>
              <p className="timeline-step-desc">{t.holding.process.step5.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GLOBAL MARKETS SECTION */}
      <section className="section" id="markets" style={{
        background: 'linear-gradient(180deg, #030509 0%, #070b13 100%)',
        borderTop: '1px solid rgba(250,250,250,0.02)'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.holding.markets.title}</span>
            <h2 className="section-title">Connecting Rich Eurasian Hubs with <span>International Buyers</span></h2>
            <p className="section-subtitle">{t.holding.markets.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '20px' }}>
            
            {/* World Map Presentation */}
            <div className="markets-map-container" style={{
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

      {/* 5. DISCUSS SOLUTIONS / FINAL CTA & CONTACT */}
      <section className="section" id="connect" style={{
        background: 'radial-gradient(circle at 50% 10%, rgba(184, 115, 51, 0.06) 0%, rgba(7, 11, 19, 0) 60%)',
        borderTop: '1px solid rgba(200, 122, 62, 0.12)',
        paddingBottom: '120px'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.nav.contact}</span>
            <h2 className="section-title">{t.holding.ctaBlock.title}</h2>
            <p className="section-subtitle">{t.holding.ctaBlock.subtitle}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <ContactForm />
            
            {/* WhatsApp Link Card */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <a 
                href="https://wa.me/998939722986" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
                style={{
                  borderColor: '#25D366',
                  color: '#ffffff',
                  background: 'rgba(37, 211, 102, 0.08)',
                  padding: '14px 32px'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px', color: '#25D366' }}>
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.233-1.372a9.95 9.95 0 0 0 4.777 1.22h.005c5.505 0 9.987-4.479 9.988-9.986.002-2.67-1.037-5.18-2.927-7.071A9.92 9.92 0 0 0 12.012 2zm5.835 14.129c-.318.895-1.576 1.637-2.184 1.706-.576.064-1.328.096-2.128-.158a10.15 10.15 0 0 1-4.214-2.52c-1.543-1.543-2.529-3.328-2.905-4.385-.376-1.056-.051-1.633.272-1.954.269-.268.583-.637.776-.895.195-.258.258-.431.388-.716.13-.285.065-.536-.032-.73-.097-.195-.873-2.103-1.198-2.883-.316-.761-.643-.659-.876-.671-.225-.01-.482-.012-.739-.012-.258 0-.677.097-1.032.484-.355.387-1.355 1.322-1.355 3.22 0 1.897 1.38 3.733 1.574 3.991.193.258 2.715 4.146 6.577 5.813.92.397 1.637.633 2.197.81.928.295 1.774.253 2.443.153.744-.11 1.576-.452 1.8-.871.226-.419.226-.774.158-.871-.068-.097-.258-.161-.548-.29zm0 0"/>
                </svg>
                {t.holding.ctaBlock.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const topGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-10%',
  left: '10%',
  width: '350px',
  height: '350px',
  background: 'radial-gradient(circle, rgba(184, 115, 51, 0.18) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(50px)',
  zIndex: 1
};

const bottomGlowStyle: React.CSSProperties = {
  position: 'absolute',
  bottom: '-10%',
  right: '10%',
  width: '450px',
  height: '450px',
  background: 'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(60px)',
  zIndex: 1
};
