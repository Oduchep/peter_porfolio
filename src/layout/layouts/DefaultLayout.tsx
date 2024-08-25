import { Footer, Navigations } from '../components';

interface DefaultLayoutProp {
  children?: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProp) => {
  return (
    <div className='flex h-screen flex-col bg-primary-default text-white'>
      <Navigations />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
