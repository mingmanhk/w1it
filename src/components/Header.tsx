'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

/**
 * W1IT Header Component - LIGHT-MODE Design System
 * Typography: Body/16 for nav links, Body/17 for CTA
 * Colors: Navy #050816, Blue #3A81F7, Gray #4A4A4A, Surface #FFFFFF
 * Spacing: 8px gaps, 16px padding, 32px container padding
 */

const navLinks = [
    {
        href: '/services',
        label: 'Services',
        dropdown: [
            { href: '/services/managed-services', label: 'Managed IT Services' },
            { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
            { href: '/services/network-setup', label: 'Network Setup' },
            { href: '/services/remote-support', label: 'Remote Support' },
            { href: '/services/security', label: 'Security' },
            { href: '/services/technical-writing', label: 'Technical Writing' },
            { href: '/it-services', label: 'IT Services' },
            { href: '/it-consulting', label: 'IT Consulting' },
        ]
    },
    {
        href: '/solutions',
        label: 'Solutions',
        dropdown: [
            { href: '/solutions/data-analytics', label: 'Data Analytics' },
            { href: '/solutions/digital-transformation', label: 'Digital Transformation' },
            { href: '/solutions/cybersecurity-strategy', label: 'Cybersecurity Strategy' },
            { href: '/solutions/custom-it-solutions', label: 'Custom IT Solutions' },
        ]
    },
    {
        href: '/apps',
        label: 'Apps',
        dropdown: [
            { href: '/apps/contact-syncmate', label: 'Contact SyncMate' },
            { href: '/apps/deepticker', label: 'DeepTicker' },
            { href: '/apps/pixel-color-picker', label: 'Pixel Color Picker' },
            { href: '/apps/screengrabber', label: 'ScreenGrabber' },
        ]
    },
    { href: '/industries', label: 'Industries' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
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
        <header className="fixed top-0 left-0 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] z-[9998]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between h-[80px] px-6">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                        onClick={() => setIsOpen(false)}
                    >
                        <Image
                            src="/images/optimized/Logo.webp"
                            alt="W1IT Solutions Logo"
                            width={40}
                            height={40}
                            priority
                        />
                        <div className="flex items-baseline gap-3">
                            <span
                                className="inline-flex items-baseline gap-0.5"
                                style={{
                                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    letterSpacing: '0.02em'
                                }}
                            >
                                <span className="text-[#050816]">W</span>
                                <span className="text-[#00A878]">1</span>
                                <span className="text-[#050816]">IT</span>
                            </span>
                            <span
                                className="text-[#050816] uppercase hidden sm:inline-flex"
                                style={{
                                    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", "Segoe UI", sans-serif',
                                    fontSize: '20px',
                                    fontWeight: 700,
                                    letterSpacing: '0.12em'
                                }}
                            >
                                Solutions
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative group"
                            >
                                {link.dropdown ? (
                                    <>
                                        <Link
                                            href={link.href}
                                            className={`text-[16px] font-medium flex items-center gap-1 ${
                                                pathname.startsWith(link.href)
                                                    ? 'text-[#3A81F7]'
                                                    : 'text-[#4A4A4A]'
                                            } hover:text-[#3A81F7] transition-colors`}
                                        >
                                            {link.label}
                                            <ChevronDown className="w-4 h-4" strokeWidth={2} />
                                        </Link>
                                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="bg-[#FFFFFF] border border-[#D9D9D9] min-w-[240px] shadow-sm">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={`block px-6 py-3 text-[16px] border-b border-[#E5E7EB] last:border-b-0 ${
                                                            pathname === item.href
                                                                ? 'text-[#3A81F7] bg-[#F8FAFC] font-medium'
                                                                : 'text-[#4A4A4A]'
                                                        } hover:text-[#3A81F7] hover:bg-[#F8FAFC] transition-colors`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-[16px] font-medium ${
                                            pathname.startsWith(link.href)
                                                ? 'text-[#3A81F7]'
                                                : 'text-[#4A4A4A]'
                                        } hover:text-[#3A81F7] transition-colors`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:block">
                        <Button href="/contact" variant="primary">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 hover:bg-[#F8FAFC] transition-colors"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isOpen ? (
                                <X className="w-6 h-6 text-[#050816]" strokeWidth={2} />
                            ) : (
                                <Menu className="w-6 h-6 text-[#050816]" strokeWidth={2} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden bg-[#FFFFFF] fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] z-[9999] overflow-y-auto border-t border-[#E5E7EB] transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="px-6 py-8 flex flex-col min-h-full">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <div key={link.href} className="border-b border-[#E5E7EB] last:border-b-0">
                                <Link
                                    href={link.href}
                                    className={`text-[20px] font-semibold block py-4 ${
                                        pathname === link.href
                                            ? 'text-[#3A81F7]'
                                            : 'text-[#050816]'
                                    }`}
                                    onClick={() => !link.dropdown && setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <div className="flex flex-col gap-0 pb-4">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`text-[16px] block py-3 pl-4 ${
                                                    pathname === item.href
                                                        ? 'text-[#3A81F7] font-medium'
                                                        : 'text-[#4A4A4A]'
                                                }`}
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile CTA Button */}
                    <div className="mt-auto pt-8">
                        <Button
                            href="/contact"
                            variant="primary"
                            className="w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
