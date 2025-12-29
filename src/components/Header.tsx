'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '@/components/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
        <header className="fixed top-0 left-0 w-full bg-white z-[9998]">
            <div className="max-w-content mx-auto">
                <div className="flex items-center justify-between h-header px-6">
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

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.href)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.dropdown ? (
                                    <>
                                        <Link
                                            href={link.href}
                                            className={`text-body flex items-center gap-1 ${pathname.startsWith(link.href) ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'} hover:text-[#3A81F7] transition-colors`}
                                        >
                                            {link.label}
                                            <ChevronDown className="w-4 h-4" />
                                        </Link>
                                        {activeDropdown === link.href && (
                                            <div className="absolute top-full left-0 mt-2 bg-white border-2 border-[#D9D9D9] min-w-[240px] z-50">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={`block px-6 py-3 text-[16px] ${pathname === item.href ? 'text-[#3A81F7] bg-[#F8FAFC]' : 'text-[#4A4A4A]'} hover:text-[#3A81F7] hover:bg-[#F8FAFC] transition-colors`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-body ${pathname.startsWith(link.href) ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'} hover:text-[#3A81F7] transition-colors`}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <Button href="/contact" variant="secondary">Get in Touch</Button>
                    </div>

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

            <div
                className={`md:hidden bg-white fixed top-[96px] left-0 w-full h-[calc(100vh-96px)] z-[9999] overflow-y-auto transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="px-6 py-8 flex flex-col min-h-full">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <div key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`text-heading-md text-center block py-3 ${pathname === link.href ? 'text-[#3A81F7]' : 'text-[#050816]'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <div className="flex flex-col gap-2 mt-2 pl-4">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`text-[16px] text-center block py-2 ${pathname === item.href ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'}`}
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
                    <div className="mt-auto pt-8 pb-8">
                        <Button href="/contact" variant="secondary" className="w-full" onClick={() => setIsOpen(false)}>
                            Get in Touch
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
