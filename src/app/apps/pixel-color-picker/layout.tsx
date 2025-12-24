import { Metadata } from 'next';
import { generateSEO, generateSoftwareApplicationSchema } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Pixel Color Picker - Fast macOS Color Picker App',
  description:
    'The fastest, most elegant macOS color picker app. Pick colors with pixel-perfect precision, interactive color wheel, format conversion, and smart history. Free, offline, open-source. Perfect for designers and developers.',
  keywords: [
    'color picker macOS',
    'pixel color picker',
    'macOS design tools',
    'color picker app',
    'SwiftUI color picker',
    'screen color picker',
    'eyedropper tool macOS',
    'color format converter',
    'hex color picker',
    'RGB color picker',
    'design tools macOS',
  ],
  canonical: '/apps/pixel-color-picker',
  openGraph: {
    title: 'Pixel Color Picker - Fast macOS Color Picker App',
    description: 'Pick colors with pixel-perfect precision. Free, offline, open-source macOS app.',
    type: 'website',
    images: ['/PixelColorPicker.png'],
  },
});

export default function PixelColorPickerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const softwareSchema = generateSoftwareApplicationSchema({
    name: 'Pixel Color Picker',
    description:
      'The fastest, most elegant way to capture, explore, and copy colors on macOS with pixel-perfect precision.',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'macOS',
    offers: {
      price: '0',
      priceCurrency: 'USD',
    },
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
