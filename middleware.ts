import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path matches /blog/some-slug
  const blogPostMatch = pathname.match(/^\/blog\/([^\/]+)$/);
  
  if (blogPostMatch) {
    const slug = blogPostMatch[1];
    
    // List of known case study slugs
    const caseStudySlugs = [
      'vmware-veeam-backup-modernization-ferry-company',
      'missing-it-checklist-outage-recovery',
      'fragmented-it-standardized-infrastructure',
      'top-it-mistakes-small-businesses',
      'why-businesses-need-it-documentation',
      'choosing-it-support-model',
      'network-security-remote-teams',
      'wifi-setup-guide-seattle',
      'bilingual-documentation-global-trade',
      'ferry-company-backup-modernization'
    ];
    
    // Map old blog slugs to new case study slugs
    const slugMap: Record<string, string> = {
      'vmware-veeam-backup-modernization-ferry-company': 'ferry-company-backup-modernization',
      // Add other mappings if needed
    };
    
    const targetSlug = slugMap[slug] || slug;
    
    // Only redirect if it's a known case study
    if (caseStudySlugs.includes(targetSlug) || Object.keys(slugMap).includes(slug)) {
      const newUrl = new URL('/case-studies/' + targetSlug, request.url);
      return NextResponse.redirect(newUrl, 301); // Permanent redirect
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/blog/:slug*',
};
