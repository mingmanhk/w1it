import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Cybersecurity Strategy',
  description:
    'Build a security roadmap that fits your risk profile: assessments, compliance alignment, incident response planning, and staff training.',
  canonical: '/solutions/cybersecurity-strategy',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
