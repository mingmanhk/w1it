'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  submenu?: NavigationItem[] | NavigationCategory[];
}

interface NavigationCategory {
  name: string;
  items: NavigationItem[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        {
          name: 'Core IT Services',
          items: [
            { name: 'Serverless Migration', href: '/services/serverless-migration' },
            { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
            { name: 'Managed IT Services', href: '/services/managed-services' },
            { name: 'IT Security & Compliance', href: '/services/security' },
          ]
        },
        {
          name: 'Specialized Services',
          items: [
            { name: 'Remote Support', href: '/services/remote-support' },
            { name: 'Technical Writing', href: '/services/technical-writing' },
            { name: 'Network Setup', href: '/services/network-setup' },
            { name: 'IT Consulting', href: '/it-consulting' },
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      submenu: [
        { name: 'Enterprise Cloud', href: '/solutions/enterprise-cloud' },
        { name: 'Hybrid Infrastructure', href: '/solutions/hybrid-infrastructure' },
        { name: 'Disaster Recovery', href: '/solutions/disaster-recovery' },
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
      ]
    },
    {
      name: 'Products',
      href: '/apps',
      submenu: [
        { name: 'Pixel Color Picker', href: '/apps/pixel-color-picker' },
        { name: 'DeepTicker', href: '/apps/deepticker' },
        { name: 'ScreenGrabber', href: '/apps/screengrabber' },
        { name: 'Contact SyncMate', href: '/apps/contact-syncmate' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-2xl">W1</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-neutral-900 font-poppins">W1 IT Solutions</div>
              <div className="text-sm text-neutral-600 font-inter">Innovative Technology Partners</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 font-medium transition-colors flex items-center gap-1.5 py-2 px-1 font-inter"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Submenu - Modern Mega Menu */}
                {item.submenu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-xl shadow-floating border border-neutral-200 p-6">
                    {/* Services Mega Menu */}
                    {item.name === 'Services' && item.submenu && 'items' in (item.submenu[0] as any) ? (
                      <div className="grid grid-cols-2 gap-8">
                        {item.submenu.map((category: any, idx: number) => (
                          <div key={idx}>
                            <h3 className="font-poppins font-semibold text-neutral-900 mb-3 text-lg">
                              {category.name}
                            </h3>
                            <div className="space-y-2">
                              {category.items.map((subitem: any) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="block text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg p-3 transition-all duration-200 font-inter"
                                >
                                  <div className="font-medium">{subitem.name}</div>
                                  <div className="text-sm text-neutral-500 mt-1">
                                    {subitem.description || 'Professional IT solutions'}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Regular Submenu */
                      <div className="space-y-1">
                        {item.submenu.map((subitem: any) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg p-3 transition-all duration-200 font-inter"
                          >
                            <div className="font-medium">{subitem.name}</div>
                            {subitem.description && (
                              <div className="text-sm text-neutral-500 mt-1">{subitem.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200 font-inter shadow-md"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-neutral-700 hover:text-primary-600 transition-colors rounded-lg hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-neutral-200 animate-fade-in bg-white">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-neutral-100 last:border-0">
                  <Link
                    href={item.href}
                    className="block text-neutral-800 hover:text-primary-600 font-medium transition-colors py-4 px-2 font-inter text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mb-4 space-y-3">
                      {/* Services Mega Menu Mobile */}
                      {item.name === 'Services' && item.submenu && 'items' in (item.submenu[0] as any) ? (
                        <>
                          {item.submenu.map((category: any, idx: number) => (
                            <div key={idx} className="mb-4">
                              <h4 className="font-poppins font-semibold text-neutral-700 mb-2 text-sm uppercase tracking-wide">
                                {category.name}
                              </h4>
                              <div className="space-y-2">
                                {category.items.map((subitem: any) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="block text-neutral-600 hover:text-primary-600 transition-colors py-2 pl-4 border-l-2 border-neutral-200 hover:border-primary-500 font-inter"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        /* Regular Submenu Mobile */
                        item.submenu.map((subitem: any) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="block text-neutral-600 hover:text-primary-600 transition-colors py-2 pl-4 border-l-2 border-neutral-200 hover:border-primary-500 font-inter"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.name}
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-6 px-6 py-4 bg-gradient-primary text-white text-center font-medium rounded-lg hover:shadow-lg transition-all duration-200 font-inter shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
