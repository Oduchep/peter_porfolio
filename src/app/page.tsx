import type { Metadata } from 'next';
import {
  FeaturedProjects,
  HomeHero,
  MyExperience,
} from '@/components/sections/home';

export const metadata: Metadata = {
  title: 'Frontend Engineer',
  description:
    'Peter Okerulu is a frontend engineer crafting polished, responsive interfaces for fintech, SaaS, and marketplaces — using React, Next.js, and TypeScript.',
  alternates: {
    canonical: 'https://www.oduchep.com',
  },
  openGraph: {
    title: 'Peter Okerulu | Frontend Engineer',
    description:
      'Peter Okerulu is a frontend engineer crafting polished, responsive interfaces for fintech, SaaS, and marketplaces — using React, Next.js, and TypeScript.',
    url: 'https://www.oduchep.com',
  },
};

export default function Home() {
  return (
    <div>
      <HomeHero />
      <FeaturedProjects />
      <MyExperience />
    </div>
  );
}
