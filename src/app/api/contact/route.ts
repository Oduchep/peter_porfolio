import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

import { contactFormSchema } from '@/schema/contactFormSchema';

export const runtime = 'nodejs';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = await contactFormSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
      process.env;
    const toEmail = CONTACT_TO_EMAIL || 'oduchep@gmail.com';
    const fromEmail = process.env.CONTACT_FROM_EMAIL || SMTP_USER;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !fromEmail) {
      return NextResponse.json(
        {
          message:
            'Email delivery is not configured yet. Add the SMTP environment variables and try again.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const submittedAt = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
      timeZone: 'Africa/Lagos',
    }).format(new Date());

    const subject = `Portfolio inquiry: ${payload.service} from ${payload.full_name}`;
    const safeName = escapeHtml(payload.full_name);
    const safeEmail = escapeHtml(payload.email);
    const safeService = escapeHtml(payload.service);
    const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br />');

    await transporter.sendMail({
      from: `Portfolio Contact <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject,
      text: [
        'You received a new portfolio enquiry.',
        '',
        `Name: ${payload.full_name}`,
        `Email: ${payload.email}`,
        `Service: ${payload.service}`,
        `Submitted: ${submittedAt}`,
        '',
        'Message:',
        payload.message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin-bottom: 12px;">New portfolio enquiry</h2>
          <p style="margin-top: 0;">Someone submitted your contact form.</p>
          <table style="border-collapse: collapse; width: 100%; margin: 24px 0;">
            <tr>
              <td style="padding: 10px 0; font-weight: 700; width: 120px;">Name</td>
              <td style="padding: 10px 0;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Email</td>
              <td style="padding: 10px 0;">${safeEmail}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Service</td>
              <td style="padding: 10px 0;">${safeService}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: 700;">Submitted</td>
              <td style="padding: 10px 0;">${submittedAt}</td>
            </tr>
          </table>
          <div>
            <p style="margin-bottom: 8px; font-weight: 700;">Message</p>
            <div style="padding: 16px; border-radius: 12px; background: #f8fafc; border: 1px solid #e2e8f0;">
              ${safeMessage}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    if (error instanceof Error && error.name === 'ValidationError') {
      return NextResponse.json(
        {
          message: 'Please check the form fields and try again.',
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message:
          'Something went wrong while sending your message. Please try again.',
      },
      { status: 500 }
    );
  }
}
