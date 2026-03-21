import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import ThemeProvider from "@/components/ThemeProvider";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "W1IT Solutions | Professional IT Managed Services Provider",
    template: "%s | W1IT Solutions"
  },
  description: "W1IT Solutions provides comprehensive IT managed services, cybersecurity solutions, cloud infrastructure, and digital transformation consulting for businesses in Washington State.",
  keywords: "IT managed services, cybersecurity, cloud infrastructure, network management, Washington IT support, Seattle IT services, Bellevue IT support",
  authors: [{ name: "W1IT Solutions" }],
  metadataBase: new URL("https://w1it.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://w1it.com",
    title: "W1IT Solutions | Professional IT Managed Services Provider",
    description: "Comprehensive IT managed services, cybersecurity, and cloud solutions for Washington businesses.",
    siteName: "W1IT Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "W1IT Solutions | Professional IT Managed Services Provider",
    description: "Comprehensive IT managed services, cybersecurity, and cloud solutions for Washington businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a202c" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "W1IT Solutions",
  "image": "https://w1it.com/images/logo.png",
  "url": "https://w1it.com",
  "telephone": "+1-206-123-4567",
  "email": "info@w1it.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1234 Tech Street",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6062,
    "longitude": -122.3321
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#1a202c" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          <ScrollProgress />
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
