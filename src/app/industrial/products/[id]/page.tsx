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
  
  const productId = resolvedParams?.id || 'stainless-tubes';
  const productsDB = t.industrialProducts.items;
  
  // If product doesn't exist, fallback to stainless-tubes
  const product = productsDB[productId as keyof typeof productsDB] || productsDB['stainless-tubes'];

  // Custom visual outline matching the product
  const visualOutlines = {
    'stainless-tubes': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <rect x="20" y="40" width="160" height="25" rx="6" fill="url(#detail-metallic-copper)" />
        <rect x="20" y="85" width="160" height="25" rx="6" fill="url(#detail-metallic-copper)" opacity="0.9" />
        <rect x="20" y="130" width="160" height="25" rx="6" fill="url(#detail-metallic-copper)" opacity="0.8" />
        <ellipse cx="180" cy="52.5" rx="6" ry="12.5" fill="#4b5563" />
        <ellipse cx="180" cy="97.5" rx="6" ry="12.5" fill="#4b5563" />
        <ellipse cx="180" cy="142.5" rx="6" ry="12.5" fill="#4b5563" />
      </svg>
    ),
    'carbon-tubes': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <rect x="15" y="65" width="170" height="70" rx="10" fill="url(#detail-metallic-silver)" />
        <ellipse cx="185" cy="100" rx="8" ry="35" fill="#111827" />
        <ellipse cx="15" cy="100" rx="8" ry="35" fill="#374151" />
      </svg>
    ),
    'pipe-fittings': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <path d="M40,160 L40,90 C40,60 60,40 90,40 L160,40" stroke="url(#detail-metallic-copper)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="160" r="22" fill="#374151" />
        <circle cx="160" cy="40" r="22" fill="#374151" />
      </svg>
    ),
    'valves': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <polygon points="30,50 170,50 100,100 170,150 30,150 100,100" fill="url(#detail-metallic-silver)" stroke="url(#detail-metallic-copper)" strokeWidth="6" />
        <circle cx="100" cy="100" r="24" fill="#0f172a" stroke="url(#detail-metallic-copper)" strokeWidth="6" />
        <rect x="90" y="10" width="20" height="50" fill="url(#detail-metallic-copper)" />
        <rect x="70" y="10" width="60" height="12" rx="4" fill="url(#detail-metallic-silver)" />
      </svg>
    ),
    'flanges': (
      <svg viewBox="0 0 200 200" fill="none" style={productGraphicStyle}>
        <circle cx="100" cy="100" r="80" stroke="url(#detail-metallic-copper)" strokeWidth="16" />
        <circle cx="100" cy="100" r="50" stroke="url(#detail-metallic-silver)" strokeWidth="12" />
        <circle cx="100" cy="100" r="25" fill="#0f172a" />
        <circle cx="100" cy="40" r="8" fill="#ffffff" />
        <circle cx="100" cy="160" r="8" fill="#ffffff" />
        <circle cx="40" cy="100" r="8" fill="#ffffff" />
        <circle cx="160" cy="100" r="8" fill="#ffffff" />
        <circle cx="58" cy="58" r="8" fill="#ffffff" />
        <circle cx="142" cy="142" r="8" fill="#ffffff" />
        <circle cx="58" cy="142" r="8" fill="#ffffff" />
        <circle cx="142" cy="58" r="8" fill="#ffffff" />
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
            Back to Industrial Division
          </Link>
          <span className="section-tag" style={{ display: 'block', color: 'var(--primary-copper-hover)' }}>Product Specification Sheet</span>
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
              {visualOutlines[productId as keyof typeof visualOutlines] || visualOutlines['stainless-tubes']}
            </div>
            
            {/* Quick specifications summary card */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <span className="technical-badge" style={{ marginBottom: '16px', display: 'inline-block' }}>Traceability Cert</span>
              <p style={{ color: '#ffffff', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Every dispatch includes official EN 10204 3.1 chemical analysis certificates and physical wall load/eddy-current testing documentation.
              </p>
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
