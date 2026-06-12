'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../context/LanguageContext';

export default function IndustrialDivisionPage() {
  const { language, t } = useLanguage();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const productKeys = ['pancake-coils', 'lwc-coils', 'acr-tubes', 'insulated-tubes', 'pipe-fittings', 'capillary-tubes'];

  // High-end copper vector drawings for B2B catalog items
  const productIcons = {
    'pancake-coils': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <circle cx="50" cy="50" r="38" stroke="url(#metallic-copper)" strokeWidth="6" />
        <circle cx="50" cy="50" r="28" stroke="url(#metallic-copper)" strokeWidth="5.5" />
        <circle cx="50" cy="50" r="18" stroke="url(#metallic-copper)" strokeWidth="5" />
        <rect x="47" y="10" width="6" height="80" fill="url(#metallic-copper)" transform="rotate(45 50 50)" opacity="0.65" />
        <rect x="47" y="10" width="6" height="80" fill="url(#metallic-copper)" transform="rotate(-45 50 50)" opacity="0.65" />
      </svg>
    ),
    'lwc-coils': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <rect x="25" y="15" width="50" height="70" rx="3" fill="#1f2937" stroke="url(#metallic-copper)" strokeWidth="3" />
        {/* Layered copper wound coils */}
        <line x1="30" y1="25" x2="70" y2="25" stroke="url(#metallic-copper)" strokeWidth="4" />
        <line x1="30" y1="35" x2="70" y2="35" stroke="url(#metallic-copper)" strokeWidth="4" />
        <line x1="30" y1="45" x2="70" y2="45" stroke="url(#metallic-copper)" strokeWidth="4" />
        <line x1="30" y1="55" x2="70" y2="55" stroke="url(#metallic-copper)" strokeWidth="4" />
        <line x1="30" y1="65" x2="70" y2="65" stroke="url(#metallic-copper)" strokeWidth="4" />
        <line x1="30" y1="75" x2="70" y2="75" stroke="url(#metallic-copper)" strokeWidth="4" />
        {/* Spool borders */}
        <rect x="18" y="10" width="64" height="6" rx="1" fill="url(#metallic-silver)" />
        <rect x="18" y="84" width="64" height="6" rx="1" fill="url(#metallic-silver)" />
      </svg>
    ),
    'acr-tubes': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        <rect x="10" y="25" width="80" height="10" rx="2" fill="url(#metallic-copper)" />
        <rect x="10" y="45" width="80" height="10" rx="2" fill="url(#metallic-copper)" />
        <rect x="10" y="65" width="80" height="10" rx="2" fill="url(#metallic-copper)" />
        {/* Tube ends detailing */}
        <ellipse cx="90" cy="30" rx="2.5" ry="5" fill="#4b5563" />
        <ellipse cx="90" cy="50" rx="2.5" ry="5" fill="#4b5563" />
        <ellipse cx="90" cy="70" rx="2.5" ry="5" fill="#4b5563" />
      </svg>
    ),
    'insulated-tubes': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        {/* Outer insulation sheath */}
        <rect x="15" y="30" width="70" height="40" rx="20" fill="#1f2937" stroke="url(#metallic-silver)" strokeWidth="3" />
        {/* Copper core */}
        <rect x="10" y="44" width="80" height="12" fill="url(#metallic-copper)" />
        <circle cx="85" cy="50" r="6" fill="#374151" stroke="url(#metallic-copper)" strokeWidth="2" />
        <circle cx="15" cy="50" r="6" fill="#111827" stroke="url(#metallic-copper)" strokeWidth="2" />
      </svg>
    ),
    'pipe-fittings': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        {/* Elbow fitting */}
        <path d="M30,70 L30,45 C30,33 39,24 51,24 L75,24" stroke="url(#metallic-copper)" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="70" r="11" fill="#374151" />
        <circle cx="75" cy="24" r="11" fill="#374151" />
      </svg>
    ),
    'capillary-tubes': (
      <svg viewBox="0 0 100 100" fill="none" style={productIconStyle}>
        {/* Ultra-fine coils */}
        <circle cx="50" cy="50" r="35" stroke="url(#metallic-copper)" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="30" stroke="url(#metallic-copper)" strokeWidth="2.3" />
        <circle cx="50" cy="50" r="25" stroke="url(#metallic-copper)" strokeWidth="2.1" />
        <circle cx="50" cy="50" r="20" stroke="url(#metallic-copper)" strokeWidth="1.9" />
        <path d="M50,15 C52,24 55,30 55,38" stroke="url(#metallic-copper)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  };

  const capabilities = [
    {
      num: '01',
      title: t.industrial.capabilities.item1.title,
      desc: t.industrial.capabilities.item1.desc
    },
    {
      num: '02',
      title: t.industrial.capabilities.item2.title,
      desc: t.industrial.capabilities.item2.desc
    },
    {
      num: '03',
      title: t.industrial.capabilities.item3.title,
      desc: t.industrial.capabilities.item3.desc
    }
  ];

  const partnerships = [
    {
      num: "01",
      title: "MaxCopper LLC � Uzbekistan",
      desc: "EBRD-backed copper tube manufacturer in Tashkent. Certified to ISO 9001, ISO 14001, ISO 45001. Products comply with EN 12735 European standard. Equipment: Bruker, Horiba, ELTRA laboratories."
    },
    {
      num: "02",
      title: "Xinglu Group � China",
      desc: "Established 1995. 200,000+ tonnes annual capacity. Supplier to Mitsubishi, Daikin, LG, Panasonic, Carrier, Haier, Gree. Products: LWC, Pancake, Inner Grooved, Straight, Insulated copper tubes."
    },
    {
      num: "03",
      title: "Quality Standards",
      desc: "EN 12735, ISO 9001 / 14001 / 45001, ASTM B280, EN 10204 3.1. Available Incoterms: FOB, CIF, DAP, EXW. Payment: T/T, Letter of Credit (LC)."
    }
  ];






  const logisticsDocKeys = [
    language === 'ru' ? 'Сертификат происхождения (Форма А / СТ-1)' : language === 'uz' ? 'Kelib chiqish sertifikati (A shakli / ST-1)' : 'Certificate of Origin (Form A / CT-1)',
    language === 'ru' ? 'Сертификаты соответствия EN 10204 3.1' : language === 'uz' ? 'EN 10204 3.1 sifat sertifikatlari' : 'Compliance certificates EN 10204 3.1',
    language === 'ru' ? 'Таможенное оформление и транзитная декларация' : language === 'uz' ? 'Bojxona rasmiylashtiruvi va tranzit hujjatlari' : 'Customs clearance and transit declarations',
    language === 'ru' ? 'Двуязычные спецификации и пакинг-листы' : language === 'uz' ? 'Ikki tilli texnik shartlar va qadoq varaqalari' : 'Bilingual specifications and packing lists'
  ];

  const packagingTypes = [
    {
      title: 'LWC Reel Packaging',
      desc: language === 'ru' ? 'Бухты LWC крепятся на прочных деревянных катушках, стянутых стальными лентами.' : language === 'uz' ? 'LWC buxtalari po‘lat lentalar bilan tortilgan mustahkam yog‘och g‘altaklarda yetkaziladi.' : 'LWC reels are secured on heavy-duty wooden spools, tightly banded with steel straps.'
    },
    {
      title: 'Horizontal Coil Wrap',
      desc: language === 'ru' ? 'Плотная многослойная термоусадочная пленка защищает бухты Pancake от влаги.' : language === 'uz' ? 'Ko‘p qavatli zich termoplyonka Pancake buxtalarini namlikdan to‘liq himoya qiladi.' : 'Tight multilayer shrink wrapping protects Pancake coils from environmental humidity.'
    },
    {
      title: 'Straight Tube Wooden Cradles',
      desc: language === 'ru' ? 'Прямые трубы ACR укладываются в длинные закрытые деревянные короба.' : language === 'uz' ? 'ACR to‘g‘ri quvurlari maxsus yopiq uzun yog‘och qutilarga joylanadi.' : 'Rigid ACR straight tubes are nested in protective, fully closed long wooden crates.'
    },
    {
      title: 'Copper Coil Box Protection',
      desc: language === 'ru' ? 'Каждая бухта укладывается в отдельную коробку со специальными поглотителями влаги.' : language === 'uz' ? 'Har bir Pancake buxtasi namlik yutuvchilar solingan alohida mustahkam qutilarga joylanadi.' : 'Each coil is packed in an individual protective carton box containing humidity absorber packs.'
    }
  ];

  return (
    <div className="industrial-theme" style={{ minHeight: '100vh', background: '#0b0f19' }}>

      {/* Visual gradients for vector graphics */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="metallic-copper" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B87333" />
            <stop offset="50%" stopColor="#e09255" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="metallic-silver" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9ca3af" />
            <stop offset="50%" stopColor="#f3f4f6" />
            <stop offset="100%" stopColor="#4b5563" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. HERO SECTION */}
      <section className="section" style={{
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px 0',
        background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.92) 100%), url("/images/industrial_hero.png") no-repeat center center / cover',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={topGlowStyle}></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            <span className="section-tag" style={{ color: 'var(--primary-copper-hover)', fontWeight: 700 }}>
              {t.nav.industries} // {language === 'ru' ? 'Промышленный Дивизион' : language === 'uz' ? 'Sanoat Departamenti' : 'Industrial Division'}
            </span>
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)',
              lineHeight: 1.15,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '24px',
              letterSpacing: '-0.02em'
            }}>
              {t.industrial.heroTitle}
            </h1>
            <p style={{
              fontSize: 'clamp(1.05rem, 1.2vw, 1.25rem)',
              color: '#9ca3af',
              lineHeight: 1.65,
              marginBottom: '40px',
              maxWidth: '680px'
            }}>
              {t.industrial.heroSubtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#products" className="btn btn-primary">
                {language === 'ru' ? 'Смотреть Каталог' : language === 'uz' ? 'Katalogni Ko‘rish' : 'View Catalog'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="7 13 12 18 17 13"></polyline>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                </svg>
              </a>
              <a href="#contact" className="btn btn-secondary">
                {language === 'ru' ? 'Запросить параметры' : language === 'uz' ? 'Texnik shartlarni so‘rash' : 'Request Specifications'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT METALLURGY */}
      <section className="section" id="about" style={{ borderTop: '1px solid rgba(255,255,255,0.02)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <span className="section-tag">{language === 'ru' ? 'Наши Технологии' : language === 'uz' ? 'Texnologiyalarimiz' : 'Modern Industrial Copper Exporter'}</span>
            <h2 className="section-title" style={{ textAlign: 'left', color: '#ffffff', marginBottom: '24px' }}>
              High-Specification <span>Industrial Copper</span> Export
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1.08rem', lineHeight: 1.75, marginBottom: '24px' }}>
              {t.industrial.aboutDesc}
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.6 }}>
              {language === 'ru'
                ? 'Мы экспортируем медный прокат исключительно высокой прочности. Каждая партия сопровождается подробным протоколом EN 10204 3.1, гарантирующим химическую чистоту сплава и точные геометрические размеры, что критически важно для теплообменников и систем высокого давления.'
                : language === 'uz'
                  ? 'Biz faqat yuqori sifatli va chidamli mis mahsulotlarini eksport qilamiz. Har bir partiya EN 10204 3.1 protokoli bilan ta’minlanadi, bu esa qotishmaning kimyoviy tozaligi va o‘lchamlarini kafolatlaydi, bu esa yuqori bosimli tizimlar uchun juda muhimdir.'
                  : 'Zarvadiy coordinates high-purity metallurgical supply chains directly from premium regional refineries in Central Asia. We offer standard and custom dimensional wall profiles designed to resist continuous operating fatigue, carrying absolute traceability certifications.'}
            </p>
            <div style={{ marginTop: '30px', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '1px solid rgba(184, 115, 51, 0.25)', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}>
              <img
                src="/images/industrial_about.png"
                alt="Zarvadiy Sourcing Terminal"
                style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Capabilities Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {capabilities.map((cap) => (
              <div key={cap.num} className="glass-card" style={{ display: 'flex', gap: '20px', padding: '24px' }}>
                <div style={stepNumStyle}>{cap.num}</div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, marginBottom: '6px' }}>{cap.title}</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.5 }}>{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS PORTFOLIO */}
      <section className="section section-alt" id="products" style={{
        background: 'linear-gradient(180deg, #0b0f19 0%, #060910 100%)',
        borderTop: '1px solid rgba(255,255,255,0.02)'
      }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t.industrialProducts.title}</span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>Zarvadiy <span>Copper Produce</span> Portfolio</h2>
            <p className="section-subtitle">{t.industrialProducts.subtitle}</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {productKeys.map((key) => {
              const item = t.industrialProducts.items[key as keyof typeof t.industrialProducts.items];
              return (
                <div key={key} className="tech-product-card" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '380px'
                }}>
                  <div>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: 'var(--border-radius-sm)',
                      background: 'rgba(184, 115, 51, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px'
                    }}>
                      {productIcons[key as keyof typeof productIcons]}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.45rem',
                      color: '#ffffff',
                      marginBottom: '12px',
                      fontWeight: 700
                    }}>{item.title}</h3>
                    <p style={{
                      color: '#6b7280',
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      marginBottom: '24px'
                    }}>{item.shortDesc}</p>
                  </div>
                  <Link href={`/industrial/products/${key}`} className="btn btn-secondary" style={{
                    alignSelf: 'flex-start',
                    padding: '10px 18px',
                    fontSize: '0.85rem'
                  }}>
                    {t.industrialProducts.viewDetails}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* SPEC SHEETS DOWNLOAD */}
      <section className="section" style={{ borderTop: '1px solid rgba(184, 115, 51, 0.15)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="section-tag">
              {language === 'ru' ? 'Технические Документы' : language === 'uz' ? 'Texnik Hujjatlar' : 'Technical Documents'}
            </span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Product <span>Specification Sheets</span>
            </h2>
            <p className="section-subtitle">
              {language === 'ru'
                ? 'Скачайте подробные технические спецификации наших поставщиков'
                : language === 'uz'
                  ? 'Ishlab chiqaruvchilarimizning texnik spetsifikatsiyalarini yuklab oling'
                  : 'Download detailed technical specifications from our manufacturing partners'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '800px' }}>

            {/* UZ Spec Sheet */}
            <div className="glass-card" style={{ padding: '28px', border: '1px solid rgba(184, 115, 51, 0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>🇺🇿</span>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>MaxCopper LLC</h4>
                  <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>Tashkent, Uzbekistan</span>
                </div>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {language === 'ru'
                  ? 'Панкейк, LWC, IGT, прямые трубы, фитинги — 25 000 т/год'
                  : language === 'uz'
                    ? 'Pancake, LWC, IGT, to\'g\'ri trubalar, fitinglar — 25 000 t/yil'
                    : 'Pancake, LWC, IGT, straight tubes, fittings — 25,000 t/year'}
              </p>

              <a href="/docs/Zarvadiy_MaxCopper_UZ_SpecSheet.pdf"
                download
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                {language === 'ru' ? 'Скачать PDF' : language === 'uz' ? 'PDF Yuklab olish' : 'Download PDF'}
              </a>
            </div>

            {/* CN Spec Sheet */}
            <div className="glass-card" style={{ padding: '28px', border: '1px solid rgba(56, 130, 200, 0.2)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '1.8rem' }}>🇨🇳</span>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '2px' }}>Xinglu Refrigeration</h4>
                  <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>Shandong, China</span>
                </div>
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5 }}>
                {language === 'ru'
                  ? 'LWC, IGT, прямые, панкейк, изолированные трубы — 200 000 т/год'
                  : language === 'uz'
                    ? 'LWC, IGT, to\'g\'ri, pancake, izolyatsiyali trubalar — 200 000 t/yil'
                    : 'LWC, IGT, straight, pancake, insulated pipes — 200,000 t/year'}
              </p>

              <a href="/docs/Zarvadiy_Xinglu_CN_SpecSheet.pdf"
              download
              className="btn btn-secondary"

              style={{ alignSelf: 'flex-start', padding: '10px 20px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', borderColor: 'rgba(56,130,200,0.5)', color: '#60a5fa' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              {language === 'ru' ? 'Скачать PDF' : language === 'uz' ? 'PDF Yuklab olish' : 'Download PDF'}
            </a>
          </div>

        </div >
    </div >
</section >
    {/* 4. MANUFACTURING PARTNER NETWORK */ }
    < section className = "section" style = {{ borderTop: '1px solid rgba(255,255,255,0.02)' }
}>
  <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
    <div>
      <span className="section-tag">{language === 'ru' ? 'Сеть Заводов-Партнеров' : language === 'uz' ? 'Hamkor Ishlab Chiqaruvchilar Tarmog‘i' : 'Manufacturing Partner Network'}</span>
      <h2 className="section-title" style={{ textAlign: 'left', color: '#ffffff', marginBottom: '24px' }}>
        Flexible & Scalable <span>Sourcing Model</span>
      </h2>
      <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
        {language === 'ru'
          ? 'Zarvadiy работает по модели проверенной сети заводов-партнеров, предлагая международным покупателям максимальную гибкость и масштабируемость поставок. Сотрудничая с несколькими специализированными заводами Центральной Азии, мы обходим ограничения объемов единичного производства, адаптируя поставки под спрос при строгом контроле качества.'
          : language === 'uz'
            ? 'Zarvadiy tekshirilgan hamkor ishlab chiqaruvchilar tarmog‘i orqali ishlaydi va xalqaro xaridorlarga maksimal darajada moslashuvchan hamda kengayuvchi ta’minot zanjirini taklif etadi. Biz Markaziy Osiyodagi bir nechta ixtisoslashgan zavodlar bilan hamkorlik qilib, alohida zavodlarning ishlab chiqarish hajmi cheklovlaridan chetlab o‘tamiz va sifatni markaziy nazorat ostida saqlaymiz.'
            : 'Zarvadiy operates a vetted, partner-based sourcing model that offers international buyers maximum supply chain flexibility and scalability. By partnering with multiple specialized refineries across Central Asia, we bypass single-factory volume constraints, dynamically scaling production to match commercial demand while maintaining central quality oversight.'}
      </p>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      {partnerships.map((p) => (
        <div key={p.num} className="glass-card" style={{ padding: '24px' }}>
          <span className="technical-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>{p.num} // {p.title}</span>
          <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.5, marginTop: '8px' }}>{p.desc}</p>
        </div>
      ))}
    </div>
  </div>
      </section >

  {/* 5. VIDEO SHOWCASE SECTION */ }
  < section className = "section section-alt" style = {{ borderTop: '1px solid rgba(255,255,255,0.02)' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag">{language === 'ru' ? 'Видеоотчеты' : language === 'uz' ? 'Videolavhalar' : 'Media Center'}</span>
        <h2 className="section-title" style={{ color: '#ffffff' }}>Copper Sourcing <span>Portfolio Showcases</span></h2>
        <p className="section-subtitle">
          {language === 'ru' ? 'Посмотрите видео с заводов-партнеров и упаковочных линий.' : language === 'uz' ? 'Hamkor zavodlar va qadoqlash jarayonlaridan olingan videolavhalarni ko‘ring.' : 'Take a look inside our partner metallurgy processing facilities and cargo packaging routines.'}
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '30px' }}>
        {/* Video Box 1 */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', width: '100%', height: '220px', background: 'linear-gradient(180deg, rgba(11, 15, 25, 0.6) 0%, rgba(11, 15, 25, 0.85) 100%), url("/images/industrial_products.png") no-repeat center center / cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Visual placeholder matching screenshot */}
            <div style={{ textAlign: 'center', color: '#ffffff', padding: '24px', zIndex: 2 }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(184, 115, 51, 0.2)', border: '2px solid var(--primary-copper)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--primary-copper-hover)' }}>
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700 }}>PARTNER REFINERY</h4>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Metallurgical Sourcing Process</span>
            </div>
          </div>
          <div style={{ padding: '24px', flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0b0f19' }}>
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600 }}>Smelting & Drawing Video</h4>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', marginTop: '4px' }}>Partner refinery smelting and drawing controls</p>
            </div>
            <button className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Watch Sourcing</button>
          </div>
        </div>

        {/* Video Box 2 */}
        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
        <div className="glass-card" style={{ padding: "0", overflow: "hidden", minHeight: "320px", display: "flex", flexDirection: "column" }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/88XE837eWnc"
              title="Export Cargo Packaging"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
            ></iframe>
          </div>
          <div style={{ padding: "24px", background: "#0b0f19" }}>
            <h4 style={{ color: "#ffffff", fontSize: "1.1rem", fontWeight: 600 }}>Export Cargo Packaging Video</h4>
            <p style={{ color: "#6b7280", fontSize: "0.85rem", marginTop: "4px" }}>MaxCopper partner logistics packaging routines</p>
          </div>
        </div>




      </div>
    </div>
      </section >

  {/* 6. LOGISTICS SECTION */ }
  < section className = "section" id = "logistics" style = {{ background: '#070b13', borderTop: '1px solid rgba(255,255,255,0.02)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
      <div>
        <span className="section-tag">Logistics Desk</span>
        <h2 className="section-title" style={{ textAlign: 'left', color: '#ffffff', marginBottom: '24px' }}>
          Export Logistics <span>Coordination</span>
        </h2>
        <p style={{ color: '#9ca3af', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
          {t.industrial.logistics.desc}
        </p>
        <div className="glass-card" style={{ padding: '24px', border: '1px solid rgba(184,115,51,0.1)' }}>
          <span className="technical-badge" style={{ marginBottom: '12px', display: 'inline-block' }}>Incoterms Available</span>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '6px' }}>
            {['FOB', 'CIF', 'CFR', 'FCA'].map((term) => (
              <span key={term} style={{ background: 'rgba(184, 115, 51, 0.12)', color: 'var(--primary-copper-hover)', border: '1px solid rgba(184,115,51,0.3)', padding: '4px 10px', borderRadius: '4px', fontWeight: 700, fontSize: '0.8rem', fontFamily: 'monospace' }}>
                {term}
              </span>
            ))}
          </div>
        </div>
        <div style={{ marginTop: '24px', borderRadius: 'var(--border-radius-lg)', overflow: 'hidden', border: '1px solid rgba(184, 115, 51, 0.15)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)' }}>
          <img
            src="/images/industrial_logistics.jpg"
            alt="Export Logistics Terminal"
            style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Checklists and documentation */}
      <div className="glass-card" style={{ padding: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: '#ffffff', marginBottom: '24px', fontWeight: 700 }}>
          {t.industrial.certifications.title}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {logisticsDocKeys.map((doc, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ color: 'var(--primary-copper-hover)', flexShrink: 0 }}>
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span style={{ color: '#c5cbd3', fontSize: '0.95rem' }}>{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section >

  {/* 7. PROFESSIONAL PACKAGING DETAILS */ }
  < section className = "section section-alt" style = {{ borderTop: '1px solid rgba(255,255,255,0.02)' }}>
    <div className="container">
      <div className="section-header">
        <span className="section-tag">{language === 'ru' ? 'Стандарты Упаковки' : language === 'uz' ? 'Qadoqlash Standartlari' : 'Export Standard Protection'}</span>
        <h2 className="section-title" style={{ color: '#ffffff' }}>Professional <span>Export Packaging</span></h2>
        <p className="section-subtitle">
          {language === 'ru' ? 'Предотвращение коррозии и физических деформаций во время мультимодального транзита.' : language === 'uz' ? 'Konteynerlarda yuk tashish paytida korroziya va jismoniy deformatsiyalarning oldini olish.' : 'Zero corrosion, zero oxidation, and absolute structural lock parameters during global ocean transit.'}
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '30px',
        marginTop: '30px'
      }}>
        {packagingTypes.map((pkg, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', border: '1px solid rgba(184, 115, 51, 0.12)' }}>
            <span className="technical-badge" style={{ alignSelf: 'flex-start' }}>{pkg.title}</span>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.6 }}>{pkg.desc}</p>
          </div>
        ))}
      </div>
    </div>
      </section >

  {/* 8. INLINE CONTACT SECTION */ }
  < section className = "section" id = "contact" style = {{
  background: 'radial-gradient(circle at 50% 10%, rgba(184, 115, 51, 0.08) 0%, rgba(7, 11, 19, 0) 60%), #060910',
    borderTop: '1px solid rgba(184, 115, 51, 0.15)',
      padding: '100px 0'
}}>
  <div className="container" style={{ maxWidth: '650px', margin: '0 auto' }}>
    <div style={{ textAlign: 'center', marginBottom: '40px' }}>
      <span className="section-tag" style={{ color: 'var(--primary-copper-hover)' }}>Get Quote</span>
      <h2 className="section-title" style={{ color: '#ffffff', marginBottom: '20px' }}>
        Initiate Your <span>Industrial RFQ</span> Today
      </h2>
      <p style={{ color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>
        {language === 'ru'
          ? 'Свяжитесь с нашим отделом промышленных поставок'
          : language === 'uz'
            ? 'Sanoat savdo bo‘limimiz bilan bog‘laning'
            : 'Get in touch with our industrial trade desk'}
      </p>
    </div>

    <div className="glass-card" style={{ padding: '40px' }}>
      {status === 'success' && (
        <div style={{
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          color: '#10b981',
          padding: '16px',
          borderRadius: 'var(--border-radius-sm)',
          marginBottom: '24px',
          fontSize: '0.95rem',
          fontWeight: 500
        }}>
          {t.contactPage.formSuccess}
        </div>
      )}

      {status === 'error' && (
        <div style={{
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#ef4444',
          padding: '16px',
          borderRadius: 'var(--border-radius-sm)',
          marginBottom: '24px',
          fontSize: '0.95rem',
          fontWeight: 500
        }}>
          {t.contactPage.formError}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.contactPage.formName} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              disabled={status === 'loading'}
              style={inputStyle}
              required
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.contactPage.formEmail} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={status === 'loading'}
              style={inputStyle}
              required
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="company" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.contactPage.formCompany}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            disabled={status === 'loading'}
            style={inputStyle}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {t.contactPage.formMsg} *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            disabled={status === 'loading'}
            style={{ ...inputStyle, resize: 'vertical' }}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'loading'}
          style={{ width: '100%', marginTop: '10px' }}
        >
          {status === 'loading' ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                <circle cx="12" cy="12" r="10" strokeDasharray="30 30" strokeDashoffset="10"></circle>
              </svg>
              {language === 'ru' ? 'Отправка...' : language === 'uz' ? 'Yuborilmoqda...' : 'Sending...'}
            </span>
          ) : (
            t.contactPage.formSubmit
          )}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '30px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
        <a
          href="https://wa.me/998939722986"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
          style={{
            borderColor: '#25D366',
            color: '#ffffff',
            background: 'rgba(37, 211, 102, 0.08)',
            width: '100%',
            padding: '14px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#25D366' }}>
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.978L2 22l5.233-1.372a9.95 9.95 0 0 0 4.777 1.22h.005c5.505 0 9.987-4.479 9.988-9.986.002-2.67-1.037-5.18-2.927-7.071A9.92 9.92 0 0 0 12.012 2zm5.835 14.129c-.318.895-1.576 1.637-2.184 1.706-.576.064-1.328.096-2.128-.158a10.15 10.15 0 0 1-4.214-2.52c-1.543-1.543-2.529-3.328-2.905-4.385-.376-1.056-.051-1.633.272-1.954.269-.268.583-.637.776-.895.195-.258.258-.431.388-.716.13-.285.065-.536-.032-.73-.097-.195-.873-2.103-1.198-2.883-.316-.761-.643-.659-.876-.671-.225-.01-.482-.012-.739-.012-.258 0-.677.097-1.032.484-.355.387-1.355 1.322-1.355 3.22 0 1.897 1.38 3.733 1.574 3.991.193.258 2.715 4.146 6.577 5.813.92.397 1.637.633 2.197.81.928.295 1.774.253 2.443.153.744-.11 1.576-.452 1.8-.871.226-.419.226-.774.158-.871-.068-.097-.258-.161-.548-.29zm0 0" />
          </svg>
          {language === 'ru' ? 'Связаться в WhatsApp' : language === 'uz' ? 'WhatsApp orqali bog‘lanish' : 'WhatsApp Trade Desk Coordinator'}
        </a>
      </div>
    </div>
  </div>
      </section >

    </div >
  );
}

const inputStyle: React.CSSProperties = {
  background: 'rgba(7, 11, 19, 0.6)',
  border: '1px solid rgba(200, 122, 62, 0.25)',
  borderRadius: 'var(--border-radius-sm)',
  padding: '12px 16px',
  color: 'var(--text-white)',
  fontSize: '0.95rem',
  transition: 'var(--transition-smooth)',
  outline: 'none',
  width: '100%',
  fontFamily: 'inherit'
};

const productIconStyle: React.CSSProperties = {
  width: '38px',
  height: '38px',
};

const stepNumStyle: React.CSSProperties = {
  fontSize: '2rem',
  color: 'var(--primary-copper-hover)',
  fontWeight: 800,
  lineHeight: 1
};

const topGlowStyle: React.CSSProperties = {
  position: 'absolute',
  top: '-10%',
  left: '5%',
  width: '350px',
  height: '350px',
  background: 'radial-gradient(circle, rgba(184, 115, 51, 0.15) 0%, rgba(0,0,0,0) 70%)',
  pointerEvents: 'none',
  filter: 'blur(50px)',
  zIndex: 1
};
