import type { Metadata } from 'next';
import {
  FeaturedProjects,
  HomeHero,
  MyExperience,
} from '@/components/sections/home';

export const metadata: Metadata = {
  title: {
    absolute: 'Peter Okerulu | React & Next.js Frontend Engineer',
  },
  description:
    'Peter Okerulu builds polished digital products — fast, intentional interfaces for fintech, SaaS, and marketplaces with React and Next.js.',
  alternates: {
    canonical: 'https://www.oduchep.com',
  },
  openGraph: {
    title: 'Peter Okerulu | React & Next.js Frontend Engineer',
    description:
      'Peter Okerulu builds polished digital products — fast, intentional interfaces for fintech, SaaS, and marketplaces with React and Next.js.',
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
