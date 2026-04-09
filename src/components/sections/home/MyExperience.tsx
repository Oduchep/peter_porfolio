'use client';

import { SectionIntro } from '@/components/elements';
import { Experiences } from '@/utils/data';
import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import { Wrapper } from '../layout';

const MyExperience = () => {
  const [activeId, setActiveId] = useState<string>(Experiences[0]?.id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const activeExperience =
    Experiences.find((exp) => exp.id === activeId) ?? Experiences[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Wrapper className='space-y-12'>
      <SectionIntro
        eyebrow='Experience'
        title='A track record of turning product goals into shipped frontend outcomes.'
        description={
          <>
            Over the last few years, I&apos;ve worked across startups and
            fast-moving teams where good frontend work had to do more than look
            nice. It had to support growth, improve clarity, and make the
            product easier to trust and adopt.
          </>
        }
      />

      <section className='hidden grid-cols-1 gap-x-10 gap-y-8 lg:grid lg:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] xl:gap-x-14'>
        <div className='space-y-4'>
          {Experiences.map((exp) => (
            <div
              key={exp.id}
              id={exp.id}
              ref={(el) => {
                sectionRefs.current[exp.id] = el;
              }}
              className='min-h-24'
            >
              <button
                type='button'
                onClick={() => {
                  setActiveId(exp.id);
                  sectionRefs.current[exp.id]?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                  });
                }}
                className={`all__trans flex w-full items-start justify-between gap-4 rounded-3xl border p-4 text-left shadow-[0_16px_40px_rgba(15,23,42,0.04)] ${
                  exp.id === activeId
                    ? 'border-tertiary-default dark:border-secondary-default dark:text-primary-default bg-[linear-gradient(135deg,#294068_0%,#172135_100%)] text-white shadow-[0_24px_60px_rgba(23,33,53,0.22)] dark:bg-[linear-gradient(135deg,#D3E97A_0%,#B7D24E_100%)]'
                    : 'border-slate-200/80 bg-white/88 text-slate-900 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white'
                }`}
              >
                <div className='space-y-2'>
                  <div className='flex items-center gap-3'>
                    <span
                      className={`h-3 w-3 rounded-full ${
                        exp.id === activeId
                          ? 'dark:bg-primary-default bg-white'
                          : 'bg-tertiary-default dark:bg-secondary-default'
                      }`}
                    />
                    <p
                      className={`text-xs font-semibold tracking-[0.22em] uppercase ${
                        exp.id === activeId
                          ? 'dark:text-primary-default/65 text-white/72'
                          : 'text-slate-500 dark:text-white/50'
                      }`}
                    >
                      {exp.duration}
                    </p>
                  </div>

                  <div>
                    <h3
                      className={`text-xl font-semibold ${
                        exp.id === activeId
                          ? 'dark:text-primary-default text-white'
                          : 'text-slate-900 dark:text-white'
                      }`}
                    >
                      {exp.company}
                    </h3>
                    <p
                      className={`text-sm ${
                        exp.id === activeId
                          ? 'dark:text-primary-default/70 text-white/78'
                          : 'text-slate-500 dark:text-white/60'
                      }`}
                    >
                      {exp.position}
                    </p>
                  </div>
                </div>

                <FiArrowUpRight
                  className={`mt-1 text-xl ${
                    exp.id === activeId
                      ? 'dark:text-primary-default text-white'
                      : 'text-slate-400 dark:text-white/45'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className='sticky top-28 self-start'>
          <div className='rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-8 shadow-[0_26px_80px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)]'>
            <div className='flex flex-wrap items-start justify-between gap-5'>
              <div>
                <h2 className='text-3xl font-semibold text-slate-950 dark:text-white'>
                  {activeExperience.position}
                </h2>
                <p className='text-tertiary-default dark:text-secondary-default mt-2 text-lg'>
                  {activeExperience.company}
                </p>
              </div>

              <div className='flex flex-wrap gap-2'>
                <span className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-white/6 dark:text-white/70'>
                  {activeExperience.duration}
                </span>
                <span className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-white/6 dark:text-white/70'>
                  {activeExperience.location}
                </span>
              </div>
            </div>

            <div className='mt-8 rounded-3xl border border-slate-200/70 bg-white/75 p-6 dark:border-white/10 dark:bg-white/3'>
              <ul className='space-y-4'>
                {activeExperience.description.map((desc, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-4 text-base leading-8 text-slate-600 dark:text-white/72'
                  >
                    <span className='bg-tertiary-default dark:bg-secondary-default mt-3 h-2.5 w-2.5 shrink-0 rounded-full' />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='block space-y-6 lg:hidden'>
        {Experiences.map((exp, index) => (
          <div
            key={exp.id}
            id={exp.id}
            className='rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'
          >
            <div className='flex flex-col gap-4'>
              <div>
                <div className='inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:bg-white/6 dark:text-white/55'>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className='mt-4 text-xl font-semibold text-slate-950 dark:text-white'>
                  {exp.company}
                </h3>
                <p className='text-tertiary-default dark:text-secondary-default mt-1 text-sm'>
                  {exp.position}
                </p>
              </div>

              <div className='text-xs tracking-[0.18em] text-slate-500 uppercase dark:text-white/50'>
                <p>{exp.duration}</p>
                <p className='mt-2'>{exp.location}</p>
              </div>
            </div>

            <ul className='mt-6 space-y-4'>
              {exp.description.map((desc, idx) => (
                <li
                  key={idx}
                  className='flex items-start gap-3 text-sm leading-7 text-slate-600 dark:text-white/72'
                >
                  <span className='bg-tertiary-default dark:bg-secondary-default mt-3 h-2 w-2 shrink-0 rounded-full' />
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Wrapper>
  );
};

export default MyExperience;
