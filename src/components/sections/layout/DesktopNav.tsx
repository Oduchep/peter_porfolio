'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

import {
  externalRoutes,
  navRoutes,
  portfolioRoutes,
} from '@/utils/PortfolioRoutes';
import { NameLogo } from '../../../../public/assets/images';
import DarkModeToggle from './DarkModeToggle';

const DesktopNav = () => {
  const pathname = usePathname();

  const social_links = [
    { icon: <FaGithub />, href: externalRoutes.GITHUB },
    { icon: <FaLinkedin />, href: externalRoutes.LINKEDIN },
    { icon: <FaXTwitter />, href: externalRoutes.TWITTER },
  ];

  return (
    <nav className='transition-all duration-500 ease-in-out'>
      <div className='flex items-center justify-between px-10 py-8'>
        <Link href={portfolioRoutes.HOME}>
          <Image src={NameLogo} alt='logo' priority />
        </Link>

        <div className='flex items-center gap-10'>
          <ul className='flex justify-around gap-8'>
            {navRoutes?.map((route, index) => (
              <Link
                key={index}
                href={route.link}
                className={`${
                  pathname === route?.link
                    ? 'border-tertiary-default dark:border-secondary-default text-tertiary-default dark:text-secondary-default border-b-2 font-medium'
                    : 'hover:-translate-y-1 dark:text-white'
                } all__trans px-1`}
              >
                <li>{route.label}</li>
              </Link>
            ))}
          </ul>

          <div className='flex items-center gap-5'>
            {social_links.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className='text-xl'
                target='_blank'
                rel='noopener noreferrer'
              >
                {social.icon}
              </a>
            ))}
          </div>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
