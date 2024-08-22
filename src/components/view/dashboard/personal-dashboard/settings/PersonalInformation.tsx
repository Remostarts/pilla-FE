'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Plus, SquareCheckBig, SquareX } from 'lucide-react';

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

const initialUserInfo: UserInfo = {
  firstName: 'Seun',
  lastName: 'Ogunyemi',
  email: 'seunogunyemi@gmail.com',
  phoneNumber: '123-456-7890',
  address: 'Lorem ipsum dolor sit amet consectetur.',
  city: 'Lorem ipsum',
  localGovern: 'Lorem ipsum',
  state: 'Lorem ipsum',
};

// enter the fields you want to make readonly which will be not editable
const readonlyFields: Array<keyof UserInfo> = ['email'];

export default function PersonalInformation() {
  // state for handling profile image
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editedUserInfo, setEditedUserInfo] = useState<UserInfo>(userInfo);

  useEffect(() => {
    // load the profile image URL from localstorage if available
    const storedImageUrl = localStorage.getItem('profileImage');
    if (storedImageUrl) {
      setProfileImage(storedImageUrl);
    }

    // Load user info from localStorage
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
      setEditedUserInfo(JSON.parse(storedUserInfo));
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

  // function to handle edit
  const handleEdit = (field: keyof UserInfo) => {
    // conditionally checking if the filed is present in the readonlyFields or not and if not then make it editable
    if (!readonlyFields.includes(field)) {
      setIsEditing(field);
    }
  };

  // function to handle cancel
  const handleCancel = () => {
    setIsEditing(null);
    setEditedUserInfo(userInfo);
  };

  // function to handle save
  const handleSave = () => {
    setUserInfo(editedUserInfo);
    setIsEditing(null);

    // saving the updated user info to localStorage temporarily
    localStorage.setItem('userInfo', JSON.stringify(editedUserInfo));
  };

  // function to handle change in input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof UserInfo) => {
    setEditedUserInfo({ ...editedUserInfo, [field]: e.target.value });
  };

  // function to render editable field
  const renderEditableField = (label: string, value: string, field: keyof UserInfo) => (
    <div className="ml-4 grid grid-cols-2 items-center">
      <p className="ml-4 font-inter text-gray-600">{label}</p>
      {isEditing === field ? (
        <div className="relative flex items-center gap-2">
          <input
            className="w-full border-b-2 border-primary-500 pb-2 font-semibold focus:outline-none lg:-ml-44"
            value={editedUserInfo[field]}
            onChange={(e) => handleChange(e, field)}
          />
          <SquareCheckBig className="cursor-pointer text-green-500" onClick={handleSave} />
          <SquareX className="cursor-pointer text-red-500" onClick={handleCancel} />
        </div>
      ) : (
        <button
          className={`cursor-pointer text-start font-semibold lg:-ml-44 ${readonlyFields.includes(field) ? 'cursor-not-allowed text-gray-400' : ''}`}
          onClick={() => handleEdit(field)}
        >
          {value}
        </button>
      )}
      <Separator className="col-span-2 my-3 bg-gray-200" />
    </div>
  );

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

      {/* Personal Information section*/}
      <div className="flex flex-col gap-4">
        {renderEditableField('First Name', userInfo.firstName, 'firstName')}
        {renderEditableField('Last Name', userInfo.lastName, 'lastName')}
        {renderEditableField('Email Address', userInfo.email, 'email')}
        {renderEditableField('Phone Number', userInfo.phoneNumber, 'phoneNumber')}
        {renderEditableField('Address', userInfo.address, 'address')}
        {renderEditableField('City / Town', userInfo.city, 'city')}
        {renderEditableField('Local Govern.', userInfo.localGovern, 'localGovern')}
        {renderEditableField('State', userInfo.state, 'state')}
      </div>

      {/* Contact us button link*/}
      <div className="mt-6">
        <p className="text-center text-sm text-gray-600">
          To make any change to your personal information, please{' '}
          <a href="/" className="font-bold text-orange-500 hover:text-orange-700">
            click here
          </a>{' '}
          to contact us.
        </p>
      </div>
    </div>
  );
}
