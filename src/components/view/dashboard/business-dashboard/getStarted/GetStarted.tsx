'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';

import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

import Card from './GetStartedCard';
import APIDocumentationAndKeys from './APIDocumentationAndKeys';

export default function GetStarted() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  // handling the profile picture upload
  useEffect(() => {
    const storedImageUrl = localStorage.getItem('profileImage');

    if (storedImageUrl) {
      setProfileImage(storedImageUrl);
    }
  }, [setProfileImage]);

  // function for image uploading
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };
  return (
    <div className="space-y-6 p-6">
      <Card>
        <div className="grid grid-cols-2 gap-60">
          <div className="flex gap-4 space-y-12">
            <div className=" flex items-center">
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
            <div>
              <Heading className="text-2xl font-semibold" heading="Welcome, Peter" />
              <SubHeading
                className="font-inter text-gray-500/70"
                subHeading="Here's a few things to help you get started as a business on Pilla."
              />
            </div>
          </div>

          <div className="">
            <h2 className="mb-4 flex items-center justify-start gap-2 text-xl font-semibold">
              <Image
                src="/assets/business-dashboard/info-circle-icon.svg"
                alt="info-icon"
                width={24}
                height={24}
              />{' '}
              <span className=" ">Account Verification</span>
            </h2>
            <SubHeading
              className="font-inter font-semibold text-gray-500/70"
              subHeading="Provide the necessary details and documents.This helps us make sure you comply with regulations."
            />

            <button className="mt-5 flex items-center justify-between gap-4 rounded-full bg-[#FF0421] px-6 py-2 font-spaceGrotesk font-medium text-white">
              <span>Verify Account</span>
              <ChevronRight />
            </button>
          </div>
        </div>
      </Card>
      <Card>
        <APIDocumentationAndKeys />
      </Card>

      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl ">Find answers to questions</h2>
        <p className="text-gray-600">you might have or get in touch</p>
        <button className="mt-10 flex items-center justify-between gap-4 font-inter text-lg">
          <span>Go to Support</span> <ChevronRight />
        </button>
      </div>
    </div>
  );
}
