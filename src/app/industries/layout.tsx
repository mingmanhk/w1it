import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Industries We Serve',
  description:
    'IT solutions tailored to transportation, logistics, maritime, professional services, and small businesses across the Greater Seattle area.',
  canonical: '/industries',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
