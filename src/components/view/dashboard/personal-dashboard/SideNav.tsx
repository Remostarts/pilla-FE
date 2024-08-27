'use client';

import { signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { personalSideNavMenu } from '@/constants/personal/shared';

export default function SideNav() {
  const pathName = usePathname();
  const currPage = pathName.split('/')[2];
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/sign-in');
  };

  return (
    <aside className="side-nav flex flex-col">
      <div className="grow overflow-y-auto px-6 py-12">
        <div className="mx-4 mb-12">
          {/* Logo */}
          <Image
            src="/assets/root/shared/logo-white.svg"
            alt="Company Logo"
            width={60}
            height={60}
          />
        </div>

        {/* Nav Links */}
        <nav>
          <ul>
            {personalSideNavMenu.map((nav) => (
              <li className="my-4" key={nav.id}>
                <Link
                  href={`/personal-dashboard/${nav.alt}`}
                  className={`flex items-center gap-4 rounded-md p-4 text-white hover:bg-primary-500 ${nav.alt === currPage && 'bg-primary-500'}`}
                >
                  <Image src={nav.img} alt={`${nav.alt}-icon`} width={24} height={24} />
                  <span className="font-inter font-light tracking-wider">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Log out Btn */}
      <div className="border-t border-gray-500 px-6 py-4">
        <button
          className="flex w-full items-center gap-4 rounded-md px-4 py-3 text-white hover:bg-primary-500"
          onClick={handleSignOut}
        >
          <Image
            src="/assets/personal-dashboard/side-nav/logout-icon.svg"
            alt="logout-icon"
            width={24}
            height={24}
          />
          <span className="font-inter text-lg font-light tracking-wide">Log out</span>
        </button>
      </div>
    </aside>
  );
}
