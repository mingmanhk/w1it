'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { Menu, X, ChevronDown, Cloud, Shield, Wrench, Cpu, BarChart, RefreshCw, FileText, Network, Phone, Zap, Database, Globe, Code, MessageSquare } from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  submenu?: NavigationItem[] | NavigationCategory[];
}

interface NavigationCategory {
  name: string;
  items: NavigationItem[];
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: <Zap className="w-4 h-4" />
    },
    {
      name: 'Services',
      href: '/services',
      icon: <Wrench className="w-4 h-4" />,
      submenu: [
        {
          name: 'Infrastructure & Cloud',
          items: [
            {
              name: 'Cloud Solutions',
              href: '/services/cloud-solutions',
              icon: <Cloud className="w-4 h-4" />,
              description: 'AWS, Azure, Google Cloud migration and management'
            },
            {
              name: 'Managed Services',
              href: '/services/managed-services',
              icon: <Cpu className="w-4 h-4" />,
              description: '24/7 monitoring, maintenance, and support'
            },
            {
              name: 'Network Setup',
              href: '/services/network-setup',
              icon: <Network className="w-4 h-4" />,
              description: 'Secure and scalable network infrastructure'
            },
          ]
        },
        {
          name: 'Support & Security',
          items: [
            {
              name: 'Remote Support',
              href: '/services/remote-support',
              icon: <Phone className="w-4 h-4" />,
              description: 'Quick response IT support and troubleshooting'
            },
            {
              name: 'Security Services',
              href: '/services/security',
              icon: <Shield className="w-4 h-4" />,
              description: 'Cybersecurity, compliance, and threat protection'
            },
            {
              name: 'Technical Writing',
              href: '/services/technical-writing',
              icon: <FileText className="w-4 h-4" />,
              description: 'Documentation, manuals, and knowledge bases'
            },
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: <BarChart className="w-4 h-4" />,
      submenu: [
        {
          name: 'Data Analytics',
          href: '/solutions/data-analytics',
          icon: <Database className="w-4 h-4" />,
          description: 'Business intelligence and data-driven insights'
        },
        {
          name: 'Digital Transformation',
          href: '/solutions/digital-transformation',
          icon: <RefreshCw className="w-4 h-4" />,
          description: 'Modernize processes and embrace innovation'
        },
      ]
    },
    {
      name: 'Apps',
      href: '/apps',
      icon: <Code className="w-4 h-4" />,
      submenu: [
        {
          name: 'Pixel Color Picker',
          href: '/apps/pixel-color-picker',
          icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />,
          description: 'Advanced color detection and palette tools'
        },
        {
          name: 'DeepTicker',
          href: '/apps/deepticker',
          icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />,
          description: 'Real-time financial data and analytics'
        },
        {
          name: 'ScreenGrabber',
          href: '/apps/screengrabber',
          icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />,
          description: 'Capture and annotate screenshots easily'
        },
        {
          name: 'Contact SyncMate',
          href: '/apps/contact-syncmate',
          icon: <div className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />,
          description: 'Sync contacts across platforms seamlessly'
        },
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: <MessageSquare className="w-4 h-4" />
    },
    {
      name: 'About',
      href: '/about',
      icon: <Globe className="w-4 h-4" />
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: <Phone className="w-4 h-4" />
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/images/Logo.png"
                alt="W1IT Solutions Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-slate-900 font-poppins">W1IT Solutions</div>
              <div className="text-sm text-slate-600 font-inter">Expert Computer Repair & IT Services in Bellevue, WA</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1.5 py-2 px-3 font-inter hover:bg-blue-50 rounded-md"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>

                {/* Submenu - Clean Professional Menu */}
                {item.submenu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white rounded-lg shadow-lg border border-slate-200 p-6">
                    {/* Services Mega Menu with Categories */}
                    {item.name === 'Services' && Array.isArray(item.submenu) && item.submenu[0] && 'items' in item.submenu[0] ? (
                      <div className="grid grid-cols-2 gap-8">
                        {(item.submenu as NavigationCategory[]).map((category, idx) => (
                          <div key={idx}>
                            <h3 className="font-poppins font-semibold text-slate-900 mb-3 text-lg">
                              {category.name}
                            </h3>
                            <div className="space-y-2">
                              {category.items.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="flex items-start gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md p-3 transition-all duration-200 font-inter group/item"
                                >
                                  <div className="mt-0.5 text-blue-600 group-hover/item:text-blue-700">
                                    {subitem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium">{subitem.name}</div>
                                    <div className="text-sm text-slate-500 mt-1">
                                      {subitem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Regular Submenu for Solutions and Apps */
                      <div className="space-y-1">
                        {(item.submenu as NavigationItem[]).map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-start gap-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md p-3 transition-all duration-200 font-inter group/item"
                          >
                            <div className="mt-0.5 text-blue-600 group-hover/item:text-blue-700">
                              {subitem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{subitem.name}</div>
                              {subitem.description && (
                                <div className="text-sm text-slate-500 mt-1">{subitem.description}</div>
                              )}
                            </div>
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
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-all duration-300 font-inter shadow-sm hover:shadow-md"
            >
              Get Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-slate-700 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200 animate-fade-in bg-white">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-slate-100 last:border-0">
                  <Link
                    href={item.href}
                    className="block text-slate-800 hover:text-blue-600 font-medium transition-colors py-4 px-2 font-inter text-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mb-4 space-y-3">
                      {/* Services Mega Menu Mobile */}
                      {item.name === 'Services' && Array.isArray(item.submenu) && item.submenu[0] && 'items' in item.submenu[0] ? (
                        <>
                          {(item.submenu as NavigationCategory[]).map((category, idx) => (
                            <div key={idx} className="mb-4">
                              <h4 className="font-poppins font-semibold text-slate-700 mb-2 text-sm uppercase tracking-wide">
                                {category.name}
                              </h4>
                              <div className="space-y-2">
                                {category.items.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors py-2 pl-4 border-l-2 border-slate-200 hover:border-blue-500 font-inter"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="text-blue-600">
                                      {subitem.icon}
                                    </div>
                                    <div>
                                      <div className="font-medium">{subitem.name}</div>
                                      {subitem.description && (
                                        <div className="text-xs text-slate-500 mt-0.5">{subitem.description}</div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </>
                      ) : (
                        /* Regular Submenu Mobile for Solutions and Apps */
                        (item.submenu as NavigationItem[]).map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors py-2 pl-4 border-l-2 border-slate-200 hover:border-blue-500 font-inter"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-blue-600">
                              {subitem.icon}
                            </div>
                            <div>
                              <div className="font-medium">{subitem.name}</div>
                              {subitem.description && (
                                <div className="text-xs text-slate-500 mt-0.5">{subitem.description}</div>
                              )}
                            </div>
                          </Link>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                className="mt-6 px-6 py-4 bg-blue-600 text-white text-center font-medium rounded-md hover:bg-blue-700 transition-all duration-300 font-inter shadow-sm hover:shadow-md"
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
