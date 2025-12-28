'use client';

/**
 * W1IT Header Component
 * Matches: Component / Header / Desktop
 * Specs: Horizontal auto-layout, Padding 24px, Spacing 32px, Height 96px
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-content mx-auto">
        {/* Desktop Header */}
        <div className="flex items-center justify-between h-header px-6">
          {/* Logo / W1IT SOLUTIONS */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image
              src="/images/optimized/Logo.webp"
              alt="W1IT Solutions Logo"
              width={40}
              height={40}
              priority
            />
            <div className="flex items-baseline gap-3">
              <span className="inline-flex items-baseline gap-0.5" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '0.02em' }}>
                <span className="text-[#050816]">W</span>
                <span className="text-[#00A878]">1</span>
                <span className="text-[#050816]">IT</span>
              </span>
              <span className="text-[#050816] uppercase" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif', fontSize: '20px', fontWeight: 700, letterSpacing: '0.12em' }}>
                Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-header">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-body ${pathname === link.href ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'} hover:text-[#3A81F7]`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Button / Secondary / Default */}
          <div className="hidden md:block">
            <Button href="/contact" variant="secondary">Get in Touch</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6 text-[#050816]" /> : <Menu className="w-6 h-6 text-[#050816]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Header / Mobile / Default */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-0 left-0 w-full h-screen pt-24 z-40">
          <div className="px-6 py-8 flex flex-col h-full">
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-heading-md text-center ${pathname === link.href ? 'text-[#3A81F7]' : 'text-[#050816]'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-16">
              <Button href="/contact" variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
