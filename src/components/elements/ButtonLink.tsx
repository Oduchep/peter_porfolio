import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'text';

const base =
  'group inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200';

const variants: Record<Variant, string> = {
  primary:
    'h-11 rounded-full bg-accent px-5 text-sm text-on-accent hover:bg-fg hover:text-bg',
  secondary:
    'h-11 rounded-full border border-line-strong px-5 text-sm text-fg hover:border-fg',
  text: 'text-sm text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg',
};

export const buttonClass = (variant: Variant = 'primary', className = '') =>
  `${base} ${variants[variant]} ${className}`;

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}

// Internal paths use next/link; everything else (http, mailto) is a plain <a>.
const ButtonLink = ({
  href,
  children,
  variant = 'primary',
  className = '',
  external,
}: ButtonLinkProps) => {
  const classes = buttonClass(variant, className);
  const isInternal = href.startsWith('/') || href.startsWith('#');

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  );
};

export const Button = ({
  variant = 'primary',
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) => (
  <button
    className={`${buttonClass(variant, className)} disabled:opacity-60`}
    {...props}
  />
);

export default ButtonLink;
