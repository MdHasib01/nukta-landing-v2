import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div 
      className={cn(
        "container mx-auto px-4 md:px-5 lg:px-6 max-w-[1200px] w-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
