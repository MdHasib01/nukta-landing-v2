import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  bg?: 'white' | 'warm' | 'ivory' | 'sage' | 'primary' | 'charcoal';
  className?: string;
}

export function Section({ children, id, bg = 'white', className, ...props }: SectionProps) {
  const bgColors = {
    white: 'bg-white',
    warm: 'bg-bg-warm',
    ivory: 'bg-bg-ivory',
    sage: 'bg-sage',
    primary: 'bg-primary',
    charcoal: 'bg-charcoal',
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-14 md:py-24", // Standardized padding: Mobile 56px, Tablet 72px, Desktop 96px
        bgColors[bg],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
