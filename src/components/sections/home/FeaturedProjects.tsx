import { CustomButton, SectionIntro } from '@/components/elements';
import { Projects } from '@/utils/data';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import { FiExternalLink } from 'react-icons/fi';

import { Wrapper } from '../layout';
import { ProjectCard } from '../projects';
import { ProjectWrapper } from '../projects/ProjectCard';

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
          <ProjectWrapper key={index}>
            <ProjectCard {...project} />
          </ProjectWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default FeaturedProjects;
