// src/components/sections/SocialProof.jsx
import React from 'react';

const LOGOS = [
  { name: 'Vortex Data', icon: '🌀' },
  { name: 'Aether Labs', icon: '✦' },
  { name: 'Synapse Core', icon: '🧠' },
  { name: 'Quantum Scale', icon: '⚛' },
  { name: 'Hyper Flow', icon: '⚡' }
];

const TESTIMONIALS = [
  {
    quote: "NexaFlow AI resolved a major schema drift error on our production pipeline in under 10 milliseconds. Our team didn't even receive a pager duty alert because it healed itself. Absolutely incredible engineering.",
    author: "Sarah Jenkins",
    role: "VP of Engineering at Vortex Data",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    quote: "Switching to NexaFlow's regional tariffs saved us over 35% in data warehousing transfer costs. The edge-distributed compute executes our models right next to our users with bulletproof stability.",
    author: "Marcus Chen",
    role: "Lead Cloud Architect at Aether Labs",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const STATS = [
  { value: "99.99%", label: "System SLA Uptime" },
  { value: "500M+", label: "Daily Data Events" },
  { value: "< 150ms", label: "Self-Healing Latency" }
];

export default function SocialProof() {
  return (
    <section 
      id="testimonials" 
      aria-labelledby="testimonials-heading" 
      className="w-full py-20 lg:py-28 bg-oceanic-noir relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Logos Bar */}
        <div className="text-center mb-16">
          <p className="font-display text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6">
            Empowering Modern Infrastructure Teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
            {LOGOS.map((logo, idx) => (
              <div key={idx} className="flex items-center gap-2 text-white hover:opacity-100 transition-opacity duration-200 cursor-default">
                <span className="text-lg">{logo.icon}</span>
                <span className="font-display text-xs font-bold tracking-wider uppercase">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs font-bold tracking-widest text-forsythia uppercase">
            Proven at Scale
          </span>
          <h2 
            id="testimonials-heading" 
            className="font-display text-3xl font-bold tracking-tight text-white mt-3 sm:text-4xl lg:text-5xl"
          >
            What Infrastructure Engineers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20 px-4 md:px-0">
          {TESTIMONIALS.map((t, idx) => (
            <blockquote 
              key={idx} 
              className="relative flex flex-col justify-between rounded-2xl border border-arctic-powder/10 bg-oceanic-noir/50 p-6 md:p-8 shadow-lg backdrop-blur-sm hover:border-arctic-powder/20 transition-all duration-200"
            >
              <div className="font-body text-sm md:text-base leading-relaxed text-arctic-powder/80 italic mb-6">
                "{t.quote}"
              </div>
              <footer className="flex items-center gap-4 border-t border-arctic-powder/5 pt-4 mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.author} 
                  className="h-10 w-10 rounded-full object-cover border border-arctic-powder/20 bg-arctic-powder/10" 
                />
                <div>
                  <cite className="not-italic font-display text-xs font-bold text-white block">
                    {t.author}
                  </cite>
                  <span className="font-body text-[10px] text-arctic-powder/50 block mt-0.5">
                    {t.role}
                  </span>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 border border-arctic-powder/10 rounded-2xl bg-oceanic-noir/40 p-8 max-w-4xl mx-auto text-center backdrop-blur-sm">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <span className="font-display text-3xl font-extrabold text-forsythia sm:text-4xl md:text-5xl tracking-tight">
                {stat.value}
              </span>
              <span className="font-body text-xs text-arctic-powder/50 font-semibold tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
