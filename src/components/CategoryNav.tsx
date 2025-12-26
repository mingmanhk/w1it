'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Grid, Hash } from 'lucide-react';
import { Category, getSortedCategories } from '@/lib/categories';

interface CategoryNavProps {
  activeCategoryId?: string;
  onCategoryClick?: (categoryId: string) => void;
  className?: string;
  sticky?: boolean;
  showLabels?: boolean;
}

const CategoryNav: React.FC<CategoryNavProps> = ({
  activeCategoryId,
  onCategoryClick,
  className = '',
  sticky = true,
  showLabels = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categories = getSortedCategories();

  const handleCategoryClick = (categoryId: string, event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      onCategoryClick?.(categoryId);
    }
  };

  return (
    <div className={`${sticky ? 'sticky top-20 z-40' : ''} ${className}`}>
      <div className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-center space-x-3">
            <Grid className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="font-poppins font-semibold text-gray-900 dark:text-white">
                Page Sections
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-inter">
                Navigate through content categories
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </div>

        {/* Categories List */}
        {isExpanded && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="space-y-2">
              {categories.map((category) => {
                const isActive = activeCategoryId === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={(e) => handleCategoryClick(category.id, e)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? `bg-${category.color}-50 dark:bg-${category.color}-900/20 border-l-4 border-${category.color}-500`
                        : 'hover:bg-gray-50 dark:hover:bg-gray-900'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                      isActive
                        ? `bg-${category.color}-100 dark:bg-${category.color}-900/30 text-${category.color}-600 dark:text-${category.color}-400`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      <Hash className="w-4 h-4" />
                    </div>
                    {showLabels && (
                      <div className="flex-1 text-left">
                        <div className={`font-poppins font-medium ${
                          isActive
                            ? `text-${category.color}-700 dark:text-${category.color}-300`
                            : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {category.name}
                        </div>
                        {category.description && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 font-inter mt-1">
                            {category.description}
                          </div>
                        )}
                      </div>
                    )}
                    {isActive && (
                      <div className={`w-2 h-2 rounded-full bg-${category.color}-500`} />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="text-xs text-gray-500 dark:text-gray-400 font-inter mb-3">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="#top"
                  className="text-xs text-center py-2 px-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Back to Top
                </Link>
                <Link
                  href="/contact"
                  className="text-xs text-center py-2 px-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800/30 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNav;