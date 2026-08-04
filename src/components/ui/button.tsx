'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-deep shadow-button focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-sage focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-sage focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'text-charcoal hover:bg-black/5 focus-visible:ring-4 focus-visible:ring-black/5 focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
    };
    
    const sizes = {
      sm: 'px-5 py-2.5 text-sm font-semibold min-h-[40px]',
      md: 'px-6 py-3 text-base font-bold min-h-[48px]',
      lg: 'px-8 py-4 text-lg font-bold min-h-[56px]',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-[12px] transition-all duration-300 ease-in-out font-bengali active:scale-[0.98]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
