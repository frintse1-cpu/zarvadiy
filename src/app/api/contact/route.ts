import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { ALLOWED_EXT, EMAIL_RE, MAX_FILE_BYTES, cleanSource, fileExt } from '../../../lib/rfq';

export const runtime = 'nodejs';

/* Best-effort in-memory rate limit (per server instance). */
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_HITS;
}

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const clean = (v: FormDataEntryValue | null, max: number) =>
  (typeof v === 'string' ? v : '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const oneLine = (s: string) => s.replace(/[\r\n]+/g, ' ');

const TOPICS = ['industrial', 'food', 'gift', 'technology', 'export', 'uzbekistan', 'other'] as const;
const TOPIC_LABEL: Record<(typeof TOPICS)[number], string> = {
  industrial: 'Industrial products & HVAC/R',
  food: 'Dried fruits & nuts',
  gift: 'Gift collection',
  technology: 'Technology (Telecom & Connectivity)',
  export: 'Export development (Uzbek producer)',
  uzbekistan: 'Entering the Uzbek market',
  other: 'Other',
};

export async function POST(request: Request) {
  try {
    const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim();
    if (limited(ip)) return NextResponse.json({ error: 'rate' }, { status: 429 });

    const fd = await request.formData();

    // Honeypot: pretend success so bots learn nothing.
    if (clean(fd.get('website'), 200)) return NextResponse.json({ success: true });

    const name = clean(fd.get('name'), 120);
    const company = clean(fd.get('company'), 160);
    const email = clean(fd.get('email'), 160);
    const phone = clean(fd.get('phone'), 40);
    const product = clean(fd.get('product'), 30);
    const quantity = clean(fd.get('quantity'), 120);
    const country = clean(fd.get('country'), 80);
    const deliveryDate = clean(fd.get('deliveryDate'), 20);
    const incoterm = clean(fd.get('incoterm'), 10);
    const message = clean(fd.get('message'), 4000);
    const lang = clean(fd.get('lang'), 4);
    const source = cleanSource(clean(fd.get('source'), 40));

    if (!name || !company || !email || !phone || !country || !message || !EMAIL_RE.test(email) || !(TOPICS as readonly string[]).includes(product)) {
      return NextResponse.json({ error: 'invalid' }, { status: 400 });
    }

    let attachments: { filename: string; content: Buffer }[] | undefined;
    const file = fd.get('file');
    if (file instanceof File && file.size > 0) {
      if (file.size > MAX_FILE_BYTES || !(ALLOWED_EXT as readonly string[]).includes(fileExt(file.name))) {
        return NextResponse.json({ error: 'file' }, { status: 400 });
      }
      const safeName = file.name.replace(/[^\w.\- ]+/g, '_').slice(0, 100);
      attachments = [{ filename: safeName, content: Buffer.from(await file.arrayBuffer()) }];
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'config' }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const topic = TOPIC_LABEL[product as (typeof TOPICS)[number]];
    const row = (k: string, v: string) =>
      v ? `<tr><td style="padding:6px 16px 6px 0;color:#555"><strong>${k}</strong></td><td style="padding:6px 0">${esc(v)}</td></tr>` : '';

    const { error } = await resend.emails.send({
      from: 'ZARVADIY Website <noreply@zarvadiy.com>',
      to: 'info@zarvadiy.com',
      replyTo: email,
      subject: oneLine(`New RFQ — ${topic} — ${company}${source ? ` [${source}]` : ''}`),
      html: `
        <h2 style="color:#0a1628;margin:0 0 16px">New request from the website</h2>
        <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
          ${row('Name', name)}${row('Company', company)}${row('Email', email)}${row('Phone / WhatsApp', phone)}
          ${row('Topic', topic)}${row('Quantity', quantity)}${row('Destination', country)}
          ${row('Required date', deliveryDate)}${row('Incoterm', incoterm)}${row('Site language', lang)}${row('Source', source)}
        </table>
        <p style="margin:20px 0 6px;font-family:Arial,sans-serif"><strong>Message</strong></p>
        <div style="white-space:pre-wrap;font-family:Arial,sans-serif;font-size:14px">${esc(message)}</div>
        ${attachments ? '<p style="font-family:Arial,sans-serif;color:#555">Attachment included.</p>' : ''}
      `,
      attachments,
    });
    if (error) {
      console.error('Resend error', error);
      return NextResponse.json({ error: 'send' }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('contact route failed', err);
    return NextResponse.json({ error: 'server' }, { status: 500 });
  }
}
