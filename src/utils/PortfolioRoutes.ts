const portfolioRoutes = {
  HOME: '/',
  ABOUT: '/about',
  WORK: '/work',
};

const navRoutes = [
  { label: 'Work', link: portfolioRoutes.WORK },
  { label: 'About', link: portfolioRoutes.ABOUT },
  { label: 'Contact', link: '/#contact' },
];

const externalRoutes = {
  EMAIL: 'oduchep@gmail.com',
  GITHUB: 'https://github.com/Oduchep',
  LINKEDIN: 'https://www.linkedin.com/in/peter-okerulu/',
  TWITTER: 'https://x.com/JuanPedro_Mario',
  RESUME:
    'https://docs.google.com/document/d/1zjal7G2jNYwFlMHZ590vxRFwQMS6WrRogmIdi-RlVbg/edit?usp=sharing',
};

// Case study page for a project.
const workPath = (slug: string) => `${portfolioRoutes.WORK}/${slug}`;

export { portfolioRoutes, navRoutes, externalRoutes, workPath };
