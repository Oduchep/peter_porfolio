import { AboutHero, MySkillset } from '@/components/sections/about';
import { PageSEO } from '@/components/sections/layout';
import React from 'react';

const AboutPage = () => {
  return (
    <>
      <PageSEO title='About Peter Okerulu' />

      <div>
        <AboutHero />
        <MySkillset />
      </div>
    </>
  );
};

export default AboutPage;
