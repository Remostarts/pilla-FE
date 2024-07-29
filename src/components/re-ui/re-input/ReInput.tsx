import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type TReInputProps = {
  name: string;
  label?: string;
  description?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  control?: any;
};
const ReInput = ({
  name,
  label,
  description,
  prefix,
  suffix,

  type = 'text',
  autoComplete = 'off',
  placeholder,
}: TReInputProps) => {
  const { control } = useFormContext();
  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <div className="flex-center gap-2 rounded border border-gray-400 px-2 focus-visible:ring-2  focus-visible:ring-offset-2">
                <div className="text-sm">{prefix}</div>

                <Input
                  className="border-none px-0   focus-visible:ring-0  focus-visible:ring-offset-0"
                  placeholder={placeholder}
                  type={type}
                  autoComplete={autoComplete}
                  {...field}
                />
                {suffix}
              </div>
            </FormControl>
            <FormDescription>{description}</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ReInput;
