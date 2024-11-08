'use client';

import type { ComponentProps, ReactNode } from 'react';

import { Button } from '../ui/button';

import { cn } from '@/lib/utils';

type TButton = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isSubmitting?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
} & ComponentProps<typeof Button>;

export function ReButton({
  isSubmitting = false,
  type = 'button',
  className,
  children,
  ...props
}: TButton) {
  const defaultClassName = cn(
    'bg-primary-500 hover:bg-primary-600 text-white font-spaceGrotesk w-full text-base',
    {
      'bg-sky-700 text-white': children === 'Edit',
      'bg-red-500 text-white': children === 'Delete',
    }
  );
  return (
    <Button type={type} className={className || defaultClassName} {...props}>
      {isSubmitting ? `Loading...` : children}
    </Button>
  );
}
