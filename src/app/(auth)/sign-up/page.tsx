import SignupLanding from '@/components/view/auth/sign-up/SignupLanding';

export default function Page() {
  return (
    <div className="mx-auto mt-10 max-w-2xl px-6 sm:mt-14 md:px-10 lg:px-12">
      <h1 className="mb-8 font-spaceGrotesk text-2xl font-bold md:text-3xl">
        Create a new Pilla account
      </h1>

      <div className="rounded-lg sm:bg-[#f8f8f8] sm:p-12">
        <h1 className="mb-6 font-spaceGrotesk text-xl font-bold md:text-2xl">Select Account</h1>
        <SignupLanding />
      </div>
    </div>
  );
}
