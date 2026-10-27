import { ElementType, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

const Container = ({
  children,
  className = '',
  as: Tag = 'div',
}: ContainerProps) => (
  <Tag className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
    {children}
  </Tag>
);

export default Container;
