import React from 'react';
import Link from 'next/link';
import Container from './Container';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Industries', href: '/industries' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Testimonials', href: '/testimonials' },
    ],
    services: [
      { name: 'Managed IT Services', href: '/services/managed-services' },
      { name: 'IT Consulting & Strategy', href: '/it-consulting' },
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'Data & Analytics', href: '/solutions/data-analytics' },
      { name: 'On-Demand Support', href: '/services/remote-support' },
    ],
    solutions: [
      { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      { name: 'Cybersecurity Strategy', href: '/solutions/cybersecurity-strategy' },
      { name: 'Website Optimization', href: '/solutions/website-optimization' },
      { name: 'Custom IT Solutions', href: '/solutions/custom-it-solutions' },
      { name: 'Data Analytics Solutions', href: '/solutions/data-analytics' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Knowledge Base', href: '/knowledge-base' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'IT Checklists', href: '/checklists' },
      { name: 'Free Tools', href: '/tools' },
    ],
    contact: [
      { name: 'Schedule Consultation', href: '/contact' },
      { name: 'Support Portal', href: '/support' },
      { name: 'Emergency Support', href: '/emergency' },
      { name: 'Sales Inquiries', href: '/sales' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Service Level Agreement', href: '/sla' },
    ],
  };

  return (
    <footer className="bg-brand-navy text-white font-body">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-x-8 gap-y-12">
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
              Modern IT consultancy for infrastructure, automation, and resilient systems. Delivering clarity, resilience, and performance for Seattle businesses.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-brand-gray-mid hover:text-white transition-colors"><Github size={20} /></a>
            </div>
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

          {/* Solutions */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-md text-brand-gray-mid hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-body-md text-brand-gray-mid hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
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
