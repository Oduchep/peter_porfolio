// Server-side check: can this site be shown inside an iframe on our domain?
// Runs at build time and is re-checked daily, so a site that starts blocking
// embeds (or goes down) falls back to its screenshot automatically.

const SITE_HOST = 'oduchep.com';

const allowsFraming = (headers: Headers) => {
  const xfo = headers.get('x-frame-options')?.toLowerCase();
  if (xfo && (xfo.includes('deny') || xfo.includes('sameorigin'))) {
    return false;
  }

  const csp = headers.get('content-security-policy')?.toLowerCase() ?? '';
  const frameAncestors = csp
    .split(';')
    .map((d) => d.trim())
    .find((d) => d.startsWith('frame-ancestors'));

  if (frameAncestors) {
    const sources = frameAncestors.split(/\s+/).slice(1);
    return sources.some((s) => s === '*' || s.includes(SITE_HOST));
  }

  return true;
};

export const canEmbed = async (url?: string): Promise<boolean> => {
  if (!url) return false;

  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(6000),
      next: { revalidate: 60 * 60 * 24 },
    });
    return res.ok && allowsFraming(res.headers);
  } catch {
    return false;
  }
};
