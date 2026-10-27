'use client';

import { useSyncExternalStore } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

// The <html> "dark" class is the single source of truth. It is set before
// paint by the inline script in layout.tsx, so every toggle instance reads it
// and stays in sync.
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class'],
  });
  return () => observer.disconnect();
};

const getSnapshot = () => document.documentElement.classList.contains('dark');
const getServerSnapshot = () => true;

const DarkModeToggle = () => {
  const darkMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = () => {
    const next = !darkMode;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works.
    }
  };

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      className='text-xl'
    >
      {darkMode ? (
        <BsFillSunFill className='text-amber-500' />
      ) : (
        <BsFillMoonStarsFill className='text-amber-200' />
      )}
    </button>
  );
};

export default DarkModeToggle;
