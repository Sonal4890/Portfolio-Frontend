import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="top" className="min-h-[90vh] lg:min-h-screen flex items-center">
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-10 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.h1
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-display leading-none text-neo-cyan tracking-tighter"
            >
              SONAL <br className="hidden sm:block lg:hidden" /> SAINI
            </motion.h1>
            <motion.p
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-neo-gray max-w-xl mx-auto lg:mx-0 font-medium tracking-wide uppercase"
            >
              WELCOME TO MY PORTFOLIO.
            </motion.p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 bg-neo-cyan text-black font-bold px-8 py-4 rounded-sm shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
                href="/Documents/Resume.pdf"
              >
                Resume <ArrowRight size={20} />
              </motion.a>
              <button
                onClick={() => scrollTo('#projects')}
                className="px-8 py-4 rounded-sm border border-white/20 text-white/90 hover:bg-white/5 transition-all w-full sm:w-auto font-bold uppercase tracking-widest text-sm"
              >
                Explore
              </button>
            </div>
          </div>

          <div className="hidden md:block col-span-1 md:col-span-5">
            <div className="bg-neo-surface rounded-md p-6 neon-glow-cyan shadow-neo-soft transform-gpu rotate-2">
              <div className="h-64 w-full bg-black/30 rounded-sm flex items-center justify-center text-neo-magenta font-mono">3D TILE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
