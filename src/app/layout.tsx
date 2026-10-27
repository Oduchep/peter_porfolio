import type { Metadata } from 'next';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/components/sections/layout';
import { ContactSection } from '@/components/widgets';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
});

const siteUrl = 'https://www.oduchep.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Peter Okerulu | Frontend Engineer',
    template: '%s | Peter Okerulu',
  },
  description:
    'Peter Okerulu — frontend engineer from Port Harcourt, Nigeria, building polished products for fintech and SaaS with React, Next.js, and TypeScript.',
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
      'Peter Okerulu — frontend engineer from Port Harcourt, Nigeria, building polished products for fintech and SaaS with React, Next.js, and TypeScript.',
    images: [
      {
        url: '/assets/images/peter_headshot.png',
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
      'Peter Okerulu — frontend engineer from Port Harcourt, Nigeria, building polished products for fintech and SaaS with React, Next.js, and TypeScript.',
    images: ['/assets/images/peter_headshot.png'],
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
    apple: '/assets/images/peter_headshot.png',
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

const themeScript = `try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.remove('dark')}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='dark'
      data-scroll-behavior='smooth'
      suppressHydrationWarning
    >
      <head>
        {/* Apply the saved theme before first paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <a
          href='#main'
          className='bg-fg text-bg sr-only z-100 rounded-full px-4 py-2 text-sm focus:not-sr-only focus:fixed focus:top-3 focus:left-3'
        >
          Skip to content
        </a>
        <div className='flex min-h-screen flex-col'>
          <Header />
          <main id='main'>{children}</main>
          <ContactSection />
          <Footer />
        </div>
      </body>
    </html>
  );
}
