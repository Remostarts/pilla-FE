import { Button } from '@/components/ui/button';
import Otp from '@/components/view/auth/shared/otp/Otp';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function VerifyPhone() {
  const handleVerifyEmail = useSearchParamsHandler();

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Verify Phone Number</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">We sent an OTP to +23407012345678</p>

      <Otp type="Phone" />
      <Button
        onClick={() => handleVerifyEmail('step', '4')}
        className={`mt-10 w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
      >
        Verify Phone
      </Button>
    </div>
  );
}
