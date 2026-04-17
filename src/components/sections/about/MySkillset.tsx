'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionIntro } from '@/components/elements';
import { GetSkillsBadge } from '@/components/widgets';

import { Wrapper } from '../layout';

const EASE = [0.22, 1, 0.36, 1] as const;

const MySkillset = () => {
  const skillset = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'React',
    'Gitlab',
    'Github',
    'Next',
  ];

  const strengths = [
    {
      title: 'Frontend architecture',
      text: 'I structure interfaces so they stay understandable, scalable, and easy for teams to extend.',
    },
    {
      title: 'UI craft',
      text: 'I care about spacing, motion, responsiveness, and the subtle details that make products feel premium.',
    },
    {
      title: 'Product thinking',
      text: 'I do my best work when design, code, and user goals are aligned into one coherent experience.',
    },
  ];

  const { ref: badgesRef, inView: badgesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: strengthsRef, inView: strengthsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Wrapper className='space-y-10'>
      <SectionIntro
        eyebrow='Skillset'
        title='Tools, judgment, and frontend instincts shaped by real product work.'
        description={
          <>
            My stack is rooted in modern frontend development, but the real
            value is how I use these tools together: to build fast, accessible,
            and maintainable interfaces that support both users and the teams
            shipping them.
          </>
        }
      />

      <div className='grid gap-8 xl:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]'>
        <motion.div
          ref={badgesRef}
          initial={{ opacity: 0, y: 32 }}
          animate={badgesInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className='rounded-4xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-6 shadow-[0_22px_70px_rgba(15,23,42,0.06)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.03)_100%)]'
        >
          <p className='text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-white/55'>
            Core technologies
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-4'>
            {skillset.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.82, y: 10 }}
                animate={badgesInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.38, delay: 0.1 + index * 0.06, ease: EASE }}
              >
                <GetSkillsBadge status={skill} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={badgesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.65, ease: EASE }}
            className='mt-8 rounded-[1.6rem] border border-slate-200/70 bg-white/70 p-5 dark:border-white/10 dark:bg-white/3'
          >
            <p className='text-sm leading-8 text-slate-600 dark:text-white/72'>
              I&apos;m especially comfortable building with React and Next.js,
              styling with Tailwind and CSS, and using TypeScript to keep larger
              codebases reliable as they grow. Git and collaborative workflows
              are a natural part of how I work, whether I&apos;m shipping solo
              or alongside a larger product team.
            </p>
          </motion.div>
        </motion.div>

        <div ref={strengthsRef} className='space-y-4'>
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, x: 28 }}
              animate={strengthsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.12, ease: EASE }}
              whileHover={{ x: -4, transition: { duration: 0.2 } }}
              className='rounded-[1.7rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] dark:border-white/10 dark:bg-white/5'
            >
              <p className='text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase dark:text-white/50'>
                {strength.title}
              </p>
              <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-white/72'>
                {strength.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MySkillset;
