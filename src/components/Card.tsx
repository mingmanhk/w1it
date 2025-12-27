import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

const paddingClasses = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  hoverable = false,
  className = '',
  onClick,
  padding = 'md',
  style,
}: CardProps) {
  const baseClasses = `
    bg-white rounded-2xl border-2 border-neutral-200 shadow-sm
    ${paddingClasses[padding]}
    ${hoverable ? 'transition-all duration-300 hover:shadow-lg hover:border-primary-300 hover:-translate-y-1' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={baseClasses} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
