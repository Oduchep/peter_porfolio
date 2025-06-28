import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  width?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
}

const Wrapper = ({
  children,
  width,
  className = '',
  paddingY,
  paddingX,
}: WrapperProps) => {
  const defaultWidth = 'max-w-[1400px] w-full md:w-[90%] lg:w-11/12 xl:w-[88%]';
  const defaultPaddingY = 'py-12 md:py-20';
  const defaultPaddingX = 'px-5 lg:px-0';

  return (
    <div
      className={`mx-auto ${
        width ? `${width} ${defaultWidth}` : defaultWidth
      } ${paddingY ?? defaultPaddingY} ${
        paddingX ?? defaultPaddingX
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
