'use client';

import { CustomTabs } from '@/components/elements';
import { Wrapper } from '../layout';
import { Projects } from '@/utils/data';
import ProjectCard from './ProjectCard';

const ProjectsList = () => {
  const data = [
    {
      label: 'Public Projects',
      content: (
        <div className='grid gap-12 lg:grid-cols-2'>
          {Projects?.filter((proj) => proj.project_type == 'public')?.map(
            (project, index) => (
              <ProjectCard key={index} {...project} />
            )
          )}
        </div>
      ),
    },
    {
      label: 'Private Projects',
      content: (
        <div className='grid gap-12 lg:grid-cols-2'>
          {Projects?.filter((proj) => proj.project_type == 'private')?.map(
            (project, index) => (
              <ProjectCard key={index} {...project} />
            )
          )}
        </div>
      ),
    },
  ];

  return (
    <Wrapper>
      <CustomTabs headerClassName='w-fit mx-auto' tabs={data} />
    </Wrapper>
  );
};

export default ProjectsList;
