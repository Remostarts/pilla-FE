import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva('font-spaceGrotesk font-semibold', {
  variants: {
    size: { base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' },
  },
  defaultVariants: {
    size: 'xl',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  heading: string;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size, heading, ...props }, ref) => {
    return (
      <h2 className={cn(headingVariants({ size, className }))} ref={ref} {...props}>
        {heading}
      </h2>
    );
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
