// src/components/sections/SocialProof.jsx
import React, { useState, useEffect, useCallback } from 'react';

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
    initials: "SJ",
    accentFrom: "from-forsythia",
    accentTo: "to-deep-saffron"
  },
  {
    quote: "Switching to NexaFlow's regional tariffs saved us over 35% in data warehousing transfer costs. The edge-distributed compute executes our models right next to our users with bulletproof stability.",
    author: "Marcus Chen",
    role: "Lead Cloud Architect at Aether Labs",
    initials: "MC",
    accentFrom: "from-deep-saffron",
    accentTo: "to-forsythia"
  },
  {
    quote: "We evaluated six pipeline orchestrators before choosing NexaFlow. The self-healing latency alone justified the switch — our P99 recovery time dropped from 4 seconds to under 150ms.",
    author: "Priya Sharma",
    role: "CTO at Synapse Core",
    initials: "PS",
    accentFrom: "from-forsythia",
    accentTo: "to-nocturnal-expedition"
  }
];

const STATS = [
  { value: "99.99%", label: "System SLA Uptime" },
  { value: "500M+", label: "Daily Data Events" },
  { value: "< 150ms", label: "Self-Healing Latency" }
];

export default function SocialProof() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-rotate testimonials every 6 seconds
  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

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

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto mb-20">
          
          {/* Prev Button — uses chevron-left.svg */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-arctic-powder/10 bg-oceanic-noir/80 text-arctic-powder/60 backdrop-blur-sm transition-all duration-200 hover:bg-arctic-powder/10 hover:text-white hover:border-arctic-powder/25 active:scale-90"
          >
            <img src="/svgs/chevron-left.svg" alt="" aria-hidden="true" className="h-4 w-4 invert brightness-200" />
          </button>

          {/* Next Button — uses chevron-right.svg */}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-arctic-powder/10 bg-oceanic-noir/80 text-arctic-powder/60 backdrop-blur-sm transition-all duration-200 hover:bg-arctic-powder/10 hover:text-white hover:border-arctic-powder/25 active:scale-90"
          >
            <img src="/svgs/chevron-right.svg" alt="" aria-hidden="true" className="h-4 w-4 invert brightness-200" />
          </button>

          {/* Testimonial Card */}
          <blockquote 
            key={activeIndex}
            className="relative flex flex-col justify-between rounded-2xl border border-arctic-powder/10 bg-oceanic-noir/50 p-6 md:p-8 shadow-lg backdrop-blur-sm animate-testimonial-fade"
          >
            <div className="font-body text-sm md:text-base leading-relaxed text-arctic-powder/80 italic mb-6">
              "{TESTIMONIALS[activeIndex].quote}"
            </div>
            <footer className="flex items-center gap-4 border-t border-arctic-powder/5 pt-4 mt-auto">
              {/* CSS Initials Avatar — no external images */}
              <div 
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${TESTIMONIALS[activeIndex].accentFrom} ${TESTIMONIALS[activeIndex].accentTo} font-display text-xs font-extrabold text-oceanic-noir select-none shadow-md`}
                aria-hidden="true"
              >
                {TESTIMONIALS[activeIndex].initials}
              </div>
              <div>
                <cite className="not-italic font-display text-xs font-bold text-white block">
                  {TESTIMONIALS[activeIndex].author}
                </cite>
                <span className="font-body text-[10px] text-arctic-powder/50 block mt-0.5">
                  {TESTIMONIALS[activeIndex].role}
                </span>
              </div>
            </footer>
          </blockquote>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to testimonial ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? 'w-6 bg-forsythia'
                    : 'w-2 bg-arctic-powder/20 hover:bg-arctic-powder/40'
                }`}
              />
            ))}
          </div>
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

      {/* Carousel CSS Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes testimonialFade {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-testimonial-fade {
          animation: testimonialFade 300ms ease-out both;
        }
      `}} />
    </section>
  );
}
