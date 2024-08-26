import { ConnectWithMe } from '@/components/widgets';
import { Footer, Navigations } from '../components';

interface DefaultLayoutProp {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProp) => {
  return (
    <div className='flex h-screen flex-col overflow-y-auto bg-primary-default text-white'>
      <Navigations />
      <div>{children}</div>
      <ConnectWithMe />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
