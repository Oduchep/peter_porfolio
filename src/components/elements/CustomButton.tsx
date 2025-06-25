'use client';

import {
  CSSProperties,
  ReactNode,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
  href?: string;
  className?: string;
  iconRight?: ReactNode;
  iconLeft?: ReactNode;
  style?: CSSProperties;
  dotClassName?: string;
  target?: string;
  rel?: string;
}

const CustomButton = ({
  children,
  loading,
  disabled,
  href,
  className,
  onClick,
  iconRight,
  iconLeft,
  style,
  type = 'button',
  dotClassName,
  target = '',
  rel,
  ...props
}: CustomButtonProps) => {
  const baseClasses =
    'flex max-w-full items-center justify-center gap-2 text-xs font-semibold capitalize sm:text-sm md:text-base px-6 py-2.5 transition-all duration-200 cursor-pointer';
  const defaultClasses = 'bg-primary-dark text-[#0A0A0A]'; // or use `bg-white text-[#0A0A0A]` if matching the first Input more
  const disabledClasses = 'opacity-50 cursor-not-allowed';

  if (href && !href.startsWith('/')) {
    // External links, mailto, tel, etc.
    return (
      <a
        href={href}
        className={clsx(
          baseClasses,
          defaultClasses,
          disabled && disabledClasses,
          className
        )}
        style={style}
        target={target}
        rel={rel}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className='flex w-full items-center justify-center gap-2'>
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </div>
        {dotClassName && (
          <span className={clsx('block h-3 w-3 rounded-full', dotClassName)} />
        )}
      </a>
    );
  }

  // Internal Next.js routes
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(
          baseClasses,
          defaultClasses,
          disabled && disabledClasses,
          className
        )}
        style={style}
        target={target}
        rel={rel}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <div className='flex w-full items-center justify-center gap-2'>
          {iconLeft && <span>{iconLeft}</span>}
          {children}
          {iconRight && <span>{iconRight}</span>}
        </div>
        {dotClassName && (
          <span className={clsx('block h-3 w-3 rounded-full', dotClassName)} />
        )}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={clsx(
        baseClasses,
        defaultClasses,
        (disabled || loading) && disabledClasses,
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      style={style}
      {...props}
    >
      <div className='flex w-full items-center justify-center gap-2'>
        {iconLeft && <span>{iconLeft}</span>}
        {loading ? 'Loading...' : children}
        {iconRight && <span>{iconRight}</span>}
      </div>
      {dotClassName && (
        <span className={clsx('block h-3 w-3 rounded-full', dotClassName)} />
      )}
    </button>
  );
};

export default CustomButton;
