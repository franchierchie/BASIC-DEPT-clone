'use client';

import { useEffect, useRef, useState } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;

      // Logic for changing the 'scrolled' state
      setScrolled(window.scrollY > window.innerHeight - 80);
  
      // Logic to show/hide the navbar
      // Set a threshold of 100px to avoid hiding the navbar on minor scrolls
      if ( Math.abs(scrollY - lastScrollY.current) > 100 ) {
        setScrollDirection( (scrollY > lastScrollY.current) ? 'down' : 'up' );
        lastScrollY.current = ( scrollY > 0 ) ? scrollY : 0;
      }
    }

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    }
    
  }, []);

  return {
    scrollDirection,
    scrolled,
  }
}
