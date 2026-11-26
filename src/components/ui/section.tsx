import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  bg?: 'white' | 'warm' | 'ivory' | 'sage' | 'primary' | 'charcoal' | 'ink';
  className?: string;
}

export function Section({ children, id, bg = 'white', className, ...props }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    warm: 'bg-bg-warm',
    ivory: 'bg-bg-ivory',
    sage: 'bg-sage',
    primary: 'bg-primary text-white',
    charcoal: 'bg-charcoal text-white',
    ink: 'bg-ink text-white/80',
  };

  return (
    <section
      id={id}
      className={cn('relative py-20 md:py-28', bgColors[bg], className)}
      {...props}
    >
      {children}
    </section>
  );
}
