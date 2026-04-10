'use client';

import { startTransition, useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Initialise from localStorage after hydration, then keep in sync
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDark = stored !== null ? stored === 'dark' : true;
    startTransition(() => {
      setDarkMode(isDark);
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className='text-xl'
      suppressHydrationWarning
    >
      {darkMode ? (
        <BsFillSunFill className='cursor-pointer text-amber-500' />
      ) : (
        <BsFillMoonStarsFill className='cursor-pointer text-amber-200' />
      )}
    </button>
  );
};

export default DarkModeToggle;
