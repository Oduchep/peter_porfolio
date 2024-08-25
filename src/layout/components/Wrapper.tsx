import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  width?: string;
  className?: string;
}

const Wrapper = ({ children, width, className }: WrapperProps) => {
  return (
    <div
      className={`mx-auto px-4 py-10 md:px-8 md:py-16 ${
        width || '3xl:w-4/5 lg:w-[97%]'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
