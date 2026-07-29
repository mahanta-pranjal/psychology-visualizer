import React from 'react';
import { Brain } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-white border-t border-slate-200/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand info */}
        <NavLink to="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
            <Brain className="w-4 h-4" />
          </div>
          <span className="font-bold text-slate-900 text-sm">
            Psychology<span className="text-blue-600">Visualizer</span>
          </span>
        </NavLink>

        {/* Subtitle */}
        <p className="text-xs text-slate-500">
          Understand psychology through simple interactive experiments.
        </p>
      </div>
    </footer>
  );
};
