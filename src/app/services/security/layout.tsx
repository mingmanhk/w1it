import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Services',
  description:
    'Protect your business with security assessments, endpoint protection, firewall management, and employee security training from Seattle experts.',
  canonical: '/services/security',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
