import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Custom IT Solutions',
  description:
    'Purpose-built IT systems designed around your workflows: custom integrations, tooling, and infrastructure for growing businesses.',
  canonical: '/solutions/custom-it-solutions',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
