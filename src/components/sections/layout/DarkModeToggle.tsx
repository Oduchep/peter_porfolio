'use client';

import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return localStorage.getItem('theme') === 'dark';
  });

  // Update localStorage and HTML class on theme change
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
    <button onClick={() => setDarkMode((prev) => !prev)} className='text-xl'>
      {darkMode ? (
        <BsFillSunFill className='cursor-pointer text-amber-500' />
      ) : (
        <BsFillMoonStarsFill className='cursor-pointer text-amber-200' />
      )}
    </button>
  );
};

export default DarkModeToggle;
