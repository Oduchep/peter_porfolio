import type { Metadata } from 'next';
import { Container } from '@/components/elements';
import { ProjectRow } from '@/components/widgets';
import { Projects } from '@/utils/data';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Browse the full portfolio of projects by Peter Okerulu — spanning fintech, SaaS, marketplaces, and personal builds, all crafted with React and Next.js.',
  alternates: {
    canonical: 'https://www.oduchep.com/work',
  },
  openGraph: {
    title: 'Work | Peter Okerulu',
    description:
      'Browse the full portfolio of projects by Peter Okerulu — spanning fintech, SaaS, marketplaces, and personal builds, all crafted with React and Next.js.',
    url: 'https://www.oduchep.com/work',
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
      name: 'Work',
      item: 'https://www.oduchep.com/work',
    },
  ],
};

const WorkPage = () => {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className='pt-16 pb-24 md:pt-24 md:pb-32'>
        <Container>
          <p className='rise text-subtle font-mono text-xs'>
            Work · {Projects.length} projects
          </p>
          <h1 className='rise mt-6 max-w-4xl text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-medium tracking-[-0.04em] text-balance'>
            Client products and side projects,{' '}
            <em className='font-serif font-normal'>newest first.</em>
          </h1>
          <p className='rise text-muted mt-6 max-w-2xl text-lg leading-relaxed text-pretty'>
            Most of my work lives in private codebases for fintech and
            marketplace teams. Open a project to see what it is and what I did
            on it.
          </p>

          <div className='border-line mt-16 border-t'>
            {[...Projects]
              .sort((a, b) => b.year - a.year)
              .map((project) => (
                <ProjectRow key={project.slug} project={project} />
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default WorkPage;
