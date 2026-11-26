import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  eyebrow?: string;
  centered?: boolean;
  tone?: 'default' | 'light';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function Eyebrow({ children, tone = 'default', className }: { children: React.ReactNode; tone?: 'default' | 'light'; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]',
        tone === 'light' ? 'text-accent' : 'text-primary',
        className
      )}
    >
      <span className={cn('h-px w-6', tone === 'light' ? 'bg-accent/60' : 'bg-primary/40')} aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  centered = false,
  tone = 'default',
  className,
  titleClassName,
  subtitleClassName,
  ...props
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16 max-w-3xl', centered && 'text-center mx-auto', className)} {...props}>
      {eyebrow && <Eyebrow tone={tone} className="mb-4">{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          'text-[32px] md:text-[44px] font-bold leading-[1.2] tracking-[-0.025em]',
          tone === 'light' ? 'text-white' : 'text-ink',
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg leading-relaxed',
            tone === 'light' ? 'text-white/70' : 'text-body',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
