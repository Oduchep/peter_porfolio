import { CustomButton, SectionHero } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import { Projects } from '@/utils/data';

const ProjectsHero = () => {
  const publicProjects = Projects.filter(
    (project) => project.project_type === 'public'
  );
  const privateProjects = Projects.filter(
    (project) => project.project_type === 'private'
  );
  const latestProjectYear = Math.max(
    ...Projects.map((project) => Number(project.project_year))
  );

  const focusAreas = [
    'Product-led interfaces with sharp visual systems',
    'Scalable frontend architecture for growing teams',
    'Responsive builds that feel polished on every screen',
  ];

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
          className='w-full rounded-full border border-slate-300 bg-white text-base text-slate-900! uppercase sm:w-56 dark:border-white/10 dark:bg-transparent dark:text-white'
        >
          Start A Project
        </CustomButton>
      }
      aside={
        <div className='space-y-6'>
          <div className='flex items-center justify-between gap-4'>
            <div>
              <p className='text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-white/55'>
                What You&apos;ll See
              </p>
              <h2 className='mt-2 text-xl font-semibold text-slate-950 md:text-2xl dark:text-white'>
                A curated snapshot of how I build.
              </h2>
            </div>

            <div className='rounded-2xl bg-slate-100 px-4 py-3 text-right dark:bg-white/6'>
              <p className='text-3xl font-semibold text-slate-950 dark:text-white'>
                {privateProjects.length}
              </p>
              <p className='text-xs leading-5! tracking-[0.18em] text-slate-500 uppercase dark:text-white/55'>
                Private launches
              </p>
            </div>
          </div>

          <div className='space-y-3'>
            {focusAreas.map((item) => (
              <div
                key={item}
                className='flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/3'
              >
                <span className='bg-tertiary-default dark:bg-secondary-default mt-1 h-2.5 w-2.5 rounded-full' />
                <p className='flex-1 text-sm leading-6! text-slate-600 dark:text-white/72'>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className='dark:text-primary-default rounded-[1.6rem] bg-[linear-gradient(135deg,#294068_0%,#172135_100%)] p-5 text-white dark:bg-[linear-gradient(135deg,#D3E97A_0%,#B7D24E_100%)]'>
            <p className='dark:text-primary-default/70 text-xs font-semibold tracking-[0.22em] text-white/70 uppercase'>
              Delivery Style
            </p>
            <p className='dark:text-primary-default/85 mt-3 text-base text-white/90'>
              I care about more than visual polish. The goal is always a strong
              user journey, maintainable code, and a product team that can keep
              building confidently after launch.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default ProjectsHero;
