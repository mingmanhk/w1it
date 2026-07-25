import type { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Our Apps - macOS & iOS Tools',
  description:
    'Productivity apps built by W1IT: Contact SyncMate, DeepTicker, Pixel Color Picker, and ScreenGrabber for macOS and iOS.',
  canonical: '/apps',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
