import { NextRequest, NextResponse } from 'next/server';
import { submitUrlToIndexNow, submitBatchToIndexNow } from '@/lib/indexnow';

export const runtime = 'edge';

/**
 * POST /api/indexnow
 * Submit URL(s) to IndexNow for instant indexing
 *
 * Request body:
 * - Single URL: { "url": "https://w1it.com/blog/new-post" }
 * - Multiple URLs: { "urls": ["https://w1it.com/page1", "https://w1it.com/page2"] }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Single URL submission
    if (body.url) {
      const result = await submitUrlToIndexNow(body.url);

      if (result.success) {
        return NextResponse.json(
          {
            success: true,
            message: result.message,
            url: body.url,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message: result.message,
            statusCode: result.statusCode,
          },
          { status: result.statusCode || 500 }
        );
      }
    }

    // Batch URL submission
    if (body.urls && Array.isArray(body.urls)) {
      if (body.urls.length === 0) {
        return NextResponse.json(
          {
            success: false,
            message: 'URLs array cannot be empty',
          },
          { status: 400 }
        );
      }

      if (body.urls.length > 10000) {
        return NextResponse.json(
          {
            success: false,
            message: 'Maximum 10,000 URLs allowed per batch',
          },
          { status: 400 }
        );
      }

      const result = await submitBatchToIndexNow(body.urls);

      if (result.success) {
        return NextResponse.json(
          {
            success: true,
            message: result.message,
            count: body.urls.length,
          },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          {
            success: false,
            message: result.message,
            statusCode: result.statusCode,
          },
          { status: result.statusCode || 500 }
        );
      }
    }

    // Invalid request
    return NextResponse.json(
      {
        success: false,
        message: 'Request must include either "url" (string) or "urls" (array)',
      },
      { status: 400 }
    );
  } catch (error) {
    console.error('IndexNow API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process IndexNow submission',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
