import { Metadata } from 'next';
import { generateSEO, generateSoftwareApplicationSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact SyncMate - Google & Apple Contacts Sync macOS',
  description:
    'Keep your Google Contacts and Apple Contacts in perfect sync with powerful 2-way sync capabilities. Never lose contact information again. macOS app coming November 2025.',
  keywords: [
    'contact sync macOS',
    'Google Contacts sync',
    'Apple Contacts sync',
    'contact synchronization',
    'iCloud contacts sync',
    'contact manager macOS',
    'two-way contact sync',
    'Contact SyncMate',
  ],
  canonical: '/apps/contact-syncmate',
  openGraph: {
    title: 'Contact SyncMate - Google & Apple Contacts Sync',
    description: 'Perfect 2-way sync between Google Contacts and Apple Contacts on macOS.',
    type: 'website',
    images: ['/Contact SyncMate Icon.png'],
  },
});

export default function ContactSyncMateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'Contact SyncMate',
    description:
      'Keep your Google Contacts and Apple Contacts in perfect sync with powerful 2-way sync capabilities for macOS.',
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
