// src/hooks/useActiveFeatureIndex.js
import { useState, useEffect, useRef } from 'react';

export function useActiveFeatureIndex() {
  const [activeIndex, setActiveIndex] = useState(0); // Default to first item to keep accordion open on mobile
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const lastHoveredIndex = useRef(0);

  // Track hover on desktop
  const handleBentoHover = (index) => {
    lastHoveredIndex.current = index;
    setActiveIndex(index);
  };

  // On resize: transfer context
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      const nowMobile = window.innerWidth < 768;
      setIsMobile((prevIsMobile) => {
        if (!prevIsMobile && nowMobile) {
          // Transitioning TO mobile: transfer last hovered/active index
          if (lastHoveredIndex.current !== null) {
            setActiveIndex(lastHoveredIndex.current);
          }
        }
        return nowMobile;
      });
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { activeIndex, setActiveIndex, handleBentoHover, isMobile };
}
