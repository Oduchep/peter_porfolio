'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
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

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

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
      <motion.div
        className='absolute inset-x-5 top-8 -z-10 h-56 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,rgba(41,64,104,0.16),transparent_58%)] blur-2xl dark:bg-[radial-gradient(circle_at_top_left,rgba(211,233,122,0.16),transparent_58%)]'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className='grid gap-10 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)] xl:items-start'>
        <motion.div
          className='space-y-8'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <div className='space-y-6'>
            {eyebrow && (
              <motion.div
                variants={itemVariants}
                className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60'
              >
                <span className='bg-tertiary-default dark:bg-secondary-default h-2 w-2 rounded-full' />
                {eyebrow}
              </motion.div>
            )}

            <div className='space-y-4'>
              <motion.h1
                variants={itemVariants}
                className='max-w-4xl text-3xl leading-tight font-semibold text-slate-950 md:text-4xl xl:text-5xl dark:text-white'
              >
                {title}
                {accent && (
                  <span className='text-tertiary-default dark:text-secondary-default'>
                    {' '}
                    {accent}
                  </span>
                )}
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className='max-w-3xl text-base leading-8 text-slate-600 md:text-lg dark:text-white/72'
              >
                {description}
              </motion.div>
            </div>
          </div>

          {(primaryAction || secondaryAction) && (
            <motion.div
              variants={itemVariants}
              className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center'
            >
              {primaryAction}
              {secondaryAction}
            </motion.div>
          )}

          {stats.length > 0 && (
            <motion.div
              className='grid gap-4 sm:grid-cols-3'
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className='rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5'
                >
                  <p className='text-3xl font-semibold text-slate-950 dark:text-white'>
                    {stat.value}
                  </p>
                  <p className='mt-2 text-sm tracking-[0.18em] text-slate-500 uppercase dark:text-white/55'>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {aside && (
          <motion.div
            className='relative'
            initial={{ opacity: 0, x: 40, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            <div className='absolute -inset-3 -z-10 rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(41,64,104,0.12),rgba(15,23,42,0.02))] blur-xl dark:bg-[linear-gradient(135deg,rgba(211,233,122,0.14),rgba(255,255,255,0.02))]' />
            <div className='rounded-4xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
              {aside}
            </div>
          </motion.div>
        )}
      </div>
    </Wrapper>
  );
};

export default SectionHero;
