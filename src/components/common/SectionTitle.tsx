import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  icon,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2.5 mb-3 ${className}`}>
      {icon && <span className="text-blue-600 shrink-0">{icon}</span>}
      <h3 className="text-lg font-bold text-slate-900 tracking-tight">
        {children}
      </h3>
    </div>
  );
};
