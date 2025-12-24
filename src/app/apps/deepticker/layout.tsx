import { Metadata } from 'next';
import { generateSEO, generateSoftwareApplicationSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'DeepTicker - Stock Search & Watchlist iOS App',
  description:
    'Powerful iOS stock search app with real-time performance tracking and intelligent watchlist management. Track stocks, analyze trends, and manage your portfolio on the go. Coming November 2025.',
  keywords: [
    'stock app iOS',
    'stock search app',
    'watchlist app',
    'stock portfolio tracker',
    'real-time stock tracking',
    'iOS finance app',
    'stock market app',
    'investment tracker',
    'stock ticker iOS',
  ],
  canonical: '/apps/deepticker',
  openGraph: {
    title: 'DeepTicker - Stock Search & Watchlist iOS App',
    description: 'Real-time stock tracking and intelligent watchlist management for iOS.',
    type: 'website',
    images: ['/DeepTicker.png'],
  },
});

export default function DeepTickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'DeepTicker',
    description:
      'A powerful stock search app with real-time performance tracking and intelligent watchlist management for iOS.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS',
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
