import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Website Optimization',
  description:
    'Speed, SEO, and conversion optimization for business websites: Core Web Vitals, on-page SEO, and performance tuning that delivers results.',
  canonical: '/solutions/website-optimization',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
