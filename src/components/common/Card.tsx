import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'flat' | 'outline' | 'interactive';
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  padding = 'md',
  ...props
}) => {
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const variantStyles = {
    default: 'bg-white border border-slate-200/80 shadow-sm rounded-2xl',
    flat: 'bg-slate-100/70 border border-slate-200/50 rounded-2xl',
    outline: 'bg-white border-2 border-slate-200 rounded-2xl',
    interactive:
      'bg-white border border-slate-200/80 shadow-sm rounded-2xl hover:border-blue-300 hover:shadow-card-hover transition-all duration-200 cursor-pointer',
  };

  return (
    <motion.div
      className={twMerge(
        clsx(variantStyles[variant], paddingStyles[padding], className)
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
