'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Heading } from '../dashboard/shared/Heading';

export default function Header() {
  const pathname = usePathname();

  // Function to format the pathname into a heading
  const formatPathname = (path: string) => {
    const parts = path.slice(1).split('/');
    let heading = parts[parts.length - 1] || 'Home';
    heading = heading
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return heading;
  };

  const currentPage = formatPathname(pathname);

  return (
    <header className="flex h-[4.6rem] items-center justify-between border-b border-gray-200 px-10">
      <Heading heading={currentPage} />
      <div className="flex items-center gap-4 font-spaceGrotesk text-xl font-medium">
        {/* Notification Btn */}
        <button>
          <Image
            src="/assets/business-dashboard/notification-icon.svg"
            width={35}
            height={35}
            alt="notification-icon"
          />
        </button>

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
            src="/assets/business-dashboard/profile-menu-icon.svg"
            width={35}
            height={35}
            alt="notification-icon"
          />
        </button>
      </div>
    </header>
  );
}
