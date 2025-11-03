import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Route, BarChart3, DollarSign, CheckCircle2 } from 'lucide-react';

const Step = ({ index, title, desc, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-2xl border border-white/10 bg-zinc-900/60 p-6 ring-1 ring-white/5"
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 rounded-xl bg-white/10 p-3">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div>
          <div className="text-sm text-zinc-400">Step {index}</div>
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <p className="mt-1 text-sm text-zinc-300">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ProductTour = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);
  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '6deg']);

  return (
    <section ref={ref} className="relative py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      {/* Soft radial background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(236,72,153,0.16),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            Product tour
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-zinc-300"
          >
            A smooth, guided flow that mirrors a day in the life of your field team.
          </motion.p>
        </div>

        {/* Parallax device mock */}
        <motion.div style={{ y, rotate }} className="relative mx-auto mt-12 h-[520px] w-full max-w-4xl [perspective:1200px]">
          <div className="relative h-full rounded-[28px] border border-white/10 bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl ring-1 ring-white/10 overflow-hidden">
            {/* top bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" /> live
              </div>
              <div className="text-xs text-zinc-400">PunchInPro</div>
            </div>
            {/* screen content */}
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="p-6">
                <div className="text-sm text-zinc-400">Today</div>
                <div className="mt-1 text-lg font-semibold">4 visits • 18km • ETA 3h</div>
                <div className="mt-4 space-y-3">
                  {[
                    ['Check‑in at Acme Retail', MapPin, 'Auto geo-check and notes'],
                    ['Plan route to North Cluster', Route, 'Optimized path with ETA'],
                    ['Record orders on-site', BarChart3, 'SKUs, pricing, discounts'],
                    ['Collect payment & sync', DollarSign, 'Secure and real-time'],
                  ].map(([t, I, s], i) => (
                    <div key={t} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/30 p-3">
                      <I className="w-4 h-4 mt-1 text-zinc-300" />
                      <div>
                        <div className="text-sm font-medium">{t}</div>
                        <div className="text-xs text-zinc-400">{s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative p-6">
                <div className="absolute -inset-10 bg-fuchsia-500/10 blur-3xl" />
                <div className="relative grid grid-cols-2 gap-3">
                  {["Coverage", "Conversion", "OTIF", "Collections"].map((k, i) => (
                    <motion.div
                      key={k}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-xs text-zinc-300">{k}</div>
                      <div className="mt-1 text-2xl font-bold">
                        {k === 'Coverage' && '92%'}
                        {k === 'Conversion' && '18%'}
                        {k === 'OTIF' && '96%'}
                        {k === 'Collections' && '₹1.2M'}
                      </div>
                      <div className="mt-2 flex items-center gap-1 text-xs text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Good trend
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Linear steps */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Step index={1} title="Punch‑in & route" desc="Start the day with a single tap and a smart route planned for you." Icon={Route} />
          <Step index={2} title="Geo check‑ins" desc="Auto arrival detection and frictionless visit notes with photos." Icon={MapPin} />
          <Step index={3} title="Orders on the go" desc="Capture line items, discounts, and sync instantly to HQ." Icon={BarChart3} />
          <Step index={4} title="Collections" desc="Record payments securely and reconcile payouts in one place." Icon={DollarSign} />
        </div>
      </div>
    </section>
  );
};

export default ProductTour;
