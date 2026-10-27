'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';

interface BrowserFrameProps {
  url?: string;
  image: StaticImageData;
  alt: string;
  /** Whether the server confirmed this site can be iframed. */
  live: boolean;
  sizes: string;
  priority?: boolean;
  className?: string;
}

// The live site is rendered at a desktop width and scaled down to fit.
const VIEWPORT_WIDTH = 1440;
const VIEWPORT_HEIGHT = 900; // 16:10, same as the frame
const LOAD_TIMEOUT = 12_000;

const hostname = (url?: string) => {
  try {
    return url ? new URL(url).hostname.replace(/^www\./, '') : '';
  } catch {
    return '';
  }
};

// Only load live previews where they're worth the bandwidth:
// tablet/desktop widths and no data-saver.
const MEDIA = '(min-width: 768px)';

const subscribeMedia = (onChange: () => void) => {
  const mql = window.matchMedia(MEDIA);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
};

const canLoadLive = () => {
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return !connection?.saveData && window.matchMedia(MEDIA).matches;
};

const BrowserFrame = ({
  url,
  image,
  alt,
  live,
  sizes,
  priority,
  className = '',
}: BrowserFrameProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [inView, setInView] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const enabled = useSyncExternalStore(
    subscribeMedia,
    canLoadLive,
    () => false
  );

  const wantsLive = live && !!url && enabled && !failed;
  const showLive = wantsLive && inView && scale > 0;

  // Mount the iframe only once the frame is near the screen.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !wantsLive) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [wantsLive]);

  // Keep the iframe scaled to the frame's width.
  useEffect(() => {
    const el = viewportRef.current;
    if (!el || !wantsLive) return;
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / VIEWPORT_WIDTH)
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [wantsLive]);

  // If the site doesn't load in time, stay on the screenshot.
  useEffect(() => {
    if (!showLive || loaded) return;
    const id = setTimeout(() => setFailed(true), LOAD_TIMEOUT);
    return () => clearTimeout(id);
  }, [showLive, loaded]);

  return (
    <div
      className={`border-line-strong bg-surface overflow-hidden rounded-xl border ${className}`}
    >
      {/* Window chrome */}
      <div className='border-line flex h-9 items-center gap-3 border-b px-3.5'>
        <div className='flex gap-1.5' aria-hidden>
          <span className='bg-line-strong size-2.5 rounded-full' />
          <span className='bg-line-strong size-2.5 rounded-full' />
          <span className='bg-line-strong size-2.5 rounded-full' />
        </div>
        {url && (
          <div className='bg-bg text-subtle mx-auto flex h-6 max-w-[60%] min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md px-3 font-mono text-[11px]'>
            {loaded && showLive && (
              <span
                className='bg-accent size-1.5 shrink-0 rounded-full'
                title='Live preview'
              />
            )}
            <span className='truncate'>{hostname(url)}</span>
          </div>
        )}
        <div className='w-10.5' aria-hidden />
      </div>

      {/* Viewport */}
      <div
        ref={viewportRef}
        data-preview={showLive ? (loaded ? 'live' : 'loading') : 'image'}
        className='relative aspect-16/10 overflow-hidden'
      >
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          placeholder='blur'
          priority={priority}
          className={`object-cover object-top transition-opacity duration-500 ${
            loaded && showLive ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {showLive && (
          <iframe
            src={url}
            title={`Live preview of ${alt}`}
            tabIndex={-1}
            aria-hidden
            scrolling='no'
            sandbox='allow-scripts allow-same-origin'
            referrerPolicy='no-referrer'
            onLoad={() => setLoaded(true)}
            className={`pointer-events-none absolute top-0 left-0 origin-top-left border-0 bg-white transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: VIEWPORT_WIDTH,
              height: VIEWPORT_HEIGHT,
              transform: `scale(${scale})`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default BrowserFrame;
