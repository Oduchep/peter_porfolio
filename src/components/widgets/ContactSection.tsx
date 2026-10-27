import { FiArrowUpRight } from 'react-icons/fi';

import { Container } from '@/components/elements';
import { externalRoutes } from '@/utils/PortfolioRoutes';
import ContactForm from './ContactForm';
import CopyEmail from './CopyEmail';

const links = [
  { label: 'LinkedIn', href: externalRoutes.LINKEDIN },
  { label: 'GitHub', href: externalRoutes.GITHUB },
  { label: 'X / Twitter', href: externalRoutes.TWITTER },
  { label: 'Resume', href: externalRoutes.RESUME },
];

const ContactSection = () => (
  <section
    id='contact'
    aria-labelledby='contact-title'
    className='py-24 md:py-32'
  >
    <Container>
      <div className='border-line grid gap-14 border-t pt-6 md:grid-cols-12 md:gap-8'>
        <div className='md:col-span-5'>
          <p className='text-subtle font-mono text-xs'>Contact</p>
          <h2
            id='contact-title'
            className='mt-6 text-4xl font-medium tracking-[-0.035em] text-balance md:text-5xl'
          >
            Have a product that needs a{' '}
            <em className='font-serif font-normal'>sharp</em> frontend?
          </h2>
          <p className='text-muted mt-5 max-w-md leading-relaxed text-pretty'>
            I&apos;m open to full-time roles, contract work and collaborations.
            Email is the fastest way to reach me.
          </p>

          <div className='mt-10'>
            <CopyEmail email={externalRoutes.EMAIL} />
          </div>

          <ul className='mt-10 grid grid-cols-2 gap-x-6 gap-y-3 text-sm'>
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group text-muted hover:text-fg inline-flex items-center gap-1 transition-colors'
                >
                  {link.label}
                  <FiArrowUpRight
                    aria-hidden
                    className='transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:col-span-6 md:col-start-7'>
          <ContactForm />
        </div>
      </div>
    </Container>
  </section>
);

export default ContactSection;
