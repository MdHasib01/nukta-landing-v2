'use client';

import { useState } from 'react';
import { assets } from '@/config/assets';
import { business } from '@/config/business';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  tone?: 'default' | 'light';
}

/**
 * Brand lockup: the centered emblem (nukta-logo-mark.png) in a square box, plus a live-text wordmark beside it.
 */
export function Logo({ className, tone = 'default' }: LogoProps) {
  const [error, setError] = useState(false);

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      {!error && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-1 ring-line">
          <img
            src={assets.logoMark}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain"
            onError={() => setError(true)}
          />
        </span>
      )}
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[19px] font-extrabold tracking-[0.08em]',
            tone === 'light' ? 'text-white' : 'text-ink'
          )}
        >
          {business.businessName.toUpperCase()}
        </span>
        <span
          className={cn(
            'mt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em]',
            tone === 'light' ? 'text-white/50' : 'text-muted-text'
          )}
        >
          Technologies
        </span>
      </span>
    </span>
  );
}
