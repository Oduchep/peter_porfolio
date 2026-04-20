'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiMessageSquare } from 'react-icons/fi';

import { SectionIntro } from '@/components/elements';
import { Testimonials as testimonialData } from '@/utils/data';

import { Wrapper } from '../layout';

const CARDS_PER_PAGE = 3;
const AUTOPLAY_INTERVAL = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: EASE },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
    transition: { duration: 0.3, ease: EASE },
  }),
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const totalPages = Math.ceil(testimonialData.length / CARDS_PER_PAGE);
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (step: number) => {
      setDirection(step);
      setPage((current) => {
        const next = current + step;
        if (next < 0) return totalPages - 1;
        if (next >= totalPages) return 0;
        return next;
      });
    },
    [totalPages]
  );

  useEffect(() => {
    if (totalPages <= 1 || isPaused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [paginate, totalPages, isPaused]);

  const goToPage = (index: number) => {
    if (index === page) return;
    setDirection(index > page ? 1 : -1);
    setPage(index);
  };

  const visibleTestimonials = testimonialData.slice(
    page * CARDS_PER_PAGE,
    page * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <Wrapper className='space-y-10'>
      <SectionIntro
        eyebrow='Testimonials'
        title='Kind words from people I have worked with closely.'
        description={
          <>
            A few recommendations from teammates and managers who have seen how
            I work, collaborate, and deliver.
          </>
        }
      />

      <div className='rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.07)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
        <div className='flex flex-col gap-5 border-b border-slate-200/80 pb-5 md:flex-row md:items-center md:justify-between dark:border-white/10'>
          <div className='flex items-center gap-3'>
            <div className='bg-tertiary-default/10 text-tertiary-default dark:bg-secondary-default/15 dark:text-secondary-default flex h-12 w-12 items-center justify-center rounded-2xl'>
              <FiMessageSquare className='text-lg' />
            </div>
            <div>
              <p className='text-sm font-semibold text-slate-950 dark:text-white'>
                LinkedIn Recommendations
              </p>
              {totalPages > 1 && (
                <p className='text-sm text-slate-500 dark:text-white/58'>
                  {String(page + 1).padStart(2, '0')} /{' '}
                  {String(totalPages).padStart(2, '0')}
                </p>
              )}
            </div>
          </div>

          {totalPages > 1 && (
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => {
                  setIsPaused(true);
                  paginate(-1);
                }}
                aria-label='Show previous testimonials'
                className='all__trans flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:border-slate-300 dark:border-white/10 dark:bg-white/6 dark:text-white/70'
              >
                <FiArrowLeft />
              </button>
              <button
                type='button'
                onClick={() => {
                  setIsPaused(true);
                  paginate(1);
                }}
                aria-label='Show next testimonials'
                className='all__trans bg-tertiary-default dark:bg-secondary-default dark:text-primary-default flex h-11 w-11 items-center justify-center rounded-full text-white'
              >
                <FiArrowRight />
              </button>
            </div>
          )}
        </div>

        <div className='relative overflow-hidden py-6'>
          <AnimatePresence custom={direction} mode='wait'>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial='enter'
              animate='center'
              exit='exit'
              className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'
            >
              {visibleTestimonials.map((testimonial, i) => (
                <article
                  key={`${testimonial.name}-${page}-${i}`}
                  className='flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/4'
                >
                  <div className='flex-1'>
                    <div className='text-tertiary-default/30 dark:text-secondary-default/30 mb-3 font-serif text-4xl leading-none'>
                      &ldquo;
                    </div>
                    <p className='line-clamp-9 text-sm leading-relaxed text-slate-700 dark:text-white/78'>
                      {testimonial.quote.replace(/\n\n/g, ' ')}
                    </p>
                  </div>

                  <div className='mt-5 flex items-start gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10'>
                    <div className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-semibold text-white'>
                      {getInitials(testimonial.name)}
                    </div>
                    <div className='min-w-0'>
                      <p className='truncate text-sm font-semibold text-slate-950 dark:text-white'>
                        {testimonial.name}
                      </p>
                      <p className='mt-0.5 line-clamp-2 text-xs text-slate-500 dark:text-white/58'>
                        {testimonial.title}
                      </p>
                      <p className='mt-1.5 text-xs text-slate-400 dark:text-white/40'>
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className='flex items-center justify-center gap-3 pt-2'>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => {
                  setIsPaused(true);
                  goToPage(i);
                }}
                aria-label={`Go to page ${i + 1}`}
                aria-pressed={i === page}
                className={`all__trans h-2.5 rounded-full ${
                  i === page
                    ? 'bg-tertiary-default dark:bg-secondary-default w-10'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-white/20 dark:hover:bg-white/35'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Testimonials;
