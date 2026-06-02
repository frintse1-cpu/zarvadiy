'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../../../context/LanguageContext';

interface PageProps {
  params: { id: string } | Promise<{ id: string }>;
}

export default function IndustrialProductDetailPage({ params }: PageProps) {
  const { language, t } = useLanguage();
  
  // Safely unwrap React 19 Promise params or standard object params
  const resolvedParams = params && typeof (params as any).then === 'function' 
    ? React.use(params as any) as { id: string }
    : params as { id: string };
  
  const productId = resolvedParams?.id || 'pancake-coils';
  const productsDB = t.industrialProducts.items;
  
  // Fallback in case of missing keys
  const product = productsDB[productId as keyof typeof productsDB] || productsDB['pancake-coils'];

  // Custom visual outlines for details page (larger scale)
  const visualOutlines = {
    'pancake-coils': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <circle cx="100" cy="100" r="80" stroke="url(#detail-metallic-copper)" strokeWidth="12" />
        <circle cx="100" cy="100" r="60" stroke="url(#detail-metallic-copper)" strokeWidth="10" />
        <circle cx="100" cy="100" r="40" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <rect x="94" y="10" width="12" height="180" fill="url(#detail-metallic-copper)" transform="rotate(45 100 100)" opacity="0.65" />
        <rect x="94" y="10" width="12" height="180" fill="url(#detail-metallic-copper)" transform="rotate(-45 100 100)" opacity="0.65" />
      </svg>
    ),
    'lwc-coils': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <rect x="50" y="30" width="100" height="140" rx="6" fill="#1f2937" stroke="url(#detail-metallic-copper)" strokeWidth="5" />
        <line x1="60" y1="50" x2="140" y2="50" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <line x1="60" y1="70" x2="140" y2="70" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <line x1="60" y1="90" x2="140" y2="90" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <line x1="60" y1="110" x2="140" y2="110" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <line x1="60" y1="130" x2="140" y2="130" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <line x1="60" y1="150" x2="140" y2="150" stroke="url(#detail-metallic-copper)" strokeWidth="8" />
        <rect x="36" y="20" width="128" height="12" rx="2" fill="url(#detail-metallic-silver)" />
        <rect x="36" y="168" width="128" height="12" rx="2" fill="url(#detail-metallic-silver)" />
      </svg>
    ),
    'acr-tubes': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <rect x="15" y="50" width="170" height="20" rx="3" fill="url(#detail-metallic-copper)" />
        <rect x="15" y="90" width="170" height="20" rx="3" fill="url(#detail-metallic-copper)" />
        <rect x="15" y="130" width="170" height="20" rx="3" fill="url(#detail-metallic-copper)" />
        <ellipse cx="185" cy="60" rx="5" ry="10" fill="#4b5563" />
        <ellipse cx="185" cy="100" rx="5" ry="10" fill="#4b5563" />
        <ellipse cx="185" cy="140" rx="5" ry="10" fill="#4b5563" />
      </svg>
    ),
    'insulated-tubes': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <rect x="30" y="60" width="140" height="80" rx="40" fill="#1f2937" stroke="url(#detail-metallic-silver)" strokeWidth="6" />
        <rect x="20" y="88" width="160" height="24" fill="url(#detail-metallic-copper)" />
        <circle cx="170" cy="100" r="12" fill="#374151" stroke="url(#detail-metallic-copper)" strokeWidth="4" />
        <circle cx="30" cy="100" r="12" fill="#111827" stroke="url(#detail-metallic-copper)" strokeWidth="4" />
      </svg>
    ),
    'pipe-fittings': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <path d="M50,150 L50,90 C50,60 70,40 100,40 L160,40" stroke="url(#detail-metallic-copper)" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="50" cy="150" r="22" fill="#374151" />
        <circle cx="160" cy="40" r="22" fill="#374151" />
      </svg>
    ),
    'capillary-tubes': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <circle cx="100" cy="100" r="75" stroke="url(#detail-metallic-copper)" strokeWidth="5" />
        <circle cx="100" cy="100" r="65" stroke="url(#detail-metallic-copper)" strokeWidth="4.5" />
        <circle cx="100" cy="100" r="55" stroke="url(#detail-metallic-copper)" strokeWidth="4" />
        <circle cx="100" cy="100" r="45" stroke="url(#detail-metallic-copper)" strokeWidth="3.5" />
        <path d="M100" />
        <path d="M100,25 C104,44 110,56 110,72" stroke="url(#detail-metallic-copper)" strokeWidth="4" strokeLinecap="round" />
      </svg>
    )
  };

  return (
    <div className="industrial-theme" style={{ minHeight: '100vh', background: '#0b0f19', paddingBottom: '100px' }}>
      
      {/* Dynamic Gradients Definitions for product SVGs */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="detail-metallic-copper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B87333" />
            <stop offset="50%" stopColor="#e09255" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="detail-metallic-silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
      </svg>

      {/* HEADER HERO */}
      <section className="section" style={{
        padding: '130px 0 60px 0',
        background: 'linear-gradient(180deg, rgba(11,15,25,0.95) 0%, rgba(11,15,25,1) 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        position: 'relative'
      }}>
        <div className="container">
          <Link href="/industrial" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--primary-copper-hover)',
            fontWeight: 600,
            fontSize: '0.9rem',
            marginBottom: '24px'
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {language === 'ru' ? 'Назад в Промышленный Раздел' : language === 'uz' ? 'Sanoat Bo‘limiga Qaytish' : 'Back to Industrial Division'}
          </Link>
          <span className="section-tag" style={{ display: 'block', color: 'var(--primary-copper-hover)' }}>
            {language === 'ru' ? 'Техническая спецификация сырья' : language === 'uz' ? 'Texnik shartlar varaqasi' : 'Product Specification Sheet'}
          </span>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            color: '#ffffff',
            fontWeight: 800,
            marginTop: '10px'
          }}>
            {product.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '16px 0 0 0', color: '#9ca3af' }}>
            {product.shortDesc}
          </p>
        </div>
      </section>

      {/* PRODUCT GRID CORE */}
      <section className="section" style={{ padding: '60px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'start' }}>
          
          {/* TECHNICAL VISUAL LAYOUT (LEFT) */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #111827 0%, #030712 100%)',
              border: '1px solid rgba(184, 115, 51, 0.25)',
              borderRadius: 'var(--border-radius-lg)',
              padding: '40px',
              minHeight: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              marginBottom: '30px'
            }}>
              {visualOutlines[productId as keyof typeof visualOutlines] || visualOutlines['pancake-coils']}
            </div>
            
            {/* Quick specifications summary card */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <span className="technical-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Traceability Cert</span>
              <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Every dispatch includes official EN 10204 3.1 chemical analysis certificates and physical wall load/eddy-current testing documentation.
              </p>
            </div>

            {/* Real Copper Specimen Photo */}
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', border: '1px solid rgba(184, 115, 51, 0.2)', marginTop: '20px', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
              <img 
                src="/images/product_tubes.png" 
                alt="Industrial Copper Material" 
                style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '16px', background: '#0b0f19' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--primary-copper-hover)', fontWeight: 700, textTransform: 'uppercase' }}>Smelting & drawing</span>
                <h4 style={{ color: '#ffffff', fontSize: '0.95rem', margin: '4px 0 0 0' }}>Real-life Copper Specimen</h4>
              </div>
            </div>
          </div>

          {/* SPECIFICATION DETAILED DETAILS (RIGHT) */}
          <div className="glass-card" style={{ padding: '40px' }}>
            
            {/* SECTION: Overview */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Product Overview</h3>
              <p style={{ color: '#c5cbd3', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {product.overview}
              </p>
            </div>

            {/* SECTION: Specs Table */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Technical Specifications</h3>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  {product.specs?.map((spec: { label: string; value: string }, idx: number) => (
                    <tr key={idx} style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent'
                    }}>
                      <td style={tableLabelStyle}>{spec.label}</td>
                      <td style={tableValueStyle}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SECTION: Applications */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Industrial Applications</h3>
              <p style={{ color: '#c5cbd3', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.apps}
              </p>
            </div>

            {/* SECTION: Dimensions */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Dimensions & Geometry</h3>
              <p style={{ color: '#c5cbd3', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.dims}
              </p>
            </div>

            {/* SECTION: Packaging */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Packaging Specifications</h3>
              <p style={{ color: '#c5cbd3', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.pkg}
              </p>
            </div>

            {/* SECTION: Certifications */}
            <div style={{ marginBottom: '40px' }}>
              <h3 style={sectionSubTitleStyle}>Verified Certifications</h3>
              <p style={{ color: '#c5cbd3', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.certs}
              </p>
            </div>

            {/* SECTION: Export Logistics */}
            <div style={{ marginBottom: '50px' }}>
              <h3 style={sectionSubTitleStyle}>Global Export & Incoterms</h3>
              <p style={{ color: '#c5cbd3', fontSize: '0.95rem', lineHeight: 1.65 }}>
                {product.export}
              </p>
            </div>

            {/* DUAL ACTION BUTTONS */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px' }}>
              <Link href="/contact" className="btn btn-primary" style={{ flexGrow: 1 }}>
                Submit RFQ for {product.title}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <a 
                href={`https://wa.me/998939722986?text=Hello,%20I%20am%20interested%20in%20your%20Industrial%20product:%20${encodeURIComponent(product.title)}.%20Please%20provide%20pricing%20and%20shipping%20times.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  borderColor: '#25D366',
                  color: '#ffffff',
                  background: 'rgba(37, 211, 102, 0.08)'
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

const productGraphicStyle: React.CSSProperties = {
  width: '180px',
  height: '180px'
};

const sectionSubTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontSize: '1.2rem',
  color: '#ffffff',
  fontWeight: 600,
  marginBottom: '16px',
  borderBottom: '1px solid rgba(184, 115, 51, 0.15)',
  paddingBottom: '8px'
};

const tableLabelStyle: React.CSSProperties = {
  padding: '14px 16px',
  color: '#ffffff',
  fontWeight: 600,
  fontSize: '0.92rem',
  width: '35%',
  textAlign: 'left'
};

const tableValueStyle: React.CSSProperties = {
  padding: '14px 16px',
  color: '#9ca3af',
  fontSize: '0.92rem',
  textAlign: 'left'
};
