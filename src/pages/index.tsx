import {
  FeaturedProjects,
  HomeHero,
  MyExperience,
} from '@/components/sections/home';
import { PageSEO } from '@/layout/components';

export default function Home() {
  return (
    <>
      <PageSEO title="Welcome to Peter's Portfolio" />

      <div>
        <HomeHero />
        <FeaturedProjects />
        <MyExperience />
      </div>
    </>
  );
}
