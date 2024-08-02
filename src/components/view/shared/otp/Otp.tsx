'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Timer from '../../../re-ui/ReTimer';

import OtpBox from './OtpBox';

import { ReButton } from '@/components/re-ui/ReButton';
import { useToast } from '@/components/ui/use-toast';
import { counterState, setCounter } from '@/redux/features/optVerify/otpCounterSlice';
import { setTimerOn } from '@/redux/features/optVerify/otpTimerSlice';
import { completedStepsState, setCompletedSteps } from '@/redux/features/shared/StepperSlices';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const Otp = () => {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const completedSteps = useAppSelector(completedStepsState);

  const { toast } = useToast();

  const counter = useAppSelector(counterState);

  const [otp, setOtp] = useState(['', '', '', '']);
  const [verifyDisabled, setVerifyDisabled] = useState(true);

  const email = '';

  // useEffect to handle the url query
  useEffect(() => {
    const search = searchParams.get('fs');
    if (search === '2') {
      dispatch(setCompletedSteps(2));
    }
  }, [searchParams, dispatch]);
  // resend handler
  const handleResend = () => {
    setOtp(['', '', '', '']);

    dispatch(setTimerOn(true));
    dispatch(setCounter(60));
  };

  // verify email handler
  const handleVerifyEmail = () => {
    dispatch(setCompletedSteps(3));
    setOtp(['', '', '', '']);
    if (!email) {
      toast({
        title: 'Passwords do not match',
        variant: 'destructive',
      });
      return;
    }
    const bodyData = { email, otp: otp.join('') };
    console.log(bodyData);
  };

  return (
    <div>
      <div className="flex-center 400:p-4 my-4 justify-between gap-1 rounded-md border p-2  sm:p-5">
        <OtpBox otp={otp} setOtp={setOtp} setVerifyDisabled={setVerifyDisabled} />
      </div>
      <div className="flex justify-between">
        <p>Did not get the code?</p>
        <div>
          <ReButton
            className=" bg-transparent text-blue-500 disabled:text-black"
            disabled={counter !== 0}
            onClick={handleResend}
          >
            Resend
          </ReButton>
          <Timer initialTime={20} />
        </div>
      </div>
      <div className="grid place-items-center">
        {completedSteps !== 3 ? (
          <ReButton
            className="mt-10  rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
            disabled={verifyDisabled}
            onClick={handleVerifyEmail}
          >
            Verify Email
          </ReButton>
        ) : (
          <p className="mt-10 text-green-500">congratulations! Email Verified. Try Login</p>
        )}
      </div>
    </div>
  );
};

export default Otp;
