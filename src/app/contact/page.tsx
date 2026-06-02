'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  const { t } = useLanguage();

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
          <span className="section-tag">{t.nav.contact}</span>
          <h1 className="section-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            color: 'var(--text-white)',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            {t.contactPage.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '20px auto 0 auto', lineHeight: 1.7 }}>
            {t.contactPage.subtitle}
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO AND FORM */}
      <section className="section" style={{ paddingBottom: '100px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '60px' }}>
          
          {/* CONTACT DETAILS PANEL */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.85rem',
              color: 'var(--text-white)',
              marginBottom: '30px',
              fontWeight: 700
            }}>
              {t.contactPage.infoTitle}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={infoItemStyle}>
                <div style={iconWrapperStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={infoLabelStyle}>{t.contactPage.email}</h4>
                  <a 
                    href="mailto:sales@zarvadiy.com" 
                    title="Email undergoing system maintenance. Please submit the contact form or message us via WhatsApp."
                    style={infoValueStyle}
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Our email server is currently undergoing scheduled maintenance. Please submit your request using the contact form or contact our WhatsApp Trade Desk directly.");
                    }}
                  >
                    sales@zarvadiy.com
                  </a>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={iconWrapperStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 style={infoLabelStyle}>{t.contactPage.phone}</h4>
                  <a href="tel:+998939722986" style={infoValueStyle}>+998 93 972 29 86</a>
                </div>
              </div>

              <div style={infoItemStyle}>
                <div style={iconWrapperStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 style={infoLabelStyle}>{t.contactPage.address}</h4>
                  <p style={{ ...infoValueStyle, color: 'var(--text-silver)', fontSize: '1rem', lineHeight: 1.5 }}>
                    {t.contactPage.addressValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <h3 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              color: 'var(--text-white)',
              marginTop: '50px',
              marginBottom: '20px',
              fontWeight: 600
            }}>
              Follow Us
            </h3>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="https://t.me/zarvadiy" target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>
                Telegram
              </a>
              <a href="https://linkedin.com/company/zarvadiy-llc" target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>
                LinkedIn
              </a>
              <a href="https://instagram.com/zarvadiy" target="_blank" rel="noopener noreferrer" style={socialBtnStyle}>
                Instagram
              </a>
            </div>
          </div>

          {/* DYNAMIC FORM */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* 3. MAP PRESENTATION */}
      <section className="section section-alt" style={{ paddingBottom: '120px', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="glass-card" style={{
            height: '420px',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.7) 0%, rgba(7, 11, 19, 0.9) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            border: '1px solid var(--border-color)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Map styling grid lines placeholder */}
            <div style={mapGridLinesStyle}></div>

            <div style={{ zIndex: 2 }}>
              <div style={{
                width: '64px',
                height: '64px',
                background: 'rgba(200, 122, 62, 0.2)',
                border: '2px solid var(--primary-copper)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-copper)',
                marginBottom: '20px',
                margin: '0 auto 20px auto',
                animation: 'pulse 2s infinite'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.65rem', color: 'var(--text-white)', marginBottom: '8px', fontWeight: 700 }}>
                Zarvadiy Holding Headquarters
              </h3>
              <p style={{ color: 'var(--text-silver)', fontSize: '1.05rem', marginBottom: '6px' }}>
                Osh Street 57, Yashnobod District, Tashkent, Uzbekistan
              </p>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'monospace' }}>
                Coordinates: 41.3033° N, 69.3272° E
              </span>
            </div>

            <style jsx>{`
              @keyframes pulse {
                0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200, 122, 62, 0.4); }
                70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(200, 122, 62, 0); }
                100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200, 122, 62, 0); }
              }
            `}</style>
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

const infoItemStyle: React.CSSProperties = {
  display: 'flex',
  gap: '24px',
  alignItems: 'flex-start'
};

const iconWrapperStyle: React.CSSProperties = {
  width: '46px',
  height: '46px',
  background: 'rgba(200, 122, 62, 0.12)',
  border: '1px solid rgba(200, 122, 62, 0.25)',
  borderRadius: 'var(--border-radius-sm)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary-copper)',
  flexShrink: 0
};

const infoLabelStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  color: 'var(--text-muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '6px',
  fontWeight: 600
};

const infoValueStyle: React.CSSProperties = {
  fontSize: '1.15rem',
  color: 'var(--text-white)',
  fontWeight: 600,
  transition: 'var(--transition-smooth)'
};

const socialBtnStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--border-radius-sm)',
  padding: '12px 20px',
  color: 'var(--text-silver)',
  fontSize: '0.9rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'var(--transition-smooth)'
};

const mapGridLinesStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundSize: '30px 30px',
  backgroundImage: 'linear-gradient(to right, rgba(200, 122, 62, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(200, 122, 62, 0.04) 1px, transparent 1px)',
  opacity: 0.8,
  pointerEvents: 'none',
  zIndex: 1
};
