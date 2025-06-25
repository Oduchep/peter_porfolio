'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

interface PageSEOProps {
  title: string;
  description?: string;
  keywords?: string;
}

const PageSEO = ({
  title,
  description = 'Default site description',
  keywords = 'default, keywords',
}: PageSEOProps) => {
  const siteUrl = 'https://www.oduchep.com';
  const pathname = usePathname();
  const cleanPath = pathname?.split('#')[0].split('?')[0];
  const seoUrl = siteUrl + (cleanPath === '/' ? '' : cleanPath);

  return (
    <Head>
      <title>{title}</title>
      <link rel='canonical' href={seoUrl} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='Content-Language' content='en' />

      {/* Open Graph */}
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/assets/images/name-logo.svg' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={seoUrl} />
      <meta property='og:image:alt' content='Peter Okerulu Logo' />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content='/assets/images/name-logo.svg' />

      <link rel='icon' href='/favicon.ico' />
      <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: seoUrl,
            name: title,
            description: description,
          }),
        }}
      />
    </Head>
  );
};

export default PageSEO;
