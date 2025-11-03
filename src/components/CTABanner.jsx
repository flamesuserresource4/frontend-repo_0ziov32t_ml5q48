import React from 'react';
import { motion } from 'framer-motion';

const CTABanner = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-fuchsia-500/10" />
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Ready to level up your field sales?</h3>
              <p className="mt-2 text-slate-700">
                Try PunchInPro free for 14 days. No credit card required. Set up your team and start tracking within minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-lg hover:bg-slate-800 transition"
              >
                Start Free Trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 px-6 py-3 text-sm font-medium hover:bg-slate-50 transition"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} PunchInPro. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
