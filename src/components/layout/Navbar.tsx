import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <NavLink to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-all duration-200">
              <Brain className="w-5 h-5 transition-transform group-hover:scale-110" />
            </div>
            <div>
              <span className="font-bold text-slate-900 tracking-tight text-lg block">
                Psychology<span className="text-blue-600">Visualizer</span>
              </span>
            </div>
          </NavLink>

          {/* Minimal Navigation link */}
          <nav className="flex items-center gap-4">
            <NavLink
              to="/"
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-lg hover:bg-slate-100/70 transition-colors"
            >
              All Experiments
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};
