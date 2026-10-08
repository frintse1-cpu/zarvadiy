/** Shared between the form (client) and the API route (server). */
export const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel serverless request limit is ~4.5 MB
export const ALLOWED_EXT = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'jpg', 'jpeg', 'png'] as const;
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function fileExt(name: string): string {
  const i = name.lastIndexOf('.');
  return i < 0 ? '' : name.slice(i + 1).toLowerCase();
}

/** Campaign source (e.g. a QR code on a stand). Letters, digits, dash, underscore only. */
export function cleanSource(raw: string | null | undefined): string {
  const v = (raw ?? '').trim().toLowerCase();
  return /^[a-z0-9_-]{1,30}$/.test(v) ? v : '';
}
