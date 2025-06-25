import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigations = () => {
  return (
    <div className='sticky top-0 z-[999] bg-primary-default'>
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
