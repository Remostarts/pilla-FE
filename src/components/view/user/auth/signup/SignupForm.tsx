'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { OtpStep } from './OtpStep';
import { defaultValues, stepOneFields, steps } from './SignupConstants';
import UserInfoStep from './UserInfoStep';

import { ReButton } from '@/components/re-ui/ReButton';
import { ReGlider } from '@/components/re-ui/ReGlider';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { ReStepper } from '@/components/re-ui/re-stepper/ReStepper';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { TUserRegisterInput, userRegisterSchema } from '@/lib/validations/userAuth.validations';
import { setTimerOn } from '@/redux/features/optVerify/otpTimerSlice';
import {
  completedStepsState,
  decrementCompletedSteps,
  incrementCompletedSteps,
} from '@/redux/features/shared/StepperSlices';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const SignupForm = () => {
  // navigation
  const searchParams = useSearchParams();
  const search = searchParams.get('fs');
  const router = useRouter();
  // redux
  const dispatch = useAppDispatch();
  const completedSteps = useAppSelector(completedStepsState);
  // local state
  const [passwordError, setPasswordError] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [fieldError, setFieldError] = useState(false);

  function updateUrl() {
    const params = new URLSearchParams(searchParams.toString());
    params.set('fs', (formStep + 1).toString());
    window.history.pushState(null, '', `?${params.toString()}`);
  }

  // react-hook-form
  const form = useForm<TUserRegisterInput>({
    resolver: zodResolver(userRegisterSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { getFieldState, handleSubmit, watch, formState } = form;
  const { isSubmitting } = formState;

  // useEffects
  useEffect(() => {
    const passwordState = getFieldState('password');
    const confirmPasswordState = getFieldState('confirmPassword');
    if (formStep === 0) {
      const isStep0Invalid = stepOneFields.some((name) => {
        const fieldState = getFieldState(name as keyof typeof defaultValues);
        return !fieldState.isDirty || fieldState.invalid;
      });

      setFieldError(isStep0Invalid);
    }
    if (formStep === 1) {
      setFieldError(!confirmPasswordState.isDirty || confirmPasswordState.invalid || passwordError);
    }
    setPasswordError(passwordState.isDirty && passwordState.invalid);
    if (search === '2') {
      setFormStep(parseInt(search));
    }
  }, [getFieldState, formStep, passwordError, search, formState]);

  // local constants
  const components = [
    {
      component: <UserInfoStep />,
    },
    {
      component: (
        <>
          <RePassInput />
          {/* <RePassInput isValidationDrop /> */}
          <RePassInput
            name="confirmPassword"
            disabled={watch('password') === '' || passwordError}
          />
        </>
      ),
    },
    {
      component: <OtpStep />,
    },
  ];

  // handlers
  const nextHandler = () => {
    setFormStep((prev) => prev + 1);
    dispatch(incrementCompletedSteps());
    updateUrl();
  };
  const previousHandler = () => {
    setFormStep((prev) => prev - 1);
    dispatch(decrementCompletedSteps());
  };

  // submit handler
  const onSubmit: SubmitHandler<TUserRegisterInput> = async (data) => {
    if (data) {
      setFormStep((prev) => prev + 1);
      updateUrl();
      dispatch(incrementCompletedSteps());
      dispatch(setTimerOn(true));
    }
    console.log(data);
  };

  return (
    <div className="p-2">
      <ReStepper currentStep={formStep} setFormStep={setFormStep} steps={steps} />
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col-between min-h-[450px]  space-y-3 overflow-x-hidden"
        >
          {components.map((each, index) => (
            <ReGlider key={index} index={index} formStep={formStep}>
              {each.component}
            </ReGlider>
          ))}

          <div
            className={cn({
              'grid place-items-end': formStep === 0,
            })}
          >
            <ReButton
              disabled={fieldError}
              className={cn('disabled', {
                hidden: formStep !== 0,
              })}
              onClick={nextHandler}
            >
              Next
              <ArrowRight className="ml-2 size-4" />
            </ReButton>
          </div>
          <div className={'flex justify-between '}>
            <ReButton
              className={cn('text-typo-50 bg-primary-400 ', {
                hidden: formStep !== 1,
              })}
              onClick={previousHandler}
            >
              Previous
            </ReButton>
            <ReButton
              isSubmitting={isSubmitting}
              type="submit"
              disabled={fieldError}
              className={cn('text-typo-50 bg-primary-400 ', {
                hidden: formStep !== 1,
              })}
            >
              submit
            </ReButton>
          </div>
        </form>
        <div className="grid place-items-center">
          <ReButton
            onClick={() => router.push('/sign-in')}
            disabled={completedSteps !== 3}
            className={cn('disabled', {
              hidden: formStep !== 2,
            })}
          >
            login
          </ReButton>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
