'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sideNavData = [
  { id: 1, img: '/assets/personal-dashboard/side-nav/home-icon.svg', name: 'Home', alt: 'home' },
  {
    id: 2,
    img: '/assets/personal-dashboard/side-nav/pilla-savings-icon.svg',
    name: 'Pilla Savings',
    alt: 'pilla-savings',
  },
  {
    id: 3,
    img: '/assets/personal-dashboard/side-nav/pilla-invest-icon.svg',
    name: 'Pilla Invest',
    alt: 'pilla-invest',
  },
  {
    id: 4,
    img: '/assets/personal-dashboard/side-nav/pilla-rent-finance-icon.svg',
    name: 'Pilla Rent Finance',
    alt: 'pilla-rent-finance',
  },
  {
    id: 5,
    img: '/assets/personal-dashboard/side-nav/refer-and-earn-icon.svg',
    name: 'Refer & Earn',
    alt: 'refer-and-earn',
  },
  {
    id: 6,
    img: '/assets/personal-dashboard/side-nav/support-icon.svg',
    name: 'Support',
    alt: 'support',
  },
  {
    id: 7,
    img: '/assets/personal-dashboard/side-nav/settings-icon.svg',
    name: 'Settings',
    alt: 'settings',
  },
];

export default function SideNav({ onNavSelect }: { onNavSelect: (value: string) => void }) {
  const pathName = usePathname();
  const currPage = pathName.split('/')[2];

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
            {sideNavData.map((nav) => (
              <li className="my-4" key={nav.id}>
                <Link
                  href={`/personal-dashboard/${nav.alt}`}
                  className={`flex items-center gap-4 rounded-md p-4 text-white hover:bg-primary-500 ${nav.alt === currPage && 'bg-primary-500'}`}
                  onClick={() => onNavSelect(nav.name)}
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
        <button className="flex w-full items-center gap-4 rounded-md px-4 py-3 text-white hover:bg-primary-500">
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
