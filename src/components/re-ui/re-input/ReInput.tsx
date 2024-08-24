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
            <FormLabel className="font-spaceGrotesk">{label}</FormLabel>
            <FormControl>
              <div className="flex-center rounded border border-gray-300 pl-1 pr-2">
                <Input
                  className="border-none font-spaceGrotesk"
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
