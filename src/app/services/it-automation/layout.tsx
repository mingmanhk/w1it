import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'IT Automation Services',
  description:
    'Automate repetitive IT tasks: scripting, workflow automation, monitoring, and self-healing infrastructure for Seattle businesses.',
  canonical: '/services/it-automation',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
