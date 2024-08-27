import Link from 'next/link';

import { SigninFormPersonal } from './SigninFormPersonal';

export const SigninPersonal = () => {
  return (
    <>
      <div className="mb-6 items-center justify-between lg:flex">
        <h2 className=" font-spaceGrotesk text-2xl font-bold lg:text-3xl">Personal Account</h2>

        <Link
          href="/sign-in/business"
          className="font-inter text-sm text-primary-600 underline xl:text-base"
        >
          Switch to Business account
        </Link>
      </div>
      <div className="rounded-xl border px-8 py-12">
        <h2 className="mb-6 font-spaceGrotesk text-xl font-bold lg:text-2xl">Sign in</h2>
        <SigninFormPersonal />
      </div>

      <p className="mt-4 text-center font-inter">
        Don&apos;t have an account?
        <Link href="/sign-up" className="ml-1 font-bold text-gray-800">
          Sign up
        </Link>
      </p>
    </>
  );
};