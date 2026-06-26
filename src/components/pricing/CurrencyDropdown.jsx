// src/components/pricing/CurrencyDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';

const CURRENCIES = [
  { code: 'USD', label: 'USD ($)', symbol: '$' },
  { code: 'INR', label: 'INR (₹)', symbol: '₹' },
  { code: 'EUR', label: 'EUR (€)', symbol: '€' }
];

export default function CurrencyDropdown({ selectedCurrency, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const activeCurrency = CURRENCIES.find(c => c.code === selectedCurrency) || CURRENCIES[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="inline-flex h-10 items-center justify-between gap-3 rounded-lg border border-arctic-powder/15 bg-oceanic-noir/50 px-4 py-2 font-display text-xs font-bold text-white transition-all hover:bg-oceanic-noir hover:border-forsythia/40 select-none outline-none active:scale-95 min-w-[120px]"
      >
        <span>{activeCurrency.label}</span>
        <img 
          src="/svgs/chevron-down.svg" 
          alt="" 
          aria-hidden="true" 
          className={`h-3 w-3 invert brightness-200 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Overlay List */}
      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-40 origin-top-right rounded-xl border border-arctic-powder/10 bg-oceanic-noir p-1 shadow-2xl backdrop-blur-md animate-dropdown-fade"
        >
          {/* Header option title with close x-mark */}
          <li className="flex items-center justify-between border-b border-arctic-powder/5 px-3 py-2 font-display text-[10px] text-arctic-powder/40 uppercase tracking-widest">
            <span>Select Currency</span>
            <button 
              type="button" 
              onClick={() => setIsOpen(false)}
              className="p-0.5 rounded hover:bg-white/5"
              aria-label="Close currency selection"
            >
              <img src="/svgs/x-mark.svg" alt="" aria-hidden="true" className="h-3 w-3 invert brightness-200" />
            </button>
          </li>
          
          {CURRENCIES.map((currency) => {
            const isSelected = currency.code === selectedCurrency;
            return (
              <li key={currency.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    onChange(currency.code);
                    setIsOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left font-body text-xs font-semibold transition-colors ${
                    isSelected 
                      ? 'bg-gradient-to-r from-forsythia/20 to-deep-saffron/10 text-forsythia' 
                      : 'text-arctic-powder/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{currency.label}</span>
                  {isSelected && (
                    <span className="h-1.5 w-1.5 rounded-full bg-forsythia"></span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {/* Dropdown CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dropdownFade {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(-5px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-dropdown-fade {
          animation: dropdownFade 150ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}} />
    </div>
  );
}
