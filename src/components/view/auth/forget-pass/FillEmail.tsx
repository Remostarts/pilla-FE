import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function FillEmail() {
  const handleSendCode = useSearchParamsHandler();

  return (
    <>
      <div className="mb-6">
        <h2 className="mb-1 font-spaceGrotesk text-2xl font-bold lg:text-3xl">Forgot Password</h2>

        <p className="font-inter text-gray-600">
          Simply enter your email below, and we&apos;ll send a verification code to the phone number
          linked to your account.
        </p>
      </div>

      <div className="rounded-xl border px-8 py-12">
        <h2 className="mb-4 font-spaceGrotesk text-xl font-bold lg:text-2xl">Email Address</h2>
        <form>
          <div className="mb-8">
            <Input
              name="email"
              type="text"
              placeholder="Email Address"
              className="px-4 py-7 font-inter"
            />
          </div>
          <Button
            type="button"
            onClick={() => handleSendCode('step', '2')}
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
          >
            Send Code
          </Button>
        </form>
      </div>
    </>
  );
}
