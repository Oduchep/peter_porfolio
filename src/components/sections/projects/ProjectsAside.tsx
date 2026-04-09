import { Projects } from '@/utils/data';

const ProjectsAside = () => {
  const privateProjects = Projects.filter(
    (project) => project.project_type === 'private'
  );

  const focusAreas = [
    'Product-led interfaces with sharp visual systems',
    'Scalable frontend architecture for growing teams',
    'Responsive builds that feel polished on every screen',
  ];

  return (
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
          I care about more than visual polish. The goal is always a strong user
          journey, maintainable code, and a product team that can keep building
          confidently after launch.
        </p>
      </div>
    </div>
  );
};

export default ProjectsAside;
