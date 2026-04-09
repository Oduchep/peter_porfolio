import { SectionIntro } from '@/components/elements';
import { Experiences } from '@/utils/data';
import { FiArrowUpRight } from 'react-icons/fi';

import { Wrapper } from '../layout';

const MyExperienceAlt = () => {
  return (
    <Wrapper className='space-y-12'>
      <SectionIntro
        eyebrow='Experience'
        title='A track record of turning product goals into shipped frontend outcomes.'
        description={
          <>
            Over the last few years, I&apos;ve worked across startups and fast-moving
            teams where good frontend work had to do more than look nice. It had
            to support growth, improve clarity, and make the product easier to
            trust and adopt.
          </>
        }
      />

      <section className='relative'>
        <div className='absolute top-0 bottom-0 left-5 hidden w-px bg-[linear-gradient(180deg,rgba(41,64,104,0.18),rgba(41,64,104,0.02))] lg:block dark:bg-[linear-gradient(180deg,rgba(211,233,122,0.2),rgba(211,233,122,0.02))]' />

        <div className='space-y-8'>
          {Experiences.map((exp, index) => (
            <article
              key={exp.id}
              className='grid gap-5 lg:grid-cols-[56px_minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-8'
            >
              <div className='relative hidden lg:flex lg:justify-center'>
                <span className='bg-tertiary-default dark:bg-secondary-default dark:border-primary-default relative z-10 mt-5 h-4 w-4 rounded-full border-4 border-white shadow-[0_0_0_10px_rgba(255,255,255,0.7)] dark:shadow-[0_0_0_10px_rgba(0,6,39,0.7)]' />
              </div>

              <div className='rounded-3xl border border-slate-200/80 bg-white/88 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5'>
                <div className='flex flex-wrap items-center justify-between gap-3'>
                  <span className='inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase dark:bg-white/6 dark:text-white/55'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <FiArrowUpRight className='text-slate-400 dark:text-white/45' />
                </div>

                <h3 className='mt-5 text-2xl font-semibold text-slate-950 dark:text-white'>
                  {exp.company}
                </h3>
                <p className='text-tertiary-default dark:text-secondary-default mt-2 text-base font-medium'>
                  {exp.position}
                </p>

                <div className='mt-5 flex flex-wrap gap-2'>
                  <span className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-white/6 dark:text-white/70'>
                    {exp.duration}
                  </span>
                  <span className='rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-white/6 dark:text-white/70'>
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className='rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)] lg:p-7 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)]'>
                <ul className='space-y-4'>
                  {exp.description.map((desc, idx) => (
                    <li
                      key={idx}
                      className='flex items-start gap-4 text-sm leading-8 text-slate-600 md:text-base dark:text-white/72'
                    >
                      <span className='bg-tertiary-default dark:bg-secondary-default mt-3 h-2.5 w-2.5 shrink-0 rounded-full' />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

export default MyExperienceAlt;
