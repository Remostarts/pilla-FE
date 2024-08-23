'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';

export type TInputs = z.infer<typeof userLoginSchema>;

const defaultValues = {
  email: '',
  password: '',
  isValid: false,
};
type DefaultValues = typeof defaultValues;

const SigninForm = () => {
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
        <ReInput
          name="email"
          type="email"
          label="email"
          placeholder="Email Address"
          // prefix={<MailIcon />}
        />
        <RePassInput />
        <div className="flex-between">
          <Link
            href="/personal-account/forget-pass?step=1"
            className="mb-10 flex justify-end font-inter text-sm text-gray-600"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="grid place-items-center pt-10">
          <ReButton
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            type="submit"
          >
            Log in
          </ReButton>
        </div>{' '}
      </ReForm>
    </>
  );
};

export default SigninForm;
