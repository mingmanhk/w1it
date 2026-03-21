import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "W1IT Solutions | IT Managed Services for Washington Businesses",
  description: "Professional IT managed services, cybersecurity, cloud solutions, and network management for businesses in Seattle, Bellevue, Tacoma, and across Washington State.",
  keywords: "IT managed services, cybersecurity, cloud solutions, Washington IT support, Seattle IT services, Bellevue IT support, Tacoma IT services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        
        {/* Structured Data - LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "W1IT Solutions",
              "image": "https://w1it.com/images/logo.png",
              "@id": "https://w1it.com",
              "url": "https://w1it.com",
              "telephone": "+1-206-123-4567",
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
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.facebook.com/w1itsolutions",
                "https://www.linkedin.com/company/w1it-solutions",
                "https://twitter.com/w1itsolutions"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
