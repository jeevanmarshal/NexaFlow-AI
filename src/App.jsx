// src/App.jsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import PricingSection from './components/sections/PricingSection';
import SocialProof from './components/sections/SocialProof';
import Footer from './components/layout/Footer';

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

    </div>
  );
}

export default App;
