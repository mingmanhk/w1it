import { NextRequest, NextResponse } from 'next/server';

const ALLOWED_HOSTS = new Set(['w1it.com', 'www.w1it.com']);

/**
 * Validate that a submitted URL belongs to this site (https + w1it.com host).
 * Prevents the public submission endpoints from being abused to submit
 * arbitrary third-party URLs under our search-engine API keys.
 */
export function isOwnSiteUrl(raw: unknown): boolean {
  if (typeof raw !== 'string' || raw.length > 2048) return false;
  try {
    const u = new URL(raw);
    return u.protocol === 'https:' && ALLOWED_HOSTS.has(u.hostname);
  } catch {
    return false;
  }
}

/**
 * Require a shared-secret header for admin/submission endpoints.
 * Set SUBMIT_API_SECRET in the environment (e.g. Vercel project settings)
 * and send it as the `x-api-key` header. If the secret is not configured,
 * the endpoint is disabled (503) rather than left open.
 *
 * Returns null when authorized, otherwise a ready-to-return error response.
 */
export function requireApiSecret(request: NextRequest): NextResponse | null {
  const secret = process.env.SUBMIT_API_SECRET;
  if (!secret) {
    return NextResponse.json(
      { success: false, message: 'Endpoint disabled: SUBMIT_API_SECRET is not configured' },
      { status: 503 }
    );
  }
  const provided = request.headers.get('x-api-key');
  if (provided !== secret) {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    );
  }
  return null;
}

/**
 * Verify the request originates from our own site (Origin or Referer).
 * Used by the public contact endpoint to reject cross-site/scripted spam
 * that bypasses the browser form.
 */
export function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get('origin') ?? request.headers.get('referer');
  if (!origin) return true; // same-origin non-CORS requests may omit both
  try {
    const u = new URL(origin);
    return (
      ALLOWED_HOSTS.has(u.hostname) ||
      u.hostname === 'localhost' ||
      u.hostname.endsWith('.vercel.app')
    );
  } catch {
    return false;
  }
}
