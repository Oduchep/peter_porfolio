'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaBars, FaFileArrowDown, FaXTwitter, FaXmark } from 'react-icons/fa6';

import {
  externalRoutes,
  navRoutes,
  portfolioRoutes,
} from '@/utils/PortfolioRoutes';
import { NameLogo } from '../../../../public/assets/images';
import DarkModeToggle from './DarkModeToggle';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaGithub />, href: externalRoutes.GITHUB, label: 'GitHub' },
    {
      icon: <FaLinkedin />,
      href: externalRoutes.LINKEDIN,
      label: 'LinkedIn',
    },
    { icon: <FaXTwitter />, href: externalRoutes.TWITTER, label: 'Twitter/X' },
  ];

  return (
    <nav className='dark:bg-primary-default/95 relative border-b border-slate-200/70 bg-white/95 backdrop-blur dark:border-white/10'>
      <div className='flex items-center justify-between px-5 py-4'>
        <Link href={portfolioRoutes.HOME} aria-label='Go to homepage'>
          <Image
            src={NameLogo}
            alt='Peter Okerulu logo'
            priority
            className='h-auto w-28'
          />
        </Link>

        <div className='flex items-center gap-3'>
          <DarkModeToggle />

          <button
            type='button'
            aria-expanded={isOpen}
            aria-controls='mobile-navigation-panel'
            aria-label={
              isOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsOpen((prev) => !prev)}
            className='all__trans hover:border-tertiary-default hover:text-tertiary-default dark:hover:border-secondary-default dark:hover:text-secondary-default inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-xl text-slate-900 dark:border-white/15 dark:text-white'
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        id='mobile-navigation-panel'
        className={`slow__trans dark:bg-primary-default absolute inset-x-0 top-full border-b border-slate-200/70 bg-white px-5 pb-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/10 ${
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-4 opacity-0'
        }`}
      >
        <div className='mb-6 rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5'>
          <p className='font-inter text-lg font-semibold text-slate-900 dark:text-white'>
            Let&apos;s build something thoughtful.
          </p>
          <p className='mt-2 text-sm text-slate-600 dark:text-white/70'>
            Explore my work, learn more about me, or open my resume from here.
          </p>
        </div>

        <ul className='flex flex-col gap-2'>
          {navRoutes.map((route) => {
            const isActive = pathname === route.link;

            return (
              <li key={route.link}>
                <Link
                  href={route.link}
                  onClick={() => setIsOpen(false)}
                  className={`all__trans flex items-center justify-between rounded-2xl border px-4 py-3 text-base font-medium ${
                    isActive
                      ? 'border-tertiary-default bg-tertiary-default/8 text-tertiary-default dark:border-secondary-default dark:bg-secondary-default/10 dark:text-secondary-default'
                      : 'border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5'
                  }`}
                >
                  <span>{route.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className='mt-6 flex items-center gap-3'>
          {socialLinks.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={social.label}
              className='all__trans hover:border-tertiary-default hover:text-tertiary-default dark:hover:border-secondary-default dark:hover:text-secondary-default inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-lg text-slate-800 hover:-translate-y-0.5 dark:border-white/15 dark:text-white'
            >
              {social.icon}
            </a>
          ))}

          <a
            href={externalRoutes.RESUME}
            target='_blank'
            rel='noopener noreferrer'
            className='all__trans bg-tertiary-default dark:bg-secondary-default dark:text-primary-default inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-white hover:bg-[#1f3150] dark:hover:bg-[#bed360]'
          >
            <FaFileArrowDown />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
