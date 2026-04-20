'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FiArrowLeft, FiArrowRight, FiMessageSquare } from 'react-icons/fi';

import { SectionIntro } from '@/components/elements';
import { Testimonials as testimonialData } from '@/utils/data';

import { Wrapper } from '../layout';

const CARDS_PER_VIEW = 3;
const AUTOPLAY_INTERVAL = 6000;
const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: EASE },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    transition: { duration: 0.28, ease: EASE },
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
  const n = testimonialData.length;
  const canSlide = n > CARDS_PER_VIEW;

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback(
    (step: number) => {
      setDirection(step);
      setStartIndex((current) => (current + step + n) % n);
    },
    [n]
  );

  useEffect(() => {
    if (!canSlide || isPaused) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [canSlide, isPaused, paginate]);

  const visibleCards = canSlide
    ? Array.from({ length: CARDS_PER_VIEW }, (_, i) => ({
        ...testimonialData[(startIndex + i) % n],
        dataIndex: (startIndex + i) % n,
      }))
    : testimonialData.map((t, i) => ({ ...t, dataIndex: i }));

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
              {canSlide && (
                <p className='text-sm text-slate-500 dark:text-white/58'>
                  {String(startIndex + 1).padStart(2, '0')} /{' '}
                  {String(n).padStart(2, '0')}
                </p>
              )}
            </div>
          </div>

          {canSlide && (
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => {
                  setIsPaused(true);
                  paginate(-1);
                }}
                aria-label='Show previous testimonial'
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
                aria-label='Show next testimonial'
                className='all__trans bg-tertiary-default dark:bg-secondary-default dark:text-primary-default flex h-11 w-11 items-center justify-center rounded-full text-white'
              >
                <FiArrowRight />
              </button>
            </div>
          )}
        </div>

        <div className='overflow-hidden py-6'>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <AnimatePresence mode='popLayout' custom={direction}>
              {visibleCards.map(({ dataIndex, ...testimonial }) => (
                <motion.article
                  key={dataIndex}
                  layout
                  custom={direction}
                  variants={cardVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
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
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {canSlide && (
          <div className='flex items-center justify-center gap-3 pt-2'>
            {testimonialData.map((_, i) => (
              <button
                key={i}
                type='button'
                onClick={() => {
                  setIsPaused(true);
                  setDirection(i > startIndex ? 1 : -1);
                  setStartIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-pressed={i === startIndex}
                className={`all__trans h-2.5 rounded-full ${
                  i === startIndex
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
