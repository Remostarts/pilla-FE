import ReOtp from '@/components/re-ui/ReOtp';
import { Button } from '@/components/ui/button';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function VerifyEmail() {
  const handleVerifyEmail = useSearchParamsHandler();

  const handleOtpChange = (otp: string) => {
    console.log('Current OTP:', otp);
    // Push this Otp to a state variable when the OTP changes
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Verify Email Address</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">We sent an OTP to Email Address</p>

      <ReOtp count={6} onChange={handleOtpChange} className="gap-2 sm:gap-8" />
      <Button
        onClick={() => handleVerifyEmail('step', '3')}
        className={`mt-10 w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
      >
        Verify email
      </Button>
      <p className="mt-8 text-center font-inter text-xs text-gray-600">
        If you don&apos;t see our email in your inbox, please check you spam folder
      </p>
    </div>
  );
}
