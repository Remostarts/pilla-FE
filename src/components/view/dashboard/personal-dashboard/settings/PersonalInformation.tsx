'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

import { Separator } from '@/components/ui/separator';

interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  localGovern: string;
  state: string;
}

const userInfo: UserInfo = {
  firstName: 'Seun',
  lastName: 'Ogunyemi',
  email: 'seunogunyemi@gmail.com',
  phoneNumber: '123-456-7890',
  address: 'Lorem ipsum dolor sit amet consectetur.',
  city: 'Lorem ipsum',
  localGovern: 'Lorem ipsum',
  state: 'Lorem ipsum',
};

const PersonalInformation: React.FC = () => {
  // state for handling profile image
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    // load the profile image URL from localstorage if available
    const storedImageUrl = localStorage.getItem('profileImage');
    if (storedImageUrl) {
      setProfileImage(storedImageUrl);
    }
  }, []);

  // function to handle image upload and create the image url
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);

      // Save the image URL to localstorage
      localStorage.setItem('profileImage', imageUrl);
    }
  };

  return (
    <div className="size-full rounded-lg bg-white p-6 lg:max-w-7xl">
      <h2 className="mb-6 font-spaceGrotesk text-xl font-bold">Personal Information</h2>
      <div className="mb-10 flex items-center">
        {/* Profile Image */}
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
      </div>

      {/* Starting of the personal information */}
      <div className="flex flex-col gap-4">
        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">First Name</p>
          <p className="font-semibold lg:-ml-44">{userInfo.firstName}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />
        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">Last Name</p>
          <p className="font-semibold lg:-ml-44">{userInfo.lastName}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">Email Address</p>
          <p className="font-semibold lg:-ml-44">{userInfo.email}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">Phone Number</p>
          <p className="font-semibold lg:-ml-44">{userInfo.phoneNumber}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">Address</p>
          <p className="font-semibold lg:-ml-44">{userInfo.address}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">City / Town</p>
          <p className="font-semibold lg:-ml-44">{userInfo.city}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">Local Govern.</p>
          <p className="font-semibold lg:-ml-44">{userInfo.localGovern}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />

        <div className="ml-4 grid grid-cols-2">
          <p className="font-inter text-gray-600">State</p>
          <p className="font-medium lg:-ml-44">{userInfo.state}</p>
        </div>
        <Separator className="my-1 bg-gray-200" />
      </div>

      {/* Ending of the personal information */}

      {/* Contact us button link*/}
      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          To make any change to your personal information, please{' '}
          <a href="https://google.com" className="font-bold text-orange-500 hover:text-orange-700">
            click here
          </a>{' '}
          to contact us.
        </p>
      </div>
    </div>
  );
};

export default PersonalInformation;
