'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function PrivacyView() {
  const { t } = useLanguage();
  const d = t.privacy;
  return (
    <>
      <section className="plain-hero" aria-labelledby="page-title">
        <div className="container">
          <h1 id="page-title">{d.title}</h1>
          <p className="lead">{d.updated}</p>
        </div>
      </section>
      <section className="section section--ivory">
        <div className="container">
          <div className="prose">
            {d.sections.map((s) => (
              <div key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
