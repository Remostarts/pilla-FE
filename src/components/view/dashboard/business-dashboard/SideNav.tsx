'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { businessSideNavMenu } from '@/constants/business/shared';
import { Separator } from '@/components/ui/separator';

export default function SideNav() {
  const pathName = usePathname();
  const currPage = pathName.split('/')[2];
  const router = useRouter();

  return (
    <aside className="business-side-nav flex flex-col">
      <div className="grow overflow-y-auto p-6">
        <div className="mx-4 mb-12">
          {/* Logo */}
          <Image src="/assets/root/shared/logo.svg" alt="Company Logo" width={60} height={60} />
        </div>

        {/* Nav Links */}
        <nav>
          <ul>
            {/* // rendering menu items upto 2 */}
            {businessSideNavMenu.slice(0, 2).map((nav) => (
              <li className="my-4" key={nav.id}>
                <Link
                  href={`/business/${nav.alt}`}
                  className={`flex items-center gap-4 rounded-md p-4 text-black hover:bg-primary-100 ${nav.alt === currPage && 'bg-primary-100 text-primary-500'}`}
                >
                  {nav.alt === currPage ? (
                    <Image src={nav.imgColor} alt={`${nav.alt}-icon`} width={24} height={24} />
                  ) : (
                    <Image src={nav.imgBlack} alt={`${nav.alt}-icon`} width={24} height={24} />
                  )}
                  <span className="font-inter font-medium tracking-wider">{nav.name}</span>
                </Link>
              </li>
            ))}

            <Separator className="bg-gray-200" />

            {/* // rendering menu items upto end */}
            {businessSideNavMenu.slice(2).map((nav) => (
              <li className="my-4" key={nav.id}>
                <Link
                  href={`/business/${nav.alt}`}
                  className={`flex items-center gap-4 rounded-md p-4 text-black hover:bg-primary-100 ${nav.alt === currPage && 'bg-primary-100 text-primary-500'}`}
                >
                  {nav.alt === currPage ? (
                    <Image src={nav.imgColor} alt={`${nav.alt}-icon`} width={24} height={24} />
                  ) : (
                    <Image src={nav.imgBlack} alt={`${nav.alt}-icon`} width={24} height={24} />
                  )}
                  <span className="font-inter font-medium tracking-wider">{nav.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Log out Btn */}
      {/* <div className="border-t border-gray-500 px-6 py-4">
        <button
          className="flex w-full items-center gap-4 rounded-md px-4 py-3 text-black hover:bg-primary-100"
          onClick={() => router.push('/sign-in')}
        >
          <Image
            src="/assets/personal-dashboard/side-nav/logout-icon.svg"
            alt="logout-icon"
            width={24}
            height={24}
          />
          <span className="font-inter text-lg font-medium tracking-wide">Log out</span>
        </button>
      </div> */}
    </aside>
  );
}
