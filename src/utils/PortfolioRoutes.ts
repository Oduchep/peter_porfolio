const portfolioRoutes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
};

const navRoutes = [
  { label: 'Home', link: portfolioRoutes.HOME },
  { label: 'About', link: portfolioRoutes.ABOUT },
  { label: 'Projects', link: portfolioRoutes.PROJECTS },
];

const externalRoutes = {
  GITHUB: 'https://github.com/Oduchep',
  LINKEDIN: 'https://www.linkedin.com/in/peter-okerulu/',
  TWITTER: 'https://x.com/JuanPedro_Mario',
  RESUME:
    'https://docs.google.com/document/d/1zjal7G2jNYwFlMHZ590vxRFwQMS6WrRogmIdi-RlVbg/edit?usp=sharing',
};

export { portfolioRoutes, navRoutes, externalRoutes };
