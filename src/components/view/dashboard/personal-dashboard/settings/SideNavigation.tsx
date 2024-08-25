'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

import { Separator } from '@/components/ui/separator';

// defining the structure for the link object
interface SettingsLink {
  id: number;
  label: string;
  href: string;
}

// defining the link object
const links: SettingsLink[] = [
  {
    id: 1,
    label: 'Personal Information',
    href: '/personal-dashboard/settings?section=personal-information',
  },
  {
    id: 2,
    label: 'Account Limit',
    href: '/personal-dashboard/settings?section=account-limit',
  },
  {
    id: 3,
    label: 'Notifications',
    href: '/personal-dashboard/settings?section=notifications',
  },
  {
    id: 4,
    label: 'Security',
    href: '/personal-dashboard/settings?section=security',
  },
  {
    id: 5,
    label: 'Saved Cards',
    href: '/personal-dashboard/settings?section=saved-cards',
  },
];

export default function SideNavigation() {
  const searchParams = useSearchParams(); // Get the search params
  const section = searchParams.get('section') || 'personal-information'; // Default to 'personal-information' if no section is provided

  return (
    <div className="flex w-full flex-col rounded-xl bg-white p-12 font-spaceGrotesk lg:w-2/5">
      <ul>
        {links.map((data) => {
          const isActive = section === data.href.split('=')[1]; // Extracts the section part from the href
          return (
            <li key={data.id} className="mb-6 ">
              <Link
                href={data.href}
                className={`ml-4 flex items-center justify-between font-semibold lg:text-lg ${
                  isActive ? 'text-primary-500' : 'text-black hover:text-primary-500'
                }`}
              >
                {data.label}
                <ChevronRight />
              </Link>
              <Separator className="my-4 bg-gray-200" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
