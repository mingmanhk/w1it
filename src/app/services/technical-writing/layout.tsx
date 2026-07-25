import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Technical Writing Services',
  description:
    'Professional technical writing and bilingual English-Chinese documentation: IT runbooks, user guides, SOPs, and knowledge bases.',
  canonical: '/services/technical-writing',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
