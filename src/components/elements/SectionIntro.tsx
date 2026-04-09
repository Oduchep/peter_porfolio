import React, { ReactNode } from 'react';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  action?: ReactNode;
  className?: string;
}

const SectionIntro = ({
  eyebrow,
  title,
  description,
  action,
  className = '',
}: SectionIntroProps) => {
  return (
    <div
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className='max-w-3xl space-y-4'>
        {eyebrow && (
          <div className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60'>
            <span className='h-2 w-2 rounded-full bg-tertiary-default dark:bg-secondary-default' />
            {eyebrow}
          </div>
        )}

        <h2 className='text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white'>
          {title}
        </h2>

        <div className='text-base leading-8 text-slate-600 md:text-lg dark:text-white/72'>
          {description}
        </div>
      </div>

      {action && <div className='shrink-0'>{action}</div>}
    </div>
  );
};

export default SectionIntro;
