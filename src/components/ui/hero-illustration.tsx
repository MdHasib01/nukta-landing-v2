import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

export function HeroIllustration({ className }: { className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("relative w-full aspect-square md:aspect-auto md:h-[500px] rounded-[32px] overflow-hidden", className)}>
      {!error ? (
        <img
          src="/assets/hero/nukta-hero-illustration.webp"
          alt="Nukta Business Operations Illustration"
          className="w-full h-full object-contain"
          loading="eager"
          decoding="sync"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-full h-full bg-white border border-sage/40 flex flex-col items-center justify-center text-charcoal/40 rounded-[32px] shadow-card">
          <ImageIcon className="w-12 h-12 mb-4 opacity-50 text-charcoal/20" />
          <span className="font-medium tracking-widest text-sm text-gray-500 uppercase">NUKTA Hero Illustration</span>
        </div>
      )}
    </div>
  );
}
