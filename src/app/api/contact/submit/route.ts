import { NextRequest, NextResponse } from 'next/server';
import { isAllowedOrigin, rateLimit } from '@/lib/api-security';

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

    // Basic field sanity limits before forwarding
    let totalBytes = 0;
    for (const [, value] of formData.entries()) {
      if (typeof value === 'string') {
        totalBytes += value.length;
        if (value.length > 5000) {
          return NextResponse.json(
            { success: false, message: 'Field too long' },
            { status: 400 }
          );
        }
      }
    }
    if (totalBytes > 20000) {
      return NextResponse.json(
        { success: false, message: 'Submission too large' },
        { status: 400 }
      );
    }
    const email = formData.get('email');
    if (typeof email === 'string' && email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Add the API key from environment variable
    const apiKey = process.env.WEB3FORMS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: 'Server configuration error' },
        { status: 500 }
      );
    }

    formData.append('access_key', apiKey);

    // Forward to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export const runtime = 'edge';