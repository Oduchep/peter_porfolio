import { ReactNode } from 'react';

interface SectionHeaderProps {
  index?: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
}

// Hairline rule, a small mono label on the left, the heading on the right.
const SectionHeader = ({
  index,
  label,
  title,
  description,
  action,
  id,
}: SectionHeaderProps) => (
  <div className='border-line grid gap-4 border-t pt-6 md:grid-cols-12 md:gap-8'>
    <p className='text-subtle font-mono text-xs md:col-span-3'>
      {index && <span className='text-accent-ink'>{index} </span>}
      {label}
    </p>

    <div className='flex flex-col gap-6 md:col-span-9 md:flex-row md:items-end md:justify-between'>
      <div className='max-w-2xl'>
        <h2
          id={id}
          className='text-3xl font-medium tracking-[-0.03em] text-balance md:text-4xl'
        >
          {title}
        </h2>
        {description && (
          <p className='text-muted mt-4 text-base leading-relaxed text-pretty'>
            {description}
          </p>
        )}
      </div>
      {action && <div className='shrink-0'>{action}</div>}
    </div>
  </div>
);

export default SectionHeader;
