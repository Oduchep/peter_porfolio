import { FiArrowRight } from 'react-icons/fi';

import { ButtonLink, Container, SectionHeader } from '@/components/elements';
import { ProjectTile } from '@/components/widgets';
import { FeaturedProjects } from '@/utils/data';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';
import { canEmbed } from '@/utils/embed';

const SelectedWork = async () => {
  const live = await Promise.all(
    FeaturedProjects.map((p) => canEmbed(p.project_link))
  );

  return (
    <section aria-labelledby='work-title' className='py-16 md:py-24'>
      <Container>
        <SectionHeader
          id='work-title'
          index='01'
          label='Selected work'
          title='Products I’ve helped ship, from community finance to fashion.'
          action={
            <ButtonLink
              href={portfolioRoutes.PROJECTS}
              variant='text'
              className='hidden md:inline-flex'
            >
              All projects <FiArrowRight aria-hidden />
            </ButtonLink>
          }
        />

        <div className='mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2'>
          {FeaturedProjects.map((project, i) => (
            <ProjectTile
              key={project.slug}
              project={project}
              live={live[i]}
              priority={i < 2}
            />
          ))}
        </div>

        <ButtonLink
          href={portfolioRoutes.PROJECTS}
          variant='secondary'
          className='mt-12 w-full md:hidden'
        >
          All projects
        </ButtonLink>
      </Container>
    </section>
  );
};

export default SelectedWork;
