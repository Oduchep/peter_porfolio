import { CustomButton, Heading1 } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import React from 'react';
import { Wrapper } from '../layout';

const ProjectsHero = () => {
  return (
    <Wrapper className='grid gap-20 xl:grid-cols-2'>
      <div className='flex flex-col gap-5'>
        <Heading1 text='My Projects' icon='✨' />

        <p className='text-tertiary-default dark:text-secondary-default font-medium md:text-xl md:!leading-9'>
          Turning Ideas into Interactive Realities
        </p>

        <div className='flex flex-col gap-4 leading-9 dark:text-white/90'>
          <p>
            Explore my projects where creativity meets code. Each application
            showcases my passion for developing seamless, user-friendly
            experiences that look great and work flawlessly. Dive in and
            discover the work that defines my journey as a frontend developer.
          </p>
        </div>

        <CustomButton
          className='bg-tertiary-default dark:bg-secondary-default mt-10 w-64 rounded-full text-base uppercase'
          dotClassName='bg-white dark:bg-[#0A0A0A]'
          href={externalRoutes?.RESUME}
          target='_blank'
          rel='noopener noreferrer'
        >
          Download Resume
        </CustomButton>
      </div>
    </Wrapper>
  );
};

export default ProjectsHero;
