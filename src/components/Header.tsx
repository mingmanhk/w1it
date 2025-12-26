'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 h-[72px]">
      <Container className="h-full">
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/optimized/Logo.webp"
              alt="W1IT Solutions Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-heading font-bold text-2xl text-brand-navy">W1IT Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-base font-medium text-brand-gray-mid hover:text-brand-blue transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="bg-brand-blue text-white font-body text-base font-medium px-7 py-4 rounded-btn hover:opacity-90 transition-opacity"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-gray-mid hover:text-brand-blue"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-[72px] left-0 right-0 bg-white border-t border-slate-200 shadow-lg lg:hidden">
            <div className="px-5 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block font-body text-lg font-medium text-brand-navy hover:text-brand-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full text-center bg-brand-blue text-white font-body text-lg font-medium px-7 py-4 rounded-btn hover:opacity-90 transition-opacity mt-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Support
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
