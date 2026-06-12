import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, company, phone, message } = await request.json();

        await resend.emails.send({
            from: 'Zarvadiy Trade Desk <noreply@zarvadiy.com>',
            to: '',
            subject: `New RFQ from ${company || name}`,
            html: `
        <h2 style="color:#b87333">New Industrial RFQ — Zarvadiy</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
}