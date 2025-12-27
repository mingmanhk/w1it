import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://w1it.com'),
  viewport: 'width=device-width, initial-scale=1',
  title: {
    default: "W1 IT Solutions | Seattle-Based IT Services & Cloud Solutions",
    template: "%s | W1 IT Solutions"
  },
  description: "Seattle-based IT solutions provider specializing in serverless migration, cloud infrastructure, and managed IT services. Transform your business with cutting-edge technology.",
  keywords: [
    "Seattle IT services",
    "serverless migration",
    "cloud solutions Seattle",
    "IT consulting Seattle",
    "managed IT services",
    "cloud infrastructure",
    "IT support Seattle",
    "technology solutions",
  ],
  authors: [{ name: "W1 IT Solutions" }],
  creator: "W1 IT Solutions",
  publisher: "W1 IT Solutions",
  icons: {
    icon: [
      { url: '/images/optimized/favicon.ico' },
      { url: '/images/optimized/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/optimized/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/images/optimized/apple-touch-icon.png' },
    ],
  },
  openGraph: {
    title: "W1 IT Solutions | Seattle-Based IT Services",
    description: "Transform your business with cutting-edge IT solutions from Seattle's premier technology partner.",
    url: "https://w1it.com",
    siteName: "W1 IT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "W1 IT Solutions | Seattle IT Services",
    description: "Transform your business with cutting-edge IT solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTopButton />
        <Analytics />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
