import { Container, SectionHeader } from '@/components/elements';
import { ExperienceTimeline } from '@/components/widgets';

const ExperienceSection = ({ index = '02' }: { index?: string }) => (
  <section aria-labelledby='experience-title' className='py-16 md:py-24'>
    <Container>
      <SectionHeader
        id='experience-title'
        index={index}
        label='Experience'
        title='From intern to leading frontend at a fintech.'
        description='Startups and fast-moving teams, where frontend work had to support growth, not just look good.'
      />
      <ExperienceTimeline />
    </Container>
  </section>
);

export default ExperienceSection;
