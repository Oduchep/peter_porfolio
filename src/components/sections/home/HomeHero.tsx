import { CustomButton } from '@/components/elements';
import { GetSkillsBadge } from '@/components/widgets';
import Image from 'next/image';
import React from 'react';
import { PeterBlueShirt } from '../../../../public/assets/images';
import { Wrapper } from '../layout';

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

  return (
    <Wrapper
      className='grid items-center gap-10 xl:grid-cols-2'
      paddingY='pt-12 pb-20'
    >
      <div className='flex flex-col gap-5 md:text-xl md:!leading-9'>
        <p>Hi , I am Peter</p>

        <div className='text-tertiary-default dark:text-secondary-default text-3xl font-semibold lg:text-6xl lg:leading-[75px]'>
          Developing Elegant Interfaces, One Pixel at a Time&nbsp;
          <span className='lg:text-3xl'>💻</span>
        </div>

        <div className='dark:text-white/70'>
          Frontend developer with 3+ years of turning ideas into smooth,
          responsive web apps. I specialize in React and Next.js, making every
          pixel count. Lets build something awesome!
        </div>

        <div className='mb-5 flex flex-wrap items-center gap-4'>
          {skillset?.map((skill, index) => (
            <GetSkillsBadge key={index} status={skill} />
          ))}
        </div>

        <CustomButton
          className='bg-tertiary-default dark:bg-secondary-default w-56 rounded-full text-base uppercase'
          dotClassName='bg-white dark:bg-[#0A0A0A]'
          href='mailto:oduchep@gmail.com'
        >
          Get In Touch
        </CustomButton>
      </div>

      <Image src={PeterBlueShirt} height={600} alt='hero image' />
    </Wrapper>
  );
};

export default HomeHero;
