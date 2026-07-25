'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const SITE_URL = 'https://w1it.com';

function humanize(segment: string): string {
  return segment
    .split('-')
    .map(w => (w === 'it' ? 'IT' : w === 'wifi' ? 'WiFi' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

/**
 * Breadcrumb trail derived from the current pathname, with matching
 * BreadcrumbList JSON-LD. Renders nothing on the home page or on
 * top-level pages (a one-item trail adds no value).
 */
export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 2) return null;

  const crumbs = [
    { name: 'Home', href: '/' },
    ...segments.map((seg, i) => ({
      name: humanize(seg),
      href: '/' + segments.slice(0, i + 1).join('/'),
    })),
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href === '/' ? '' : c.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-[1200px] mx-auto px-6 pt-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />}
              {last ? (
                <span aria-current="page" className="font-medium text-gray-700 dark:text-gray-200 line-clamp-1">
                  {c.name}
                </span>
              ) : (
                <Link href={c.href} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
