import { AboutHero, MySkillset } from '@/components/sections/about';
import { PageSEO } from '@/layout/components';
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
