import type { Metadata } from 'next';
import {
  FeaturedProjects,
  HomeHero,
  MyExperience,
} from '@/components/sections/home';

export const metadata: Metadata = {
  title: {
    absolute:
      'Peter Okerulu — Frontend Engineer | React, Next.js & TypeScript Developer',
  },
  description:
    'Peter Okerulu builds polished digital products that feel intentional, fast, and memorable — crafting responsive interfaces for fintech, SaaS, and marketplaces with React, Next.js, and TypeScript.',
  alternates: {
    canonical: 'https://www.oduchep.com',
  },
  openGraph: {
    title:
      'Peter Okerulu — Frontend Engineer | React, Next.js & TypeScript Developer',
    description:
      'Peter Okerulu builds polished digital products that feel intentional, fast, and memorable — crafting responsive interfaces for fintech, SaaS, and marketplaces with React, Next.js, and TypeScript.',
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
