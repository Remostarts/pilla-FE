'use client';

import {
  ChangeEvent,
  ClipboardEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useEffect,
  useRef,
} from 'react';

import { timerState } from '@/redux/features/optVerify/otpTimerSlice';
import { useAppSelector } from '@/redux/hooks';

type TOtpBoxProps = {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
  setVerifyDisabled: (disabled: boolean) => void;
};

const OtpBox = ({ otp, setOtp, setVerifyDisabled }: TOtpBoxProps) => {
  const timerOn = useAppSelector(timerState);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  // useEffect to handle the focus on the first input
  useEffect(() => {
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 500);
  }, [timerOn]);

  // useEffect to handle the verify button disable toggle
  useEffect(() => {
    const isFilled = otp.every((digit) => /\d/.test(digit));
    setVerifyDisabled(!isFilled);
  }, [otp, setVerifyDisabled]);
  // useEffect to handle the url query

  // input change handler
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;

    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      updatedOtp[index] = value;
      return updatedOtp;
    });

    if (value !== '') {
      if (index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }

    const isFilled = otp.every((digit) => /\d/.test(digit));
    setVerifyDisabled(!isFilled);
  };
  // paste handler
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text/plain');
    const numbersOnly = pastedData.replace(/\D/g, '').slice(0, 4);

    setOtp((prevOtp) => {
      const updatedOtp = [...prevOtp];
      for (let i = 0; i < numbersOnly.length; i += 1) {
        updatedOtp[i] = numbersOnly[i];
      }

      if (numbersOnly.length < otp.length) {
        for (let i = numbersOnly.length; i < otp.length; i += 1) {
          updatedOtp[i] = '';
        }
      }

      if (numbersOnly.length === otp.length) {
        inputRefs.current[otp.length - 1]?.blur();
      }

      return updatedOtp;
    });
  };
  // keydown handler
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'Backspace') {
      setOtp((prevOtp) => {
        const updatedOtp = [...prevOtp];
        updatedOtp[index] = '';
        return updatedOtp;
      });

      inputRefs.current[index - 1]?.focus();
    }
  };
  // arrow key handler
  const handleArrowKey = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (event.key === 'ArrowRight' && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex w-full justify-between gap-2">
      {otp.map((value, index) => (
        <input
          key={index}
          ref={(ref) => {
            inputRefs.current[index] = ref!;
          }}
          type="text"
          className="size-8 rounded-lg border border-gray-300 text-center focus:border-blue-500 focus:outline-none sm:h-12 sm:w-16"
          value={value}
          maxLength={1}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => {
            handleKeyDown(e, index);
            handleArrowKey(e, index);
          }}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default OtpBox;
