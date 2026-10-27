import Image from 'next/image';
import { CSSProperties } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import { ButtonLink, Container } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import { PeterHeadshot } from '../../../../public/assets/images';

const delay = (d: number) => ({ '--d': d }) as CSSProperties;

const AboutHero = () => (
  <section className='pt-16 pb-16 md:pt-24 md:pb-24'>
    <Container className='grid gap-12 md:grid-cols-12 md:gap-8'>
      <div className='md:col-span-7'>
        <p className='rise text-subtle font-mono text-xs' style={delay(0)}>
          About
        </p>
        <h1
          className='rise mt-6 text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] font-medium tracking-[-0.04em] text-balance'
          style={delay(1)}
        >
          I care about how products{' '}
          <em className='font-serif font-normal'>feel</em> in real hands.
        </h1>

        <div
          className='rise text-muted mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-pretty'
          style={delay(2)}
        >
          <p>
            I&apos;m Peter Okerulu, a frontend engineer based in Port Harcourt,
            Nigeria. I build interfaces that look refined and are structured to
            support growth, collaboration and long-term maintenance.
          </p>
          <p>
            Since starting out in 2019 I&apos;ve worked across agency, contract
            and startup teams. Today I lead frontend at MAJFintech, where I mix
            hands-on execution, mentoring and product thinking.
          </p>
        </div>

        <div className='rise mt-10 flex flex-wrap gap-3' style={delay(3)}>
          <ButtonLink href={externalRoutes.RESUME} external>
            Resume <FiArrowUpRight aria-hidden />
          </ButtonLink>
          <ButtonLink href='/#contact' variant='secondary'>
            Get in touch
          </ButtonLink>
        </div>
      </div>

      <div className='rise md:col-span-4 md:col-start-9' style={delay(2)}>
        <div className='border-line bg-surface overflow-hidden rounded-xl border'>
          <Image
            src={PeterHeadshot}
            alt='Portrait of Peter Okerulu'
            sizes='(min-width: 768px) 33vw, 100vw'
            placeholder='blur'
            priority
            className='aspect-4/5 w-full object-cover object-top'
          />
        </div>
      </div>
    </Container>
  </section>
);

export default AboutHero;
