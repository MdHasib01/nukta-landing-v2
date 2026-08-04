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
    <div className={cn("flex items-center", className)}>
      {!error ? (
        <img
          src={assets.logo}
          alt={`${business.businessName} Logo`}
          className="max-h-full max-w-full object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <span className="font-serif font-bold text-xl tracking-wide text-primary-deep">
          {business.businessName.toUpperCase()}
        </span>
      )}
    </div>
  );
}
