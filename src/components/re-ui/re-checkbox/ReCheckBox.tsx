'use client';

import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';

type TReCheckBox = {
  name: string;
  label?: string;
  description?: string;
};

export function ReCheckBox({ name, label, description }: TReCheckBox) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 ">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
}

// import { cn } from '@/lib/utils';
// import './Recheck.css';

// type TCheckBox = {
//   id: string;
//   handleCheckboxChange: () => void;
//   isChecked: boolean;
//   label: string;
// };

// export const ReCheckBox = ({ id, handleCheckboxChange, isChecked, label }: TCheckBox) => {
//   return (
//     <div>
//       <div className="checkbox-wrapper">
//         <input
//           type="checkbox"
//           onChange={handleCheckboxChange}
//           name={id}
//           id={id}
//           className="hidden"
//         />
//         <label htmlFor={id} className="terms-label flex cursor-pointer  ">
//           <svg
//             className={cn('checkbox-svg h-5 w-5', {})}
//             viewBox="0 0 200 200"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <mask id="path-1-inside-1_476_5-37" fill="white">
//               <rect width="200" height="200" rx="20" ry="20"></rect>
//             </mask>
//             <rect
//               width="200"
//               height="200"
//               rx="20"
//               ry="20"
//               className={cn('checkbox-box', {
//                 'checkbox-box-checked': isChecked,
//               })}
//               strokeWidth="50"
//               mask="url(#path-1-inside-1_476_5-37)"
//             ></rect>
//             <path
//               className="checkbox-tick stroke-current"
//               d="M52 111.018L76.9867 136L149 64"
//               strokeWidth="25"
//             ></path>
//           </svg>
//           <span className="label-text ml-2">{label}</span>
//         </label>
//       </div>
//     </div>
//   );
// };
