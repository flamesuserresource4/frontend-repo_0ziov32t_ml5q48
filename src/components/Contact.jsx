import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(239,68,68,0.18),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-zinc-900/60 p-8 ring-1 ring-white/5"
          >
            <h3 className="text-2xl font-bold">Connect with our team</h3>
            <p className="mt-2 text-zinc-300">Tell us about your field operations and we’ll tailor a walkthrough for you.</p>

            <form className="mt-6 grid grid-cols-1 gap-4">
              <div>
                <label className="text-sm text-zinc-400">Name</label>
                <input type="text" required className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Jane Doe" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-zinc-400">Email</label>
                  <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="text-sm text-zinc-400">Phone</label>
                  <input type="tel" className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="+1 555 123 4567" />
                </div>
              </div>
              <div>
                <label className="text-sm text-zinc-400">Message</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-600" placeholder="Share your goals and current tools..." />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(239,68,68,0.45)] hover:bg-red-500 transition">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8 ring-1 ring-white/5"
          >
            <h4 className="text-xl font-semibold">More about PunchInPro</h4>
            <p className="mt-2 text-zinc-300">
              We help modern field teams plan, execute, and analyze daily visits with elegance and speed. Designed for mobility, built for scale.
            </p>
            <div className="mt-6 space-y-3 text-zinc-300">
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-red-400" /> hello@punchinpro.com</div>
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-red-400" /> +1 (555) 987‑0000</div>
              <div className="flex items-center gap-3"><MapPin className="w-4 h-4 text-red-400" /> Remote‑first • Global
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-white/10 bg-zinc-950 p-4 text-center">
                <div className="text-2xl font-bold text-white">2.3x</div>
                <div className="text-xs text-zinc-400">Faster reporting</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-950 p-4 text-center">
                <div className="text-2xl font-bold text-white">+27%</div>
                <div className="text-xs text-zinc-400">Orders per visit</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-950 p-4 text-center">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-xs text-zinc-400">Reliable sync</div>
              </div>
            </div>

            <div className="mt-10 text-center text-xs text-zinc-500">
              © {new Date().getFullYear()} PunchInPro • Crafted with care
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
