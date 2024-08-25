'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { Textarea } from '@/components/ui/textarea';

// Define the validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  emailAddress: z.string().email('Invalid email address'),
  message: z.string().optional(),
});

type TInputs = z.infer<typeof contactFormSchema>;

const defaultValues = {
  fullName: '',
  emailAddress: '',
  message: '',
};
type DefaultValues = typeof defaultValues;

export default function ContactForm() {
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-8 sm:p-16 md:w-1/2">
      <ReForm<DefaultValues>
        submitHandler={onSubmit}
        resolver={zodResolver(contactFormSchema)}
        defaultValues={defaultValues}
        mode="onChange"
      >
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Full Name *
          </label>
          <ReInput name="fullName" />
        </div>
        <div className="mb-4">
          <label
            htmlFor="emailAddress"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Email Address *
          </label>
          <ReInput name="emailAddress" />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
          >
            Message
          </label>
          <Textarea name="message" rows={4} />
        </div>

        {/* Submit Btn */}
        <div className="pt-10">
          <ReButton
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            type="submit"
          >
            Submit
          </ReButton>
        </div>
      </ReForm>
    </div>
  );
}
