import { Container } from '@/components/elements';

const OutsideWork = () => (
  <section className='py-16 md:py-24'>
    <Container>
      <div className='border-line grid gap-4 border-t pt-6 md:grid-cols-12 md:gap-8'>
        <p className='text-subtle font-mono text-xs md:col-span-3'>
          <span className='text-accent-ink'>04 </span>Away from the screen
        </p>
        <p className='text-2xl leading-snug font-medium tracking-tight text-balance md:col-span-9 md:text-3xl'>
          Detective novels, table tennis, and competitive FIFA sessions that
          keep the reflexes sharp.
        </p>
      </div>
    </Container>
  </section>
);

export default OutsideWork;
