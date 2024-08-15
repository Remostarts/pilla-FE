import Image from 'next/image';

import { Heading } from '../shared/Heading';

export default function Header() {
  return (
    <header className="flex h-[4.6rem] items-center justify-between border-b border-gray-200 px-10">
      <Heading heading="Home" />
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
