import { z } from 'zod';
import { useState } from 'react';

import ReOtp from '@/components/re-ui/ReOtp';
import { Button } from '@/components/ui/button';
import { useOtp } from '@/context/OtpProvider';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

// Zod schema to validate OTP
const otpSchema = z
  .string()
  .length(6, { message: 'OTP must be exactly 6 digits.' })
  .refine((value) => /^\d+$/.test(value), { message: 'OTP should only contain numbers.' });

export default function VerifyEmail() {
  const handleVerifyEmail = useSearchParamsHandler();
  const { setOtp } = useOtp();
  const [error, setError] = useState<string | null>(null);

  const handleOtpChange = (otp: string) => {
    setOtp(otp);

    // Validate OTP using Zod
    const result = otpSchema.safeParse(otp);
    if (!result.success) {
      setError(result.error.issues[0].message);
    } else {
      setError(null);
      handleVerifyEmail('step', '2');
    }
  };

  const handleButtonClick = () => {
    if (!error) {
      handleVerifyEmail('step', '3');
    }
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Verify Email Address</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">We sent an OTP to Email Address</p>
      <ReOtp count={6} onChange={handleOtpChange} className="gap-2 sm:gap-8" name="emailOtp" />
      {error && <p className="mt-4 font-spaceGrotesk text-red-500">{error}</p>}{' '}
      {/* Error message */}
      <Button
        onClick={handleButtonClick}
        className={`mt-10 w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
      >
        Verify email
      </Button>
      <p className="mt-8 text-center font-inter text-xs text-gray-600">
        If you don&apos;t see our email in your inbox, please check your spam folder
      </p>
    </div>
  );
}
