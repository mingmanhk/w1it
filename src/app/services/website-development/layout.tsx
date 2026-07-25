import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Website Development',
  description:
    'Fast, modern business websites built in Seattle: responsive design, SEO-ready architecture, and ongoing maintenance for small businesses.',
  canonical: '/services/website-development',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
