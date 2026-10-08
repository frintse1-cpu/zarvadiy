'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../locales/translations';

const LANGS: { code: Language; label: string; name: string }[] = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ru', label: 'RU', name: 'Русский' },
  { code: 'uz', label: 'UZ', name: 'Oʻzbekcha' },
];

type GroupKey = 'business' | 'company';

function LangSwitch() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={t.nav.language}>
      {LANGS.map((l, i) => (
        <span key={l.code} style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>
          {i > 0 && <span className="sep" aria-hidden="true" />}
          <button
            type="button"
            lang={l.code}
            aria-pressed={language === l.code}
            aria-label={l.name}
            onClick={() => setLanguage(l.code)}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState<GroupKey | null>(null);
  const [mobile, setMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const viaMouse = useRef(false); // true while the pointer is a real mouse hovering the menu

  const groups: { key: GroupKey; label: string; items: { href: string; label: string }[] }[] = [
    {
      key: 'business',
      label: t.nav.business,
      items: [
        { href: '/industrial', label: t.nav.industrial },
        { href: '/food-gift', label: t.nav.foodGift },
        { href: '/technology', label: t.nav.technology },
      ],
    },
    {
      key: 'company',
      label: t.nav.company,
      items: [
        { href: '/about', label: t.nav.about },
        { href: '/how-we-work', label: t.nav.howWeWork },
      ],
    },
  ];

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(null);
        setMobile(false);
      }
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => {
      if (mq.matches) setMobile(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobile);
    return () => document.body.classList.remove('menu-open');
  }, [mobile]);

  const closeAll = () => {
    setOpen(null);
    setMobile(false);
  };
  const current = (href: string) => (pathname === href ? 'page' : undefined);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={t.nav.home} onClick={closeAll}>
            <Image src="/images/logo-gold.png" alt={t.alt.logo} width={5812} height={722} sizes="200px" className="brand-word" priority />
          </Link>

          <nav className="nav-desktop" aria-label={t.nav.mainNav} ref={navRef}>
            {groups.map((g) => (
              <div
                key={g.key}
                className="nav-group"
                onPointerEnter={(e) => {
                  if (e.pointerType === 'mouse') {
                    viaMouse.current = true;
                    setOpen(g.key);
                  }
                }}
                onPointerLeave={(e) => {
                  if (e.pointerType === 'mouse') setOpen(null);
                }}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
                }}
              >
                <button
                  type="button"
                  className="nav-trigger"
                  aria-expanded={open === g.key}
                  aria-controls={`menu-${g.key}`}
                  onKeyDown={() => {
                    viaMouse.current = false;
                  }}
                  onClick={() => {
                    // With a mouse the hover has already opened it: a click must not close it again.
                    if (viaMouse.current) setOpen(g.key);
                    else setOpen(open === g.key ? null : g.key);
                  }}
                >
                  {g.label}
                  <span className="chev" aria-hidden="true" />
                </button>
                {open === g.key && (
                  <div className="nav-menu" id={`menu-${g.key}`}>
                    {g.items.map((item) => (
                      <Link key={item.href} href={item.href} aria-current={current(item.href)} onClick={closeAll}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/contact" className="nav-link" aria-current={current('/contact')}>
              {t.nav.contact}
            </Link>
          </nav>

          <div className="header-right">
            <LangSwitch />
            <Link href="/contact" className="btn btn-primary btn-sm header-cta">
              {t.nav.quote}
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={mobile}
              aria-controls="mobile-panel"
              aria-label={mobile ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setMobile((v) => !v)}
            >
              <span className="bars" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {mobile && (
        <div className="mobile-panel" id="mobile-panel">
          <nav aria-label={t.nav.mainNav}>
            {groups.map((g) => (
              <div key={g.key}>
                <p className="group-label">{g.label}</p>
                {g.items.map((item) => (
                  <Link key={item.href} href={item.href} className="m-link" aria-current={current(item.href)} onClick={closeAll}>
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            <p className="group-label">{t.nav.contact}</p>
            <Link href="/contact" className="m-link" aria-current={current('/contact')} onClick={closeAll}>
              {t.nav.contact}
            </Link>
          </nav>
          <div className="m-actions">
            <Link href="/contact" className="btn btn-primary" onClick={closeAll}>
              {t.nav.quote}
            </Link>
            <LangSwitch />
          </div>
        </div>
      )}
    </>
  );
}
