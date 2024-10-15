import Image from 'next/image';

import { TChildrenProps } from '@/types';

export default function Layout({ children }: TChildrenProps) {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <div className="relative md:w-[35%]">
        <Image
          src="/assets/auth/admin-signin-hero.png"
          alt="sign-in-hero"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-20 px-4 md:mx-auto md:w-1/2 md:pt-16 lg:px-8 xl:px-20">{children}</div>
    </div>
  );
}
