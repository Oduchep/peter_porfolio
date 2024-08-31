import { Heading2 } from '@/components/elements';
import { GetSkillsBadge } from '@/components/widgets';
import { Wrapper } from '@/layout/components';
import React from 'react';

const MySkillset = () => {
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
    <Wrapper>
      <Heading2 text='My Skillset' />

      <div className='mt-3 lg:w-5/6'>
        <p className='leading-9'>
          I specialize in building high-performance web applications with React
          and Next.js, focusing on creating scalable, server-rendered
          applications. My expertise in CSS allows me to craft responsive,
          visually stunning designs that work seamlessly across devices. With
          strong skills in JavaScript and TypeScript, I write clean,
          maintainable code with robust logic. I have a keen eye for UI/UX
          design, blending aesthetics with functionality to enhance user
          experiences. My work is always responsive, accessible, and
          user-focused. Proficient in Git, I collaborate effectively in team
          environments, consistently delivering exceptional frontend solutions.
        </p>

        <div className='mt-5 flex flex-wrap items-center gap-4'>
          {skillset?.map((skill, index) => (
            <GetSkillsBadge key={index} status={skill} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MySkillset;
