'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, ExternalLink } from 'lucide-react';

export type GridItemSize = 'small' | 'medium' | 'large' | 'xlarge';
export type GridItemType = 'card' | 'feature' | 'cta' | 'stats' | 'testimonial' | 'news';

export interface GridItem {
  id: string;
  title: string;
  description?: string;
  size: GridItemSize;
  type: GridItemType;
  href: string;
  icon?: React.ReactNode;
  image?: string;
  tags?: string[];
  stats?: { value: string; label: string }[];
  ctaText?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  featured?: boolean;
}

interface ModularGridProps {
  items: GridItem[];
  columns?: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ModularGrid: React.FC<ModularGridProps> = ({
  items,
  columns = 3,
  gap = 'md',
  className = '',
}) => {
  const sizeClasses: Record<GridItemSize, string> = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-3 row-span-2',
    xlarge: 'col-span-4 row-span-2',
  };

  const typeClasses: Record<GridItemType, string> = {
    card: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    feature: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-blue-100 dark:border-blue-900/30',
    cta: 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white',
    stats: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900',
    testimonial: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900',
    news: 'bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-800 dark:to-gray-900',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };

  const columnClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const renderItem = (item: GridItem) => {
    const baseClasses = `rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${sizeClasses[item.size]} ${typeClasses[item.type]} ${item.featured ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`;

    switch (item.type) {
      case 'card':
        return (
          <Link
            href={item.href}
            className={`${baseClasses} flex flex-col group`}
          >
            {item.icon && (
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
              </div>
            )}
            <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400 font-inter mb-6 flex-grow">
                {item.description}
              </p>
            )}
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-auto">
              Learn more
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        );

      case 'feature':
        return (
          <Link
            href={item.href}
            className={`${baseClasses} flex flex-col group`}
          >
            {item.tags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-4">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400 font-inter text-lg mb-6">
                {item.description}
              </p>
            )}
            <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 mt-auto">
              Explore feature
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        );

      case 'cta':
        return (
          <Link
            href={item.href}
            className={`${baseClasses} flex flex-col justify-center items-center text-center group`}
          >
            <h3 className="font-poppins font-bold text-3xl text-white mb-4">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-white/90 font-inter text-lg mb-8 max-w-md">
                {item.description}
              </p>
            )}
            <div className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors group-hover:scale-105">
              {item.ctaText || 'Get Started'}
              <ExternalLink className="w-4 h-4 ml-2" />
            </div>
          </Link>
        );

      case 'stats':
        return (
          <div className={`${baseClasses}`}>
            <h3 className="font-poppins font-bold text-2xl text-gray-900 dark:text-white mb-6">
              {item.title}
            </h3>
            {item.stats && (
              <div className="grid grid-cols-2 gap-4">
                {item.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 font-poppins mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {item.href && (
              <Link
                href={item.href}
                className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium mt-6 hover:text-purple-700 dark:hover:text-purple-300"
              >
                View details
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            )}
          </div>
        );

      case 'testimonial':
        return (
          <Link
            href={item.href}
            className={`${baseClasses} flex flex-col group`}
          >
            <div className="text-4xl text-green-600 dark:text-green-400 mb-4">"</div>
            <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-4">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400 font-inter italic mb-6">
                {item.description}
              </p>
            )}
            <div className="text-sm text-gray-500 dark:text-gray-400 font-inter mt-auto">
              Read more testimonials
            </div>
          </Link>
        );

      case 'news':
        return (
          <Link
            href={item.href}
            className={`${baseClasses} flex flex-col group`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs font-medium rounded-full">
                Latest
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                Just now
              </span>
            </div>
            <h3 className="font-poppins font-bold text-xl text-gray-900 dark:text-white mb-3">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400 font-inter mb-6">
                {item.description}
              </p>
            )}
            <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 mt-auto">
              Read article
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="animate-fade-in-up">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default ModularGrid;