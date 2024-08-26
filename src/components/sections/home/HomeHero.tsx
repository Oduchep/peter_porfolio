import { Bttn2 } from '@/components/elements';
import { GetSkillsBadge } from '@/components/widgets';
import { Wrapper } from '@/layout/components';
import React from 'react';

const HomeHero = () => {
  const skillset = [
    'HTML',
    'CSS',
    'Tailwind',
    'JavaScript',
    'TypeScript',
    'React',
    'Git',
    'Next',
  ];

  return (
    <Wrapper className='grid grid-cols-2 items-center gap-10'>
      <div className='flex flex-col gap-5 md:text-xl md:!leading-9'>
        <p>Hi , I am Peter</p>

        <div className='text-3xl font-semibold text-secondary-default lg:text-6xl lg:leading-[75px]'>
          Crafting Elegant Interfaces, One Pixel at a Time&nbsp;
          <span className='lg:text-3xl'>💻</span>
        </div>

        <div className='text-white/70'>
          Frontend developer with 3+ years of turning ideas into smooth,
          responsive web apps. I specialize in React and Next.js, making every
          pixel count. Lets build something awesome!
        </div>

        <div className='mb-5 flex flex-wrap items-center gap-4'>
          {skillset?.map((skill, index) => (
            <GetSkillsBadge key={index} status={skill} />
          ))}
        </div>

        <Bttn2
          className='w-56 rounded-full bg-secondary-default text-base uppercase text-[#0A0A0A]'
          dotClassName='bg-[#0A0A0A]'
          href='mailto:oduchep@gmail.com'
        >
          Get In Touch
        </Bttn2>
      </div>
      <div></div>
    </Wrapper>
  );
};

export default HomeHero;
