'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { usePathname } from 'next/navigation';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';
import { personalSignUpSchema } from '@/lib/validations/userAuth.validations';
import { toast } from '@/components/ui/use-toast';
import { useOtp } from '@/context/OtpProvider';

type TInputs = z.infer<typeof personalSignUpSchema>;

const defaultValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  referralCode: '',
};
type DefaultValues = typeof defaultValues;

export default function FillDetails() {
  const handleProceed = useSearchParamsHandler();
  const pathname = usePathname().split('/')[2];

  const { setEmail } = useOtp();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    try {
      setEmail(data.email);
      const response = await fetch(
        `https://pilla-be-two.vercel.app/api/v1/auth/create-partial-user`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: data.email,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber,
          }),
        }
      );

      if (response.ok) {
        handleProceed('step', '2');
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign up failed');
      }
    } catch (error) {
      console.error('Sign up error:', error);
      toast({
        title: 'Sign up failed',
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
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

      <ReForm<DefaultValues>
        submitHandler={onSubmit}
        resolver={zodResolver(personalSignUpSchema)}
        defaultValues={defaultValues}
        mode="onChange"
      >
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            First Name *
          </label>
          <ReInput name="firstName" />
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
          <label htmlFor="email" className="mb-2 block font-spaceGrotesk font-medium text-gray-700">
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
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
          >
            Proceed
          </ReButton>
        </div>
      </ReForm>
    </div>
  );
}
