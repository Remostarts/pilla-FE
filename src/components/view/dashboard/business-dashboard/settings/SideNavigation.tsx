'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronRight, Info, Plus } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Heading } from '../../shared/Heading';

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
    label: 'Profile',
    href: '/business/settings?section=profile',
  },
  {
    id: 2,
    label: 'Business Profile',
    href: '/business/settings?section=business-profile',
  },
  {
    id: 3,
    label: 'Settlement Account',
    href: '/business/settings?section=settlement-account',
  },
  {
    id: 4,
    label: 'Preferences',
    href: '/business/settings?section=preferences',
  },
  {
    id: 5,
    label: 'Security',
    href: '/business/settings?section=security',
  },
  {
    id: 6,
    label: 'Cards',
    href: '/business/settings?section=cards',
  },
  {
    id: 7,
    label: 'Support',
    href: '/business/settings?section=support',
  },
];

export default function SideNavigation() {
  const searchParams = useSearchParams(); // Get the search params
  const section = searchParams.get('section') || 'profile'; // Default to 'profile' if no section is provided

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // Save the image URL to localStorage
      localStorage.setItem('profileImage', imageUrl);
    }
  };

  useEffect(() => {
    // load the image from localStorage if available
    const storedImageUrl = localStorage.getItem('profileImage');

    if (storedImageUrl) {
      setProfileImage(storedImageUrl);
    }
  }, [profileImage]);

  return (
    <div className="mr-10 flex w-full flex-col rounded-xl bg-white p-6 font-spaceGrotesk lg:w-2/5">
      <div className="mb-4 flex p-4">
        <div className="relative ml-3 flex size-16 items-center justify-center rounded-full bg-gray-200">
          <label htmlFor="profileImageInput" className="cursor-pointer">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Profile"
                className="size-full rounded-full object-cover"
                width={64}
                height={64}
              />
            ) : (
              <Image
                src="/assets/personal-dashboard/settings/profile.svg"
                alt="profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            )}
            <span className="absolute right-0 top-10 rounded-full bg-primary-500 p-1 text-white">
              <Plus className="size-4" />
            </span>
          </label>
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <div className="ml-4">
          <Heading heading="Hello, Peter Simon" />
          <p className="flex items-center text-sm text-primary-500">
            <Info className="mr-2 size-4" />
            Awaiting verification
          </p>
        </div>
      </div>
      <ul>
        {links.map((data) => {
          const isActive = section === data.href.split('=')[1]; // Extracts the section part from the href
          return (
            <li key={data.id} className=" ">
              <Link
                href={data.href}
                className={`ml-4 flex items-center justify-between rounded-lg px-4 py-3 font-semibold lg:text-lg ${
                  isActive
                    ? 'block bg-primary-100  text-primary-500'
                    : 'text-black hover:bg-primary-100 hover:text-primary-500'
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
