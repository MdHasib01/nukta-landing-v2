import React from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'outline-light';
type Size = 'sm' | 'md' | 'lg';

const base =
  'group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 ease-out active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100';

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-button hover:bg-primary-deep focus-visible:ring-primary/25',
  secondary: 'bg-white text-ink border border-line shadow-card hover:border-ink/20 hover:bg-bg-warm focus-visible:ring-primary/15',
  outline: 'bg-transparent text-primary border border-primary/30 hover:bg-primary-soft hover:border-primary/50 focus-visible:ring-primary/15',
  ghost: 'text-ink hover:bg-ink/5 focus-visible:ring-ink/10',
  light: 'bg-white text-ink hover:bg-white/90 focus-visible:ring-white/30',
  'outline-light': 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/35 focus-visible:ring-white/20',
};

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-[15px]',
  lg: 'h-13 px-7 text-base',
};

export function buttonClasses({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => (
    <button ref={ref} type={type} className={buttonClasses({ variant, size, className })} {...props} />
  )
);

Button.displayName = 'Button';
