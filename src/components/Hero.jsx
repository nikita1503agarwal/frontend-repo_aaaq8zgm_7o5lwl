import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="top" className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/40 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-end pb-16">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-orange-300 text-xs sm:text-sm mb-3">Production Operator</p>
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
            Ali Ahmad Furkonudin
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 max-w-2xl">
            Precision and Dedication in Every Production Process
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#bio" className="px-5 py-3 rounded-md bg-orange-500 text-slate-900 font-semibold hover:bg-orange-400 transition-colors">Explore Biodata</a>
            <a href="#projects" className="px-5 py-3 rounded-md border border-slate-700/70 hover:border-slate-600 text-slate-100/90 hover:text-white transition-colors">See Achievements</a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
