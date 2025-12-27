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
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-x-10 gap-y-16">
          {/* Enhanced Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <img
                src="/images/optimized/Logo.webp"
                alt="W1IT Solutions Logo"
                className="h-12 w-auto object-contain"
              />
              <span className="font-heading font-bold text-3xl text-white">W1IT Solutions</span>
            </Link>
            <p className="text-body-md text-brand-gray-mid mb-6 max-w-sm leading-relaxed">
              Modern IT consultancy delivering clarity, resilience, and performance for Seattle businesses. We transform IT chaos into operational excellence.
            </p>

            {/* Contact Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-white font-medium">Seattle, Washington</p>
                  <p className="text-body-sm text-brand-gray-mid">Serving the Greater Seattle Area</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-brand-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-white font-medium">hello@w1it.com</p>
                  <p className="text-body-sm text-brand-gray-mid">General inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-brand-cyan mt-1 flex-shrink-0" />
                <div>
                  <p className="text-body-sm text-white font-medium">(206) 123-4567</p>
                  <p className="text-body-sm text-brand-gray-mid">Mon-Fri, 9am-6pm PST</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mingmanhk/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Connect on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/mingmanhk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="View GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                title="Follow on Twitter"
              >
                <Twitter size={18} />
              </a>
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

        {/* Enhanced Bottom Bar */}
        <div className="border-t border-[#1E293B] py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-body-sm text-brand-gray-mid">
                &copy; {currentYear} W1IT Solutions. All rights reserved.
              </p>
              <p className="text-body-xs text-brand-gray-mid/70 mt-2">
                Seattle-based IT consultancy serving businesses across Washington
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-body-sm text-brand-gray-mid hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-body-sm text-brand-gray-mid hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-body-sm text-brand-gray-mid hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="/sla" className="text-body-sm text-brand-gray-mid hover:text-white transition-colors">
                Service Level Agreement
              </a>
            </div>
          </div>
          <div className="text-center mt-6 pt-6 border-t border-[#1E293B]/50">
            <p className="text-body-xs text-brand-gray-mid/60">
              W1IT Solutions is a registered IT consultancy specializing in infrastructure modernization, website optimization, and strategic IT consulting for Seattle businesses.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
