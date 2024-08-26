import { externalRoutes, navRoutes } from '@/utils/PortfolioRoutes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const DesktopNav = () => {
  const { asPath } = useRouter();

  const social_links = [
    { icon: <FaGithub />, href: externalRoutes.GITHUB },
    {
      icon: <FaLinkedin />,
      href: externalRoutes.LINKEDIN,
    },
    { icon: <FaXTwitter />, href: externalRoutes.TWITTER },
  ];

  return (
    <nav className={`transition-all duration-500 ease-in-out`}>
      <div className='flex items-center justify-between px-10 py-8'>
        <div>PeterOduche</div>

        <div className='flex items-center gap-10'>
          <ul className='flex justify-around gap-8'>
            {navRoutes?.map((route, index) => (
              <li
                key={index}
                className={`${
                  asPath == route?.link
                    ? 'border-b-2 border-secondary-default font-medium text-secondary-default'
                    : 'font-normal text-white'
                } all__trans hover:-translate-y-1 hover:text-secondary-default`}
              >
                <Link href={route?.link} className='px-1'>
                  {route?.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className='flex items-center gap-5'>
            {social_links?.map((socials, index) => (
              <a
                key={index}
                href={socials.href}
                className='text-xl'
                target='_blank'
              >
                {socials?.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
