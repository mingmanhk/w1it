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
  description: "IT managed services, cybersecurity, cloud infrastructure, and digital transformation consulting for businesses across Washington State.",
  keywords: "IT managed services, cybersecurity, cloud infrastructure, network management, Washington IT support, Seattle IT services, Bellevue IT support",
  authors: [{ name: "W1IT Solutions" }],
  metadataBase: new URL("https://w1it.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "./",
    title: "W1IT Solutions | Professional IT Managed Services Provider",
    description: "Comprehensive IT managed services, cybersecurity, and cloud solutions for Washington businesses.",
    siteName: "W1IT Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "W1IT Solutions — Professional IT Managed Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "W1IT Solutions | Professional IT Managed Services Provider",
    description: "Comprehensive IT managed services, cybersecurity, and cloud solutions for Washington businesses.",
    images: ["/og-image.png"],
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
  "telephone": "(832) 472-7991",
  "email": "info@w1it.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
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
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#1a202c" />
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
