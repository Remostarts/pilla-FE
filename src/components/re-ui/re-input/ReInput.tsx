import { ReactNode, useState } from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base text-gray-800">{label}</FormLabel>
            <FormControl>
              <div
                className={`flex-center gap-2 rounded border ${
                  isFocused ? 'border-primary-400' : 'border-gray-300'
                }`}
              >
                <div className="text-sm">{prefix}</div>
                <Input
                  className="rounded border-none px-3"
                  placeholder={placeholder}
                  type={type}
                  autoComplete={autoComplete}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    setIsFocused(false);
                    field.onBlur();
                  }}
                  onChange={field.onChange}
                  value={field.value}
                  name={field.name}
                  ref={field.ref}
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
