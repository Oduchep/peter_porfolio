import { Container, SectionHeader } from '@/components/elements';

const principles = [
  {
    title: 'Frontend architecture',
    text: 'I structure interfaces so they stay understandable, scalable and easy for teams to extend.',
  },
  {
    title: 'UI craft',
    text: 'Spacing, motion, responsiveness — the small details that make a product feel considered.',
  },
  {
    title: 'Product thinking',
    text: 'I do my best work when design, code and user goals line up into one coherent experience.',
  },
];

const toolkit = [
  { group: 'Languages', items: 'TypeScript, JavaScript, HTML, CSS' },
  { group: 'Frontend', items: 'React, Next.js, Vue, TanStack Query' },
  { group: 'Styling', items: 'Tailwind CSS, responsive design' },
  {
    group: 'Backend',
    items: 'NestJS, PostgreSQL, TypeORM, Redis, BullMQ',
  },
  { group: 'Workflow', items: 'Git, GitHub, GitLab, Agile delivery' },
];

const HowIWork = () => (
  <>
    <section aria-labelledby='principles-title' className='py-16 md:py-24'>
      <Container>
        <SectionHeader
          id='principles-title'
          index='01'
          label='How I work'
          title='Clear UX before visual noise. Maintainable systems over quick hacks.'
        />
        <ol className='mt-12 grid gap-10 md:grid-cols-3 md:gap-8'>
          {principles.map((p, i) => (
            <li key={p.title}>
              <p className='text-accent-ink font-mono text-xs'>
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className='mt-3 text-lg font-medium tracking-tight'>
                {p.title}
              </h3>
              <p className='text-muted mt-2 text-[15px] leading-relaxed text-pretty'>
                {p.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>

    <section aria-labelledby='toolkit-title' className='py-16 md:py-24'>
      <Container>
        <SectionHeader
          id='toolkit-title'
          index='02'
          label='Toolkit'
          title='Modern frontend, used with judgment.'
          description='Most comfortable building with React and Next.js, styling with Tailwind, and using TypeScript to keep larger codebases reliable as they grow.'
        />
        <dl className='mt-12 md:ml-[25%]'>
          {toolkit.map((t) => (
            <div
              key={t.group}
              className='border-line grid gap-1 border-t py-4 sm:grid-cols-[160px_1fr] sm:gap-6'
            >
              <dt className='text-subtle font-mono text-xs leading-6'>
                {t.group}
              </dt>
              <dd className='text-[15px] leading-6'>{t.items}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  </>
);

export default HowIWork;
