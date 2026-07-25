import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Digital Transformation',
  description:
    'Modernize legacy systems and workflows: cloud adoption, process automation, and technology roadmaps that move your business forward.',
  canonical: '/solutions/digital-transformation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
