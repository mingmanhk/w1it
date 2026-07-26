import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Services',
  description:
    'Network security assessments, endpoint protection, firewall management, and security training from Seattle experts. Prioritized fixes, not scare reports.',
  canonical: '/services/security',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
