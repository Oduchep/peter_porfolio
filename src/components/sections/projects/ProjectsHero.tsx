import { CustomButton, SectionHero } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import { Projects } from '@/utils/data';
import ProjectsAside from './ProjectsAside';

const ProjectsHero = () => {
  const publicProjects = Projects.filter(
    (project) => project.project_type === 'public'
  );
  const latestProjectYear = Math.max(
    ...Projects.map((project) => Number(project.project_year))
  );

  return (
    <SectionHero
      eyebrow='Selected Work'
      title='Projects built with'
      accent='craft and clarity.'
      description={
        <>
          <p>
            This collection brings together product work, client engagements,
            and self-initiated builds that reflect how I think as a frontend
            engineer: clear interaction design, reliable implementation, and a
            user experience that feels considered from the first screen to the
            last.
          </p>
          <p className='mt-4'>
            Some projects showcase public code, others represent private product
            work shipped for real teams. Together, they show how I turn ideas
            into interfaces that are elegant, fast, and built for growth.
          </p>
        </>
      }
      stats={[
        { value: `${Projects.length}+`, label: 'Featured builds' },
        { value: `${publicProjects.length}`, label: 'Public case studies' },
        { value: `${latestProjectYear}`, label: 'Most recent launch' },
      ]}
      primaryAction={
        <CustomButton
          className='bg-tertiary-default dark:bg-secondary-default w-full rounded-full text-base uppercase sm:w-64'
          dotClassName='bg-white dark:bg-[#0A0A0A]'
          href={externalRoutes.RESUME}
          target='_blank'
          rel='noopener noreferrer'
        >
          Download Resume
        </CustomButton>
      }
      secondaryAction={
        <CustomButton
          href='mailto:oduchep@gmail.com'
          className='w-full rounded-full border border-slate-300 bg-white text-base text-slate-900! uppercase sm:w-56 dark:border-white/10 dark:bg-transparent dark:text-white!'
        >
          Start A Project
        </CustomButton>
      }
      aside={<ProjectsAside />}
    />
  );
};

export default ProjectsHero;
