import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cloud Solutions & Migration',
  description:
    'Cloud migration, hosting, and infrastructure services for Seattle businesses. Secure, scalable solutions on AWS, Azure, and Google Cloud.',
  canonical: '/services/cloud-solutions',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
