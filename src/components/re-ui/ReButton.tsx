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
  const defaultClassName = cn('bg-green-500 text-black', {
    'bg-sky-700 text-white': children === 'Edit',
    'bg-red-500 text-white': children === 'Delete',
  });
  return (
    <Button type={type} className={className || defaultClassName} {...props}>
      {isSubmitting ? `${children} loading..` : children}
    </Button>
  );
}
