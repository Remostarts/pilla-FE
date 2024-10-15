import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="mx-auto mt-10 max-w-2xl px-6 sm:mt-12 md:px-8 lg:px-10">
      <div className="rounded-lg border px-6 py-2 sm:px-12">
        <div className="relative h-48 w-full">
          <Image
            src="/assets/auth/password-reset-done.png"
            alt="password-reset-logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="mb-6 flex flex-1 flex-col items-center justify-center">
          <h2 className="my-2 text-center font-spaceGrotesk text-2xl font-bold lg:text-3xl">
            Password Reset Successful
          </h2>
          <p className="mb-8 text-center font-inter text-gray-800">
            You have successfully reset your password, please continue by logging in.
          </p>
          <Link
            className="w-full rounded-full bg-primary-500 px-6 py-3 text-center font-inter font-semibold text-white sm:text-lg md:px-8 md:py-4"
            href="/business-account/sign-in"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
