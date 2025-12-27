'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/industries', label: 'Industries' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-3" aria-label="W1IT Home">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">W</span>
          </div>
          <span className="font-display font-bold text-2xl text-neutral-900">W1IT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter font-medium text-neutral-600 hover:text-primary-600 transition-colors ${
                pathname === link.href ? 'text-primary-600 font-semibold' : ''
              }`}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="lg">Get in Touch</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 z-50 relative" 
            aria-expanded={isOpen} 
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-neutral-800" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 bg-gradient-dark backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-heading"
      >
        <Container className="pt-28 h-full">
          <h2 id="mobile-menu-heading" className="sr-only">Mobile Menu</h2>
          <nav className="flex flex-col items-center justify-center h-full -mt-20 space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-display font-bold text-4xl text-white hover:text-primary-300 transition-colors ${
                  pathname === link.href ? 'text-primary-300' : ''
                }`}
                onClick={() => setIsOpen(false)}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-12">
              <Button href="/contact" size="xl" variant="secondary" onClick={() => setIsOpen(false)}>Get in Touch</Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
