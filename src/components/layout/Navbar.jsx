// src/components/layout/Navbar.jsx
import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      role="banner" 
      className="sticky top-0 z-50 w-full border-b border-arctic-powder/5 bg-oceanic-noir/80 backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-white select-none group"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-forsythia to-deep-saffron text-oceanic-noir font-extrabold shadow-md shadow-forsythia/20 transition-transform duration-300 group-hover:scale-105">
            N
          </span>
          <span className="transition-colors duration-200 group-hover:text-forsythia">
            NexaFlow <span className="text-forsythia">AI</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className="font-body text-sm font-medium text-arctic-powder/80 transition-colors hover:text-forsythia relative group py-2"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forsythia transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#pricing" 
            className="font-body text-sm font-medium text-arctic-powder/80 transition-colors hover:text-forsythia relative group py-2"
          >
            Pricing
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forsythia transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#testimonials" 
            className="font-body text-sm font-medium text-arctic-powder/80 transition-colors hover:text-forsythia relative group py-2"
          >
            Social Proof
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forsythia transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-arctic-powder/10 text-arctic-powder/60 transition-all duration-200 hover:bg-arctic-powder/5 hover:text-white hover:border-arctic-powder/20 active:scale-95"
          >
            <img src="/svgs/search.svg" alt="" aria-hidden="true" className="h-4 w-4 invert brightness-200" />
          </button>
          <a 
            href="#pricing" 
            className="font-body inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-forsythia to-deep-saffron px-5 text-sm font-bold text-oceanic-noir shadow-lg shadow-forsythia/10 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-forsythia/20 active:translate-y-0 active:scale-95"
          >
            Launch Console
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-arctic-powder/10 text-arctic-powder hover:bg-arctic-powder/5 md:hidden"
        >
          {mobileMenuOpen ? (
            <img src="/svgs/x-mark.svg" alt="" aria-hidden="true" className="h-5 w-5 invert brightness-200" />
          ) : (
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="2" 
              stroke="currentColor" 
              className="h-5 w-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-arctic-powder/5 bg-oceanic-noir ${
          mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-6 pt-2">
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-medium text-arctic-powder/80 py-2 border-b border-arctic-powder/5 hover:text-forsythia transition-colors"
          >
            Features
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-medium text-arctic-powder/80 py-2 border-b border-arctic-powder/5 hover:text-forsythia transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#testimonials" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-body text-sm font-medium text-arctic-powder/80 py-2 border-b border-arctic-powder/5 hover:text-forsythia transition-colors"
          >
            Social Proof
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="font-body flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-forsythia to-deep-saffron text-sm font-bold text-oceanic-noir"
          >
            Launch Console
          </a>
        </div>
      </div>
    </header>
  );
}
