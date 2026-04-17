'use client';

import { motion } from 'framer-motion';
import { CustomButton } from '@/components/elements';
import { GetSkillsBadge } from '@/components/widgets';
import Image from 'next/image';
import { FiArrowRight, FiDownload, FiMapPin } from 'react-icons/fi';

import { externalRoutes, portfolioRoutes } from '@/utils/PortfolioRoutes';
import { Projects } from '@/utils/data';
import { PeterHeadshot } from '../../../../public/assets/images';
import { Wrapper } from '../layout';
import { getYearsOfExperience } from '@/utils/DateFormatters';

const EASE = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.38, ease: EASE },
  },
};

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 40, y: 8 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.85, ease: EASE, delay: 0.25 },
  },
};

const HomeHero = () => {
  const skillset = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'React',
    'Github',
    'Next',
    'Gitlab',
  ];

  const heroStats = [
    { value: getYearsOfExperience(), label: 'Years building interfaces' },
    { value: `${Projects.length}+`, label: 'Projects shipped so far' },
    { value: '100%', label: 'Responsive-first mindset' },
  ];

  return (
    <Wrapper
      className='relative grid items-center gap-12 xl:grid-cols-[minmax(0,1.2fr)_minmax(340px,0.9fr)] xl:gap-16'
      paddingY='pt-10 pb-24 md:pt-14 md:pb-28'
    >
      {/* Background blobs */}
      <motion.div
        className='absolute top-12 left-8 -z-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(41,64,104,0.18),transparent_72%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(211,233,122,0.14),transparent_72%)]'
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />
      <motion.div
        className='absolute top-0 right-0 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.08),transparent_70%)] blur-3xl dark:bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_70%)]'
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut', delay: 0.1 }}
      />

      {/* Left column — staggered entrance */}
      <motion.div
        className='space-y-8'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {/* Status badge */}
        <motion.div
          variants={itemVariants}
          className='inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70'
        >
          <p className='inline-flex items-center gap-3'>
            <motion.span
              className='h-2.5 w-2.5 rounded-full bg-emerald-500'
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            Open to thoughtful product work
          </p>
          <span className='inline-flex items-center gap-1 text-slate-500 dark:text-white/50'>
            <FiMapPin className='text-sm' />
            Port Harcourt, Nigeria
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div className='space-y-5' variants={itemVariants}>
          <h1 className='max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl xl:text-6xl dark:text-white'>
            I build polished digital products that feel&nbsp;
            <span className='text-tertiary-default dark:text-secondary-default'>
              intentional, fast, and memorable.
            </span>
          </h1>

          <p className='max-w-3xl text-base leading-8 text-slate-600 md:text-lg dark:text-white/72'>
            I&apos;m Peter, a frontend engineer who builds polished digital
            products with product clarity and visual precision. From fintech to
            SaaS and marketplaces, I turn ambitious ideas into fast, intentional
            experiences that feel memorable and genuinely enjoyable to use.
          </p>
        </motion.div>

        {/* Skill badges — individually staggered */}
        <motion.div
          className='flex flex-wrap items-center gap-4'
          variants={badgeContainerVariants}
        >
          {skillset.map((skill, index) => (
            <motion.div key={index} variants={badgeVariants}>
              <GetSkillsBadge status={skill} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center'
          variants={itemVariants}
        >
          <CustomButton
            className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default w-full rounded-full text-base text-white uppercase sm:w-56'
            dotClassName='bg-white dark:bg-[#0A0A0A]'
            href='mailto:oduchep@gmail.com'
            iconRight={<FiArrowRight />}
          >
            Get In Touch
          </CustomButton>

          <CustomButton
            className='w-full rounded-full border border-slate-300 bg-white text-base text-slate-900! uppercase sm:w-60 dark:border-white/12 dark:bg-transparent dark:text-white!'
            href={externalRoutes.RESUME}
            target='_blank'
            rel='noopener noreferrer'
            iconRight={<FiDownload />}
          >
            Download Resume
          </CustomButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          className='grid gap-4 sm:grid-cols-3'
          variants={statsContainerVariants}
        >
          {heroStats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.22, ease: EASE } }}
              className='rounded-[1.7rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur dark:border-white/10 dark:bg-white/5'
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

        <motion.p
          variants={itemVariants}
          className='text-sm tracking-[0.24em] text-slate-500 uppercase dark:text-white/45'
        >
          Building with React, Next.js, Tailwind, and a product-first mindset.
        </motion.p>
      </motion.div>

      {/* Right column — slide in from right */}
      <motion.div
        className='relative mx-auto w-full max-w-136'
        variants={rightCardVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='absolute inset-0 rounded-4xl bg-[linear-gradient(135deg,rgba(41,64,104,0.14),rgba(15,23,42,0.03))] blur-2xl dark:bg-[linear-gradient(135deg,rgba(211,233,122,0.16),rgba(255,255,255,0.04))]' />
        <div className='relative overflow-hidden rounded-4xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,252,0.96)_100%)] p-4 shadow-[0_24px_80px_rgba(15,23,42,0.1)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
          <div className='mb-4 flex items-center justify-between rounded-3xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white/60'>
            <span className='flex-1'>
              Currently shaping user experiences at MAJFintech
            </span>
            <span className='rounded-full bg-slate-100 px-3 py-1 text-xs tracking-[0.18em] text-slate-700 uppercase dark:bg-white/8 dark:text-white/70'>
              Frontend Lead
            </span>
          </div>

          <motion.div
            className='relative overflow-hidden rounded-4xl bg-[linear-gradient(180deg,#eef4ff_0%,#dfe7f5_100%)] dark:bg-[linear-gradient(180deg,#162033_0%,#0e1522_100%)]'
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Image
              src={PeterHeadshot}
              height={640}
              width={640}
              alt='Peter Okerulu portrait'
              className='mx-auto h-auto w-full object-cover'
              priority
            />
          </motion.div>

          <div className='mt-4 grid gap-3 sm:grid-cols-2'>
            <motion.div
              className='rounded-2xl bg-slate-100 p-4 dark:bg-white/6'
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <p className='text-xs tracking-[0.2em] text-slate-500 uppercase dark:text-white/50'>
                Focus
              </p>
              <p className='mt-2 text-sm leading-5 text-slate-700 dark:text-white/78'>
                Product interfaces that stay elegant even as the feature set
                grows.
              </p>
            </motion.div>
            <motion.div
              className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default rounded-2xl p-4 text-white'
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            >
              <p className='dark:text-primary-default/70 text-xs tracking-[0.2em] text-white/70 uppercase'>
                Explore
              </p>
              <div className='mt-2 flex flex-col gap-2'>
                <a
                  href={portfolioRoutes.PROJECTS}
                  className='inline-flex items-center gap-2 text-sm font-medium'
                >
                  My projects
                  <FiArrowRight />
                </a>
                <a
                  href={portfolioRoutes.ABOUT}
                  className='inline-flex items-center gap-2 text-sm font-medium'
                >
                  About Me
                  <FiArrowRight />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default HomeHero;
