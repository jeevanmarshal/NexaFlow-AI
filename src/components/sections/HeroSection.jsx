// src/components/sections/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      aria-labelledby="hero-heading" 
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 text-center lg:pt-32 lg:pb-24"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-forsythia/5 blur-[120px] lg:h-[600px] lg:w-[600px] lg:bg-forsythia/10"></div>
        <div className="absolute top-20 right-1/4 h-[350px] w-[350px] rounded-full bg-deep-saffron/5 blur-[100px] lg:bg-deep-saffron/5"></div>
      </div>

      {/* Hero Badge */}
      <div className="hero-sub mb-6 inline-flex items-center gap-2 rounded-full border border-forsythia/20 bg-forsythia/5 px-4 py-1.5 font-display text-xs font-semibold tracking-wider text-forsythia uppercase">
        <img src="/svgs/arrow-trending-up.svg" alt="" aria-hidden="true" className="h-3.5 w-3.5" />
        Speed Run Phase 1 — Active
      </div>

      {/* Main Headline */}
      <h1 
        id="hero-heading" 
        className="hero-headline mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        Automate Everything.<br />
        <span className="bg-gradient-to-r from-forsythia to-deep-saffron bg-clip-text text-transparent">
          Scale Infinitely.
        </span>
      </h1>

      {/* Subheadline */}
      <p 
        className="hero-sub mx-auto mt-6 max-w-2xl font-body text-base text-arctic-powder/70 sm:text-lg md:text-xl leading-relaxed"
      >
        NexaFlow AI turns your raw data streams into self-healing, high-performance pipelines. Designed for developer teams who cannot afford pipeline failures.
      </p>

      {/* CTA Buttons */}
      <div 
        className="hero-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
      >
        <a 
          href="#pricing" 
          className="font-body inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-gradient-to-r from-forsythia to-deep-saffron px-8 text-base font-bold text-oceanic-noir shadow-lg shadow-forsythia/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-forsythia/35 active:translate-y-0 active:scale-95"
        >
          Get Started Free
        </a>
        <a 
          href="#features" 
          className="font-body inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border border-arctic-powder/15 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/20 active:scale-95"
        >
          Explore Features
        </a>
      </div>

      {/* Premium Visual: Self-Healing Pipe Visualization */}
      <div 
        className="hero-visual relative mt-16 w-full max-w-4xl rounded-2xl border border-arctic-powder/10 bg-oceanic-noir/50 p-4 shadow-2xl backdrop-blur-sm sm:p-6 lg:p-8"
      >
        {/* Glow effect on border */}
        <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-b from-forsythia/10 to-transparent opacity-30 blur-md"></div>
        
        {/* Mock Console Header */}
        <div className="mb-4 flex items-center justify-between border-b border-arctic-powder/5 pb-4">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 font-display text-xs text-arctic-powder/40 tracking-wider">nexaflow-stream-visualizer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-display text-[10px] text-emerald-400 tracking-wider uppercase">Live Visualizer</span>
          </div>
        </div>

        {/* CSS Animated Pipeline Grid */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#0b171e] p-6 flex flex-col justify-between">
          
          {/* Inner pipeline nodes */}
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16 pointer-events-none">
            {/* Input Node */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-arctic-powder/5 border border-arctic-powder/20 flex items-center justify-center shadow-lg relative group">
                <img src="/svgs/link-solid.svg" alt="" className="h-5 w-5 invert brightness-200" />
                <span className="absolute -top-8 bg-oceanic-noir border border-arctic-powder/15 px-2 py-0.5 rounded text-[10px] font-display whitespace-nowrap text-white">Data Ingestion</span>
              </div>
            </div>

            {/* Middle Orchestrator Node */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-14 w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-br from-forsythia to-deep-saffron border border-forsythia/20 flex items-center justify-center shadow-lg shadow-forsythia/10 relative group animate-spin-slow">
                <img src="/svgs/cog-8-tooth.svg" alt="" className="h-6 w-6 text-oceanic-noir" />
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl border border-forsythia/30 animate-pulse"></div>
              </div>
              <span className="mt-2 font-display text-[10px] tracking-widest text-forsythia font-bold uppercase">NexaEngine</span>
            </div>

            {/* Output Node */}
            <div className="flex flex-col items-center gap-2">
              <div className="h-10 w-10 md:h-12 md:w-12 rounded-xl bg-arctic-powder/5 border border-arctic-powder/20 flex items-center justify-center shadow-lg relative">
                <img src="/svgs/cube-16-solid.svg" alt="" className="h-5 w-5 text-forsythia" />
                <span className="absolute -top-8 bg-oceanic-noir border border-arctic-powder/15 px-2 py-0.5 rounded text-[10px] font-display whitespace-nowrap text-white">Edge Target</span>
              </div>
            </div>
          </div>

          {/* SVG Animated Flow lines */}
          <svg className="absolute inset-0 h-full w-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Paths */}
            <path d="M 120 180 Q 250 80 430 180" fill="none" stroke="rgba(241,246,244,0.05)" strokeWidth="3" />
            <path d="M 120 180 Q 250 280 430 180" fill="none" stroke="rgba(241,246,244,0.05)" strokeWidth="3" />
            
            <path d="M 470 180 Q 620 80 750 180" fill="none" stroke="rgba(241,246,244,0.05)" strokeWidth="3" />
            <path d="M 470 180 Q 620 280 750 180" fill="none" stroke="rgba(241,246,244,0.05)" strokeWidth="3" />

            {/* Glowing animated paths using dashoffset */}
            <path 
              d="M 120 180 Q 250 80 430 180" 
              fill="none" 
              stroke="url(#grad-left)" 
              strokeWidth="3" 
              strokeDasharray="30 150" 
              className="animate-flow-left"
            />
            <path 
              d="M 120 180 Q 250 280 430 180" 
              fill="none" 
              stroke="url(#grad-left)" 
              strokeWidth="3" 
              strokeDasharray="40 180" 
              className="animate-flow-left-alt"
            />

            <path 
              d="M 470 180 Q 620 80 750 180" 
              fill="none" 
              stroke="url(#grad-right)" 
              strokeWidth="3" 
              strokeDasharray="40 160" 
              className="animate-flow-right"
            />
            <path 
              d="M 470 180 Q 620 280 750 180" 
              fill="none" 
              stroke="url(#grad-right)" 
              strokeWidth="3" 
              strokeDasharray="25 140" 
              className="animate-flow-right-alt"
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="grad-left" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFC801" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#FF9932" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFC801" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="grad-right" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF9932" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#F1F6F4" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF9932" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>

          {/* Animated styles local */}
          <style dangerouslySetInnerHTML={{__html: `
            .animate-spin-slow {
              animation: spin 16s linear infinite;
            }
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            .animate-flow-left {
              animation: flowLeft 4s linear infinite;
            }
            .animate-flow-left-alt {
              animation: flowLeft 6s linear infinite reverse;
            }
            .animate-flow-right {
              animation: flowRight 5s linear infinite;
            }
            .animate-flow-right-alt {
              animation: flowRight 7s linear infinite reverse;
            }
            @keyframes flowLeft {
              to {
                stroke-dashoffset: -180;
              }
            }
            @keyframes flowRight {
              to {
                stroke-dashoffset: -200;
              }
            }
          `}} />

          {/* Simulated Code Panel Log overlay (Bottom of visualizer) */}
          <div className="mt-auto flex justify-between bg-black/40 rounded border border-arctic-powder/5 p-2 font-display text-[10px] text-arctic-powder/50 text-left backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              [SCHEMA_DRIFT] Detected at pipeline-385. Resolving mappings...
            </span>
            <span className="text-forsythia select-none font-bold">100% REPAIRED (0ms downtime)</span>
          </div>

        </div>
      </div>
    </section>
  );
}
