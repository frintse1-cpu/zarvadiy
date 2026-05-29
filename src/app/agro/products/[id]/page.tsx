'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../context/LanguageContext';

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default function AgroProductDetailPage({ params }: PageProps) {
  const { language, t } = useLanguage();

  // Safely unwrap React 19 Promise params or standard object params
  const resolvedParams = params && typeof (params as any).then === 'function' 
    ? React.use(params as any) as { id: string }
    : params as { id: string };

  const productId = resolvedParams?.id || 'raisins';
  const productsDB = t.agroProducts.items;
  
  // If product doesn't exist, fallback to raisins
  const product = productsDB[productId as keyof typeof productsDB] || productsDB['raisins'];

  // Custom organic drawings/SVG graphics for details page
  const productDrawings = {
    'raisins': (
      <svg viewBox="0 0 200 200" fill="none" style={fruitGraphicStyle}>
        <circle cx="70" cy="90" r="28" fill="#a16207" opacity="0.9" />
        <circle cx="110" cy="70" r="24" fill="#d97706" opacity="0.95" />
        <circle cx="130" cy="110" r="30" fill="#ca8a04" opacity="0.9" />
        <circle cx="90" cy="130" r="26" fill="#854d0e" opacity="0.9" />
        <path d="M100,30 C104,44 110,56 110,70" stroke="#16a34a" strokeWidth="5" strokeLinecap="round" />
      </svg>
    ),
    'apricots': (
      <svg viewBox="0 0 200 200" fill="none" style={fruitGraphicStyle}>
        <circle cx="100" cy="100" r="60" fill="url(#detail-apricot-gradient)" />
        <path d="M100,40 C84,40 76,64 76,100 C76,136 90,160 100,160" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 6" />
        <path d="M108,20 C124,16 140,32 132,48 C124,64 100,60 100,60" fill="#22c55e" opacity="0.85" />
        <defs>
          <radialGradient id="detail-apricot-gradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="60%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#b45309" />
          </radialGradient>
        </defs>
      </svg>
    ),
    'prunes': (
      <svg viewBox="0 0 200 200" fill="none" style={fruitGraphicStyle}>
        <ellipse cx="100" cy="100" rx="68" ry="52" fill="url(#detail-prune-gradient)" />
        <path d="M50,100 C50,84 80,72 100,72 C130,72 150,88 150,100" stroke="#312e81" strokeWidth="4" opacity="0.25" />
        <defs>
          <radialGradient id="detail-prune-gradient" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#312e81" />
            <stop offset="60%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#030712" />
          </radialGradient>
        </defs>
      </svg>
    ),
    'nuts': (
      <svg viewBox="0 0 200 200" fill="none" style={fruitGraphicStyle}>
        <path d="M60,100 C60,60 90,44 100,44 C110,44 140,60 140,100 C140,140 110,156 100,156 C90,156 60,140 60,100 Z" fill="#d97706" stroke="#78350f" strokeWidth="8" />
        <path d="M100,44 L100,156 M60,100 C80,100 96,90 100,100 C104,110 120,100 140,100" stroke="#78350f" strokeWidth="7" />
      </svg>
    )
  };

  return (
    <div className="agro-theme" style={{ minHeight: '100vh', background: 'var(--bg-earthy-beige)', paddingBottom: '100px' }}>
      
      {/* HEADER HERO */}
      <section className="section" style={{
        padding: '130px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(249, 246, 240, 0.95) 0%, rgba(249, 246, 240, 1) 100%)',
        borderBottom: '1px solid rgba(30, 61, 50, 0.08)',
        position: 'relative'
      }}>
        <div className="container">
          <Link href="/agro" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--accent-green)',
            fontWeight: 700,
            fontSize: '0.9rem',
            marginBottom: '24px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Agriculture Catalog
          </Link>
          <span className="organic-badge" style={{ display: 'inline-flex' }}>Food Grade Calibrated</span>
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: 'var(--text-earthy-dark)',
            fontWeight: 800,
            marginTop: '12px'
          }}>
            {product.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '16px 0 0 0', color: 'var(--text-earthy-muted)' }}>
            {product.shortDesc}
          </p>
        </div>
      </section>

      {/* PRODUCT GRID CORE */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          
          {/* ORGANIC GRAPHIC PRESENTATION (LEFT) */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border-earthy)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '40px',
              minHeight: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(30, 61, 50, 0.05)',
              marginBottom: '30px'
            }}>
              {productDrawings[productId as keyof typeof productDrawings] || productDrawings['raisins']}
            </div>
            
            {/* Quick specifications summary card */}
            <div className="glass-card" style={{ padding: '30px', background: '#ffffff' }}>
              <span className="organic-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Pure Sunshine</span>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                Central Asian dried fruits acquire their intense, sugar-rich organic characteristics naturally, thanks to optimal elevation soils and pristine glacier water channels.
              </p>
            </div>
          </div>

          {/* SPECIFICATION DETAILED DETAILS (RIGHT) */}
          <div className="glass-card" style={{ padding: '40px', background: '#ffffff' }}>
            
            {/* SECTION: Overview */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Product Overview</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {product.overview}
              </p>
            </div>

            {/* SECTION: Origin */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Organic Origin</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.origin}
              </p>
            </div>

            {/* SECTION: Harvest Timeframe */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Harvest Timeframe</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.harvest}
              </p>
            </div>

            {/* SECTION: Shelf Life */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Shelf Life & Storage Parameters</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.life}
              </p>
            </div>

            {/* SECTION: Packaging */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Packaging Options</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.pkg}
              </p>
            </div>

            {/* SECTION: Certifications */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Verified Food Safety Certifications</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.certs}
              </p>
            </div>

            {/* SECTION: Export Logistics */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={sectionSubTitleStyle}>Export Logistics Capacity</h3>
              <p style={{ color: 'var(--text-earthy-dark)', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.export}
              </p>
            </div>

            {/* DUAL ACTION BUTTONS */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(30,61,50,0.08)', paddingTop: '40px' }}>
              <Link href="/contact" className="agro-btn-primary" style={{ flexGrow: 1 }}>
                Submit Bulk Request
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a 
                href={`https://wa.me/998939722986?text=Hello,%20I%20am%20interested%20in%20your%20Agricultural%20product:%20${encodeURIComponent(product.title)}.%20Please%20provide%20pricing%20and%20shipping%20times.`}
                target="_blank"
                rel="noopener noreferrer"
                className="agro-btn-secondary"
                style={{
                  borderColor: '#25D366',
                  color: '#25D366',
                  background: 'rgba(37, 211, 102, 0.05)'
                }}
              >
                WhatsApp Trading Desk
              </a>
            </div>

          </div>

        </div>
      </section>
      
    </div>
  );
}

const fruitGraphicStyle: React.CSSProperties = {
  width: '180px',
  height: '180px'
};

const sectionSubTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1.2rem',
  color: 'var(--text-earthy-dark)',
  fontWeight: 700,
  marginBottom: '16px',
  borderBottom: '1px solid rgba(30, 61, 50, 0.1)',
  paddingBottom: '8px'
};
