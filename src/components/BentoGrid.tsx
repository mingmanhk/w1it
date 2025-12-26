'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Users, Award, TrendingUp, Sparkles, Cpu, Shield, Server, Cloud, BarChart3, Code } from 'lucide-react';
import Card from './Card';

interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  size: 'small' | 'medium' | 'large';
  color: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'indigo';
}

const BentoGrid = () => {
  const bentoItems: BentoItem[] = [
    {
      title: 'IT Services',
      description: 'Comprehensive managed IT services with 24/7 monitoring and proactive maintenance.',
      icon: <Cpu className="w-8 h-8" />,
      href: '/services',
      size: 'large',
      color: 'blue',
    },
    {
      title: 'Case Studies',
      description: 'Real-world success stories and project showcases from our clients.',
      icon: <Award className="w-8 h-8" />,
      href: '/case-studies',
      size: 'medium',
      color: 'purple',
    },
    {
      title: 'Client Testimonials',
      description: 'What our clients say about our IT solutions and support.',
      icon: <Users className="w-8 h-8" />,
      href: '/testimonials',
      size: 'small',
      color: 'green',
    },
    {
      title: 'Latest Insights',
      description: 'Stay updated with the latest IT trends, security tips, and tech insights.',
      icon: <TrendingUp className="w-8 h-8" />,
      href: '/blog',
      size: 'medium',
      color: 'orange',
    },
    {
      title: 'Security Solutions',
      description: 'Advanced cybersecurity and threat protection for your business.',
      icon: <Shield className="w-8 h-8" />,
      href: '/services/security',
      size: 'small',
      color: 'red',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration solutions.',
      icon: <Cloud className="w-8 h-8" />,
      href: '/services/cloud-solutions',
      size: 'small',
      color: 'indigo',
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business intelligence.',
      icon: <BarChart3 className="w-8 h-8" />,
      href: '/solutions/data-analytics',
      size: 'medium',
      color: 'blue',
    },
    {
      title: 'Custom Apps',
      description: 'Tailored software solutions for your unique business needs.',
      icon: <Code className="w-8 h-8" />,
      href: '/apps',
      size: 'small',
      color: 'purple',
    },
    {
      title: 'Get Started',
      description: 'Ready to transform your IT infrastructure? Contact us for a free consultation.',
      icon: <Sparkles className="w-8 h-8" />,
      href: '/contact',
      size: 'large',
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-800',
    purple: 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-800',
    green: 'bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-800',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-800',
    red: 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-800',
    indigo: 'bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border-indigo-200 dark:border-indigo-800',
  };

  const sizeClasses = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-2 md:row-span-1',
    large: 'md:col-span-3 md:row-span-2',
  };

  return (
    <div className="py-12">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white font-display mb-4">
          Modern IT Solutions Grid
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-inter max-w-2xl mx-auto">
          Explore our comprehensive IT services and solutions through our interactive bento grid
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bentoItems.map((item, index) => (
          <div
            key={index}
            className={`${sizeClasses[item.size]} ${colorClasses[item.color]} rounded-2xl border p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group`}
          >
            <Link href={item.href} className="block h-full">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm mb-4">
                    <div className="text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-display mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-inter mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-inter">
          Each card represents a key area of our expertise. Click to explore detailed solutions.
        </p>
      </div>
    </div>
  );
};

export default BentoGrid;