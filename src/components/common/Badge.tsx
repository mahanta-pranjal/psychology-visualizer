import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'slate' | 'green' | 'amber' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'px-2 py-0.5 text-xs font-medium',
    md: 'px-2.5 py-1 text-xs font-semibold',
  };

  const variantStyles = {
    blue: 'bg-blue-50 text-blue-700 border border-blue-100/80',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200/60',
    green: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
    amber: 'bg-amber-50 text-amber-700 border border-amber-100',
    outline: 'bg-transparent text-slate-600 border border-slate-200',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center rounded-full tracking-wide transition-colors',
          sizeStyles[size],
          variantStyles[variant],
          className
        )
      )}
    >
      {children}
    </span>
  );
};
