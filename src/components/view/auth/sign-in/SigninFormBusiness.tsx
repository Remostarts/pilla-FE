'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { Heading } from '../../dashboard/shared/Heading';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';
import { Input } from '@/components/ui/input';

export type TInputs = z.infer<typeof userLoginSchema>;

const defaultValues = {
  email: '',
  password: '',
  isValid: false,
};
type DefaultValues = typeof defaultValues;

export const SigninFormBusiness = () => {
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log(data);
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
            <Input name="email" className="mt-2 border-gray-300 py-5" />
          </div>
          <div>
            <Heading heading="Password" size="lg" />
            <RePassInput name="signinPass" />
          </div>
        </div>
        <div className="flex-between">
          <Link
            href="/business-account/forget-pass?step=1"
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
