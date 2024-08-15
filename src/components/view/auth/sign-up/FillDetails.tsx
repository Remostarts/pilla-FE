import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';

export default function FillDetails() {
  const handleProceed = useSearchParamsHandler();

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Personal Information</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Provide your personal information as it appears on your bank verification documents.
      </p>

      <form>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            First Name
          </label>
          <Input name="firstName" type="text" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="middleName"
            className=" mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Middle Name
          </label>
          <Input name="middleName" type="text" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input name="lastName" type="text" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-spaceGrotesk font-medium text-gray-700">
            Email Address
          </label>
          <Input name="email" type="text" />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className=" mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Phone Number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <Input name="phone" type="text" />
          </div>
        </div>

        <div className="mb-8">
          <label
            htmlFor="referralCode"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Referral Code (optional)
          </label>
          <Input name="referralCode" type="text" />
        </div>

        <div className="mb-10 font-inter text-sm text-gray-600">
          By continuing, you are agreeing to out terms of service, privacy policy and e-sign.
        </div>

        <Button
          onClick={() => handleProceed('step', '2')}
          type="button"
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Proceed
        </Button>
      </form>
    </div>
  );
}
