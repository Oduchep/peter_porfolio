'use client';

import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Read from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

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
