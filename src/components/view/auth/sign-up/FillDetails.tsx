'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReButton } from '@/components/re-ui/ReButton';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { useOtp } from '@/context/OtpProvider';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';
import { partialSignup } from '@/lib/actions/auth/signup.actions';
import { personalSignUpSchema, TPersonalSignup } from '@/lib/validations/userAuth.validations';

const defaultValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  referralCode: '',
};

export default function FillDetails() {
  const handleProceed = useSearchParamsHandler();
  const pathname = usePathname().split('/')[2];

  const { setEmail } = useOtp();

  // rhf
  const form = useForm<TPersonalSignup>({
    resolver: zodResolver(personalSignUpSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<TPersonalSignup> = async (data) => {
    setEmail(data.email);

    try {
      const response = await partialSignup(data);
      if (response?.success) {
        handleProceed('step', '2');
        toast({
          title: 'Success',
          description: 'signup created successfully!',
        });
      } else {
        toast({
          title: 'Error',
          description: response.error,
          variant: 'destructive',
        });
      }
      // router.refresh();
    } catch (e: any) {
      // Show toast
      toast({
        title: 'Error',
        description: e.message,
        variant: 'destructive',
      });
      console.log('Error while creating collection', e);
    }
  };
  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">
        {pathname === 'business' ? 'Business Information' : 'Personal Information'}
      </h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Provide your personal information as it appears on your bank verification documents.
      </p>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col-between min-h-[450px]  space-y-3 overflow-x-hidden"
        >
          <div className="mb-4">
            <ReInput name="firstName" label="First Name *" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="middleName"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Middle Name
            </label>
            <ReInput name="middleName" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Last Name *
            </label>
            <ReInput name="lastName" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Email Address *
            </label>
            <ReInput name="email" />
          </div>

          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <ReInput name="phoneNumber" />
          </div>

          <div className="mb-8">
            <label
              htmlFor="referralCode"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Referral Code (optional)
            </label>
            <ReInput name="referralCode" />
          </div>

          <div className="font-inter text-sm text-gray-600">
            By continuing, you are agreeing to our terms of service, privacy policy and e-sign.
          </div>

          <div className="pt-10">
            <ReButton
              type="submit"
              isSubmitting={isSubmitting}
              className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            >
              Proceed
            </ReButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
