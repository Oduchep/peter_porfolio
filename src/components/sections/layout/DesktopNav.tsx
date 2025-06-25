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
              <li
                key={index}
                className={`${
                  pathname === route?.link
                    ? 'border-secondary-default text-secondary-default border-b-2 font-medium'
                    : 'font-normal text-white'
                } all__trans hover:text-secondary-default hover:-translate-y-1`}
              >
                <Link href={route.link} className='px-1'>
                  {route.label}
                </Link>
              </li>
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
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
