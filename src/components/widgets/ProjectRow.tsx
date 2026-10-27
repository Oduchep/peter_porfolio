import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from '@/utils/data';
import { workPath } from '@/utils/PortfolioRoutes';

// Compact index row used on the work page.
const ProjectRow = ({ project }: { project: ProjectType }) => (
  <Link
    href={workPath(project.slug)}
    className='group border-line grid grid-cols-[88px_1fr_auto] items-center gap-4 border-b py-5 sm:grid-cols-[140px_1fr_auto] sm:gap-6 md:grid-cols-[160px_1fr_220px_auto]'
  >
    <div className='border-line bg-surface overflow-hidden rounded-md border'>
      <Image
        src={project.image}
        alt=''
        sizes='160px'
        placeholder='blur'
        className='aspect-16/10 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
      />
    </div>

    <div className='min-w-0'>
      <h3 className='flex items-baseline gap-3 font-medium tracking-tight sm:text-lg'>
        {project.name}
        <span className='text-subtle font-mono text-xs font-normal'>
          {project.year}
        </span>
      </h3>
      <p className='text-muted mt-1 line-clamp-2 text-sm leading-relaxed'>
        {project.summary}
      </p>
    </div>

    <p className='text-subtle hidden font-mono text-xs md:block'>
      {project.stack.join(' · ')}
    </p>

    <FiArrowUpRight
      aria-hidden
      className='text-subtle group-hover:text-fg transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
    />
  </Link>
);

export default ProjectRow;
