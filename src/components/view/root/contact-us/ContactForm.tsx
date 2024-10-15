'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';

import { ReButton } from '@/components/re-ui/ReButton';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { Form } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { createFeedback } from '@/lib/actions/root/contact.action';

// Define the validation schema
export const contactFormSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  emailAddress: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message should be more than 10 characters'),
});

type TInputs = z.infer<typeof contactFormSchema>;

const defaultValues = {
  fullName: '',
  emailAddress: '',
  message: '',
};

export default function ContactForm() {
  // rhf
  const form = useForm<TInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    try {
      const response = await createFeedback({
        name: data.fullName,
        email: data.emailAddress,
        message: data.message || '',
      });

      if (response.success) {
        toast.success('Your feedback has been submitted successfully.');
        form.reset();
      } else {
        toast.error(response.error || 'Failed to submit feedback');
        form.reset();
      }
    } catch (error) {
      form.reset();
      toast.error('Failed to submit feedback');
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-8 sm:p-16 md:w-1/2">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col-between min-h-[450px] space-y-3 overflow-x-hidden"
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
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-spaceGrotesk font-semibold text-gray-800"
            >
              Message *
            </label>
            <Textarea name="message" rows={4} />
          </div>

          {/* Submit Btn */}
          <div className="pt-10">
            <ReButton
              type="submit"
              isSubmitting={isSubmitting}
              className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            >
              Submit
            </ReButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
