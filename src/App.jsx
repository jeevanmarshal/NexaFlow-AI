// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PricingSection from './components/sections/PricingSection';
import SocialProof from './components/sections/SocialProof';
import Footer from './components/layout/Footer';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-arctic-powder/15 bg-oceanic-noir/90 text-arctic-powder/70 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-forsythia hover:text-oceanic-noir hover:border-forsythia hover:shadow-forsythia/20 hover:-translate-y-0.5 active:scale-90 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <img src="/svgs/chevron-up.svg" alt="" aria-hidden="true" className="h-5 w-5 invert brightness-200" />
    </button>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-oceanic-noir text-arctic-powder">
      
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout Flow */}
      <main id="main-content" className="flex-grow">
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Features Bento/Accordion Section */}
        <FeaturesSection />

        {/* 3. Regional Pricing Section */}
        <PricingSection />

        {/* 4. Social Proof/Testimonials Section */}
        <SocialProof />

      </main>

      {/* Footer Content */}
      <Footer />

      {/* Scroll-to-top floating button (uses chevron-up.svg) */}
      <ScrollToTop />

    </div>
  );
}

export default App;
