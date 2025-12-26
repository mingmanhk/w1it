import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Managed IT Services', href: '/services/managed-it-services' },
      { name: 'Remote Support', href: '/services/remote-support' },
      { name: 'Network Setup', href: '/services/network-setup' },
      { name: 'IT Consulting', href: '/services/it-consulting' },
      { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  return (
    <footer className="bg-brand-navy text-white font-body">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/images/optimized/Logo.webp"
                alt="W1IT Solutions Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-heading font-bold text-2xl text-white">W1IT Solutions</span>
            </Link>
            <p className="text-body-sm text-brand-gray-mid mb-4 max-w-xs">
              Modern IT consultancy for infrastructure, automation, and resilient systems.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-md text-brand-gray-mid hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-md text-brand-gray-mid hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-md text-brand-gray-mid hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E293B] py-6">
          <p className="text-center text-body-sm text-brand-gray-mid">
            &copy; {currentYear} W1IT Solutions. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
