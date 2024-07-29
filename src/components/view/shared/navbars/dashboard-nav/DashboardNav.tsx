'use client';

import Image from 'next/image';

import ReTheme from '@/components/re-ui/ReTheme';

const DashboardNav = () => {
  return (
    <nav className=" sticky inset-x-0 top-0 z-30 hidden w-full flex-col border-b border-gray-200 bg-white transition-all md:flex">
      <div className="flex-between lg:justify-end ">
        <Image
          className="lg:hidden"
          src={'/assets/images/logo-transparent.png'}
          width="100"
          height="10"
          alt=""
        />

        <div className="  gap-5 px-2 py-6 lg:flex">
          <ReTheme />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
