'use client';
import { usePathname, useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { passwordSchema } from '@/lib/validations/userAuth.validations';
import { toast } from '@/components/ui/use-toast';
import { useOtp } from '@/context/OtpProvider';

type TInputs = z.infer<typeof passwordSchema>;

const defaultValues = {
  password: '',
  confirmPassword: '',
};
type DefaultValues = typeof defaultValues;

export default function CreatePassword() {
  const router = useRouter();
  const pathname = usePathname().split('/')[2];

  const role = pathname;

  const { otp, email } = useOtp();

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    try {
      const response = await fetch(`https://pilla-be-two.vercel.app/api/v1/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password: data.password,
          confirmPassword: data.confirmPassword,
          emailVerificationCode: otp,
          role,
        }),
      });

      if (response.ok) {
        toast({
          title: 'Sign up Success',
        });
        router.push('/sign-in');
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
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Create Password</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Create strong and easy to remember password.
      </p>

      <ReForm<DefaultValues>
        submitHandler={onSubmit}
        resolver={zodResolver(passwordSchema)}
        defaultValues={defaultValues}
        mode="onChange"
      >
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Password
          </label>
          <RePassInput name="password" />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <RePassInput name="confirmPassword" />
        </div>

        <div className="mb-10 flex flex-col font-inter text-sm text-gray-600">
          <span>* Password must be at least 8 characters long.</span>
          <span>* Password must contain at least one upper case.</span>
          <span>* Password must contain at least one lower case.</span>
          <span>* Password must contain at least one number or special character.</span>
        </div>

        <ReButton
          type="submit"
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Submit
        </ReButton>
      </ReForm>
    </div>
  );
}
