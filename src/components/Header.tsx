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
        children: [
            { href: '/services/managed-services', label: 'Managed Services' },
            { href: '/services/cloud-solutions', label: 'Cloud Solutions' },
            { href: '/services/security', label: 'Cybersecurity' },
            { href: '/services/network-setup', label: 'Network Setup' },
            { href: '/services/remote-support', label: 'Remote Support' },
            { href: '/services/technical-writing', label: 'Technical Writing' },
            { href: '/services/website-development', label: 'Website Development' },
            { href: '/services/it-automation', label: 'IT Automation' },
        ],
    },
    {
        href: '/solutions',
        label: 'Solutions',
        children: [
            { href: '/solutions/custom-it-solutions', label: 'Custom IT Solutions' },
            { href: '/solutions/cybersecurity-strategy', label: 'Cybersecurity Strategy' },
            { href: '/solutions/data-analytics', label: 'Data Analytics' },
            { href: '/solutions/digital-transformation', label: 'Digital Transformation' },
            { href: '/solutions/website-optimization', label: 'Website Optimization' },
        ],
    },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
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

                    <nav className="hidden md:flex items-center gap-header">
                        {navLinks.map((link) => (
                            <div
                                key={link.href}
                                className="relative"
                                onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                                onMouseLeave={() => link.children && setOpenDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`text-body flex items-center gap-1 ${pathname.startsWith(link.href) ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'} hover:text-[#3A81F7]`}
                                >
                                    {link.label}
                                    {link.children && <ChevronDown size={16} />}
                                </Link>
                                {link.children && openDropdown === link.href && (
                                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block px-4 py-2 text-sm text-[#4A4A4A] hover:bg-gray-100"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
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
                className={`md:hidden bg-white fixed top-[96px] left-0 w-full h-[calc(100vh-96px)] z-[9999] overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="px-6 py-8 flex flex-col min-h-full">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <div key={link.href}>
                                {link.children ? (
                                    <div>
                                        <div 
                                            className="flex justify-between items-center text-heading-md text-center py-3 cursor-pointer"
                                            onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.href ? null : link.href)}
                                        >
                                            <span className={`${pathname.startsWith(link.href) ? 'text-[#3A81F7]' : 'text-[#050816]'}`}>{link.label}</span>
                                            <ChevronDown size={20} className={`transition-transform ${openMobileSubmenu === link.href ? 'rotate-180' : ''}`} />
                                        </div>
                                        {openMobileSubmenu === link.href && (
                                            <div className="pl-4 pt-2 pb-2 flex flex-col gap-2">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        className={`text-lg text-left py-2 ${pathname === child.href ? 'text-[#3A81F7]' : 'text-[#4A4A4A]'}`}
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        {child.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`text-heading-md text-center block py-3 ${pathname === link.href ? 'text-[#3A81F7]' : 'text-[#050816]'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
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
