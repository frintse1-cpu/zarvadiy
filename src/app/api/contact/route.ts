import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { name, email, company, phone, message, division } = await request.json();

        const isAgro = division === 'agro';
        const title = isAgro ? 'New Agriculture RFQ — Zarvadiy' : 'New Industrial RFQ — Zarvadiy';
        const titleColor = isAgro ? '#1e3d32' : '#b87333';
        const subject = isAgro ? `New Agro RFQ from ${company || name}` : `New RFQ from ${company || name}`;

        await resend.emails.send({
            from: 'Zarvadiy Trade Desk <noreply@zarvadiy.com>',
            to: 'info@zarvadiy.com',
            subject: subject,
            html: `
        <h2 style="color:${titleColor}">${title}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong><br/>${message}</p>
      `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
}