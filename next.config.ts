import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // /projects was renamed to /work; keep old links and search results working.
  async redirects() {
    return [
      { source: '/projects', destination: '/work', permanent: true },
      {
        source: '/projects/:slug',
        destination: '/work/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
