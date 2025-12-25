'use client';

import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { Menu, X, ChevronDown, Cloud, Shield, Wrench, Cpu, BarChart, RefreshCw, FileText, Network, Phone, Zap, Database, Globe, Code, MessageSquare, Server } from 'lucide-react';

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

function Header() {
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
          name: 'IT Support & Services',
          items: [
            {
              name: 'Managed IT Services',
              href: '/it-services',
              icon: <Cpu className="w-4 h-4" />,
              description: 'Comprehensive IT management and support'
            },
            {
              name: 'Remote Support',
              href: '/services/remote-support',
              icon: <Phone className="w-4 h-4" />,
              description: 'Quick response IT support and troubleshooting'
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
          name: 'Consulting & Strategy',
          items: [
            {
              name: 'IT Consulting',
              href: '/it-consulting',
              icon: <BarChart className="w-4 h-4" />,
              description: 'Strategic technology planning and guidance'
            },
            {
              name: 'Technical Writing',
              href: '/services/technical-writing',
              icon: <FileText className="w-4 h-4" />,
              description: 'Professional documentation and manuals'
            },
            {
              name: 'Cloud Solutions',
              href: '/services/cloud-solutions',
              icon: <Cloud className="w-4 h-4" />,
              description: 'AWS, Azure, Google Cloud migration'
            },
          ]
        },
        {
          name: 'Security & Infrastructure',
          items: [
            {
              name: 'Security Services',
              href: '/services/security',
              icon: <Shield className="w-4 h-4" />,
              description: 'Cybersecurity and threat protection'
            },
            {
              name: 'Managed Services',
              href: '/services/managed-services',
              icon: <Server className="w-4 h-4" />,
              description: '24/7 monitoring and maintenance'
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
    <header className="sticky top-0 z-50 bg-gradient-to-r from-white to-blue-50 border-b border-blue-100 shadow-lg">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-md">
              <Image
                src="/images/optimized/Logo.webp"
                alt="W1IT Solutions Logo"
                width={48}
                height={48}
                className="object-contain filter brightness-0 invert"
                priority
                sizes="48px"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-slate-900 font-poppins bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">W1IT Solutions</div>
              <div className="text-sm text-slate-600 font-inter">Expert IT Services & Consulting in Bellevue, WA</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-slate-800 hover:text-blue-700 font-semibold transition-all duration-300 flex items-center gap-1.5 py-2 px-4 font-inter hover:bg-white hover:shadow-md rounded-lg border border-transparent hover:border-blue-200"
                >
                  {item.icon && <span className="text-blue-600">{item.icon}</span>}
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-blue-500" />}
                </Link>

                {/* Submenu - Clean Professional Menu */}
                {item.submenu && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-[700px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-2xl border border-blue-100 p-8 backdrop-blur-sm">
                    {/* Services Mega Menu with Categories */}
                    {item.name === 'Services' && Array.isArray(item.submenu) && item.submenu[0] && 'items' in item.submenu[0] ? (
                      <div className="grid grid-cols-3 gap-8">
                        {(item.submenu as NavigationCategory[]).map((category, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-300 rounded-full"></div>
                            <h3 className="font-poppins font-bold text-slate-900 mb-4 text-lg flex items-center gap-2">
                              <span className="text-blue-600">{idx === 0 ? '🛠️' : idx === 1 ? '📊' : '🔒'}</span>
                              {category.name}
                            </h3>
                            <div className="space-y-3">
                              {category.items.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="flex items-start gap-3 text-slate-700 hover:text-blue-700 hover:bg-white rounded-lg p-4 transition-all duration-300 font-inter group/item border border-transparent hover:border-blue-200 hover:shadow-md"
                                >
                                  <div className="mt-0.5 text-blue-600 group-hover/item:text-blue-700 bg-blue-50 p-2 rounded-lg">
                                    {subitem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold">{subitem.name}</div>
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
                      <div className="space-y-2">
                        {(item.submenu as NavigationItem[]).map((subitem) => (
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="flex items-start gap-3 text-slate-700 hover:text-blue-700 hover:bg-white rounded-lg p-4 transition-all duration-300 font-inter group/item border border-transparent hover:border-blue-200 hover:shadow-md"
                          >
                            <div className="mt-0.5 text-blue-600 group-hover/item:text-blue-700 bg-blue-50 p-2 rounded-lg">
                              {subitem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold">{subitem.name}</div>
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
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-inter shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-slate-800 hover:text-blue-700 transition-all duration-300 rounded-xl hover:bg-blue-100 border border-blue-200"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-blue-200 animate-fade-in bg-gradient-to-b from-white to-blue-50">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-blue-100 last:border-0">
                  <Link
                    href={item.href}
                    className="block text-slate-800 hover:text-blue-700 font-semibold transition-all duration-300 py-4 px-4 font-inter text-lg flex items-center gap-3 hover:bg-white rounded-lg hover:shadow-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <span className="text-blue-600">{item.icon}</span>}
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
                              <div className="space-y-3">
                                {category.items.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-all duration-300 py-3 pl-4 border-l-2 border-blue-300 hover:border-blue-600 hover:bg-white rounded-r-lg font-inter group/item"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                                      {subitem.icon}
                                    </div>
                                    <div>
                                      <div className="font-semibold">{subitem.name}</div>
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
                            className="flex items-center gap-3 text-slate-700 hover:text-blue-700 transition-all duration-300 py-3 pl-4 border-l-2 border-blue-300 hover:border-blue-600 hover:bg-white rounded-r-lg font-inter group/item"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-blue-600 bg-blue-50 p-2 rounded-lg">
                              {subitem.icon}
                            </div>
                            <div>
                              <div className="font-semibold">{subitem.name}</div>
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
                className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-center rounded-xl hover:from-blue-700 hover:to-blue-900 transition-all duration-300 font-inter shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default memo(Header);
