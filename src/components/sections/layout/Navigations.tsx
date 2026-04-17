'use client';

import { useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigations = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-999 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/70 bg-white/90 shadow-[0_2px_20px_rgba(15,23,42,0.06)] backdrop-blur-md dark:border-white/8 dark:bg-primary-default/92'
          : 'bg-white dark:bg-primary-default'
      }`}
    >
      <div className='hidden lg:block' aria-hidden='true'>
        <DesktopNav />
      </div>

      <div className='block lg:hidden'>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navigations;
