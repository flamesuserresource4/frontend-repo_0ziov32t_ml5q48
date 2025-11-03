import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Activity, Route, DollarSign, Shield, Clock, BarChart3, Smartphone } from 'lucide-react';

const FeatureCard = ({ Icon, title, desc, delay }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [50, -50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX / 6);
    y.set(offsetY / 6);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-indigo-600/10 p-3 ring-1 ring-inset ring-indigo-600/20">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <p className="mt-3 text-slate-600 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-2 text-indigo-700 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more
        <span aria-hidden>→</span>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:via-indigo-500/5" />
    </motion.div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900"
          >
            Everything your field team needs to win the day
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-600"
          >
            Bring structure to daily visits with live tracking, guided routes, and insightful dashboards. Designed for sales leaders and on-the-go reps.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            Icon={MapPin}
            title="Live Location Tracking"
            desc="Monitor your team in real-time with precise GPS breadcrumbs and smart privacy windows."
            delay={0.05}
          />
          <FeatureCard
            Icon={Route}
            title="Visit & Route Planner"
            desc="Create optimized daily routes, auto-check-in on arrival, and capture visit notes with photos."
            delay={0.1}
          />
          <FeatureCard
            Icon={BarChart3}
            title="Analytics & Reporting"
            desc="Understand coverage, conversion, and productivity with beautiful dashboards and exports."
            delay={0.15}
          />
          <FeatureCard
            Icon={Activity}
            title="Order Management"
            desc="Log orders on the spot, track statuses, and sync with your back office in real-time."
            delay={0.2}
          />
          <FeatureCard
            Icon={DollarSign}
            title="Paycheck & Collections"
            desc="Record collections securely, reconcile payouts, and keep finance in the loop automatically."
            delay={0.25}
          />
          <FeatureCard
            Icon={Shield}
            title="Enterprise-Grade Security"
            desc="Role-based access, audit trails, and compliant data retention keep your org protected."
            delay={0.3}
          />
        </div>

        <div id="tracking" className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md"
          >
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-indigo-600" />
              <h3 className="text-xl font-semibold text-slate-900">A delightful mobile experience</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Fast, simple, and built for the road. PunchInPro makes it effortless to check in, add orders, and keep moving.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-500" /> Instant check-in/out</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-500" /> Geo-fenced visits</li>
              <li className="flex items-center gap-2"><Route className="w-4 h-4 text-slate-500" /> Smart routes</li>
              <li className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-slate-500" /> Offline-first data</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-xl"
            id="visits"
          >
            <div className="flex items-center gap-3">
              <Activity className="h-5 w-5 text-white/90" />
              <h3 className="text-xl font-semibold">Command center for managers</h3>
            </div>
            <p className="mt-3 text-white/90">
              Track coverage in real-time, compare reps, and intervene with coaching when it matters most.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">-18%</p>
                <p className="text-xs text-white/80">Travel time</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">+27%</p>
                <p className="text-xs text-white/80">Orders per visit</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-2xl font-bold">2.3x</p>
                <p className="text-xs text-white/80">Faster reporting</p>
              </div>
              <div className="rounded-xl bg-white/10 p-4" id="payments">
                <p className="text-2xl font-bold">99.9%</p>
                <p className="text-xs text-white/80">Reliable sync</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
