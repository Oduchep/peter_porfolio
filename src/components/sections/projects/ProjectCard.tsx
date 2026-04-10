import Image from 'next/image';
import React, { ReactNode } from 'react';
import { GetSkillsBadge } from '@/components/widgets';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { ProjectType } from '@/utils/data';

export const ProjectWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='relative'>
      <div className='absolute -inset-3 -z-10 rounded-[2.3rem] bg-[linear-gradient(135deg,rgba(41,64,104,0.12),rgba(15,23,42,0.02))] blur-xl dark:bg-[linear-gradient(135deg,rgba(211,233,122,0.14),rgba(255,255,255,0.02))]' />
      <div className='h-full rounded-3xl border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] p-5 shadow-[0_22px_70px_rgba(15,23,42,0.08)] md:p-8 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_100%)]'>
        {children}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project_name,
  project_year,
  project_img,
  project_desc,
  tools,
  github_link,
  project_link,
}: ProjectType) => {
  return (
    <div className='flex flex-col gap-7'>
      <div className='flex justify-between'>
        <h3 className='text-xl font-bold md:text-3xl'>{project_name}</h3>
        <span className='text-sm text-gray-800 md:text-base dark:text-gray-300'>
          {project_year}
        </span>
      </div>

      <Image
        src={project_img}
        className='rounded-lg'
        alt={`${project_name} image`}
      />

      <div className='flex flex-col gap-6'>
        <div className='flex items-start justify-between gap-10'>
          <div className='flex flex-wrap items-center gap-3'>
            {tools?.map((tool, index) => (
              <GetSkillsBadge key={index} status={tool} />
            ))}
          </div>

          <div className='flex items-center gap-4 text-2xl'>
            {github_link && (
              <a
                href={github_link}
                aria-label={`View ${project_name} source code on GitHub`}
                className='all__trans hover:scale-125'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaGithub />
              </a>
            )}
            <a
              href={project_link}
              aria-label={`View ${project_name} live site`}
              className='all__trans hover:scale-125'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink />
            </a>
          </div>
        </div>

        <p>{project_desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
