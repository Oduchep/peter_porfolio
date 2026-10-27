'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';

import { Container } from '@/components/elements';
import { externalRoutes, navRoutes } from '@/utils/PortfolioRoutes';
import DarkModeToggle from './DarkModeToggle';

const isActive = (pathname: string, link: string) =>
  link === '/' ? pathname === '/' : pathname.startsWith(link);

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-line bg-bg/80 backdrop-blur-md'
          : 'bg-bg border-transparent'
      }`}
    >
      <Container className='flex h-16 items-center justify-between'>
        <Link
          href='/'
          className='flex items-center gap-2.5 font-medium tracking-tight'
          onClick={() => setOpen(false)}
        >
          <span className='bg-accent size-2.5 rounded-full' aria-hidden />
          Peter Okerulu
        </Link>

        <nav aria-label='Main' className='hidden items-center gap-8 md:flex'>
          <ul className='flex items-center gap-7 text-sm'>
            {navRoutes.map((route) => {
              const active = isActive(pathname, route.link);
              return (
                <li key={route.link}>
                  <Link
                    href={route.link}
                    aria-current={active ? 'page' : undefined}
                    className={`transition-colors ${
                      active ? 'text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={externalRoutes.RESUME}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted hover:text-fg inline-flex items-center gap-1 transition-colors'
              >
                Resume <FiArrowUpRight aria-hidden />
              </a>
            </li>
          </ul>
          <DarkModeToggle />
        </nav>

        <div className='flex items-center gap-2 md:hidden'>
          <DarkModeToggle />
          <button
            type='button'
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className='border-line inline-flex size-9 items-center justify-center rounded-full border'
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>

      <nav
        id='mobile-menu'
        aria-label='Mobile'
        hidden={!open}
        className='border-line bg-bg border-t md:hidden'
      >
        <Container as='ul' className='flex flex-col py-4'>
          {navRoutes.map((route) => (
            <li key={route.link}>
              <Link
                href={route.link}
                onClick={() => setOpen(false)}
                aria-current={
                  isActive(pathname, route.link) ? 'page' : undefined
                }
                className='border-line flex items-center justify-between border-b py-4 text-2xl font-medium tracking-tight'
              >
                {route.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={externalRoutes.RESUME}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center justify-between py-4 text-2xl font-medium tracking-tight'
            >
              Resume <FiArrowUpRight aria-hidden className='text-muted' />
            </a>
          </li>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
