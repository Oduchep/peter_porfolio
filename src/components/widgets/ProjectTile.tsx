import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from '@/utils/data';
import { workPath } from '@/utils/PortfolioRoutes';
import BrowserFrame from './BrowserFrame';

// Large tile used for featured work. The title link is stretched over the
// whole tile so the preview stays outside the <a> (iframes can't live in links).
const ProjectTile = ({
  project,
  live,
  priority,
}: {
  project: ProjectType;
  live: boolean;
  priority?: boolean;
}) => (
  <article className='group relative'>
    <BrowserFrame
      url={project.project_link}
      image={project.image}
      alt={`${project.name} website`}
      live={live}
      sizes='(min-width: 768px) 50vw, 100vw'
      priority={priority}
      className='group-hover:border-fg transition-colors duration-300'
    />

    <div className='mt-5 flex items-baseline justify-between gap-4'>
      <h3 className='text-lg font-medium tracking-tight'>
        <Link
          href={workPath(project.slug)}
          className='flex items-center gap-1.5 after:absolute after:inset-0'
        >
          {project.name}
          <FiArrowUpRight
            aria-hidden
            className='text-subtle group-hover:text-fg transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          />
        </Link>
      </h3>
      <span className='text-subtle font-mono text-xs'>{project.year}</span>
    </div>
    <p className='text-muted mt-1.5 text-[15px] leading-relaxed text-pretty'>
      {project.summary}
    </p>
    <p className='text-subtle mt-3 font-mono text-xs'>
      {project.stack.join(' · ')}
    </p>
  </article>
);

export default ProjectTile;
