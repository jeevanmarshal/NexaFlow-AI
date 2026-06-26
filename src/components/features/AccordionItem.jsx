// src/components/features/AccordionItem.jsx
import React from 'react';

export default function AccordionItem({ 
  feature, 
  isOpen, 
  onToggle 
}) {
  const { index, title, iconPath, description, accent } = feature;

  return (
    <div 
      className={`border-b border-arctic-powder/10 bg-oceanic-noir/30 backdrop-blur-sm transition-all duration-300 ${
        isOpen ? 'bg-gradient-to-r ' + accent : ''
      }`}
    >
      {/* Accordion Trigger Header */}
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`accordion-panel-${index}`}
          id={`accordion-trigger-${index}`}
          onClick={() => onToggle(index)}
          className={`accordion-trigger flex w-full items-center justify-between px-6 py-5 text-left font-display font-semibold transition-all duration-150 outline-none hover:text-forsythia select-none ${
            isOpen ? 'text-forsythia' : 'text-white'
          }`}
        >
          <div className="flex items-center gap-4">
            {/* Feature Icon */}
            <div 
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200 ${
                isOpen 
                  ? 'bg-forsythia border-forsythia text-oceanic-noir' 
                  : 'bg-arctic-powder/5 border-arctic-powder/15 text-white'
              }`}
            >
              <img 
                src={iconPath} 
                alt="" 
                aria-hidden="true" 
                className={`h-5 w-5 transition-transform duration-200 ${
                  isOpen ? 'filter-none scale-105' : 'invert brightness-200'
                }`} 
              />
            </div>
            {/* Title */}
            <span className="text-base tracking-tight">{title}</span>
          </div>

          {/* Expand/Collapse SVG Indicators */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xs text-arctic-powder/35 mr-2">
              0{index + 1}
            </span>
            <img 
              src={isOpen ? "/svgs/chevron-up-solid.svg" : "/svgs/chevron-down.svg"} 
              alt="" 
              aria-hidden="true" 
              className="h-4 w-4 invert brightness-200" 
            />
          </div>
        </button>
      </h3>

      {/* Accordion Panel content */}
      <div
        id={`accordion-panel-${index}`}
        role="region"
        aria-labelledby={`accordion-trigger-${index}`}
        className={`accordion-panel ${isOpen ? 'open' : ''}`}
      >
        <div className="px-6 pb-6 pt-1">
          <p className="font-body text-sm text-arctic-powder/75 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
