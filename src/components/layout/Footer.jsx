// src/components/layout/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer role="contentinfo" className="w-full bg-[#0d1c24] border-t border-arctic-powder/5 text-arctic-powder/60">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Brand Info */}
          <div className="md:col-span-2">
            <a 
              href="#hero" 
              className="flex items-center gap-2 font-display text-lg font-bold text-white mb-4 group"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-forsythia to-deep-saffron text-oceanic-noir font-extrabold shadow-md">
                N
              </span>
              <span>
                NexaFlow <span className="text-forsythia">AI</span>
              </span>
            </a>
            <p className="font-body text-sm max-w-sm leading-relaxed mb-6">
              NexaFlow AI turns raw data streams into self-healing, high-performance pipelines. Scale your infrastructure without breaking your schema.
            </p>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-display text-xs text-emerald-400 font-semibold tracking-wider uppercase">
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-4">
              Platform
            </h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#features" className="hover:text-forsythia transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-forsythia transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-forsythia transition-colors">Social Proof</a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors flex items-center gap-1">
                  Edge Network
                  <img src="/svgs/link.svg" alt="" aria-hidden="true" className="h-3 w-3 opacity-60 invert" />
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="font-display text-xs font-bold text-white tracking-widest uppercase mb-4">
              Developer Info
            </h3>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">API Reference</a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">System Status</a>
              </li>
              <li>
                <a href="#" className="hover:text-forsythia transition-colors">Security Audit</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-arctic-powder/5 my-8" />

        {/* Bottom Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-body text-xs">
          <p>© 2026 NexaFlow AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">SLA Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
