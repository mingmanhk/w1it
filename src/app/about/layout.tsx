import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Us - Seattle IT Experts',
  description:
    'Meet W1IT Solutions: a Seattle-based IT team delivering managed services, cybersecurity, and cloud expertise with bilingual English/Chinese support.',
  canonical: '/about',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
