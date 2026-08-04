'use client';

import { useState } from 'react';
import { assets } from '@/config/assets';
import { business } from '@/config/business';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("flex items-center h-full", className)}>
      {!error ? (
        <img
          src={assets.logo}
          alt={`${business.businessName} Logo`}
          className="h-full w-auto object-contain rounded-xl"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-serif font-bold text-2xl md:text-3xl tracking-wide text-primary-deep">
          {business.businessName.toUpperCase()}
        </span>
      )}
    </div>
  );
}
