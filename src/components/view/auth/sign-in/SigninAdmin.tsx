import Link from 'next/link';

import { SigninFormAdmin } from './SigninFormAdmin';

export const SigninAdmin = () => {
  return (
    <section>
      <div className="mb-6 items-center justify-between lg:flex">
        <h2 className=" font-spaceGrotesk text-2xl font-bold lg:text-3xl">Admin</h2>
      </div>
      <div className="rounded-xl border px-8 py-12">
        <h2 className="mb-6 font-spaceGrotesk text-xl font-bold lg:text-2xl">Sign in</h2>
        <SigninFormAdmin />
      </div>
    </section>
  );
};
