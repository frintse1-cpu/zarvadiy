'use client';

import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

type ProductKey = 'tubes' | 'fittings' | 'pancake' | 'lwc' | 'grooved';

export default function ProductsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProductKey>('tubes');

  const productsList: { key: ProductKey; title: string; shortDesc: string }[] = [
    { key: 'tubes', title: t.products.types.tubes.title, shortDesc: t.products.types.tubes.shortDesc },
    { key: 'fittings', title: t.products.types.fittings.title, shortDesc: t.products.types.fittings.shortDesc },
    { key: 'pancake', title: t.products.types.pancake.title, shortDesc: t.products.types.pancake.shortDesc },
    { key: 'lwc', title: t.products.types.lwc.title, shortDesc: t.products.types.lwc.shortDesc },
    { key: 'grooved', title: t.products.types.grooved.title, shortDesc: t.products.types.grooved.shortDesc },
  ];

  const getActiveProductDetails = () => {
    switch (activeTab) {
      case 'tubes':
        return {
          ...t.products.types.tubes,
          icon: (
            <svg viewBox="0 0 100 100" fill="none" style={productBigIconStyle}>
              <rect x="10" y="25" width="80" height="14" rx="4" fill="url(#copper-grad)" />
              <rect x="10" y="46" width="80" height="14" rx="4" fill="url(#copper-grad)" opacity="0.9" />
              <rect x="10" y="67" width="80" height="14" rx="4" fill="url(#copper-grad)" opacity="0.8" />
              <ellipse cx="90" cy="32" rx="3.5" ry="7" fill="#78350f" />
              <ellipse cx="90" cy="53" rx="3.5" ry="7" fill="#78350f" />
              <ellipse cx="90" cy="74" rx="3.5" ry="7" fill="#78350f" />
            </svg>
          )
        };
      case 'fittings':
        return {
          ...t.products.types.fittings,
          icon: (
            <svg viewBox="0 0 100 100" fill="none" style={productBigIconStyle}>
              <path d="M20,80 L20,40 C20,25 35,15 50,15 L80,15" stroke="url(#copper-grad)" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="80" r="14" fill="#78350f" />
              <circle cx="80" cy="15" r="14" fill="#78350f" />
            </svg>
          )
        };
      case 'pancake':
        return {
          ...t.products.types.pancake,
          icon: (
            <svg viewBox="0 0 100 100" fill="none" style={productBigIconStyle}>
              <circle cx="50" cy="50" r="42" stroke="url(#copper-grad)" strokeWidth="5" />
              <circle cx="50" cy="50" r="33" stroke="url(#copper-grad)" strokeWidth="5" />
              <circle cx="50" cy="50" r="24" stroke="url(#copper-grad)" strokeWidth="5" />
              <circle cx="50" cy="50" r="15" stroke="url(#copper-grad)" strokeWidth="5" />
              <circle cx="50" cy="50" r="6" stroke="url(#copper-grad)" strokeWidth="5" />
              <path d="M50,8 C54,8 64,15 68,26" stroke="url(#copper-grad)" strokeWidth="5" strokeLinecap="round" />
            </svg>
          )
        };
      case 'lwc':
        return {
          ...t.products.types.lwc,
          icon: (
            <svg viewBox="0 0 100 100" fill="none" style={productBigIconStyle}>
              <rect x="20" y="10" width="60" height="80" rx="8" stroke="url(#copper-grad)" strokeWidth="5" />
              <line x1="20" y1="22" x2="80" y2="22" stroke="url(#copper-grad)" strokeWidth="8" />
              <line x1="20" y1="34" x2="80" y2="34" stroke="url(#copper-grad)" strokeWidth="8" />
              <line x1="20" y1="46" x2="80" y2="46" stroke="url(#copper-grad)" strokeWidth="8" />
              <line x1="20" y1="58" x2="80" y2="58" stroke="url(#copper-grad)" strokeWidth="8" />
              <line x1="20" y1="70" x2="80" y2="70" stroke="url(#copper-grad)" strokeWidth="8" />
              <line x1="20" y1="82" x2="80" y2="82" stroke="url(#copper-grad)" strokeWidth="8" />
              <circle cx="50" cy="50" r="12" fill="#070b13" stroke="url(#copper-grad)" strokeWidth="4" />
            </svg>
          )
        };
      case 'grooved':
        return {
          ...t.products.types.grooved,
          icon: (
            <svg viewBox="0 0 100 100" fill="none" style={productBigIconStyle}>
              <circle cx="50" cy="50" r="36" stroke="url(#copper-grad)" strokeWidth="10" />
              <path d="M50,14 L50,20 M50,80 L50,86 M14,50 L20,50 M80,50 L86,50 M25,25 L30,30 M70,70 L75,75 M25,70 L30,65 M70,25 L75,30" stroke="url(#copper-grad)" strokeWidth="5" strokeLinecap="round" />
              <circle cx="50" cy="50" r="31" stroke="#070b13" strokeWidth="3" />
            </svg>
          )
        };
    }
  };

  const activeProduct = getActiveProductDetails();

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
          <span className="section-tag">{t.nav.products}</span>
          <h1 className="section-title" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', color: 'var(--text-white)' }}>
            {t.products.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '16px auto 0 auto' }}>
            {t.products.subtitle}
          </p>
        </div>
      </section>

      {/* CATALOG CONTAINER */}
      <section className="section">
        <div className="container">
          {/* Def for linear gradient used in SVGs */}
          <svg width="0" height="0" style={{ position: 'absolute' }}>
            <defs>
              <linearGradient id="copper-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d97706" />
                <stop offset="50%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
          </svg>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.5fr', gap: '40px' }}>
            {/* TABS SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {productsList.map((prod) => (
                <button
                  key={prod.key}
                  onClick={() => setActiveTab(prod.key)}
                  className={`glass-card`}
                  style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: activeTab === prod.key ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                    borderColor: activeTab === prod.key ? 'var(--primary-copper)' : 'var(--border-color)',
                    boxShadow: activeTab === prod.key ? '0 0 15px var(--primary-copper-glow)' : 'none',
                    borderRadius: 'var(--border-radius-sm)'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.1rem',
                    color: activeTab === prod.key ? 'var(--primary-copper-hover)' : 'var(--text-white)',
                    fontWeight: 600,
                    marginBottom: '4px',
                    transition: 'var(--transition-smooth)'
                  }}>
                    {prod.title}
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {prod.shortDesc.slice(0, 50)}...
                  </span>
                </button>
              ))}
            </div>

            {/* TAB CONTENT PANEL */}
            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '40px', marginBottom: '40px' }}>
                <div style={{
                  background: 'rgba(7, 11, 19, 0.4)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '30px',
                  minHeight: '220px'
                }}>
                  {activeProduct.icon}
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2rem',
                    color: 'var(--text-white)',
                    marginBottom: '16px'
                  }}>
                    {activeProduct.title}
                  </h2>
                  <p style={{
                    color: 'var(--text-silver)',
                    lineHeight: 1.7,
                    fontSize: '1.05rem'
                  }}>
                    {activeProduct.desc}
                  </p>
                </div>
              </div>

              {/* SPECIFICATIONS TABLE */}
              <h3 style={{
                color: 'var(--text-white)',
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '20px',
                borderBottom: '1px solid rgba(200, 122, 62, 0.15)',
                paddingBottom: '10px'
              }}>
                Technical Specifications
              </h3>

              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginBottom: '40px'
              }}>
                <tbody>
                  {activeProduct.specs?.map((spec: { label: string; value: string }, idx: number) => (
                    <tr key={idx} style={{
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.01)' : 'transparent'
                    }}>
                      <td style={{
                        padding: '14px 16px',
                        color: 'var(--text-white)',
                        fontWeight: 600,
                        fontSize: '0.95rem',
                        width: '40%'
                      }}>
                        {spec.label}
                      </td>
                      <td style={{
                        padding: '14px 16px',
                        color: 'var(--text-silver)',
                        fontSize: '0.95rem'
                      }}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href="/contact" className="btn btn-primary">
                  Request Quotation for {activeProduct.title}
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
    </div>
  );
}

const productBigIconStyle: React.CSSProperties = {
  width: '120px',
  height: '120px',
};
