import Image from 'next/image';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';
import { ProjectType } from '@/utils/data';

// Large image-led tile used for featured work.
const ProjectTile = ({
  project,
  priority,
}: {
  project: ProjectType;
  priority?: boolean;
}) => (
  <Link href={`/projects/${project.slug}`} className='group block'>
    <div className='border-line bg-surface overflow-hidden rounded-xl border'>
      <Image
        src={project.image}
        alt={`${project.name} screenshot`}
        sizes='(min-width: 768px) 50vw, 100vw'
        placeholder='blur'
        priority={priority}
        className='aspect-16/10 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]'
      />
    </div>

    <div className='mt-5 flex items-baseline justify-between gap-4'>
      <h3 className='flex items-center gap-1.5 text-lg font-medium tracking-tight'>
        {project.name}
        <FiArrowUpRight
          aria-hidden
          className='text-subtle group-hover:text-fg transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
        />
      </h3>
      <span className='text-subtle font-mono text-xs'>{project.year}</span>
    </div>
    <p className='text-muted mt-1.5 text-[15px] leading-relaxed text-pretty'>
      {project.summary}
    </p>
    <p className='text-subtle mt-3 font-mono text-xs'>
      {project.stack.join(' · ')}
    </p>
  </Link>
);

export default ProjectTile;
