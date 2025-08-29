import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

export function useRevealOnRoute(setup) {
  const { pathname } = useLocation();
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true, // uncomment if you want re-animate on scroll back
    });
    setup(sr);
    return () => {
      sr.destroy();
    };
  }, [pathname, setup]);
}
