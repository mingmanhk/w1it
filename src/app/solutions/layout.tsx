import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Business IT Solutions',
  description:
    'Strategic IT solutions: data analytics, digital transformation, cybersecurity strategy, website optimization, and custom-built systems.',
  canonical: '/solutions',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
