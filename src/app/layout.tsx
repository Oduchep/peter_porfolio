import type { Metadata } from 'next';
import { Inter, Rubik } from 'next/font/google';
import './globals.css';
import { Footer, Navigations } from '@/components/sections/layout';
import { ConnectWithMe } from '@/components/widgets';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const rubik = Rubik({
  variable: '--font-rubik',
  subsets: ['latin'],
});

const siteUrl = 'https://www.oduchep.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Peter Okerulu | Frontend Engineer',
    template: '%s | Peter Okerulu',
  },
  description:
    'Peter Okerulu is a frontend engineer based in Port Harcourt, Nigeria, specialising in React, Next.js, and TypeScript — building polished, responsive digital products for fintech, SaaS, and marketplaces.',
  keywords: [
    'Peter Okerulu',
    'frontend engineer',
    'React developer',
    'Next.js developer',
    'TypeScript',
    'web developer Nigeria',
    'UI engineer',
    'portfolio',
  ],
  authors: [{ name: 'Peter Okerulu', url: siteUrl }],
  creator: 'Peter Okerulu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: "Peter Okerulu's Portfolio",
    title: 'Peter Okerulu | Frontend Engineer',
    description:
      'Peter Okerulu is a frontend engineer based in Port Harcourt, Nigeria, specialising in React, Next.js, and TypeScript — building polished, responsive digital products for fintech, SaaS, and marketplaces.',
    images: [
      {
        url: '/assets/images/peter_blue_shirt.png',
        width: 640,
        height: 640,
        alt: 'Peter Okerulu — Frontend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peter Okerulu | Frontend Engineer',
    description:
      'Peter Okerulu is a frontend engineer based in Port Harcourt, Nigeria, specialising in React, Next.js, and TypeScript — building polished, responsive digital products for fintech, SaaS, and marketplaces.',
    images: ['/assets/images/peter_blue_shirt.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    apple: '/assets/images/peter_blue_shirt.png',
  },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Peter Okerulu',
  url: siteUrl,
  jobTitle: 'Frontend Engineer',
  worksFor: {
    '@type': 'Organization',
    name: 'MAJFintech',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Port Harcourt',
    addressCountry: 'NG',
  },
  sameAs: [
    'https://github.com/Oduchep',
    'https://www.linkedin.com/in/peter-okerulu/',
    'https://x.com/JuanPedro_Mario',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${rubik.variable} antialiased`}>
        <div className='dark:bg-primary-default text-primary-default flex h-screen flex-col overflow-y-auto dark:text-white'>
          <Navigations />
          <div>{children}</div>
          <ConnectWithMe />
          <Footer />
        </div>
      </body>
    </html>
  );
}
