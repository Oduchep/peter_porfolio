'use client';

import { Wrapper } from '../layout';

const ProjectsList = () => {
  const data = [
    {
      label: 'Company Projects',
      value: 'company_projects',
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: 'Personal Projects',
      value: 'personal_projects',
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  console.log(data);

  return <Wrapper>...</Wrapper>;
};

export default ProjectsList;
