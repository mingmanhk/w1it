import React from 'react';
import Link from 'next/link';

/**
 * W1IT Button Component
 * Matches: Button / Primary / Default, Button / Secondary / Default
 * Specs: Minimal, clean, no shadows, border-radius 8px
 */

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: 'bg-[#3A81F7] text-white hover:bg-[#2968D8]',
  secondary: 'bg-white text-[#050816] border border-[#D9D9D9] hover:border-[#3A81F7]',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    px-6 py-3
    text-body
    font-medium
    rounded-button
    transition-colors
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
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
