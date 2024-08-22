import Image from 'next/image';

import { Heading } from '../shared/Heading';

export default function Header({ currentPage }: { currentPage: string }) {
  return (
    <header className="flex h-[4.6rem] items-center justify-between border-b border-gray-200 px-10">
      {/* currentPage prop for changing the heading in the header component dynamically */}
      <Heading heading={currentPage} />
      <div className="flex items-center gap-4 font-spaceGrotesk text-xl font-medium">
        {/* Welcome msg */}
        <span>Hi Alex 👋</span>

        {/* Vertical Line Icon */}
        <Image
          src="/assets/personal-dashboard/shared/vertical-line.svg"
          width={2}
          height={2}
          alt="vertical-line"
        />

        {/* Notification Btn */}
        <button>
          <Image
            src="/assets/personal-dashboard/shared/notification-icon.svg"
            width={35}
            height={35}
            alt="notification-icon"
          />
        </button>
      </div>
    </header>
  );
}
