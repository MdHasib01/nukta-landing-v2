import { cn } from '@/lib/utils';
import React from 'react';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  centered = false, 
  className,
  titleClassName,
  subtitleClassName,
  ...props 
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center", className)} {...props}>
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-deep leading-tight mb-4", titleClassName)}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("text-base md:text-lg text-gray-600 font-bengali max-w-3xl leading-relaxed", centered && "mx-auto", subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
