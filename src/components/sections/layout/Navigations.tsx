import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigations = () => {
  return (
    <div className='dark:bg-primary-default sticky top-0 z-[999] bg-white'>
      <div className='hidden lg:block'>
        <DesktopNav />
      </div>

      <div className='block lg:hidden'>
        <MobileNav />
      </div>
    </div>
  );
};

export default Navigations;
