'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { Heading } from '../../dashboard/shared/Heading';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { useToast } from '@/components/ui/use-toast';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';

export type TInputs = z.infer<typeof userLoginSchema>;

const defaultValues = {
  email: '',
  password: '',
  isValid: false,
};
type DefaultValues = typeof defaultValues;

export const SigninFormPersonal = () => {
  const router = useRouter();
  const { toast } = useToast();
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    const result = await signIn('pilla-backend', { ...data, redirect: false });

    if (result?.ok && !result.error) {
      toast({
        title: 'user login successful',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
      router.refresh();
      router.push('/');
    }
    if (result?.error) {
      toast({
        title: 'user login failed',
        description: 'Friday, February 10, 2023 at 5:57 PM',
      });
      // router.refresh();
      // router.push('/');
    }
    console.log('🌼 🔥🔥 constonSubmit:SubmitHandler<TInputs>= 🔥🔥 result🌼', result);
  };

  return (
    <>
      <ReForm<DefaultValues>
        submitHandler={onSubmit}
        resolver={zodResolver(userLoginSchema)}
        defaultValues={defaultValues}
        mode="onChange"
      >
        <div className="mt-3 space-y-4">
          <div>
            <Heading heading="Email" />
            <ReInput name="email" />
          </div>
          <div>
            <Heading heading="Password" size="lg" />
            <RePassInput name="password" />
          </div>
        </div>
        <div className="flex-between">
          <Link
            href="/forget-pass?step=1"
            className="mb-10 flex justify-end font-inter text-sm text-gray-600"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="grid place-items-center pt-2">
          <ReButton
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            type="submit"
          >
            Log in
          </ReButton>
        </div>
      </ReForm>
    </>
  );
};
