'use client';

import { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

const CopyEmail = ({ email }: { email: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className='flex flex-wrap items-center gap-3'>
      <a
        href={`mailto:${email}`}
        className='decoration-line-strong hover:decoration-accent-ink text-2xl font-medium tracking-tight underline underline-offset-[6px] transition-colors sm:text-3xl'
      >
        {email}
      </a>
      <button
        type='button'
        onClick={copy}
        aria-label='Copy email address'
        className='border-line text-muted hover:text-fg inline-flex h-8 items-center gap-1.5 rounded-full border px-3 font-mono text-xs transition-colors'
      >
        {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
        <span aria-live='polite'>{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </div>
  );
};

export default CopyEmail;
