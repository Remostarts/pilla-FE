'use client';

import { useFormContext } from 'react-hook-form';

import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';

type TReSwitchProps = {
  name: string;
  label?: string;
  description?: string;
  className?: string;
};

export function ReSwitch({ name, label, description, className }: TReSwitchProps) {
  const { control } = useFormContext();
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem
            className={`flex flex-row items-center justify-between rounded-lg border p-4 font-spaceGrotesk ${className}`}
          >
            <div className="space-y-0.5">
              <FormLabel className="font-spaceGrotesk">{label}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
