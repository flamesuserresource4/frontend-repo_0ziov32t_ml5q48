import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MapPin, Route, BarChart3, Activity, DollarSign, ShieldCheck, Users2, Clock } from 'lucide-react';

const TiltCard = ({ Icon, title, desc, delay }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [60, -60], [10, -10]);
  const rotateY = useTransform(x, [-60, 60], [-10, 10]);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - r.left - r.width / 2) / 6);
    y.set((e.clientY - r.top - r.height / 2) / 6);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl border border-white/10 bg-zinc-900/60 p-6 shadow-2xl ring-1 ring-white/5 hover:ring-red-500/30 backdrop-blur"
    >
      <div className="flex items-center gap-4">
        <div className="rounded-xl bg-red-600/20 p-3 ring-1 ring-inset ring-red-600/30">
          <Icon className="h-6 w-6 text-red-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-zinc-300 text-sm leading-relaxed">{desc}</p>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mt-4 text-red-300 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/0 group-hover:via-red-500/10" />
    </motion.div>
  );
};

const SalesmanShowcase = () => {
  // A stylized 3D salesman card with floating stats
  return (
    <div id="salesman" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl ring-1 ring-white/5">
      <div className="pointer-events-none absolute -inset-20 bg-red-600/10 blur-3xl" />
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white">Your Salesman, Superpowered</h3>
          <p className="mt-2 text-zinc-300">
            A focused mobile flow to punch in, navigate, log orders, collect payments, and punch out — all while managers see progress live.
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-zinc-300">
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-zinc-400" /> One-tap check‑in/out</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-zinc-400" /> Geo‑fenced visits</li>
            <li className="flex items-center gap-2"><Activity className="w-4 h-4 text-zinc-400" /> Order capture</li>
            <li className="flex items-center gap-2"><DollarSign className="w-4 h-4 text-zinc-400" /> Collections</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mx-auto h-80 w-64 [perspective:1200px]"
        >
          {/* 3D salesman silhouette card */}
          <motion.div
            whileHover={{ rotateX: 6, rotateY: -6 }}
            className="relative h-full w-full rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border border-white/10 shadow-2xl overflow-hidden"
          >
            <svg viewBox="0 0 200 300" className="absolute inset-0 h-full w-full opacity-90">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity=".35" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="200" height="300" fill="url(#g)" />
              {/* Minimal 3D salesman-esque silhouette */}
              <path d="M100 70a26 26 0 1 0 0-52 26 26 0 0 0 0 52Z" fill="#fff" opacity="0.9" />
              <path d="M40 190c0-36 28-64 60-64s60 28 60 64v40H40v-40Z" fill="#fff" opacity="0.9" />
            </svg>
            {/* floating stat chips */}
            <div className="absolute -left-6 top-6 rotate-[-6deg] rounded-xl bg-red-600/20 px-3 py-1 text-xs text-red-200 ring-1 ring-red-500/40">+27% orders</div>
            <div className="absolute -right-6 top-24 rotate-[6deg] rounded-xl bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">99.9% sync</div>
            <div className="absolute left-8 bottom-8 rounded-xl bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">-18% travel</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* soft red radial */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            The complete field sales stack
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-zinc-300"
          >
            Red‑black minimal aesthetic, maximum power. Deep analytics, smooth tracking, and delightful mobile flows.
          </motion.p>
        </div>

        <div id="explore" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <TiltCard Icon={MapPin} title="Live Location" desc="Precise GPS trails, privacy windows, and geo-fenced sites for auto check-ins." delay={0.05} />
          <TiltCard Icon={Route} title="Visit Planner" desc="Optimized routes with ETA, priority stops, and smart reschedule suggestions." delay={0.1} />
          <TiltCard Icon={BarChart3} title="Analytics" desc="Coverage, hit-rate, conversion, and leaderboards with exportable reports." delay={0.15} />
          <TiltCard Icon={Activity} title="Orders" desc="On-spot order capture with SKUs, pricing, and status syncing in real-time." delay={0.2} />
          <TiltCard Icon={DollarSign} title="Collections" desc="Secure ledger, payout reconciliation, and finance-ready audit trails." delay={0.25} />
          <TiltCard Icon={ShieldCheck} title="Security" desc="Role-based access, SSO options, and encrypted data at rest/in transit." delay={0.3} />
        </div>

        <div className="mt-16">
          <SalesmanShowcase />
        </div>

        {/* Mini highlight row */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[['Teams', Users2, 'Manage squads and regions'], ['Realtime', Activity, 'Live KPIs and alerts'], ['On-time', Clock, 'SLA-driven visits'], ['Exports', BarChart3, 'CSV, XLSX, dashboards']].map(([label, Icon, sub]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4 ring-1 ring-white/5">
              <div className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-red-400" />
                <div className="font-medium">{label}</div>
              </div>
              <div className="mt-1 text-sm text-zinc-400">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
