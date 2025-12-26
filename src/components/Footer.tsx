import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Managed IT Services', href: '/it-services' },
      { name: 'Remote Support', href: '/services/remote-support' },
      { name: 'Network Setup', href: '/services/network-setup' },
      { name: 'IT Consulting', href: '/it-consulting' },
      { name: 'Technical Writing', href: '/services/technical-writing' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Data Analytics', href: '/solutions/data-analytics' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className="bg-brand-navy text-white">
      <Container>
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-blue-700 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">W1</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">W1IT Solutions</div>
                <div className="text-xs text-white/70">Bellevue-Based IT Excellence</div>
              </div>
            </div>
            <p className="text-sm text-white/80 mb-4 max-w-md">
              Expert computer repair services and IT solutions for small and midsize businesses in Bellevue, WA. We help maximize performance, prevent disruptions, and build resilient systems that scale with your business.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>Bellevue, WA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a href="mailto:info@w1it.com" className="hover:text-brand-blue transition-colors">
                  info@w1it.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                <a href="tel:+18324727991" className="hover:text-brand-blue transition-colors">
                  832 472 7991
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.linkedin.com/in/mingmanhk/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-blue transition-colors hover:scale-105 transform"
                aria-label="LinkedIn"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/mingmanhk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-blue transition-colors hover:scale-105 transform"
                aria-label="GitHub"
                title="View GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://mingmanhk.github.io/React-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-blue transition-colors hover:scale-105 transform"
                aria-label="Portfolio"
                title="View Portfolio"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-blue transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-blue transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-blue transition-colors hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} W1IT Solutions. All rights reserved. Bellevue, WA.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
