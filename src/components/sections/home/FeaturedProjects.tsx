import { Bttn, Heading2 } from '@/components/elements';
import { Wrapper } from '@/layout/components';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const FeaturedProjects = () => {
  return (
    <Wrapper className='flex flex-col gap-14'>
      <div className='flex flex-col gap-2'>
        <Heading2 text='Featured Projects ✨' />

        <p>
          Here are some of the selected projects that showcase my natural steeze
          in front-end development.👌
        </p>
      </div>

      <Bttn
        href={portfolioRoutes.PROJECTS}
        className='mx-auto w-96 rounded-full bg-secondary-default text-base uppercase text-[#0A0A0A]'
        iconRight={<FiExternalLink />}
      >
        View all
      </Bttn>
    </Wrapper>
  );
};

export default FeaturedProjects;
