import { CSSProperties } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { ButtonLink, Container } from '@/components/elements';
import { getYearsOfExperience } from '@/utils/DateFormatters';
import { portfolioRoutes } from '@/utils/PortfolioRoutes';

const delay = (d: number) => ({ '--d': d }) as CSSProperties;

const HomeHero = () => {
  const years = getYearsOfExperience();

  const facts = [
    { label: 'Currently', value: 'Lead Frontend Engineer at MAJFintech' },
    { label: 'Experience', value: `${years} years, since 2020` },
    { label: 'Focus', value: 'Fintech, SaaS, retail and hospitality' },
    { label: 'Stack', value: 'React, Next.js, NestJS, TypeScript' },
  ];

  return (
    <section className='pt-16 pb-12 md:pt-28 md:pb-16'>
      <Container>
        <p
          className='rise text-muted flex items-center gap-2.5 font-mono text-xs'
          style={delay(0)}
        >
          <span className='relative flex size-2'>
            <span className='bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:hidden' />
            <span className='bg-accent relative inline-flex size-2 rounded-full' />
          </span>
          Open to new product work · Port Harcourt, Nigeria
        </p>

        <h1
          className='rise mt-8 max-w-5xl text-[clamp(2.6rem,6.4vw,5.25rem)] leading-[1.02] font-medium tracking-[-0.045em] text-balance'
          style={delay(1)}
        >
          Frontend engineer who takes products from{' '}
          <em className='font-serif font-normal tracking-[-0.02em]'>
            plan to production.
          </em>
        </h1>

        <div className='mt-10 grid gap-8 md:grid-cols-12 md:items-end'>
          <p
            className='rise text-muted text-lg leading-relaxed text-pretty md:col-span-6'
            style={delay(2)}
          >
            I&apos;m Peter Okerulu. I lead projects, build the interface, and
            extend the API when the product needs it — for fintech, retail and
            hospitality teams.
          </p>

          <div
            className='rise flex flex-wrap gap-3 md:col-span-6 md:justify-end'
            style={delay(3)}
          >
            <ButtonLink href={portfolioRoutes.WORK}>
              See my work
              <FiArrowRight
                aria-hidden
                className='transition-transform group-hover:translate-x-0.5'
              />
            </ButtonLink>
            <ButtonLink href='/#contact' variant='secondary'>
              Get in touch
            </ButtonLink>
          </div>
        </div>

        <dl
          className='rise border-line mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t pt-6 md:grid-cols-4'
          style={delay(4)}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className='text-subtle font-mono text-xs'>{fact.label}</dt>
              <dd className='mt-2 text-[15px] leading-snug'>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
};

export default HomeHero;
