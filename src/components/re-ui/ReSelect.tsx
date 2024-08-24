import { useFormContext } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TReSelectProps {
  name: string;
  label?: string;
  description?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}

const ReSelect = ({ name, label, description, placeholder, options }: TReSelectProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="font-spaceGrotesk">
          <FormLabel className="text-base text-gray-800">{label}</FormLabel>
          <FormControl>
            <div className={`rounded border border-gray-300 bg-white`}>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full border-none">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="max-h-[40vh] overflow-y-auto bg-white">
                  {options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="cursor-pointer font-spaceGrotesk hover:bg-primary-100"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </FormControl>
          <FormDescription className="ml-1">{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default ReSelect;
