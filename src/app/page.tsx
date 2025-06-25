import {
  FeaturedProjects,
  HomeHero,
  MyExperience,
} from '@/components/sections/home';
import { PageSEO } from '@/components/sections/layout';

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
