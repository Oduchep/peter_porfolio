'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionIntroProps {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  action?: ReactNode;
  className?: string;
}

const EASE = [0.22, 1, 0.36, 1] as const;

const SectionIntro = ({
  eyebrow,
  title,
  description,
  action,
  className = '',
}: SectionIntroProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className={`flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between ${className}`}
    >
      <div className='max-w-3xl space-y-4'>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: EASE }}
            className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/60'
          >
            <span className='h-2 w-2 rounded-full bg-tertiary-default dark:bg-secondary-default' />
            {eyebrow}
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE }}
          className='text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl dark:text-white'
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22, ease: EASE }}
          className='text-base leading-8 text-slate-600 md:text-lg dark:text-white/72'
        >
          {description}
        </motion.div>
      </div>

      {action && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          className='shrink-0'
        >
          {action}
        </motion.div>
      )}
    </motion.div>
  );
};

export default SectionIntro;
