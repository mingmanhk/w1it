import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'IT Services in Seattle',
  description:
    'Full-service IT for Seattle businesses: managed services, cloud solutions, network setup, security, remote support, and technical writing.',
  canonical: '/services',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
