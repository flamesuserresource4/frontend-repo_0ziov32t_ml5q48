import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(14,165,233,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-black ring-1 ring-white/15">
                <svg viewBox="0 0 32 32" className="h-5 w-5 text-white">
                  <path d="M8 6h9.5a6.5 6.5 0 1 1 0 13H14v7H8V6Zm6 5v3h3.5a1.5 1.5 0 0 0 0-3H14Z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-semibold">PunchInPro</span>
            </div>
            <p className="mt-3 text-sm text-zinc-400 max-w-sm">
              A modern, minimalist platform to orchestrate field sales — from routes to reports — with delightful speed.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <div className="text-zinc-400">Product</div>
              <ul className="mt-2 space-y-2">
                <li><a className="hover:text-white" href="#hero">Overview</a></li>
                <li><a className="hover:text-white" href="#">Pricing</a></li>
                <li><a className="hover:text-white" href="#">Security</a></li>
              </ul>
            </div>
            <div>
              <div className="text-zinc-400">Company</div>
              <ul className="mt-2 space-y-2">
                <li><a className="hover:text-white" href="#">About</a></li>
                <li><a className="hover:text-white" href="#">Careers</a></li>
                <li><a className="hover:text-white" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-zinc-400 text-sm">Follow</div>
            <div className="mt-3 flex items-center gap-3 text-zinc-400">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} PunchInPro. All rights reserved.</div>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
