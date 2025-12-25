import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://w1it.com'),
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Google Analytics Script */}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C6XYWJB91J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C6XYWJB91J');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
