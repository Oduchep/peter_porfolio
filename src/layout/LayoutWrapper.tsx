import { DefaultLayout } from './layouts';

const layouts: any = {
  default: DefaultLayout,
};

const LayoutWrapper = ({ children, ...other }: any) => {
  const Layout = layouts[children.type.layout];

  if (Layout != null) {
    return <Layout {...other}>{children}</Layout>;
  }

  return <DefaultLayout {...other}>{children}</DefaultLayout>;
};

export default LayoutWrapper;
