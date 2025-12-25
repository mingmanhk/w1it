import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PerformanceMonitor from "@/components/PerformanceMonitor";

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-C6XYWJB91J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-C6XYWJB91J');
            `,
          }}
        />
        {/* Tawk.to Live Chat */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/694d85444be07019836885c9/1jdbd15bg';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
        <PerformanceMonitor />
      </body>
    </html>
  );
}
