'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../locales/translations';

// Language definitions with custom SVG flags
const languages = {
  en: {
    label: 'English',
    code: 'EN',
    flag: (
      <svg viewBox="0 0 60 30" width="18" height="12" style={{ borderRadius: '2px', display: 'block' }}>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#c8102e" strokeWidth="4" />
        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 L30,30 M0,15 L60,15" stroke="#c8102e" strokeWidth="6" />
      </svg>
    )
  },
  ru: {
    label: 'Русский',
    code: 'RU',
    flag: (
      <svg viewBox="0 0 9 6" width="18" height="12" style={{ borderRadius: '2px', border: '1px solid rgba(255, 255, 255, 0.15)', display: 'block' }}>
        <rect width="9" height="6" fill="#fff" />
        <rect y="2" width="9" height="4" fill="#0039a6" />
        <rect y="4" width="9" height="2" fill="#d52b1e" />
      </svg>
    )
  },
  uz: {
    label: "O'zbekcha",
    code: 'UZ',
    flag: (
      <svg viewBox="0 0 500 250" width="18" height="12" style={{ borderRadius: '2px', display: 'block' }}>
        <rect width="500" height="250" fill="#0099B5" />
        <rect y="83.3" width="500" height="83.3" fill="#FFF" />
        <rect y="166.6" width="500" height="83.3" fill="#1EB53A" />
        <rect y="80.3" width="500" height="3" fill="#CE1126" />
        <rect y="166.6" width="500" height="3" fill="#CE1126" />
        <path d="M 70,30 A 20,20 0 1,0 70,70 A 17,17 0 1,1 70,30" fill="#FFF" />
        <circle cx="105" cy="40" r="2.5" fill="#FFF" />
        <circle cx="115" cy="40" r="2.5" fill="#FFF" />
        <circle cx="125" cy="40" r="2.5" fill="#FFF" />
        <circle cx="100" cy="50" r="2.5" fill="#FFF" />
        <circle cx="110" cy="50" r="2.5" fill="#FFF" />
        <circle cx="120" cy="50" r="2.5" fill="#FFF" />
        <circle cx="130" cy="50" r="2.5" fill="#FFF" />
        <circle cx="95" cy="60" r="2.5" fill="#FFF" />
        <circle cx="105" cy="60" r="2.5" fill="#FFF" />
        <circle cx="115" cy="60" r="2.5" fill="#FFF" />
        <circle cx="125" cy="60" r="2.5" fill="#FFF" />
        <circle cx="135" cy="60" r="2.5" fill="#FFF" />
      </svg>
    )
  }
};

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Determine active brand theme
  const isIndustrial = pathname.startsWith('/industrial');
  const isAgro = pathname.startsWith('/agro');

  // Dynamic Navigation Setup Localized
  let navItems = [];
  if (isIndustrial) {
    const labels = {
      en: { parent: 'Holding', about: 'About', products: 'Products', specs: 'Specs', logistics: 'Logistics', contact: 'Contact' },
      ru: { parent: 'Холдинг', about: 'О дивизионе', products: 'Продукция', specs: 'Параметры', logistics: 'Логистика', contact: 'Контакты' },
      uz: { parent: 'Xolding', about: 'Bo‘lim haqida', products: 'Mahsulotlar', specs: 'Xususiyatlar', logistics: 'Logistika', contact: 'Aloqa' }
    }[language];

    navItems = [
      { name: labels.parent, path: '/' },
      { name: labels.about, path: '/industrial#about' },
      { name: labels.products, path: '/industrial#products' },
      { name: labels.specs, path: '/industrial#capabilities' },
      { name: labels.logistics, path: '/industrial#logistics' },
      { name: labels.contact, path: '/industrial#contact' },
    ];
  } else if (isAgro) {
    const labels = {
      en: { parent: 'Holding', about: 'About', products: 'Catalog', process: 'Process', certs: 'Safety', contact: 'Contact' },
      ru: { parent: 'Холдинг', about: 'О дивизионе', products: 'Каталог', process: 'Процесс', certs: 'Безопасность', contact: 'Контакты' },
      uz: { parent: 'Xolding', about: 'Bo‘lim haqida', products: 'Katalog', process: 'Jarayon', certs: 'Xavfsizlik', contact: 'Aloqa' }
    }[language];

    navItems = [
      { name: labels.parent, path: '/' },
      { name: labels.about, path: '/agro#about' },
      { name: labels.products, path: '/agro#products' },
      { name: labels.process, path: '/agro#process' },
      { name: labels.certs, path: '/agro#certs' },
      { name: labels.contact, path: '/agro#contact' },
    ];
  } else {
    navItems = [
      { name: t.nav.home, path: '/' },
      { name: t.nav.about, path: '/about' },
      { name: t.nav.industries, path: '/industries' },
      { name: t.nav.markets, path: '/markets' },
      { name: t.nav.contact, path: '/contact' },
    ];
  }

  // Brand Name Visuals
  const brandName = isIndustrial ? 'INDUSTRIAL' : isAgro ? 'AGRICULTURE' : 'HOLDING';
  const logoTextClass = isIndustrial ? 'text-copper' : isAgro ? 'text-green' : 'text-gold';

  // Dynamic Header Styles
  let headerBackground = 'rgba(7, 11, 19, 0.70)';
  let headerBorderColor = 'rgba(255, 255, 255, 0.05)';
  let activeIndicatorColor = 'var(--primary-copper)';
  let textLinkColor = 'var(--text-silver)';
  let textLogoColor = '#ffffff';

  if (scrolled) {
    if (isIndustrial) {
      headerBackground = 'rgba(11, 15, 25, 0.95)';
      headerBorderColor = 'rgba(184, 115, 51, 0.15)';
      activeIndicatorColor = 'var(--primary-copper-hover)';
    } else if (isAgro) {
      headerBackground = 'rgba(249, 246, 240, 0.95)';
      headerBorderColor = 'rgba(30, 61, 50, 0.12)';
      activeIndicatorColor = 'var(--accent-green)';
      textLinkColor = 'var(--text-earthy-muted)';
      textLogoColor = 'var(--text-earthy-dark)';
    } else {
      headerBackground = 'rgba(7, 11, 19, 0.90)';
      headerBorderColor = 'rgba(200, 122, 62, 0.15)';
      activeIndicatorColor = 'var(--primary-copper)';
    }
  } else {
    if (isIndustrial) {
      headerBackground = 'rgba(11, 15, 25, 0.75)';
      headerBorderColor = 'rgba(255, 255, 255, 0.03)';
      activeIndicatorColor = 'var(--primary-copper-hover)';
    } else if (isAgro) {
      headerBackground = 'rgba(249, 246, 240, 0.85)';
      headerBorderColor = 'rgba(30, 61, 50, 0.06)';
      activeIndicatorColor = 'var(--accent-green)';
      textLinkColor = 'var(--text-earthy-muted)';
      textLogoColor = 'var(--text-earthy-dark)';
    } else {
      headerBackground = 'rgba(7, 11, 19, 0.60)';
      headerBorderColor = 'rgba(255, 255, 255, 0.03)';
      activeIndicatorColor = 'var(--primary-copper)';
    }
  }

  return (
    <header className="header-wrapper" style={{
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
      background: headerBackground,
      borderBottom: `1px solid ${headerBorderColor}`,
      transition: 'var(--transition-smooth)'
    }}>
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon" style={{
            background: isIndustrial 
              ? 'linear-gradient(135deg, var(--primary-copper) 0%, #78350f 100%)' 
              : isAgro 
              ? 'linear-gradient(135deg, var(--accent-green) 0%, #2a5243 100%)' 
              : 'linear-gradient(135deg, var(--primary-copper) 0%, var(--accent-gold) 100%)',
            color: isAgro ? '#ffffff' : 'var(--bg-dark)'
          }}>Z</div>
          <div className="logo-text" style={{ color: textLogoColor }}>
            ZARVADIY <span style={{
              color: isIndustrial ? 'var(--primary-copper-hover)' : isAgro ? 'var(--accent-green)' : 'var(--primary-copper)',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              fontWeight: 800,
              display: 'inline-block',
              marginLeft: '4px',
              borderLeft: `1px solid ${isAgro ? 'rgba(30,61,50,0.2)' : 'rgba(255,255,255,0.15)'}`,
              paddingLeft: '8px'
            }}>{brandName}</span>
          </div>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} style={{
          background: mobileMenuOpen ? (isAgro ? '#f9f6f0' : '#080c14') : 'transparent',
          borderLeft: mobileMenuOpen ? `1px solid ${headerBorderColor}` : 'none'
        }}>
          {navItems.map((item, idx) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={idx}
                href={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                style={{
                  color: isAgro ? 'var(--text-earthy-dark)' : textLinkColor,
                  fontWeight: 600
                }}
              >
                {item.name}
                <style jsx>{`
                  .nav-link:hover {
                    color: ${isAgro ? 'var(--accent-green) !important' : '#ffffff !important'};
                  }
                  .nav-link::after {
                    background-color: ${activeIndicatorColor};
                  }
                `}</style>
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          {/* Custom Language Selector Dropdown */}
          <div className="lang-dropdown-container" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="lang-dropdown-trigger"
              aria-label="Select language"
              style={{
                background: isAgro ? 'rgba(30, 61, 50, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: isAgro ? 'rgba(30, 61, 50, 0.1)' : 'rgba(255, 255, 255, 0.08)',
                color: isAgro ? 'var(--text-earthy-dark)' : '#ffffff'
              }}
            >
              {languages[language].flag}
              <span style={{ textTransform: 'uppercase' }}>{languages[language].code}</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                  color: isAgro ? 'var(--text-earthy-muted)' : 'var(--text-muted)'
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="lang-dropdown-menu" style={{
                background: isAgro ? '#ffffff' : 'rgba(15, 23, 42, 0.95)',
                borderColor: isAgro ? 'var(--border-earthy)' : 'var(--border-color)',
                boxShadow: isAgro ? '0 10px 30px rgba(30, 61, 50, 0.1)' : '0 10px 30px rgba(0, 0, 0, 0.5)'
              }}>
                {(['en', 'ru', 'uz'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setDropdownOpen(false);
                    }}
                    className={`lang-dropdown-item ${language === lang ? 'active' : ''}`}
                    style={{
                      color: isAgro ? 'var(--text-earthy-dark)' : 'var(--text-silver)'
                    }}
                  >
                    {languages[lang].flag}
                    <span>{languages[lang].label}</span>
                    <style jsx>{`
                      .lang-dropdown-item:hover {
                        background: ${isAgro ? 'rgba(30, 61, 50, 0.05)' : 'rgba(255, 255, 255, 0.05)'};
                        color: ${isAgro ? 'var(--accent-green) !important' : '#ffffff !important'};
                      }
                      .lang-dropdown-item.active {
                        background: ${isAgro ? 'rgba(30, 61, 50, 0.1)' : 'rgba(200, 122, 62, 0.15)'};
                        color: ${isAgro ? 'var(--accent-green)' : 'var(--primary-copper-hover)'};
                      }
                    `}</style>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark)' : '#ffffff' }}></span>
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark)' : '#ffffff' }}></span>
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark)' : '#ffffff' }}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
