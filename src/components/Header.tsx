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
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <Container>
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-lg">
              <Image
                src="/images/optimized/Logo.webp"
                alt="W1IT Solutions Logo"
                width={56}
                height={56}
                className="object-contain filter brightness-0 invert"
                priority
                sizes="56px"
              />
            </div>
            <div className="hidden sm:block">
              <div className="text-3xl font-bold text-gray-900 dark:text-white font-poppins tracking-tight">W1IT</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-inter tracking-wide uppercase mt-1">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 flex items-center gap-2 py-3 px-5 font-inter rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50"
                >
                  {item.icon && <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>}
                  <span className="font-semibold">{item.name}</span>
                  {item.submenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-gray-400" />}
                </Link>

                {/* Submenu - Modern Design */}
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-950 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                    {/* Services Mega Menu with Categories */}
                    {item.name === 'Services' && Array.isArray(item.submenu) && item.submenu[0] && 'items' in item.submenu[0] ? (
                      <div className="grid grid-cols-3 gap-6">
                        {(item.submenu as NavigationCategory[]).map((category, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                            <h3 className="font-poppins font-bold text-gray-900 dark:text-white mb-4 text-base flex items-center gap-2">
                              <span className="text-blue-600 dark:text-blue-400">{idx === 0 ? '🛠️' : idx === 1 ? '📊' : '🔒'}</span>
                              {category.name}
                            </h3>
                            <div className="space-y-2">
                              {category.items.map((subitem) => (
                                <Link
                                  key={subitem.name}
                                  href={subitem.href}
                                  className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-3 transition-all duration-200 font-inter group/item"
                                >
                                  <div className="mt-0.5 text-blue-600 dark:text-blue-400 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                    {subitem.icon}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-semibold text-sm">{subitem.name}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
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
                            className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-3 transition-all duration-200 font-inter group/item"
                          >
                            <div className="mt-0.5 text-blue-600 dark:text-blue-400 group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                              {subitem.icon}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-sm">{subitem.name}</div>
                              {subitem.description && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subitem.description}</div>
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
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 font-inter shadow-md hover:scale-[1.02] transform flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <Link
                    href={item.href}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 py-4 px-4 font-inter text-base flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <span className="text-blue-600 dark:text-blue-400">{item.icon}</span>}
                    <span className="font-semibold">{item.name}</span>
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mb-4 space-y-2">
                      {/* Services Mega Menu Mobile */}
                      {item.name === 'Services' && Array.isArray(item.submenu) && item.submenu[0] && 'items' in item.submenu[0] ? (
                        <>
                          {(item.submenu as NavigationCategory[]).map((category, idx) => (
                            <div key={idx} className="mb-4">
                              <h4 className="font-poppins font-semibold text-gray-700 dark:text-gray-300 mb-2 text-xs uppercase tracking-wide">
                                {category.name}
                              </h4>
                              <div className="space-y-2">
                                {category.items.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-2 pl-4 border-l-2 border-blue-300 dark:border-blue-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg font-inter group/item"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                      {subitem.icon}
                                    </div>
                                    <div>
                                      <div className="font-semibold text-sm">{subitem.name}</div>
                                      {subitem.description && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{subitem.description}</div>
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
                            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-2 pl-4 border-l-2 border-blue-300 dark:border-blue-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg font-inter group/item"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                              {subitem.icon}
                            </div>
                            <div>
                              <div className="font-semibold text-sm">{subitem.name}</div>
                              {subitem.description && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{subitem.description}</div>
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
                className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold text-center rounded-lg transition-all duration-200 font-inter shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default memo(Header);
