import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import { Montserrat, Poppins } from 'next/font/google';
import LayoutWrapper from '@/layout/LayoutWrapper';

// Configure the fonts with desired weights
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNprogress
        color="#FFFFFF"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      <div className={`${montserrat.variable} ${poppins.variable}`}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </div>
    </>
  );
}
