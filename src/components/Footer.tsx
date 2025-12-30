import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';

/**
 * W1IT Footer Component - LIGHT-MODE Design System
 * Colors: Navy #050816 background, White text, Gray #D9D9D9 links
 * Typography: Body/16 for headings, Caption/14 for links
 * Spacing: 64px vertical padding, 32px gap between columns, 16px gap between links
 * Layout: Five columns on desktop, responsive stacking on mobile
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Managed Services', href: '/services/managed-services' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
      { name: 'Network Setup', href: '/services/network-setup' },
      { name: 'Remote Support', href: '/services/remote-support' },
      { name: 'Security', href: '/services/security' },
      { name: 'Technical Writing', href: '/services/technical-writing' },
    ],
    solutions: [
      { name: 'Data Analytics', href: '/solutions/data-analytics' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'Cybersecurity Strategy', href: '/solutions/cybersecurity-strategy' },
      { name: 'Custom IT Solutions', href: '/solutions/custom-it-solutions' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Industries', href: '/industries' },
      { name: 'Blog', href: '/blog' },
      { name: 'Apps', href: '/apps' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-[#050816] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {/* Column 1: Logo & Tagline */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity">
              <Image
                src="/images/optimized/Logo.webp"
                alt="W1IT Logo"
                width={32}
                height={32}
              />
              <div className="flex items-baseline gap-2">
                <span
                  className="inline-flex items-baseline gap-0.5"
                  style={{
                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif',
                    fontSize: '16px',
                    fontWeight: 700,
                    letterSpacing: '0.02em'
                  }}
                >
                  <span className="text-white">W</span>
                  <span className="text-[#00A878]">1</span>
                  <span className="text-white">IT</span>
                </span>
              </div>
            </Link>
            <p className="text-[14px] text-[#D9D9D9] leading-relaxed">
              Professional IT solutions for Seattle businesses and beyond.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#D9D9D9] hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-4">
              Solutions
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#D9D9D9] hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#D9D9D9] hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal & Social */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#D9D9D9] hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-[14px] font-bold text-white mb-3">
                Connect
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mingmanhk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D9D9D9] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} strokeWidth={2} />
                </a>
                <a
                  href="https://github.com/mingmanhk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D9D9D9] hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A4A4A] pt-8">
          <p className="text-[14px] text-[#D9D9D9] text-center">
            &copy; {currentYear} W1IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
