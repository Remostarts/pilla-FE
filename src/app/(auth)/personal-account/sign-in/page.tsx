'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="mb-6 items-center justify-between lg:flex">
        <h2 className=" font-spaceGrotesk text-2xl font-bold lg:text-3xl">Personal Account</h2>

        <button
          className="font-inter text-sm text-primary-600 underline xl:text-base"
          onClick={() => router.push('/business-account/sign-in')}
        >
          Switch to Business account
        </button>
      </div>

      <div className="rounded-xl border px-8 py-12">
        <h2 className="mb-6 font-spaceGrotesk text-xl font-bold lg:text-2xl">Sign in</h2>
        <form>
          <div className="mb-6">
            <Input
              name="email"
              type="text"
              placeholder="Email Address"
              className="px-4 py-7 font-inter"
            />
          </div>
          <div className="mb-6">
            <Input
              name="password"
              type="text"
              placeholder="Password"
              className="px-4 py-7 font-inter"
            />
          </div>
          <Link
            href="/personal-account/forget-pass?step=1"
            className="mb-10 flex justify-end font-inter text-sm text-gray-600"
          >
            Forgot your password?
          </Link>
          <Button
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
          >
            Log in
          </Button>
        </form>
      </div>
      <p className="mt-4 text-center font-inter">
        Don&apos;t have an account?
        <Link href="/sign-up" className="ml-1 font-bold text-gray-800">
          Sign up
        </Link>
      </p>
    </>
  );
}
