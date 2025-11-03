import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-35%']);
  const opacityTitle = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[110vh] w-full overflow-hidden bg-black text-white">
      {/* Vignette + subtle grid */}
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,transparent_0,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%,transparent_100%),linear-gradient(to_bottom,transparent_0,transparent_49%,rgba(255,255,255,0.03)_50%,transparent_51%,transparent_100%)] bg-[size:48px_48px]" />

      {/* 3D Object */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[560px] w-full max-w-6xl">
          <Spline
            scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* glow */}
          <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-gradient-to-br from-red-600/10 via-fuchsia-500/10 to-sky-500/10 blur-3xl" />
        </div>
      </motion.div>

      {/* Floating orbs for extra depth */}
      <motion.div style={{ y: y2 }} className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[60px]" />
      <motion.div style={{ y: y2 }} className="absolute top-20 -right-10 h-56 w-56 rounded-full bg-sky-500/20 blur-[60px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-28">
        <motion.div
          style={{ opacity: opacityTitle }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 text-white/90 px-3 py-1 text-xs font-semibold ring-1 ring-inset ring-white/20">
            Interactive • Tech • Futuristic
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Track every visit. Boost every outcome.
          </h1>
          <p className="mt-5 text-lg text-zinc-300">
            A minimalist, modern command center for field sales. Real‑time location, visit flows, orders, collections — beautifully integrated.
          </p>
        </motion.div>

        {/* Scroll cue */}
        <div className="mt-16 flex justify-center">
          <div className="flex flex-col items-center text-xs text-zinc-400">
            <div className="h-8 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
            Scroll
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Hero;
