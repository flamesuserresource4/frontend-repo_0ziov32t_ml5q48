import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (won't block pointer events) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full bg-indigo-600/10 text-indigo-700 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-indigo-600/20">
            Salesman Tracking & Field Force Suite
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            PunchInPro — Manage Sales Visits with Live Tracking and Powerful Analytics
          </h1>
          <p className="mt-6 text-lg text-slate-700">
            Plan routes, track check-ins in real-time, monitor orders and collections, and get actionable insights — all in one beautifully simple workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-lg hover:bg-slate-800 transition"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
