'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Plus, SquareCheckBig, SquareX } from 'lucide-react';
import { toast } from 'sonner';

import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { UserInfoResponse } from '@/types/settings.type';
import { updateProfile } from '@/lib/actions/personal/settings.action';

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
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address: '',
  city: '',
  localGovern: '',
  state: '',
};

const readonlyFields: Array<keyof UserInfo> = ['email', 'phoneNumber'];

export default function PersonalInformation({ personalInfo }: { personalInfo: UserInfoResponse }) {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo>(initialUserInfo);
  const [editedUserInfo, setEditedUserInfo] = useState<UserInfo>(userInfo);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const storedImageUrl = localStorage.getItem('profileImage');
    if (storedImageUrl) {
      setProfileImage(storedImageUrl);
    }

    if (personalInfo && personalInfo.data) {
      console.log('🌼 🔥🔥 useEffect 🔥🔥 personalInfo🌼', personalInfo);

      const { firstName, lastName, email, phone, profile } = personalInfo.data;
      const newUserInfo = {
        firstName,
        lastName,
        email,
        phoneNumber: phone || '',
        address: profile?.address || '',
        city: profile?.city || '',
        localGovern: profile?.localGovernment || '',
        state: profile?.state || '',
      };
      setUserInfo(newUserInfo);
      setEditedUserInfo(newUserInfo);
    }
  }, [personalInfo]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem('profileImage', imageUrl);
    }
  };

  const handleEdit = (field: keyof UserInfo) => {
    if (!readonlyFields.includes(field)) {
      setIsEditing(field);
    }
  };

  const handleCancel = () => {
    setIsEditing(null);
    setEditedUserInfo(userInfo);
    setHasChanges(false);
  };

  const handleSave = (field: keyof UserInfo) => {
    setUserInfo((prev) => ({ ...prev, [field]: editedUserInfo[field] }));
    setIsEditing(null);
    setHasChanges(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof UserInfo) => {
    setEditedUserInfo({ ...editedUserInfo, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await updateProfile(editedUserInfo);
      if (response?.success) {
        toast.success('Profile updated successfully!');
        setHasChanges(false);
      } else {
        toast.error(response?.error || 'Profile update failed');
      }
    } catch (error) {
      toast.error('Profile update failed');
    }
  };

  const renderEditableField = (label: string, field: keyof UserInfo) => (
    <div className="ml-4 grid grid-cols-2 items-center">
      <p className="ml-4 font-spaceGrotesk text-gray-600">{label}</p>
      {isEditing === field ? (
        <div className="relative flex items-center gap-2">
          <input
            className="w-full border-b-2 border-primary-500 pb-2 font-inter font-medium focus:outline-none lg:-ml-44"
            value={editedUserInfo[field] || ''}
            onChange={(e) => handleChange(e, field)}
          />
          <SquareCheckBig
            className="cursor-pointer text-green-500"
            onClick={() => handleSave(field)}
          />
          <SquareX className="cursor-pointer text-red-500" onClick={handleCancel} />
        </div>
      ) : (
        <button
          className={`cursor-pointer text-start font-inter font-medium lg:-ml-44 ${readonlyFields.includes(field) ? 'cursor-not-allowed text-gray-400' : ''}`}
          onClick={() => handleEdit(field)}
        >
          {userInfo[field] || 'Not provided'}
        </button>
      )}
      <Separator className="col-span-2 my-3 bg-gray-200" />
    </div>
  );

  return (
    <div className="size-full rounded-lg bg-white p-6 lg:max-w-7xl">
      <h2 className="mb-6 font-spaceGrotesk text-xl font-bold">Personal Information</h2>
      <div className="mb-10 flex items-center">
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

      <div className="flex flex-col gap-4">
        {renderEditableField('First Name', 'firstName')}
        {renderEditableField('Last Name', 'lastName')}
        {renderEditableField('Email Address', 'email')}
        {renderEditableField('Phone Number', 'phoneNumber')}
        {renderEditableField('Address', 'address')}
        {renderEditableField('City / Town', 'city')}
        {renderEditableField('Local Govern.', 'localGovern')}
        {renderEditableField('State', 'state')}
      </div>

      {hasChanges && (
        <div className="mt-6 flex justify-end">
          <Button onClick={handleSubmit} className="bg-primary-500 text-white">
            Save Changes
          </Button>
        </div>
      )}

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
