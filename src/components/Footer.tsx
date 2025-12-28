import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';

/**
 * W1IT Footer Component
 * Matches: Section / Footer
 * Components: Logo / W1IT, FooterColumn / Services, Company, Legal, Social
 * Specs: Four columns, Column width 200px, Spacing 48px, Links 14px with 12px spacing
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Managed IT', href: '/services/managed-services' },
      { name: 'IT Automation', href: '/services' },
      { name: 'Cloud Migration', href: '/services/cloud-solutions' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Testimonials', href: '/testimonials' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Cookies', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-[#050816] text-white py-16">
      <div className="max-w-content mx-auto px-6">
        {/* Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-footer-column mb-12">
          {/* Logo / W1IT */}
          <div className="w-footer-column">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Image
                src="/images/optimized/Logo.webp"
                alt="W1IT Logo"
                width={32}
                height={32}
              />
              <span className="text-heading-md text-white">W1IT</span>
            </Link>
            <p className="text-caption text-[#D9D9D9]">
              Modern IT consultancy for Seattle businesses.
            </p>
          </div>

          {/* FooterColumn / Services */}
          <div className="w-footer-column">
            <h3 className="text-body font-bold text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-footer-link">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FooterColumn / Company */}
          <div className="w-footer-column">
            <h3 className="text-body font-bold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-footer-link">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FooterColumn / Legal + Social */}
          <div className="w-footer-column">
            <h3 className="text-body font-bold text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-footer-link mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/mingmanhk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9D9D9] hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/mingmanhk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9D9D9] hover:text-white"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#4A4A4A] pt-8">
          <p className="text-caption text-[#D9D9D9] text-center">
            &copy; {currentYear} W1IT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
