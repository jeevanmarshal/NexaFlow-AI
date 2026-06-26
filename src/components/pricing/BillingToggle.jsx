// src/components/pricing/BillingToggle.jsx
import React from 'react';

export default function BillingToggle({ billingCycle, onChange }) {
  const isAnnual = billingCycle === 'annual';

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative inline-flex items-center gap-1 rounded-full bg-oceanic-noir/60 border border-arctic-powder/10 p-1 select-none">
        
        {/* Sliding background pill */}
        <div 
          className={`absolute top-1 bottom-1 left-1 rounded-full bg-gradient-to-r from-forsythia to-deep-saffron transition-all duration-300 ease-out`}
          style={{
            width: 'calc(50% - 6px)',
            transform: isAnnual ? 'translateX(100%)' : 'translateX(0%)'
          }}
        ></div>

        {/* Monthly Button */}
        <button
          type="button"
          onClick={() => onChange('monthly')}
          className={`relative z-10 rounded-full px-6 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
            !isAnnual ? 'text-oceanic-noir' : 'text-arctic-powder/70 hover:text-white'
          }`}
        >
          Monthly
        </button>

        {/* Annual Button */}
        <button
          type="button"
          onClick={() => onChange('annual')}
          className={`relative z-10 rounded-full px-6 py-2 font-display text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
            isAnnual ? 'text-oceanic-noir' : 'text-arctic-powder/70 hover:text-white'
          }`}
        >
          Annual
        </button>
      </div>

      {/* Savings Badge */}
      <span className="font-display text-[10px] font-extrabold tracking-widest text-forsythia uppercase animate-pulse">
        ⚡ Save 20% with Annual
      </span>
    </div>
  );
}
