import { CustomButton, Heading2 } from '@/components/elements';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { ProjectCard } from '../projects';
import { Wrapper } from '../layout';
import { Projects } from '@/utils/data';

const FeaturedProjects = () => {
  return (
    <Wrapper className='flex flex-col gap-14'>
      <div className='flex flex-col gap-2'>
        <Heading2 text='Featured Projects ✨' />
        <p className='max-w-3xl'>
          Here are some of the selected projects that showcase my natural steeze
          in front-end development.👌
        </p>
      </div>
      <div className='grid gap-12 lg:grid-cols-2'>
        {Projects?.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <CustomButton
        href={portfolioRoutes.PROJECTS}
        className='bg-secondary-default mx-auto w-96 rounded-full text-base text-[#0A0A0A] uppercase'
        iconRight={<FiExternalLink />}
      >
        View all
      </CustomButton>
    </Wrapper>
  );
};

export default FeaturedProjects;
