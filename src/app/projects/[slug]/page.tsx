import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CaseStudy } from '@/components/sections/projects';
import { getProject, Projects } from '@/utils/data';
import { canEmbed } from '@/utils/embed';

const siteUrl = 'https://www.oduchep.com';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};

  const url = `${siteUrl}/projects/${project.slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.name} | Peter Okerulu`,
      description: project.summary,
      url,
      images: [{ url: project.image.src, alt: `${project.name} screenshot` }],
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = Projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = Projects[index];
  const next = Projects[(index + 1) % Projects.length];

  const live = await canEmbed(project.project_link);

  return <CaseStudy project={project} next={next} live={live} />;
}
