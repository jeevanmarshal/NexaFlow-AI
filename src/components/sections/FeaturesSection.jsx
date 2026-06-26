// src/components/sections/FeaturesSection.jsx
import React from 'react';
import { useActiveFeatureIndex } from '../../hooks/useActiveFeatureIndex';
import BentoGrid from '../features/BentoGrid';
import AccordionList from '../features/AccordionList';

export default function FeaturesSection() {
  const { activeIndex, setActiveIndex, handleBentoHover, isMobile } = useActiveFeatureIndex();

  const handleAccordionToggle = (index) => {
    // If it's already active, we can keep it active or close it. 
    // Accordion rules usually say at least one item remains open.
    setActiveIndex(index);
  };

  return (
    <section 
      id="features" 
      aria-labelledby="features-heading" 
      className="w-full py-20 lg:py-28 bg-oceanic-noir relative overflow-hidden"
    >
      {/* Decorative BG mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(17,76,90,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Sub-label */}
        <span className="font-display text-xs font-bold tracking-widest text-forsythia uppercase">
          Engine Capabilities
        </span>

        {/* Section Header */}
        <h2 
          id="features-heading" 
          className="font-display text-3xl font-bold tracking-tight text-white mt-3 sm:text-4xl lg:text-5xl"
        >
          Next-Gen AI Orchestration
        </h2>

        {/* Description */}
        <p className="font-body text-base text-arctic-powder/60 max-w-2xl mx-auto mt-4 mb-16 leading-relaxed">
          Unlock high-fidelity pipeline orchestration. Build, monitor, and scale self-correcting pipelines automatically without writing brittle logic.
        </p>

        {/* Responsive Layout Swap */}
        <div className="w-full">
          {isMobile ? (
            <div className="px-2">
              <AccordionList 
                activeIndex={activeIndex} 
                onToggle={handleAccordionToggle} 
              />
            </div>
          ) : (
            <BentoGrid 
              activeIndex={activeIndex} 
              onBentoHover={handleBentoHover} 
            />
          )}
        </div>
      </div>
    </section>
  );
}
