import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  to = '/',
  label = 'Back to Experiments',
  className = '',
}) => {
  return (
    <NavLink to={to} className={`inline-block ${className}`}>
      <Button
        variant="ghost"
        size="sm"
        icon={<ArrowLeft className="w-4 h-4 text-slate-500" />}
        className="text-slate-600 hover:text-blue-600 px-3 py-1.5"
      >
        {label}
      </Button>
    </NavLink>
  );
};
