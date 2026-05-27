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

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.products, path: '/products' },
    { name: t.nav.operations, path: '/operations' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="header-wrapper" style={{
      boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none',
      background: scrolled ? 'rgba(7, 11, 19, 0.85)' : 'rgba(7, 11, 19, 0.70)'
    }}>
      <div className="container header-container">
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">Z</div>
          <div className="logo-text">
            ZARVADIY <span>LLC</span>
          </div>
        </Link>

        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.name}
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
                  color: 'var(--text-muted)'
                }}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {dropdownOpen && (
              <div className="lang-dropdown-menu">
                {(['en', 'ru', 'uz'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setDropdownOpen(false);
                    }}
                    className={`lang-dropdown-item ${language === lang ? 'active' : ''}`}
                  >
                    {languages[lang].flag}
                    <span>{languages[lang].label}</span>
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
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
