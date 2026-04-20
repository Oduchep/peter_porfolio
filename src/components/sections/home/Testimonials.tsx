'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiMessageSquare,
  FiStar,
  FiZap,
} from 'react-icons/fi';

import { SectionIntro } from '@/components/elements';
import { Testimonials as testimonialData } from '@/utils/data';

import { Wrapper } from '../layout';

const EASE = [0.22, 1, 0.36, 1] as const;

const proofPoints = [
  { value: 'Fast', label: 'Iteration rhythm' },
  { value: 'Clear', label: 'Communication style' },
  { value: 'Sharp', label: 'Visual judgement' },
  { value: 'Owned', label: 'Delivery mindset' },
];

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 56 : -56,
    scale: 0.98,
  }),
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: EASE,
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -56 : 56,
    scale: 0.98,
    transition: {
      duration: 0.45,
      ease: EASE,
    },
  }),
};

const getInitials = (name: string) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.08,
    rootMargin: '0px 0px -60px 0px',
  });

  const totalSlides = testimonialData.length;
  const activeTestimonial = testimonialData[activeIndex];

  const goToSlide = (nextIndex: number) => {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  const paginate = (step: number) => {
    setDirection(step);
    setActiveIndex((currentIndex) => {
      const nextIndex = currentIndex + step;

      if (nextIndex < 0) {
        return totalSlides - 1;
      }

      if (nextIndex >= totalSlides) {
        return 0;
      }

      return nextIndex;
    });
  };

  useEffect(() => {
    if (!inView || totalSlides < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % totalSlides);
    }, 6500);

    return () => window.clearInterval(interval);
  }, [inView, totalSlides]);

  if (!activeTestimonial) {
    return null;
  }

  return (
    <Wrapper className='relative space-y-12 overflow-hidden'>
      <motion.div
        className='absolute top-18 left-0 -z-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(41,64,104,0.12),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(211,233,122,0.12),transparent_72%)]'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      <motion.div
        className='absolute top-30 right-8 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.06),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)]'
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay: 0.08, ease: EASE }}
      />

      <SectionIntro
        eyebrow='Testimonials'
        title='The kind of frontend collaboration people remember after the launch.'
        description={
          <>
            I care about the result on screen, but also about how the team gets
            there. The strongest feedback usually comes down to taste, speed,
            and making the work feel steady even when the product is moving
            fast.
          </>
        }
      />

      <div ref={ref}>
        <div className='relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(241,245,249,0.94)_100%)] p-6 shadow-[0_28px_90px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(155deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.03)_100%)]'>
          <div className='absolute top-0 right-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(41,64,104,0.16),transparent_65%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(211,233,122,0.18),transparent_65%)]' />

          <div className='relative flex flex-col gap-8'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
              <div className='flex flex-wrap items-center gap-3'>
                <span className='inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/6 dark:text-white/60'>
                  <FiMessageSquare className='text-sm' />
                  Client voices
                </span>
                <div className='flex items-center gap-1 text-amber-400'>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FiStar key={index} className='fill-current' />
                  ))}
                </div>
              </div>

              <div className='flex items-center gap-3'>
                <span className='text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-white/45'>
                  {String(activeIndex + 1).padStart(2, '0')} /{' '}
                  {String(totalSlides).padStart(2, '0')}
                </span>

                <div className='flex items-center gap-2'>
                  <button
                    type='button'
                    onClick={() => paginate(-1)}
                    aria-label='Show previous testimonial'
                    className='all__trans flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/88 text-slate-700 hover:-translate-x-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/6 dark:text-white/72'
                  >
                    <FiArrowLeft />
                  </button>
                  <button
                    type='button'
                    onClick={() => paginate(1)}
                    aria-label='Show next testimonial'
                    className='all__trans dark:bg-secondary-default dark:text-primary-default flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200/80 bg-slate-950 text-white hover:translate-x-0.5 dark:border-white/10'
                  >
                    <FiArrowRight />
                  </button>
                </div>
              </div>
            </div>

            <div className='relative min-h-[27rem] overflow-hidden md:min-h-[23rem]'>
              <AnimatePresence custom={direction} mode='wait'>
                <motion.article
                  key={activeTestimonial.name}
                  custom={direction}
                  variants={slideVariants}
                  initial='enter'
                  animate='center'
                  exit='exit'
                  className='space-y-8'
                >
                  <p className='max-w-4xl text-2xl leading-tight font-semibold tracking-tight text-slate-950 md:text-[2.35rem] dark:text-white'>
                    &ldquo;{activeTestimonial.quote}&rdquo;
                  </p>

                  <div className='grid gap-4 md:grid-cols-[minmax(0,1fr)_auto]'>
                    <div className='flex items-center gap-4 rounded-[1.6rem] border border-slate-200/70 bg-white/82 p-4 dark:border-white/10 dark:bg-white/5'>
                      <div className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default flex h-14 w-14 items-center justify-center rounded-2xl text-base font-semibold text-white'>
                        {getInitials(activeTestimonial.name)}
                      </div>

                      <div>
                        <p className='text-lg font-semibold text-slate-950 dark:text-white'>
                          {activeTestimonial.name}
                        </p>
                        <p className='text-sm text-slate-500 dark:text-white/60'>
                          {activeTestimonial.role} {' / '}
                          {activeTestimonial.company}
                        </p>
                      </div>
                    </div>

                    <div className='rounded-[1.6rem] border border-slate-200/70 bg-slate-950 px-5 py-4 text-white dark:border-white/10 dark:bg-white/8 dark:text-white'>
                      <p className='text-xs tracking-[0.2em] text-white/55 uppercase dark:text-white/45'>
                        What stood out
                      </p>
                      <p className='mt-2 max-w-xs text-sm leading-7 text-white/82 dark:text-white/72'>
                        {activeTestimonial.impact}
                      </p>
                    </div>
                  </div>

                  <div className='flex flex-wrap gap-3'>
                    {activeTestimonial.tags.map((tag, index) => (
                      <motion.span
                        key={`${activeTestimonial.name}-${tag}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.08,
                          ease: EASE,
                        }}
                        className='inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-white/6 dark:text-white/72'
                      >
                        <FiZap className='text-tertiary-default dark:text-secondary-default' />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className='space-y-4'>
              <div className='h-1.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/8'>
                <motion.div
                  key={activeIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6.2, ease: 'linear' }}
                  className='bg-tertiary-default dark:bg-secondary-default h-full rounded-full'
                />
              </div>

              <div className='grid gap-3 md:grid-cols-3'>
                {testimonialData.map((testimonial, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={`${testimonial.name}-${index}`}
                      type='button'
                      onClick={() => goToSlide(index)}
                      aria-label={`Show testimonial from ${testimonial.name}`}
                      aria-pressed={isActive}
                      className={`all__trans rounded-[1.35rem] border p-4 text-left ${
                        isActive
                          ? 'border-tertiary-default dark:border-secondary-default bg-slate-950 text-white shadow-[0_20px_45px_rgba(15,23,42,0.18)] dark:bg-white/10'
                          : 'border-slate-200/80 bg-white/80 text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white/68'
                      }`}
                    >
                      <p className='text-sm font-semibold'>
                        {testimonial.name}
                      </p>
                      <p
                        className={`mt-2 line-clamp-2 text-xs leading-6 ${
                          isActive
                            ? 'text-white/72 dark:text-white/78'
                            : 'text-slate-500 dark:text-white/45'
                        }`}
                      >
                        {testimonial.quote}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Testimonials;
