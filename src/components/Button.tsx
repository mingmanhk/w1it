import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const variants = {
  primary: 'bg-brand-blue text-white hover:bg-blue-600 active:scale-95 shadow-sm hover:shadow-md',
  secondary: 'border border-brand-blue text-brand-blue hover:bg-blue-50 active:bg-blue-100',
  outline: 'border-2 border-brand-blue text-brand-blue hover:bg-blue-50 active:bg-blue-100',
  ghost: 'text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded',
  md: 'px-6 py-3 text-base rounded',
  lg: 'px-8 py-4 text-lg rounded',
  xl: 'px-10 py-5 text-xl rounded',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium font-sans
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    hover:-translate-y-0.5 active:translate-y-0
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
