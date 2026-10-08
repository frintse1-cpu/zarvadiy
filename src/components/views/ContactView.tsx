'use client';

import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../../context/LanguageContext';
import { SITE } from '../../lib/site';
import ContactForm from '../ContactForm';

export default function ContactView() {
  const { t } = useLanguage();
  const params = useSearchParams();
  const d = t.contact;
  return (
    <>
      <section className="plain-hero" aria-labelledby="page-title">
        <div className="container">
          <span className="eyebrow">{d.eyebrow}</span>
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.lead}</p>
        </div>
      </section>
      <section className="section section--ivory" style={{ paddingTop: 'clamp(48px,6vw,80px)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="form-card">
              <ContactForm key={params.toString()} />
            </div>
            <aside className="contact-card sticky-col" aria-labelledby="direct-title">
              <h2 id="direct-title">{d.directTitle}</h2>
              <dl className="contact-list">
                <div><dt>{d.email}</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
                <div><dt>{d.whatsapp}</dt><dd><a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">{SITE.phoneDisplay}</a></dd></div>
                <div><dt>{d.telegram}</dt><dd><a href={SITE.telegram} target="_blank" rel="noopener noreferrer">@zarvadiy</a></dd></div>
                <div><dt>{d.linkedin}</dt><dd><a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">ZARVADIY</a></dd></div>
                <div><dt>{d.instagram}</dt><dd><a href={SITE.instagram} target="_blank" rel="noopener noreferrer">@zarvadiy</a></dd></div>
                <div><dt>{d.location}</dt><dd>{d.locationValue}</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
