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
    default: "W1IT | Enterprise-Grade IT Support for Small Businesses in Bellevue, WA",
    template: "%s | W1IT Solutions"
  },
  description: "Bellevue-based IT support designed for small businesses. Get enterprise-grade managed services, 24/7 monitoring, security, and expert help desk support without the complexity. Serving Seattle Metro Area.",
  keywords: [
    "Bellevue IT support",
    "small business IT services",
    "managed IT services Seattle",
    "IT support small business",
    "Bellevue managed services",
    "Seattle IT consulting",
    "business technology support",
    "enterprise IT for small business",
    "24/7 IT support",
    "proactive IT monitoring",
  ],
  authors: [{ name: "W1IT Solutions" }],
  creator: "W1IT Solutions",
  publisher: "W1IT Solutions",
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
    title: "W1IT | Enterprise-Grade IT Support for Small Businesses",
    description: "Bellevue-based IT support designed for small business success. Get enterprise-grade services without the complexity. Serving Seattle Metro Area.",
    url: "https://w1it.com",
    siteName: "W1IT Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "W1IT | IT Support for Small Businesses in Bellevue",
    description: "Enterprise-grade IT support built for small business success. 24/7 monitoring, security, and expert help desk.",
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
