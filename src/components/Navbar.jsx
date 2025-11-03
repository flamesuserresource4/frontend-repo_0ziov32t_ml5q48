import React from 'react';
import { motion } from 'framer-motion';

// Minimal animated logo for PunchInPro
const Logo = () => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex items-center gap-3"
  >
    <span className="relative inline-flex h-8 w-8 items-center justify-center">
      {/* layered futuristic mark */}
      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-red-500 to-fuchsia-500 blur-sm opacity-70" />
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black ring-1 ring-white/15">
        <svg viewBox="0 0 32 32" className="h-5 w-5">
          <defs>
            <linearGradient id="p" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff" stopOpacity=".95" />
              <stop offset="100%" stopColor="#fff" stopOpacity=".65" />
            </linearGradient>
          </defs>
          {/* stylized P mark */}
          <path d="M8 6h9.5a6.5 6.5 0 1 1 0 13H14v7H8V6Zm6 5v3h3.5a1.5 1.5 0 0 0 0-3H14Z" fill="url(#p)" />
        </svg>
      </span>
    </span>
    <div className="flex flex-col leading-none">
      <span className="text-white font-semibold tracking-tight">PunchInPro</span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Field Force OS</span>
    </div>
  </motion.div>
);

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-center">
          <a href="#hero" className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
