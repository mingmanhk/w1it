import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Managed IT Services',
  description:
    'Proactive managed IT services in Seattle: 24/7 monitoring, patching, help desk support, and predictable monthly pricing for your business.',
  canonical: '/services/managed-services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
