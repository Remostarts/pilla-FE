'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
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

const ResetMailForm = () => {
  const searchParams = useSearchParams();

  const dispatch = useAppDispatch();
  function updateSorting(fsin: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('fsin', fsin);
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  useEffect(() => {
    const search = searchParams.get('fsin');
    if (search === '3') {
      dispatch(setFormStep(3));
    }
    if (search === '0') {
      dispatch(setFormStep(0));
    }
  }, [searchParams, dispatch]);

  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    // updateSorting('4');
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
          description="this is a input description"
          label="email"
          prefix={<MailIcon />}
        />
        <RePassInput />
        <div className="grid place-items-center pt-10">
          <ReButton
            // isSubmitting={isSubmitting}
            type="submit"
            // disabled={fieldError}
            // className={cn('text-typo-50 bg-primary-400 ', {
            //   hidden: formStep !== 1,
            // })}
          >
            submit
          </ReButton>
        </div>{' '}
      </ReForm>
      <ReButton
        onClick={() => {
          updateSorting('0');
        }}
      >
        Back to login
      </ReButton>
    </>
  );
};

export default ResetMailForm;
