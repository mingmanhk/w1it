import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { isAllowedOrigin, rateLimit } from '@/lib/api-security';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters.').max(200),
  email: z.string().trim().email('Please enter a valid email address.').max(320),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.').max(5000),
});

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json(
      { success: false, message: 'Forbidden' },
      { status: 403 }
    );
  }

  const limited = rateLimit(request, { limit: 5, windowMs: 60_000 });
  if (limited) return limited;

  try {
    const formData = await request.formData();

    const parsed = contactSchema.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company') || undefined,
      message: formData.get('message'),
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? 'Invalid submission',
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.WEB3FORMS_API_KEY;
    if (!apiKey) {
      console.error('Contact form submission error: WEB3FORMS_API_KEY is not configured');
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Forward the validated, trimmed fields to Web3Forms (never the raw formData,
    // so nothing beyond what the schema allows can be injected into the payload).
    const payload = new FormData();
    payload.set('access_key', apiKey);
    payload.set('subject', 'New inquiry from w1it.com');
    payload.set('from_name', 'W1IT Website');
    payload.set('name', parsed.data.name);
    payload.set('email', parsed.data.email);
    if (parsed.data.company) payload.set('company', parsed.data.company);
    payload.set('message', parsed.data.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: payload,
    });

    const data = await response.json();

    if (!response.ok || data?.success === false) {
      console.error('Web3Forms rejected submission:', data);
      return NextResponse.json(
        { success: false, message: 'Failed to send your message. Please try again shortly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: data?.message ?? 'Sent' });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';
