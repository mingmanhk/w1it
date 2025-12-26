import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

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