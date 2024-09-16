import * as React from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  description?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, name, label, description, ...props }, ref) => {
    const { control } = useFormContext();

    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="font-spaceGrotesk">
            {label && <FormLabel className="font-spaceGrotesk">{label}</FormLabel>}
            <FormControl>
              <textarea
                className={cn(
                  'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-spaceGrotesk',
                  className
                )}
                {...field}
                {...props}
                ref={(e) => {
                  field.ref(e);
                  if (ref) {
                    if (typeof ref === 'function') {
                      ref(e);
                    } else {
                      ref.current = e;
                    }
                  }
                }}
              />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage className="text-base font-normal text-primary-800" />
          </FormItem>
        )}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };
