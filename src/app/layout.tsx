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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
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
        <script
          // Set the theme attribute before paint to avoid a flash of the wrong theme
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();",
          }}
        />
        <meta name="msapplication-TileColor" content="#1a202c" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-surface-0 text-fg`}>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-surface-0 focus:text-fg focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg"
          >
            Skip to main content
          </a>
          <ScrollProgress />
          <Header />
          <main id="main-content" className="min-h-screen pt-16">{children}</main>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
