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
  dotClassName?: string;
}

const Bttn2 = ({
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
  dotClassName,
  ...props
}: ButtonTypes) => {
  return (
    <>
      {href ? (
        <Button
          className={`flex w-full items-center justify-center gap-2 p-0 text-xs font-semibold capitalize sm:text-sm md:!text-base ${className}`}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          style={style}
          {...props}
        >
          <Link
            href={href}
            className='!flex w-full items-center justify-between gap-2 px-6 py-2.5'
          >
            <div className='!flex w-full items-center justify-center gap-2'>
              {iconLeft && <span>{iconLeft}</span>}
              {children}
              {iconRight && <span>{iconRight}</span>}
            </div>
            <span className={`block h-3 w-3 rounded-full ${dotClassName}`} />
          </Link>
        </Button>
      ) : (
        <Button
          className={`flex w-full items-center justify-between gap-2 text-xs font-semibold capitalize sm:text-sm md:!text-base ${className}`}
          onClick={onClick}
          loading={loading}
          disabled={disabled || loading}
          style={style}
          {...props}
        >
          <div className='!flex w-full items-center justify-center gap-2'>
            {iconLeft && <span>{iconLeft}</span>}
            {children}
            {iconRight && <span>{iconRight}</span>}
          </div>
          <span className={`block h-3 w-3 rounded-full ${dotClassName}`} />
        </Button>
      )}
    </>
  );
};

export default Bttn2;
