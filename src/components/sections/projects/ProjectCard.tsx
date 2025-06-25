import Image from 'next/image';
import React from 'react';
import { ProjectSample } from '../../../../public/assets/images';
import { GetSkillsBadge } from '@/components/widgets';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = () => {
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
    <div className='flex flex-col gap-7'>
      <div className='flex justify-between'>
        <h3 className='text-3xl font-bold'>NFT Marketplace</h3>
        <span>2023</span>
      </div>

      <Image src={ProjectSample} className='rounded-lg' alt='project sample' />

      <div className='flex flex-col gap-6'>
        <div className='flex items-start justify-between gap-10'>
          <div className='flex flex-wrap items-center gap-3'>
            {skillset?.map((skill, index) => (
              <GetSkillsBadge key={index} status={skill} />
            ))}
          </div>

          <div className='flex items-center gap-4 text-2xl'>
            <a
              href='www.google.com'
              className='all__trans hover:scale-125'
              target='_blank'
            >
              <FaGithub />
            </a>
            <a
              href='www.google.com'
              className='all__trans hover:scale-125'
              target='_blank'
            >
              <FiExternalLink />
            </a>
          </div>
        </div>

        <div>
          Digital agency is a landing page built with the latest version of
          next.js using best practices.
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
