import { CustomButton, SectionHero } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';

const AboutHero = () => {
  const workingPrinciples = [
    'Clear UX before visual noise',
    'Maintainable frontend systems over quick hacks',
    'Responsive design that feels native on every screen',
  ];

  return (
    <SectionHero
      eyebrow='About'
      title='Frontend engineering with'
      accent='taste, discipline, and product empathy.'
      description={
        <>
          <p>
            I&apos;m Peter Okerulu, a frontend engineer who cares deeply about
            how products feel in real hands. I build interfaces that are not
            only visually refined, but also structured to support growth,
            collaboration, and long-term maintainability.
          </p>
          <p className='mt-4'>
            Since starting my journey in 2019, I&apos;ve worked across agency,
            contract, and startup environments, helping teams ship clearer user
            journeys, stronger UI systems, and more polished web experiences.
            Today, I lead frontend work at MAJFintech, where I combine
            execution, mentoring, and product thinking to move projects forward.
          </p>
        </>
      }
      stats={[
        { value: '2019', label: 'Career start' },
        { value: '3+', label: 'Years shipping with React and Next.js' },
        { value: '1', label: 'Product mindset across every build' },
      ]}
      primaryAction={
        <CustomButton
          className='bg-tertiary-default dark:bg-secondary-default dark:text-primary-default w-full rounded-full text-base text-white uppercase sm:w-64'
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
          className='w-full rounded-full border border-slate-300 bg-white text-base text-slate-900! uppercase sm:w-56 dark:border-white/10 dark:bg-transparent dark:text-white!'
          href='mailto:oduchep@gmail.com'
        >
          Let&apos;s Talk
        </CustomButton>
      }
      aside={
        <div className='space-y-6'>
          <div>
            <p className='text-xs font-semibold tracking-[0.22em] text-slate-500 uppercase dark:text-white/55'>
              How I work
            </p>
            <h2 className='mt-3 text-2xl font-semibold text-slate-950 dark:text-white'>
              Thoughtful execution over surface-level polish.
            </h2>
          </div>

          <div className='space-y-3'>
            {workingPrinciples.map((principle) => (
              <div
                key={principle}
                className='flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-white/10 dark:bg-white/3'
              >
                <span className='bg-tertiary-default dark:bg-secondary-default mt-1 h-2.5 w-2.5 rounded-full' />
                <p className='flex-1 text-sm text-slate-600 dark:text-white/72'>
                  {principle}
                </p>
              </div>
            ))}
          </div>

          <div className='dark:text-primary-default rounded-3xl bg-[linear-gradient(135deg,#294068_0%,#172135_100%)] p-5 text-white dark:bg-[linear-gradient(135deg,#D3E97A_0%,#B7D24E_100%)]'>
            <p className='dark:text-primary-default/70 text-xs font-semibold tracking-[0.22em] text-white/70 uppercase'>
              Outside work
            </p>
            <p className='dark:text-primary-default/85 mt-3 text-sm leading-6 text-white/88'>
              When I&apos;m away from the screen, I recharge with detective
              novels, table tennis, and the kind of competitive FIFA sessions
              that keep my reflexes sharp.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default AboutHero;
