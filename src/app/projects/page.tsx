import type { Metadata } from 'next';
import { ProjectsHero, ProjectsList } from '@/components/sections/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse the full portfolio of projects by Peter Okerulu — spanning fintech, SaaS, marketplaces, and personal builds, all crafted with React and Next.js.',
  alternates: {
    canonical: 'https://www.oduchep.com/projects',
  },
  openGraph: {
    title: 'Projects | Peter Okerulu',
    description:
      'Browse the full portfolio of projects by Peter Okerulu — spanning fintech, SaaS, marketplaces, and personal builds, all crafted with React and Next.js.',
    url: 'https://www.oduchep.com/projects',
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
      name: 'Projects',
      item: 'https://www.oduchep.com/projects',
    },
  ],
};

const ProjectsPage = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div>
        <ProjectsHero />
        <ProjectsList />
      </div>
    </>
  );
};

export default ProjectsPage;
