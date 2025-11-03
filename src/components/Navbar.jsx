import React from 'react';
import { Rocket, MapPin, BarChart3, ClipboardList, DollarSign } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <Rocket className="h-6 w-6 text-indigo-600" />
            <span>PunchInPro</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Features
            </a>
            <a href="#tracking" className="hover:text-slate-900 transition-colors flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Live Tracking
            </a>
            <a href="#visits" className="hover:text-slate-900 transition-colors flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Visit Management
            </a>
            <a href="#payments" className="hover:text-slate-900 transition-colors flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Collections
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
