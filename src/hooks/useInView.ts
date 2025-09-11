'use client';

import { RefObject, useEffect, useRef, useState } from "react";

interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useInView = ( options: IntersectionObserverInit ): [RefObject<HTMLElement | null>, boolean] => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if ( sectionRef.current ) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if ( sectionRef.current ) {
        observer.unobserve(sectionRef.current);
      }
    }
    
  }, [options]);

  return [sectionRef, inView];
}
