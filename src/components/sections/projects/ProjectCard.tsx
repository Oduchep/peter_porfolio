import Image from 'next/image';
import React from 'react';
import { GetSkillsBadge } from '@/components/widgets';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { ProjectType } from '@/utils/data';

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
        <span className='text-sm text-gray-300 md:text-base'>
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
                className='all__trans hover:scale-125'
                target='_blank'
              >
                <FaGithub />
              </a>
            )}
            <a
              href={project_link}
              className='all__trans hover:scale-125'
              target='_blank'
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
