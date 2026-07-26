'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

/**
 * W1IT Footer Component - LIGHT-MODE Design System
 * Colors: Navy #050816 background, White text, Gray #D9D9D9 links
 * Typography: Body/16 for headings, Caption/14 for links
 * Spacing: 64px vertical padding, 32px gap between columns, 16px gap between links
 * Layout: Five columns on desktop, responsive stacking on mobile
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { dict } = useLanguage();

  const footerLinks = {
    services: [
      { name: dict.footer.services.managedServices, href: '/services/managed-services' },
      { name: dict.footer.services.cloudSolutions, href: '/services/cloud-solutions' },
      { name: dict.footer.services.networkSetup, href: '/services/network-setup' },
      { name: dict.footer.services.remoteSupport, href: '/services/remote-support' },
      { name: dict.footer.services.security, href: '/services/security' },
      { name: dict.footer.services.technicalWriting, href: '/services/technical-writing' },
      { name: dict.footer.services.itSupport, href: '/support' },
      { name: dict.footer.services.emergencyItHelp, href: '/emergency' },
    ],
    solutions: [
      { name: dict.footer.solutions.dataAnalytics, href: '/solutions/data-analytics' },
      { name: dict.footer.solutions.digitalTransformation, href: '/solutions/digital-transformation' },
      { name: dict.footer.solutions.cybersecurityStrategy, href: '/solutions/cybersecurity-strategy' },
      { name: dict.footer.solutions.customItSolutions, href: '/solutions/custom-it-solutions' },
      { name: dict.footer.solutions.websiteOptimization, href: '/solutions/website-optimization' },
      { name: dict.footer.solutions.knowledgeBase, href: '/knowledge-base' },
      { name: dict.footer.solutions.itChecklists, href: '/checklists' },
      { name: dict.footer.solutions.freeTools, href: '/tools' },
    ],
    company: [
      { name: dict.footer.company.about, href: '/about' },
      { name: dict.footer.company.industries, href: '/industries' },
      { name: dict.footer.company.blog, href: '/blog' },
      { name: dict.footer.company.caseStudies, href: '/case-studies' },
      { name: dict.footer.company.testimonials, href: '/testimonials' },
      { name: dict.footer.company.documentation, href: '/documentation' },
      { name: dict.footer.company.bellevueItSupport, href: '/locations/bellevue' },
      { name: dict.footer.company.apps, href: '/apps' },
      { name: dict.footer.company.talkToSales, href: '/sales' },
      { name: dict.footer.company.contact, href: '/contact' },
    ],
    legal: [
      { name: dict.footer.legal.privacy, href: '/privacy' },
      { name: dict.footer.legal.terms, href: '/terms' },
      { name: dict.footer.legal.cookies, href: '/cookies' },
      { name: dict.footer.legal.sla, href: '/sla' },
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
                src="/images/brand/logo.webp"
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
              {dict.footer.tagline}
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[16px] font-bold text-white mb-4">
              {dict.footer.servicesHeading}
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
              {dict.footer.solutionsHeading}
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
              {dict.footer.companyHeading}
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
              {dict.footer.legalHeading}
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
                {dict.footer.connectHeading}
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
            &copy; {currentYear} {dict.footer.rightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}
