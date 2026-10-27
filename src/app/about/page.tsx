import type { Metadata } from 'next';
import { AboutHero, HowIWork, OutsideWork } from '@/components/sections/about';
import { ExperienceSection } from '@/components/sections/home';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Peter Okerulu — a frontend engineer with years of experience building scalable interfaces using React, Next.js, TypeScript, and Tailwind CSS.',
  alternates: {
    canonical: 'https://www.oduchep.com/about',
  },
  openGraph: {
    title: 'About Peter Okerulu | Frontend Engineer',
    description:
      'Learn about Peter Okerulu — a frontend engineer with years of experience building scalable interfaces using React, Next.js, TypeScript, and Tailwind CSS.',
    url: 'https://www.oduchep.com/about',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.oduchep.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'About',
      item: 'https://www.oduchep.com/about',
    },
  ],
};

const AboutPage = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutHero />
      <HowIWork />
      <ExperienceSection index='03' />
      <OutsideWork />
    </>
  );
};

export default AboutPage;
