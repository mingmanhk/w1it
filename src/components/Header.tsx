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
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
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

    const handleDropdown = (href: string) => {
        if (openDropdown === href) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(href);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-[999]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Image
                                src="/images/optimized/Logo.webp"
                                alt="W1IT Solutions Logo"
                                width={40}
                                height={40}
                                priority
                            />
                            <span className="text-xl font-bold text-gray-800">W1IT Solutions</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.href} className="relative">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => handleDropdown(link.href)}
                                            className="flex items-center text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown className={`ml-2 h-5 w-5 ${openDropdown === link.href ? 'transform rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === link.href && (
                                            <div className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                key={item.href}
                                                                href={item.href}
                                                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                onClick={() => setOpenDropdown(null)}
                                                            >
                                                                <div className="ml-4">
                                                                    <p className="text-base font-medium text-gray-900">{item.label}</p>
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <Button href="/contact" variant="primary">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="-mr-2 flex items-center lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" aria-hidden="true" /> : <Menu className="block h-6 w-6" aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <div key={link.href}>
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => handleDropdown(link.href)}
                                            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        >
                                            <span>{link.label}</span>
                                            <ChevronDown className={`ml-2 h-5 w-5 ${openDropdown === link.href ? 'transform rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === link.href && (
                                            <div className="px-3 pt-2 pb-3 space-y-1">
                                                {link.dropdown.map((item) => (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setOpenDropdown(null);
                                                        }}
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
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="py-3 px-5">
                        <Button href="/contact" variant="primary" className="w-full" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
