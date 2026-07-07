'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const values = [
    {
      title: t.whyUs.standards.title,
      desc: t.whyUs.standards.desc,
      num: '01'
    },
    {
      title: t.whyUs.supply.title,
      desc: t.whyUs.supply.desc,
      num: '02'
    },
    {
      title: t.whyUs.comm.title,
      desc: t.whyUs.comm.desc,
      num: '03'
    },
    {
      title: t.whyUs.team.title,
      desc: t.whyUs.team.desc,
      num: '04'
    }
  ];

  const approachItems = [
    t.aboutPage.approach.item1,
    t.aboutPage.approach.item2,
    t.aboutPage.approach.item3,
    t.aboutPage.approach.item4
  ];

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
          <span className="section-tag">{t.nav.about}</span>
          <h1 className="section-title" style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            color: 'var(--text-white)',
            fontWeight: 800,
            lineHeight: 1.2
          }}>
            {t.aboutPage.title}
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '650px', margin: '20px auto 0 auto', lineHeight: 1.7 }}>
            {t.aboutPage.subtitle}
          </p>
        </div>
      </section>

      {/* 2. CORPORATE STORY & WHY FOUNDED */}
      <section className="section" style={{ paddingBottom: '80px' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: 'var(--text-white)',
              marginBottom: '24px',
              fontWeight: 700
            }}>
              {t.aboutPage.storyTitle}
            </h2>
            <p style={{
              color: 'var(--text-silver)',
              fontSize: '1.08rem',
              lineHeight: 1.75,
              marginBottom: '24px'
            }}>
              {t.aboutPage.storyDesc}
            </p>
            <p style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '30px'
            }}>
              {language === 'ru'
                ? 'Узбекистан обладает богатейшей историей металлургии и аграрного дела. Обладая колоссальными запасами ресурсов, мы создали Zarvadiy LLC как единую профессиональную B2B-систему, которая выдерживает строжайшие европейские экологические и технические нормы для предоставления безукоризненного качества.'
                : language === 'uz'
                  ? 'O‘zbekiston metallurgiya va agrar sohada boy tarixga ega. Ushbu ulkan resurslar bazasiga tayanib, biz Zarvadiy MChJni yevropa standartlari, ekologik va texnik talablariga to‘liq javob beruvchi yagona professional B2B-tizim sifatida tashkil etdik.'
                  : 'Central Asia possesses a legendary depth of metallurgical deposits and rich organic soils. Harnessing these world-class assets, Zarvadiy Holding acts as a professional B2B bridge, coordinating raw extraction, clean chromatic processing, and rigid laboratory compliance to deliver flawless container shipments globally.'}
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              <div>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--primary-copper-hover)' }}>EU / MENA</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {language === 'ru' ? 'Целевые рынки' : language === 'uz' ? 'Maqsadli bozorlar' : 'Target B2B Markets'}
                </span>
              </div>
              <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '24px' }}>
                <strong style={{ display: 'block', fontSize: '1.5rem', color: 'var(--primary-copper-hover)' }}>HACCP & ISO</strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {language === 'ru' ? 'Контроль качества' : language === 'uz' ? 'Sifat nazorati' : 'Quality Certifications'}
                </span>
              </div>
            </div>
          </div>

          {/* Feature image */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '420px',
            borderRadius: 'var(--border-radius-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(200, 122, 62, 0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <Image
              src="/images/holding_hero.png"
              alt="Premium trade logistics"
              fill
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%',
              background: 'linear-gradient(to bottom, rgba(7, 11, 19, 0) 40%, rgba(7, 11, 19, 0.9) 100%)'
            }}></div>
            <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
              <span style={{ color: 'var(--primary-copper)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {language === 'ru' ? 'Философия работы' : language === 'uz' ? 'Ish falsafamiz' : 'Export Philosophy'}
              </span>
              <p style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginTop: '8px', lineHeight: 1.4 }}>
                {language === 'ru' ? '«Бескомпромиссная надежность в каждой отправленной партии»' : language === 'uz' ? '«Har bir yetkazilgan mahsulotda so‘zsiz ishonch»' : '“Uncompromising reliability in every single dispatched shipment.”'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION & PHILOSOPHY */}
      <section className="section section-alt" style={{ borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div className="glass-card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            </div>
            <h3 style={missionTitleStyle}>{t.aboutPage.missionTitle}</h3>
            <p style={missionDescStyle}>{t.aboutPage.missionDesc}</p>
          </div>

          <div className="glass-card" style={{ padding: '40px', position: 'relative', overflow: 'hidden' }}>
            <div style={badgeStyle}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <h3 style={missionTitleStyle}>{t.aboutPage.visionTitle}</h3>
            <p style={missionDescStyle}>{t.aboutPage.visionDesc}</p>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="section" style={{ background: '#04070d' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.aboutPage.approach.tag}</span>
            <h2 className="section-title">{t.aboutPage.approach.title}</h2>
            <p className="section-subtitle">{t.aboutPage.approach.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '30px',
            marginTop: '50px'
          }}>
            {approachItems.map((item, idx) => (
              <div key={idx} className="glass-card" style={{
                position: 'relative',
                padding: '40px 30px',
                borderLeft: '4px solid var(--primary-copper)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(200, 122, 62, 0.15)',
                  lineHeight: 1,
                  position: 'absolute',
                  top: '20px',
                  right: '24px'
                }}>{String(idx + 1).padStart(2, '0')}</div>
                <h4 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: 600, marginTop: '20px' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. VALUES / CORE PRINCIPLES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              {language === 'ru' ? 'Принципы' : language === 'uz' ? 'Tamoyillar' : 'Principles'}
            </span>
            <h2 className="section-title">
              {language === 'ru' ? 'Наши рабочие принципы' : language === 'uz' ? 'Bizning tamoyillarimiz' : 'Our Operating Principles'}
            </h2>
            <p className="section-subtitle">
              {language === 'ru'
                ? 'Принципы, которые направляют наш экспорт, координацию с клиентами и контроль качества.'
                : language === 'uz'
                  ? "Eksport faoliyatimiz, mijozlar bilan muloqot va sifat nazoratini yo'naltiruvchi tamoyillar."
                  : 'The core values that guide our export operations, customer coordination, and quality criteria.'}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{
                  position: 'absolute',
                  top: '20px',
                  right: '30px',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'rgba(200, 122, 62, 0.15)',
                  lineHeight: 1
                }}>{v.num}</span>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                  marginTop: '10px'
                }}>{v.title}</h3>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}>{v.desc}</p>
              </div>
            ))}
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

const badgeStyle: React.CSSProperties = {
  width: '44px',
  height: '44px',
  borderRadius: 'var(--border-radius-sm)',
  background: 'rgba(200, 122, 62, 0.12)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary-copper)',
  marginBottom: '20px'
};

const missionTitleStyle: React.CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontSize: '1.65rem',
  color: 'var(--text-white)',
  marginBottom: '14px',
  fontWeight: 700
};

const missionDescStyle: React.CSSProperties = {
  color: 'var(--text-silver)',
  fontSize: '1.02rem',
  lineHeight: 1.7
};
