import React, { CSSProperties, ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@material-tailwind/react';

interface ButtonTypes {
  children: ReactNode | string;
  loading?: boolean;
  disabled?: boolean;
  href?: string | {};
  className?: string;
  onClick?: () => void;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  style?: CSSProperties | undefined;
  type?: string;
}

const Bttn = ({
  children,
  loading,
  disabled,
  href,
  className,
  onClick,
  iconRight,
  iconLeft,
  style,
  type,
  ...props
}: ButtonTypes) => {
  return (
    <>
      {href ? (
        <Button
          className={`flex w-full items-center justify-center gap-2 p-0 text-xs font-semibold capitalize sm:text-sm md:!text-[15px] ${className}`}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          style={style}
          {...props}
        >
          <Link
            href={href}
            className='!flex w-full items-center justify-center gap-2 px-6 py-2.5'
          >
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </Link>
        </Button>
      ) : (
        <Button
          className={`flex w-full items-center justify-center gap-2 text-xs font-semibold capitalize sm:text-sm md:!text-[15px] ${className}`}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          style={style}
          {...props}
        >
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </Button>
      )}
    </>
  );
};

export default Bttn;
