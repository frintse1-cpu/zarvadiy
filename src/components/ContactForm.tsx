'use client';

import Link from 'next/link';
import { useRef, useState, useEffect, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { INCOTERMS, TOPIC_KEYS, type TopicKey } from '../lib/site';
import { ALLOWED_EXT, EMAIL_RE, MAX_FILE_BYTES, cleanSource, fileExt } from '../lib/rfq';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'rate';
type Errors = Partial<Record<'name' | 'company' | 'email' | 'phone' | 'product' | 'country' | 'message' | 'file', string>>;

export default function ContactForm() {
  const { t, language } = useLanguage();
  const f = t.form;
  const params = useSearchParams();
  const topicParam = params.get('topic');
  const initialTopic = (TOPIC_KEYS as string[]).includes(topicParam ?? '') ? (topicParam as TopicKey) : '';

  const source = cleanSource(params.get('source') ?? params.get('utm_source'));

  const specIdx = Number(params.get('spec'));
  const specTitle = Number.isInteger(specIdx) ? t.industrial.products[specIdx]?.title : undefined;
  const messageDefault = specTitle ? `${f.specPrefill} ${specTitle}` : '';

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [topic, setTopic] = useState<string>(initialTopic);
  const formRef = useRef<HTMLFormElement>(null);
  const lockRef = useRef(false); // synchronous guard against double submit
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === 'error' || status === 'rate' || status === 'success') && alertRef.current) {
      alertRef.current.focus();
    }
  }, [status]);

  function validate(fd: FormData): Errors {
    const e: Errors = {};
    const v = (k: string) => String(fd.get(k) ?? '').trim();
    (['name', 'company', 'phone', 'product', 'country', 'message'] as const).forEach((k) => {
      if (!v(k)) e[k] = f.errors.required;
    });
    if (!v('email')) e.email = f.errors.required;
    else if (!EMAIL_RE.test(v('email'))) e.email = f.errors.email;
    const file = fd.get('file');
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_FILE_BYTES) e.file = f.errors.fileSize;
      else if (!(ALLOWED_EXT as readonly string[]).includes(fileExt(file.name))) e.file = f.errors.fileType;
    }
    return e;
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (lockRef.current) return;
    const fd = new FormData(ev.currentTarget);
    const e = validate(fd);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    lockRef.current = true;
    setStatus('sending');
    fd.set('lang', language);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: fd });
      if (res.ok) {
        setStatus('success');
        formRef.current?.reset();
        setTopic('');
      } else if (res.status === 429) {
        setStatus('rate');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      lockRef.current = false;
    }
  }

  const sending = status === 'sending';
  const err = (k: keyof Errors) => (errors[k] ? `${k}-err` : undefined);
  const consentParts = f.consent.split('{link}');

  if (status === 'success') {
    return (
      <div className="success-panel" ref={alertRef} tabIndex={-1} role="status">
        <h2>{f.successTitle}</h2>
        <p>{f.successText}</p>
        <button type="button" className="btn btn-dark" onClick={() => setStatus('idle')}>{f.again}</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate aria-busy={sending}>
      {(status === 'error' || status === 'rate') && (
        <div className="alert alert--error" role="alert" ref={alertRef} tabIndex={-1}>
          <strong>{f.errorTitle}</strong>
          {status === 'rate' ? f.rateText : f.errorText}
        </div>
      )}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert--error" role="alert">{f.errors.summary}</div>
      )}

      <div className="field-grid">
        <div className="field">
          <label htmlFor="name">{f.name} *</label>
          <input id="name" name="name" autoComplete="name" required maxLength={120} disabled={sending}
            aria-invalid={!!errors.name} aria-describedby={err('name')} />
          {errors.name && <span className="field-error" id="name-err">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="company">{f.company} *</label>
          <input id="company" name="company" autoComplete="organization" required maxLength={160} disabled={sending}
            aria-invalid={!!errors.company} aria-describedby={err('company')} />
          {errors.company && <span className="field-error" id="company-err">{errors.company}</span>}
        </div>
        <div className="field">
          <label htmlFor="email">{f.email} *</label>
          <input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={160} disabled={sending}
            aria-invalid={!!errors.email} aria-describedby={err('email')} />
          {errors.email && <span className="field-error" id="email-err">{errors.email}</span>}
        </div>
        <div className="field">
          <label htmlFor="phone">{f.phone} *</label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required maxLength={40} disabled={sending}
            aria-invalid={!!errors.phone} aria-describedby={err('phone')} />
          {errors.phone && <span className="field-error" id="phone-err">{errors.phone}</span>}
        </div>
        <div className="field field--full">
          <label htmlFor="product">{f.product} *</label>
          <select id="product" name="product" required value={topic} onChange={(e) => setTopic(e.target.value)} disabled={sending}
            aria-invalid={!!errors.product} aria-describedby={err('product')}>
            <option value="">{f.productPlaceholder}</option>
            {TOPIC_KEYS.map((k) => (
              <option key={k} value={k}>{f.products[k]}</option>
            ))}
          </select>
          {errors.product && <span className="field-error" id="product-err">{errors.product}</span>}
        </div>
        <div className="field">
          <label htmlFor="quantity">{f.quantity} <span className="opt">({f.optional})</span></label>
          <input id="quantity" name="quantity" placeholder={f.quantityPlaceholder} maxLength={120} disabled={sending} />
        </div>
        <div className="field">
          <label htmlFor="country">{f.country} *</label>
          <input id="country" name="country" autoComplete="country-name" required maxLength={80} disabled={sending}
            aria-invalid={!!errors.country} aria-describedby={err('country')} />
          {errors.country && <span className="field-error" id="country-err">{errors.country}</span>}
        </div>
        <div className="field">
          <label htmlFor="deliveryDate">{f.deliveryDate} <span className="opt">({f.optional})</span></label>
          <input id="deliveryDate" name="deliveryDate" type="date" disabled={sending} />
        </div>
        <div className="field">
          <label htmlFor="incoterm">{f.incoterm} <span className="opt">({f.optional})</span></label>
          <select id="incoterm" name="incoterm" defaultValue="" disabled={sending}>
            <option value="">{f.incotermPlaceholder}</option>
            {INCOTERMS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
            <option value="unsure">{f.incotermUnsure}</option>
          </select>
        </div>
        <div className="field field--full">
          <label htmlFor="message">{f.message} *</label>
          <textarea id="message" name="message" required defaultValue={messageDefault} maxLength={4000} placeholder={f.messagePlaceholder} disabled={sending}
            aria-invalid={!!errors.message} aria-describedby={err('message')} />
          {errors.message && <span className="field-error" id="message-err">{errors.message}</span>}
        </div>
        <div className="field field--full">
          <label htmlFor="file">{f.file} <span className="opt">({f.optional})</span></label>
          <input id="file" name="file" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.jpg,.jpeg,.png" disabled={sending}
            aria-invalid={!!errors.file} aria-describedby={errors.file ? 'file-err' : 'file-hint'} />
          {errors.file ? <span className="field-error" id="file-err">{errors.file}</span> : <span className="field-hint" id="file-hint">{f.fileHint}</span>}
        </div>
        <input type="hidden" name="source" value={source} />
        {/* honeypot: hidden from people, tempting for bots */}
        <div className="hp" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? f.sending : f.submit}
        </button>
        <p className="consent">
          {consentParts[0]}
          <Link href="/privacy">{f.consentLink}</Link>
          {consentParts[1]}
        </p>
      </div>
    </form>
  );
}
