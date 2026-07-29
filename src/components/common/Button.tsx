import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-6 py-3 text-base font-semibold gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 shadow-sm shadow-blue-500/20 active:bg-blue-800',
    secondary:
      'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100 active:bg-blue-200',
    outline:
      'bg-white text-slate-700 border border-slate-300 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50',
    ghost:
      'bg-transparent text-slate-600 hover:text-blue-600 hover:bg-slate-100/70',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
