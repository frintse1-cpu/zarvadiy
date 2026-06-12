'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };
  return (
    <div className="glass-card" style={{ maxWidth: '650px', margin: '0 auto' }}>
      <h3 style={{
        fontSize: '1.75rem',
        color: 'var(--text-white)',
        marginBottom: '10px'
      }}>
        {t.contactPage.formTitle}
      </h3>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.95rem',
        marginBottom: '30px'
      }}>
        {t.contactPage.formSubtitle}
      </p>

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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="phone" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {t.contactPage.formPhone}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={status === 'loading'}
              style={inputStyle}
            />
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
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" style={{ animation: 'spin 1s linear infinite' }}>
                <circle cx="12" cy="12" r="10" strokeDasharray="30 30" strokeDashoffset="10"></circle>
              </svg>
              Sending...
            </span>
          ) : (
            t.contactPage.formSubmit
          )}
        </button>
      </form>

      <style jsx global>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const inputStyle = {
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
// Handle focus style dynamically in React if needed or rely on plain CSS variables inside the global styles, but let's just make sure it stays tidy.
export default ContactForm;
