import { Container } from '@/components/elements';
import LocalTime from './LocalTime';

const Footer = () => (
  <footer className='border-line mt-auto border-t'>
    <Container className='text-subtle flex flex-col gap-2 py-8 font-mono text-xs sm:flex-row sm:items-center sm:justify-between'>
      <p>&copy; {new Date().getFullYear()} Peter Okerulu</p>
      <p>
        Port Harcourt, NG · <LocalTime /> WAT
      </p>
    </Container>
  </footer>
);

export default Footer;
