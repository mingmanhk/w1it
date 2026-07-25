import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Client Testimonials',
  description:
    'What clients say about W1IT Solutions: real feedback on our managed IT services, network setup, and technical support in Seattle and beyond.',
  canonical: '/testimonials',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
