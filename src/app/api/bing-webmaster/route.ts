import { NextRequest, NextResponse } from 'next/server';
import { submitUrlToBing, submitContentToBing } from '@/lib/bing';

export const runtime = 'edge';

const SITE_URL = 'https://w1it.com';

/**
 * POST /api/bing-webmaster
 * Submit URL or content to Bing Webmaster Tools
 *
 * Request body:
 * - URL submission: { "url": "https://w1it.com/blog/new-post" }
 * - Content submission: { "url": "https://w1it.com/blog/new-post", "httpMessage": "...", "type": "content" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.url) {
      return NextResponse.json(
        {
          success: false,
          message: 'URL is required',
        },
        { status: 400 }
      );
    }

    // Content submission with HTTP message
    if (body.type === 'content' && body.httpMessage) {
      const result = await submitContentToBing({
        siteUrl: SITE_URL,
        url: body.url,
        httpMessage: body.httpMessage,
      });

      if (result) {
        return NextResponse.json(
          {
            success: true,
            message: 'Content submitted successfully to Bing',
            url: body.url,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message: 'Failed to submit content to Bing',
          },
          { status: 500 }
        );
      }
    }

    // URL submission (default)
    const result = await submitUrlToBing(SITE_URL, body.url);

    if (result) {
      return NextResponse.json(
        {
          success: true,
          message: 'URL submitted successfully to Bing',
          url: body.url,
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to submit URL to Bing',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Bing Webmaster API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process Bing Webmaster submission',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
