import { Container, SectionHeader } from '@/components/elements';
import { Testimonials } from '@/utils/data';

// LinkedIn headlines are long; the first segment is the useful part.
const shortTitle = (title: string) => title.split('|')[0].trim();

const TestimonialsSection = () => (
  <section aria-labelledby='testimonials-title' className='py-16 md:py-24'>
    <Container>
      <SectionHeader
        id='testimonials-title'
        index='03'
        label='Testimonials'
        title='What people I’ve worked with say.'
      />

      <div className='mt-12 grid gap-12 md:grid-cols-3 md:gap-8'>
        {Testimonials.map((t) => (
          <figure key={t.name} className='flex flex-col'>
            <span
              aria-hidden
              className='text-accent-ink font-serif text-5xl leading-none'
            >
              &ldquo;
            </span>
            <blockquote className='mt-2 space-y-4 text-[15px] leading-relaxed text-pretty'>
              {t.quote.split('\n\n').map((para) => (
                <p key={para}>{para}</p>
              ))}
            </blockquote>
            <figcaption className='border-line mt-6 border-t pt-4 md:mt-auto'>
              <p className='font-medium'>{t.name}</p>
              <p className='text-muted text-sm'>{shortTitle(t.title)}</p>
              <p className='text-subtle mt-1 font-mono text-xs'>
                {t.relationship}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  </section>
);

export default TestimonialsSection;
