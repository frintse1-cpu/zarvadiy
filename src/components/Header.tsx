'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../locales/translations';

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
      <svg viewBox="0 0 9 6" width="18" height="12" style={{ borderRadius: '2px', border: '1px solid rgba(255,255,255,0.15)', display: 'block' }}>
        <rect width="9" height="6" fill="#fff" />
        <rect y="2" width="9" height="4" fill="#0039a6" />
        <rect y="4" width="9" height="2" fill="#d52b1e" />
      </svg>
    )
  },
  uz: {
    label: "O\u02bbzbekcha",
    code: 'UZ',
    flag: (
      <svg viewBox="0 0 500 250" width="18" height="12" style={{ borderRadius: '2px', display: 'block' }}>
        <rect width="500" height="250" fill="#0099B5" />
        <rect y="83.3" width="500" height="83.3" fill="#FFF" />
        <rect y="166.6" width="500" height="83.3" fill="#1EB53A" />
        <rect y="80.3" width="500" height="3" fill="#CE1126" />
        <rect y="166.6" width="500" height="3" fill="#CE1126" />
        <path d="M 70,30 A 20,20 0 1,0 70,70 A 17,17 0 1,1 70,30" fill="#FFF" />
      </svg>
    )
  }
};

// Homepage dropdown nav items
type DropdownGroup = { label: string; items: { name: string; path: string }[] };

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const navDropdownRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) setScrolled(true);
      else setScrolled(false);
      if (window.innerWidth <= 768) {
        if (mobileMenuOpen) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
      if (navDropdownRef.current && !navDropdownRef.current.contains(event.target as Node)) {
        setActiveGroup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveGroup(null);
  };

  const isIndustrial = pathname.startsWith('/industrial');
  const isAgro = pathname.startsWith('/agro');
  const isHomepage = !isIndustrial && !isAgro;

  // Sub-page flat nav (unchanged)
  let flatNavItems: { name: string; path: string }[] = [];
  if (isIndustrial) {
    const labels = {
      en: { parent: 'Zarvadiy', about: 'About', products: 'Products', specs: 'Specs', logistics: 'Logistics', contact: 'Contact' },
      ru: { parent: 'Zarvadiy', about: 'О дивизионе', products: 'Продукция', specs: 'Параметры', logistics: 'Логистика', contact: 'Контакты' },
      uz: { parent: 'Zarvadiy', about: 'Bo\u02bblim haqida', products: 'Mahsulotlar', specs: 'Xususiyatlar', logistics: 'Logistika', contact: 'Aloqa' }
    }[language];
    flatNavItems = [
      { name: labels.parent, path: '/' },
      { name: labels.about, path: '/industrial#about' },
      { name: labels.products, path: '/industrial#products' },
      { name: labels.specs, path: '/industrial#capabilities' },
      { name: labels.logistics, path: '/industrial#logistics' },
      { name: labels.contact, path: '/industrial#contact' },
    ];
  } else if (isAgro) {
    const labels = {
      en: { parent: 'Zarvadiy', about: 'About', products: 'Catalog', process: 'Process', certs: 'Safety', contact: 'Contact' },
      ru: { parent: 'Zarvadiy', about: 'О дивизионе', products: 'Каталог', process: 'Процесс', certs: 'Безопасность', contact: 'Контакты' },
      uz: { parent: 'Zarvadiy', about: 'Bo\u02bblim haqida', products: 'Katalog', process: 'Jarayon', certs: 'Xavfsizlik', contact: 'Aloqa' }
    }[language];
    flatNavItems = [
      { name: labels.parent, path: '/' },
      { name: labels.about, path: '/agro#about' },
      { name: labels.products, path: '/agro#products' },
      { name: labels.process, path: '/agro#process' },
      { name: labels.certs, path: '/agro#certs' },
      { name: labels.contact, path: '/agro#contact' },
    ];
  }

  // Homepage grouped nav
  const businessLabel = { en: 'Business', ru: 'Направления', uz: 'Yo\u02bbnalishlar' }[language];
  const companyLabel = { en: 'Company', ru: 'Компания', uz: 'Kompaniya' }[language];
  const contactLabel = { en: 'Contact', ru: 'Контакты', uz: 'Aloqa' }[language];
  const quoteLabel = { en: 'Request a Quote', ru: 'Отправить запрос', uz: 'Ariza yuborish' }[language];

  const homepageGroups: DropdownGroup[] = [
    {
      label: businessLabel,
      items: [
        { name: { en: 'Industrial', ru: 'Промышленное', uz: 'Sanoat' }[language], path: '/industrial' },
        { name: { en: 'Food & Gift', ru: 'Продукты и подарки', uz: 'Oziq-ovqat va sovg\u02bbalar' }[language], path: '/agro' },
        { name: { en: 'Technology', ru: 'Технологии', uz: 'Texnologiya' }[language], path: '#connect' },
      ]
    },
    {
      label: companyLabel,
      items: [
        { name: { en: 'About', ru: 'О компании', uz: 'Biz haqimizda' }[language], path: '/about' },
        { name: { en: 'How We Work', ru: 'Как мы работаем', uz: 'Biz qanday ishlaymiz' }[language], path: '/#process' },
      ]
    }
  ];

  // ── Styles ──
  let headerBg = 'rgba(10, 22, 40, 0.65)';
  let headerBorder = 'rgba(255,255,255,0.04)';
  let textColor = 'var(--text-silver)';
  let logoTextColor = '#ffffff';

  if (scrolled) {
    if (isAgro) {
      headerBg = 'rgba(249,246,240,0.96)';
      headerBorder = 'rgba(30,61,50,0.12)';
      textColor = 'var(--text-earthy-muted, #4a5568)';
      logoTextColor = 'var(--text-earthy-dark, #1a1a1a)';
    } else {
      headerBg = 'rgba(10, 22, 40, 0.97)';
      headerBorder = 'rgba(212,175,55,0.12)';
    }
  } else {
    if (isAgro) {
      headerBg = 'rgba(249,246,240,0.88)';
      headerBorder = 'rgba(30,61,50,0.06)';
      textColor = 'var(--text-earthy-muted, #4a5568)';
      logoTextColor = 'var(--text-earthy-dark, #1a1a1a)';
    }
  }

  return (
    <header
      className={`header-wrapper ${!visible ? 'header-hidden' : ''}`}
      style={{
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        background: headerBg,
        borderBottom: `1px solid ${headerBorder}`,
        transition: 'var(--transition-smooth)',
      }}
    >
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          <Image
            src="/images/Logo.png"
            alt="Zarvadiy Logo"
            width={120}
            height={50}
            style={{ objectFit: 'contain' }}
          />
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 768px) {
              .logo img { width: auto !important; height: 40px !important; object-fit: contain !important; }
              .header-wrapper { transition: transform 0.3s ease, background 0.3s cubic-bezier(0.4,0,0.2,1), border-color 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s cubic-bezier(0.4,0,0.2,1) !important; }
              .header-wrapper.header-hidden { transform: translateY(-100%); }
              .hp-nav-dropdown { display: none !important; }
            }
          ` }} />
        </Link>

        {/* Nav */}
        <nav
          className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}
          style={{
            background: mobileMenuOpen ? (isAgro ? '#f9f6f0' : '#080c14') : 'transparent',
            borderLeft: mobileMenuOpen ? `1px solid ${headerBorder}` : 'none',
          }}
        >
          {isHomepage ? (
            // ── Homepage grouped nav ──
            <div ref={navDropdownRef} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {homepageGroups.map((group) => (
                <div key={group.label} style={{ position: 'relative' }}>
                  <button
                    id={`nav-group-${group.label.toLowerCase()}`}
                    onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}
                    className="nav-link"
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: textColor,
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '8px 12px',
                    }}
                  >
                    {group.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: activeGroup === group.label ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {activeGroup === group.label && (
                    <div className="hp-nav-dropdown" style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      left: 0,
                      minWidth: '180px',
                      background: 'rgba(10,22,40,0.98)',
                      border: '1px solid rgba(212,175,55,0.15)',
                      borderRadius: '8px',
                      padding: '8px 0',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                      zIndex: 100,
                    }}>
                      {group.items.map((item) => (
                        <Link
                          key={item.path}
                          href={item.path}
                          onClick={closeMobileMenu}
                          style={{
                            display: 'block',
                            padding: '10px 20px',
                            color: 'var(--text-silver)',
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            textDecoration: 'none',
                            transition: 'color 0.15s',
                          }}
                          onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-silver)')}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="nav-link" onClick={closeMobileMenu}
                style={{ color: textColor, fontWeight: 600 }}>
                {contactLabel}
              </Link>
            </div>
          ) : (
            // ── Sub-page flat nav (unchanged) ──
            flatNavItems.map((item, idx) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                  style={{ color: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : textColor, fontWeight: 600 }}
                >
                  {item.name}
                </Link>
              );
            })
          )}
        </nav>

        {/* Right-side actions */}
        <div className="header-actions">
          {/* Request a Quote button – homepage only */}
          {isHomepage && (
            <a
              href="#connect"
              id="header-quote-btn"
              style={{
                display: 'none',
                padding: '9px 20px',
                background: 'transparent',
                border: '1px solid rgba(212,175,55,0.45)',
                borderRadius: '6px',
                color: 'var(--accent-gold)',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,175,55,0.1)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {quoteLabel}
            </a>
          )}

          {/* Language selector */}
          <div className="lang-dropdown-container" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-dropdown-trigger"
              aria-label="Select language"
              style={{
                background: isAgro ? 'rgba(30,61,50,0.05)' : 'rgba(255,255,255,0.05)',
                borderColor: isAgro ? 'rgba(30,61,50,0.1)' : 'rgba(255,255,255,0.08)',
                color: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : '#ffffff',
              }}
            >
              {languages[language].flag}
              <span style={{ textTransform: 'uppercase' }}>{languages[language].code}</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', color: 'var(--text-muted)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown-menu" style={{
                background: isAgro ? '#ffffff' : 'rgba(15,23,42,0.97)',
                borderColor: isAgro ? 'var(--border-earthy, #d4c9b0)' : 'var(--border-color)',
                boxShadow: isAgro ? '0 10px 30px rgba(30,61,50,0.1)' : '0 10px 30px rgba(0,0,0,0.5)',
              }}>
                {(['en', 'ru', 'uz'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => { setLanguage(lang); setLangDropdownOpen(false); }}
                    className={`lang-dropdown-item ${language === lang ? 'active' : ''}`}
                    style={{ color: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : 'var(--text-silver)' }}
                  >
                    {languages[lang].flag}
                    <span>{languages[lang].label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className={`menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : '#ffffff' }} />
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : '#ffffff' }} />
            <span style={{ backgroundColor: isAgro ? 'var(--text-earthy-dark, #1a1a1a)' : '#ffffff' }} />
          </button>
        </div>
      </div>

      {/* Show Request a Quote button on desktop via CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 769px) {
          #header-quote-btn { display: inline-flex !important; align-items: center; }
        }
      ` }} />
    </header>
  );
};

export default Header;
