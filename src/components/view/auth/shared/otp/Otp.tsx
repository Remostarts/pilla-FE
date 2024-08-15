'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import Timer from '../../../../re-ui/ReTimer';

import OtpBox from './OtpBox';

import { useToast } from '@/components/ui/use-toast';
import { counterState, setCounter } from '@/redux/features/otpVerify/otpCounterSlice';
import { setTimerOn } from '@/redux/features/otpVerify/otpTimerSlice';
import { completedStepsState, setCompletedSteps } from '@/redux/features/shared/StepperSlices';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

interface OtpProps {
  type: string;
}

export default function Otp({ type }: OtpProps) {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const completedSteps = useAppSelector(completedStepsState);

  const { toast } = useToast();

  const counter = useAppSelector(counterState);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
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
    setOtp(['', '', '', '', '', '']);

    dispatch(setTimerOn(true));
    dispatch(setCounter(60));
  };

  // verify email handler
  const handleVerifyEmail = () => {
    dispatch(setCompletedSteps(3));
    setOtp(['', '', '', '', '', '']);
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
      <OtpBox otp={otp} setOtp={setOtp} setVerifyDisabled={setVerifyDisabled} />
    </div>
  );
}
