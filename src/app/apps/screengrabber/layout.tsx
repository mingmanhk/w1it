import { Metadata } from 'next';
import { generateSEO, generateSoftwareApplicationSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'ScreenGrabber - Modern macOS Screenshot App',
  description:
    'Powerful, modern macOS screenshot application with global hotkey support and intelligent organization. Capture, annotate, and organize screenshots effortlessly. Coming November 2025.',
  keywords: [
    'screenshot app macOS',
    'screen capture macOS',
    'ScreenGrabber',
    'macOS screenshot tool',
    'screen recording macOS',
    'screenshot organizer',
    'hotkey screenshot',
    'productivity macOS',
  ],
  canonical: '/apps/screengrabber',
  openGraph: {
    title: 'ScreenGrabber - Modern macOS Screenshot App',
    description: 'Powerful screenshot app with global hotkeys and intelligent organization.',
    type: 'website',
    images: ['/ScreenGrabber.png'],
  },
});

export default function ScreenGrabberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'ScreenGrabber',
    description:
      'A powerful, modern macOS screenshot application with global hotkey support and intelligent organization.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS',
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      {children}
    </>
  );
}
