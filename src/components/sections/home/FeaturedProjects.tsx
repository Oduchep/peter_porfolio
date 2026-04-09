import { CustomButton, SectionIntro } from '@/components/elements';
import { Projects } from '@/utils/data';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import { FiExternalLink } from 'react-icons/fi';

import { Wrapper } from '../layout';
import { ProjectCard } from '../projects';

const FeaturedProjects = () => {
  const featuredProjects = Projects.slice(0, 4);

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

      <div className='grid gap-10 lg:grid-cols-2'>
        {featuredProjects.map((project, index) => (
          <div key={index} className='relative'>
            <div className='absolute -inset-3 -z-10 rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(41,64,104,0.12),rgba(15,23,42,0.02))] blur-xl dark:bg-[linear-gradient(135deg,rgba(211,233,122,0.14),rgba(255,255,255,0.02))]' />
            <div className='h-full rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
              <ProjectCard {...project} />
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
