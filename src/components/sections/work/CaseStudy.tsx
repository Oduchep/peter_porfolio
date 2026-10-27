import Link from 'next/link';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

import { Container } from '@/components/elements';
import { BrowserFrame } from '@/components/widgets';
import { ProjectType } from '@/utils/data';

interface CaseStudyProps {
  project: ProjectType;
  next: ProjectType;
  live: boolean;
}

const ExternalLink = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='group hover:text-accent-ink inline-flex items-center gap-1 transition-colors'
  >
    {label}
    <FiArrowUpRight
      aria-hidden
      className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
    />
  </a>
);

const CaseStudy = ({ project, next, live }: CaseStudyProps) => {
  const meta = [
    { label: 'Year', value: project.year },
    project.role && { label: 'Role', value: project.role },
    { label: 'Stack', value: project.stack.join(', ') },
    {
      label: 'Type',
      value: project.type === 'public' ? 'Open source' : 'Client product',
    },
  ].filter(Boolean) as { label: string; value: string | number }[];

  return (
    <article>
      <Container className='pt-10 md:pt-16'>
        <Link
          href='/projects'
          className='group text-muted hover:text-fg inline-flex items-center gap-1.5 font-mono text-xs transition-colors'
        >
          <FiArrowLeft
            aria-hidden
            className='transition-transform group-hover:-translate-x-0.5'
          />
          All projects
        </Link>

        <header className='mt-10 grid gap-8 md:grid-cols-12'>
          <div className='md:col-span-8'>
            <h1 className='rise text-[clamp(2.6rem,6vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.045em]'>
              {project.name}
            </h1>
            <p className='rise text-muted mt-6 max-w-2xl text-xl leading-relaxed text-pretty'>
              {project.summary}
            </p>
          </div>

          {(project.project_link || project.github_link) && (
            <div className='rise flex gap-6 text-sm md:col-span-4 md:items-end md:justify-end'>
              {project.project_link && (
                <ExternalLink href={project.project_link} label='Visit site' />
              )}
              {project.github_link && (
                <ExternalLink href={project.github_link} label='Source code' />
              )}
            </div>
          )}
        </header>

        <dl className='border-line mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-6 md:grid-cols-4'>
          {meta.map((m) => (
            <div key={m.label}>
              <dt className='text-subtle font-mono text-xs'>{m.label}</dt>
              <dd className='mt-2 text-[15px] leading-snug'>{m.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      <Container className='mt-14'>
        <BrowserFrame
          url={project.project_link}
          image={project.image}
          alt={`${project.name} website`}
          live={live}
          sizes='(min-width: 1152px) 1152px, 100vw'
          priority
        />
      </Container>

      <Container className='py-20 md:py-28'>
        <section className='grid gap-4 md:grid-cols-12 md:gap-8'>
          <h2 className='text-subtle font-mono text-xs md:col-span-3'>
            Overview
          </h2>
          <p className='text-xl leading-relaxed text-pretty md:col-span-8'>
            {project.description}
          </p>
        </section>

        {project.system && project.system.length > 0 && (
          <section className='mt-16 grid gap-4 md:grid-cols-12 md:gap-8'>
            <h2 className='text-subtle font-mono text-xs md:col-span-3'>
              The system
            </h2>
            <ol className='grid gap-8 sm:grid-cols-3 sm:gap-6 md:col-span-9'>
              {project.system.map((part, i) => (
                <li key={part.name} className='border-line border-t pt-4'>
                  <p className='text-accent-ink font-mono text-xs'>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className='mt-2 font-medium tracking-tight'>
                    {part.name}
                  </h3>
                  <p className='text-muted mt-2 text-[15px] leading-relaxed text-pretty'>
                    {part.description}
                  </p>
                  <p className='text-subtle mt-3 font-mono text-xs leading-5'>
                    {part.stack}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section className='mt-16 grid gap-4 md:grid-cols-12 md:gap-8'>
            <h2 className='text-subtle font-mono text-xs md:col-span-3'>
              What I did
            </h2>
            <ul className='space-y-4 md:col-span-8'>
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className='border-line text-muted flex gap-3 border-t pt-4 leading-relaxed'
                >
                  <span aria-hidden className='text-accent-ink'>
                    –
                  </span>
                  <span className='text-pretty'>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>

      <Container>
        <Link
          href={`/projects/${next.slug}`}
          className='group border-line flex items-end justify-between gap-6 border-t pt-6'
        >
          <div>
            <p className='text-subtle font-mono text-xs'>Next project</p>
            <p className='mt-3 text-3xl font-medium tracking-[-0.03em] md:text-5xl'>
              {next.name}
            </p>
          </div>
          <FiArrowRight
            aria-hidden
            className='text-subtle group-hover:text-fg mb-2 size-6 shrink-0 transition-all group-hover:translate-x-1 md:size-8'
          />
        </Link>
      </Container>
    </article>
  );
};

export default CaseStudy;
