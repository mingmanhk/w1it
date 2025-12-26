'use client';

import React, { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Zap,
  Wrench,
  BarChart,
  Code,
  MessageSquare,
  Globe,
  Cpu,
  Shield,
  Cloud,
  Network,
  Server,
  FileText,
  Database,
  RefreshCw,
  Headphones,
} from 'lucide-react';
import {
  mainNavigation,
  servicesNavigation,
  solutionsNavigation,
  appsNavigation,
  type NavigationItem,
  type NavigationGroup,
} from '@/lib/navigation';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Icon mapping from iconName to component
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-4 h-4" />,
    Wrench: <Wrench className="w-4 h-4" />,
    BarChart: <BarChart className="w-4 h-4" />,
    Code: <Code className="w-4 h-4" />,
    MessageSquare: <MessageSquare className="w-4 h-4" />,
    Globe: <Globe className="w-4 h-4" />,
    Cpu: <Cpu className="w-4 h-4" />,
    Shield: <Shield className="w-4 h-4" />,
    Cloud: <Cloud className="w-4 h-4" />,
    Network: <Network className="w-4 h-4" />,
    Server: <Server className="w-4 h-4" />,
    FileText: <FileText className="w-4 h-4" />,
    Database: <Database className="w-4 h-4" />,
    RefreshCw: <RefreshCw className="w-4 h-4" />,
    Headphones: <Headphones className="w-4 h-4" />,
    Phone: <Phone className="w-4 h-4" />,
  };

  // Helper function to get submenu for a navigation item
  const getSubmenu = (itemName: string) => {
    switch (itemName) {
      case 'Services':
        return servicesNavigation;
      case 'Solutions':
        return solutionsNavigation;
      case 'Apps':
        return appsNavigation;
      default:
        return null;
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
      <Container>
        <nav className="flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-brand-blue to-blue-700 rounded-2xl shadow-md">
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
              <div className="text-3xl font-bold text-text-primary dark:text-text-primary font-display tracking-tight">W1IT</div>
              <div className="text-sm text-text-tertiary dark:text-text-tertiary font-sans tracking-wide uppercase mt-1">Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const submenu = getSubmenu(item.name);
              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue font-medium transition-all duration-200 flex items-center gap-2 py-3 px-5 font-sans rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50"
                  >
                    {item.iconName && iconMap[item.iconName] && (
                      <span className="text-brand-blue dark:text-brand-blue">{iconMap[item.iconName]}</span>
                    )}
                    <span className="font-semibold">{item.name}</span>
                    {item.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-brand-blue dark:text-blue-400">
                        {item.badge}
                      </span>
                    )}
                    {submenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 text-gray-400" />}
                  </Link>

                  {/* Submenu - Modern Design */}
                  {submenu && (
                    <div className="absolute left-0 mt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-gray-950 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6">
                      {/* Services Mega Menu with Categories */}
                      {Array.isArray(submenu) && submenu[0] && 'items' in submenu[0] ? (
                        <div className="grid grid-cols-2 gap-6">
                          {(submenu as NavigationGroup[]).map((category, idx) => (
                            <div key={idx} className="relative">
                              <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-brand-blue to-blue-600 rounded-full"></div>
                              <h3 className="font-display font-bold text-gray-900 dark:text-white mb-4 text-base flex items-center gap-2">
                                <span className="text-brand-blue dark:text-brand-blue">
                                  {item.name === 'Services' ? (idx === 0 ? '🛠️' : '📊') : '✨'}
                                </span>
                                {category.name}
                              </h3>
                              <div className="space-y-2">
                                {category.items.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-3 transition-all duration-200 font-sans group/item"
                                  >
                                    <div className="mt-0.5 text-brand-blue dark:text-brand-blue group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                      {subitem.iconName && iconMap[subitem.iconName]}
                                    </div>
                                    <div className="flex-1">
                                      <div className="font-semibold text-sm flex items-center gap-2">
                                        {subitem.name}
                                        {subitem.featured && (
                                          <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                            Featured
                                          </span>
                                        )}
                                      </div>
                                      {subitem.description && (
                                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                          {subitem.description}
                                        </div>
                                      )}
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
                          {(submenu as NavigationItem[]).map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg p-3 transition-all duration-200 font-sans group/item"
                            >
                              <div className="mt-0.5 text-brand-blue dark:text-brand-blue group-hover/item:text-blue-700 dark:group-hover/item:text-blue-300 bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                {subitem.iconName && iconMap[subitem.iconName]}
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-sm flex items-center gap-2">
                                  {subitem.name}
                                  {subitem.featured && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                      Featured
                                    </span>
                                  )}
                                </div>
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
              );
            })}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 font-sans shadow-md hover:scale-[1.02] transform flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-all duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="flex flex-col space-y-1">
              {mainNavigation.map((item) => {
                const submenu = getSubmenu(item.name);
                return (
                  <div key={item.name} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                    <Link
                      href={item.href}
                      className="block text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue font-medium transition-all duration-200 py-4 px-4 font-sans text-base flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.iconName && iconMap[item.iconName] && (
                      <span className="text-brand-blue dark:text-brand-blue">{iconMap[item.iconName]}</span>
                    )}
                      <span className="font-semibold">{item.name}</span>
                      {item.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-brand-blue dark:text-blue-400">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                    {submenu && (
                      <div className="ml-4 mb-4 space-y-2">
                        {/* Services Mega Menu Mobile */}
                        {Array.isArray(submenu) && submenu[0] && 'items' in submenu[0] ? (
                          <>
                            {(submenu as NavigationGroup[]).map((category, idx) => (
                              <div key={idx} className="mb-4">
                                <h4 className="font-display font-semibold text-gray-700 dark:text-gray-300 mb-2 text-xs uppercase tracking-wide">
                                  {category.name}
                                </h4>
                                <div className="space-y-2">
                                  {category.items.map((subitem) => (
                                    <Link
                                      key={subitem.name}
                                      href={subitem.href}
                                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-all duration-200 py-2 pl-4 border-l-2 border-blue-300 dark:border-blue-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg font-sans group/item"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <div className="text-brand-blue dark:text-brand-blue bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                        {subitem.iconName && iconMap[subitem.iconName]}
                                      </div>
                                      <div>
                                        <div className="font-semibold text-sm flex items-center gap-2">
                                          {subitem.name}
                                          {subitem.featured && (
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                              Featured
                                            </span>
                                          )}
                                        </div>
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
                          (submenu as NavigationItem[]).map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-blue transition-all duration-200 py-2 pl-4 border-l-2 border-blue-300 dark:border-blue-700 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-r-lg font-sans group/item"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="text-brand-blue dark:text-brand-blue bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                                {subitem.iconName && iconMap[subitem.iconName]}
                              </div>
                              <div>
                                <div className="font-semibold text-sm flex items-center gap-2">
                                  {subitem.name}
                                  {subitem.featured && (
                                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                                      Featured
                                    </span>
                                  )}
                                </div>
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
                );
              })}
              <Link
                href="/contact"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-brand-blue to-blue-700 text-white font-semibold text-center rounded-lg transition-all duration-200 font-sans shadow-md hover:shadow-lg flex items-center justify-center gap-2"
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
