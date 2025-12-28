'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/industries', label: 'Industries' },
  {
    label: 'Company',
    dropdown: [
      { href: '/about', label: 'About' },
      { href: '/testimonials', label: 'Testimonials' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
      <Container className="flex items-center justify-between h-20">
        <Link href="/" className="flex items-center space-x-3 z-10 relative" onClick={() => setIsOpen(false)}>
          <Image src="/images/optimized/Logo.webp" alt="W1IT Solutions Logo" width={40} height={40} className="rounded-lg" priority />
          <span className="font-heading font-bold text-2xl text-dark-text">W1IT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <button className="flex items-center font-body font-medium text-dark-text hover:text-brand-blue transition-colors">
                  {link.label}
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                      {link.dropdown.map((item) => (
                        <Link key={item.href} href={item.href} className={`block px-4 py-2 font-body text-dark-text hover:bg-brand-gray-light ${pathname === item.href ? 'text-brand-blue' : ''}`}>
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={`font-body font-medium text-dark-text hover:text-brand-blue transition-colors ${pathname === link.href ? 'text-brand-blue' : ''}`}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="lg">Get in Touch</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden z-50 relative">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-neutral-100 rounded-lg transition-colors" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
            {isOpen ? <X className="w-6 h-6 text-dark-text" /> : <Menu className="w-6 h-6 text-dark-text" />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div variants={menuVariants} initial="hidden" animate="visible" exit="exit" className="md:hidden bg-white/95 backdrop-blur-lg fixed top-0 left-0 w-full h-screen pt-20 z-40">
            <Container className="py-6 flex flex-col h-full">
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label}>
                      <h3 className="font-body font-medium text-2xl text-dark-text text-center py-2">{link.label}</h3>
                      <div className="flex flex-col space-y-4 mt-2">
                        {link.dropdown.map((item) => (
                          <Link key={item.href} href={item.href} className={`font-body font-medium text-xl text-dark-text/80 hover:text-brand-blue transition-colors text-center py-1 ${pathname === item.href ? 'text-brand-blue' : ''}`} onClick={() => setIsOpen(false)}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link key={link.href} href={link.href} className={`font-body font-medium text-2xl text-dark-text hover:text-brand-blue transition-colors text-center py-2 ${pathname === link.href ? 'text-brand-blue' : ''}`} onClick={() => setIsOpen(false)}>
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="mt-auto pb-16">
                <Button href="/contact" size="lg" className="w-full" onClick={() => setIsOpen(false)}>
                  Get in Touch
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
