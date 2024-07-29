'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import SocialLogin from '../SocialLogin';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import { ReCheckBox } from '@/components/re-ui/re-checkbox/ReCheckBox';
import ReInput from '@/components/re-ui/re-input/ReInput';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import useToggle from '@/hooks/useToggle';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';
import { setFormStep } from '@/redux/features/auth/signinStepSlices';
import { useAppDispatch } from '@/redux/hooks';

export type TInputs = z.infer<typeof userLoginSchema>;

const defaultValues = {
  email: '',
  password: '',
  isValid: false,
};
type DefaultValues = typeof defaultValues;

const Step1 = () => {
  const dispatch = useAppDispatch();
  const [isChecked, toggleIsChecked] = useToggle();
  const [isTermChecked, toggleIsTermChecked] = useToggle();

  const handleForgetPass = () => {
    dispatch(setFormStep(1));
  };

  const onSubmit: SubmitHandler<TInputs> = async (data) => {};
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
          description="this is a input description"
          label="email"
          prefix={<MailIcon />}
        />
        <RePassInput />
        <div className="flex-between">
          <div className="">
            <ReCheckBox
              id="remember-check"
              handleCheckboxChange={toggleIsChecked}
              isChecked={isChecked}
              label="remember me"
            />

            <ReCheckBox
              id="terms-check"
              handleCheckboxChange={toggleIsTermChecked}
              isChecked={isTermChecked}
              label="agree terms and policy"
            />
          </div>

          <ReButton
            onClick={handleForgetPass}
            className="cursor-pointer bg-transparent text-sm text-gray-700"
          >
            Forgot password?
          </ReButton>
        </div>
        <div className="grid place-items-center pt-10">
          <ReButton type="submit">submit</ReButton>
        </div>{' '}
      </ReForm>
      <div className="grid place-items-center">
        <Link href={'/sign-up'} className="cursor-pointer text-sm text-gray-700">
          Don&#39;t have an account? <span className="underline ">Sign up</span>
        </Link>
      </div>
      <div className="py-5 text-center">or continue with</div>
      <SocialLogin />
    </>
  );
};

export default Step1;
