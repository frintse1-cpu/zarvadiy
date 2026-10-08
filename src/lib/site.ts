/** Single source of truth for company facts and contact links. */
export const SITE = {
  name: 'ZARVADIY',
  legalName: 'ZARVADIY MChJ (LLC)',
  url: 'https://www.zarvadiy.com',
  email: 'info@zarvadiy.com',
  phoneDisplay: '+998 93 972 29 86',
  phoneTel: '+998939722986',
  whatsapp: 'https://wa.me/998939722986',
  telegram: 'https://t.me/zarvadiy',
  linkedin: 'https://linkedin.com/company/zarvadiy-llc',
  instagram: 'https://instagram.com/zarvadiy',
  ogImage: '/images/og-home.jpg',
} as const;

export type TopicKey = 'industrial' | 'food' | 'gift' | 'technology' | 'export' | 'uzbekistan' | 'other';
export const TOPIC_KEYS: TopicKey[] = ['industrial', 'food', 'gift', 'technology', 'export', 'uzbekistan', 'other'];
export const INCOTERMS = ['EXW', 'FCA', 'FOB', 'CIF', 'CIP', 'DAP', 'DDP'] as const;
