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
      { name: 'Case Studies', href: '/case-studies' },
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
    <footer className="bg-[#050816] text-white py-16">
      <div className="max-w-content mx-auto px-6">
        {/* Five Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo / W1IT */}
          <div>
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
              Professional IT solutions for Seattle businesses and beyond.
            </p>
          </div>

          {/* FooterColumn / Services */}
          <div>
            <h3 className="text-body font-bold text-white mb-4">Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FooterColumn / Solutions */}
          <div>
            <h3 className="text-body font-bold text-white mb-4">Solutions</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FooterColumn / Company */}
          <div>
            <h3 className="text-body font-bold text-white mb-4">Company</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FooterColumn / Legal + Social */}
          <div>
            <h3 className="text-body font-bold text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-caption text-[#D9D9D9] hover:text-white transition-colors">
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
                className="text-[#D9D9D9] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/mingmanhk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D9D9D9] hover:text-white transition-colors"
                aria-label="GitHub"
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
