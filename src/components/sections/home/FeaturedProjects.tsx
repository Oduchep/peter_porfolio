'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CustomButton, SectionIntro } from '@/components/elements';
import { Projects } from '@/utils/data';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import { FiExternalLink } from 'react-icons/fi';

import { Wrapper } from '../layout';
import { ProjectCard } from '../projects';
import { ProjectWrapper } from '../projects/ProjectCard';

const EASE = [0.22, 1, 0.36, 1] as const;

const FeaturedProjects = () => {
  const featuredProjects = Projects.slice(0, 4);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.04,
    rootMargin: '0px 0px -60px 0px',
  });

  return (
    <Wrapper className='space-y-12'>
      <SectionIntro
        eyebrow='Selected Work'
        title='Featured projects that balance product thinking with polished execution.'
        description={
          <>
            These are the builds I reach for when I want to show range: public
            work, private product delivery, and interfaces designed to feel
            trustworthy, fast, and genuinely enjoyable to use.
          </>
        }
        action={
          <CustomButton
            href={portfolioRoutes.PROJECTS}
            className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default w-full rounded-full text-base text-white uppercase sm:w-52'
            iconRight={<FiExternalLink />}
          >
            View all
          </CustomButton>
        }
      />

      <div ref={ref} className='grid gap-10 lg:grid-cols-2'>
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.62,
              delay: index * 0.12,
              ease: EASE,
            }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: EASE }}
              className='h-full'
            >
              <ProjectWrapper>
                <ProjectCard {...project} />
              </ProjectWrapper>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
