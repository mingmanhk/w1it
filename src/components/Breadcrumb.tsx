'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { Category, getCategory } from '@/lib/categories';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  categoryId?: string;
  isCurrent?: boolean;
  icon?: React.ReactNode;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHome = true,
  className = ''
}) => {
  const allItems: BreadcrumbItem[] = showHome
    ? [{ label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> }, ...items]
    : items;

  return (
    <nav className={`flex items-center space-x-2 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          const category = item.categoryId ? getCategory(item.categoryId) : undefined;

          return (
            <li key={index} className="flex items-center space-x-2">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              )}

              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  <span className="font-medium">{item.label}</span>
                </Link>
              ) : (
                <div
                  className={`flex items-center space-x-1 ${category ? `text-${category.color}-600 dark:text-${category.color}-400` : 'text-gray-900 dark:text-white'}`}
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.icon && <span className="mr-1">{item.icon}</span>}
                  <span className="font-semibold">{item.label}</span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

// Category breadcrumb component for page sections
interface CategoryBreadcrumbProps {
  currentCategoryId: string;
  className?: string;
}

export const CategoryBreadcrumb: React.FC<CategoryBreadcrumbProps> = ({
  currentCategoryId,
  className = ''
}) => {
  const category = getCategory(currentCategoryId);
  const allCategories = [
    { label: 'Home', href: '/' },
    { label: 'Page Sections', href: '#sections' },
    ...(category ? [{ label: category.name, categoryId: category.id, isCurrent: true }] : [])
  ];

  return <Breadcrumb items={allCategories} showHome={false} className={className} />;
};

export default Breadcrumb;