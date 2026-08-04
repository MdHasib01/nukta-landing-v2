'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';
import nuktaLogo from '@/assets/nukta-logo.jpg';

export function HeroIllustration({ className }: { className?: string }) {
  const [error, setError] = useState(false);
  const logoSrc = typeof nuktaLogo === 'string' ? nuktaLogo : (nuktaLogo as any)?.src || '/nukta-logo.jpg';

  return (
    <div className={cn("relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] mx-auto aspect-square rounded-full overflow-hidden flex items-center justify-center bg-white border-2 border-accent p-6 md:p-8", className)}>
      {!error ? (
        <img
          src={logoSrc}
          alt="Nukta Business Operations"
          className="w-full h-full object-contain rounded-full transition-transform duration-300 hover:scale-[1.03]"
          loading="eager"
          decoding="sync"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full bg-white border-2 border-accent flex flex-col items-center justify-center text-charcoal/40 rounded-full">
          <ImageIcon className="w-12 h-12 mb-4 opacity-50 text-charcoal/20" />
          <span className="font-medium tracking-widest text-xs text-gray-500 uppercase text-center">NUKTA Hero Illustration</span>
        </div>
      )}
    </div>
  );
}
