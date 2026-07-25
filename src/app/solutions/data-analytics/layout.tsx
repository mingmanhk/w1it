import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Data Analytics Solutions',
  description:
    'Turn business data into decisions: dashboards, reporting pipelines, and analytics infrastructure for small and mid-sized businesses.',
  canonical: '/solutions/data-analytics',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
