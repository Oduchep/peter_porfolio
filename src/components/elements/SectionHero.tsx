import React, { ReactNode } from 'react';
import { Wrapper } from '../sections/layout';

interface SectionHeroProps {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: ReactNode;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  stats?: {
    label: string;
    value: string;
  }[];
  aside?: ReactNode;
  className?: string;
}

const SectionHero = ({
  eyebrow,
  title,
  accent,
  description,
  primaryAction,
  secondaryAction,
  stats = [],
  aside,
  className = '',
}: SectionHeroProps) => {
  return (
    <Wrapper className={`relative py-14 md:py-18 ${className}`}>
      <div className='absolute inset-x-5 top-8 -z-10 h-56 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(41,64,104,0.16),transparent_58%)] blur-2xl dark:bg-[radial-gradient(circle_at_top_left,rgba(211,233,122,0.16),transparent_58%)]' />

      <div className='grid gap-10 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)] xl:items-start'>
        <div className='space-y-8'>
          <div className='space-y-6'>
            {eyebrow && (
              <div className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60'>
                <span className='bg-tertiary-default dark:bg-secondary-default h-2 w-2 rounded-full' />
                {eyebrow}
              </div>
            )}

            <div className='space-y-4'>
              <h1 className='max-w-4xl text-3xl leading-tight font-semibold text-slate-950 md:text-4xl xl:text-5xl dark:text-white'>
                {title}
                {accent && (
                  <span className='text-tertiary-default dark:text-secondary-default'>
                    {' '}
                    {accent}
                  </span>
                )}
              </h1>

              <div className='max-w-3xl text-base leading-8 text-slate-600 md:text-lg dark:text-white/72'>
                {description}
              </div>
            </div>
          </div>

          {(primaryAction || secondaryAction) && (
            <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center'>
              {primaryAction}
              {secondaryAction}
            </div>
          )}

          {stats.length > 0 && (
            <div className='grid gap-4 sm:grid-cols-3'>
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className='rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5'
                >
                  <p className='text-3xl font-semibold text-slate-950 dark:text-white'>
                    {stat.value}
                  </p>
                  <p className='mt-2 text-sm tracking-[0.18em] text-slate-500 uppercase dark:text-white/55'>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        {aside && (
          <div className='relative'>
            <div className='absolute -inset-3 -z-10 rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(41,64,104,0.12),rgba(15,23,42,0.02))] blur-xl dark:bg-[linear-gradient(135deg,rgba(211,233,122,0.14),rgba(255,255,255,0.02))]' />
            <div className='rounded-4xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
              {aside}
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SectionHero;
