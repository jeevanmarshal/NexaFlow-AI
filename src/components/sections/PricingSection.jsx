// src/components/sections/PricingSection.jsx
import React, { useState } from 'react';
import BillingToggle from '../pricing/BillingToggle';
import CurrencyDropdown from '../pricing/CurrencyDropdown';
import PricingCard from '../pricing/PricingCard';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [currency, setCurrency] = useState('USD');

  return (
    <section 
      id="pricing" 
      aria-labelledby="pricing-heading" 
      className="w-full py-20 lg:py-28 bg-[#0b171e] relative overflow-visible"
    >
      {/* Decorative gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,200,1,0.03),transparent_60%)] pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(255,153,50,0.03),transparent_60%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xs font-bold tracking-widest text-forsythia uppercase">
            Predictable Costs
          </span>
          <h2 
            id="pricing-heading" 
            className="font-display text-3xl font-bold tracking-tight text-white mt-3 sm:text-4xl lg:text-5xl"
          >
            Regional Pricing Plans
          </h2>
          <p className="font-body text-base text-arctic-powder/60 max-w-2xl mx-auto mt-4 leading-relaxed">
            No hidden fees. Dynamic conversion calculations based on your geographic region. Scale up or down at any time.
          </p>
        </div>

        {/* Dynamic Matrix Controls */}
        <div className="relative z-40 flex flex-col sm:flex-row items-center justify-between gap-6 bg-oceanic-noir/40 border border-arctic-powder/10 rounded-2xl p-6 mb-12 max-w-3xl mx-auto backdrop-blur-sm">
          <div>
            <span className="block font-display text-[10px] font-bold text-white uppercase tracking-wider mb-1">
              Select Billing Cycle
            </span>
            <BillingToggle 
              billingCycle={billingCycle} 
              onChange={setBillingCycle} 
            />
          </div>
          
          <div className="h-px w-full bg-arctic-powder/5 sm:h-12 sm:w-px"></div>

          <div className="text-center sm:text-right">
            <span className="block font-display text-[10px] font-bold text-white uppercase tracking-wider mb-2">
              Select Currency
            </span>
            <CurrencyDropdown 
              selectedCurrency={currency} 
              onChange={setCurrency} 
            />
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch max-w-6xl mx-auto px-4 md:px-0">
          <PricingCard 
            tierKey="starter" 
            currency={currency} 
            billingCycle={billingCycle} 
          />
          <PricingCard 
            tierKey="pro" 
            currency={currency} 
            billingCycle={billingCycle} 
          />
          <PricingCard 
            tierKey="enterprise" 
            currency={currency} 
            billingCycle={billingCycle} 
          />
        </div>

      </div>
    </section>
  );
}
