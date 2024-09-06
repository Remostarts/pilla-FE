'use client';

import React from 'react';

import { Heading } from './Heading';
import { useSidebar } from './SideBar';

import { ReButton } from '@/components/re-ui/ReButton';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { CHANGE_PASSWORD_WINDOW, PASSWORD_CHANGED_WINDOW } from '@/constants/SecurityData';
export default function ChangePassword() {
  const { open, close } = useSidebar();

  const handleSaveCard = () => {
    close(CHANGE_PASSWORD_WINDOW);
    open(PASSWORD_CHANGED_WINDOW);
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading="Change Password" className="text-2xl " />
      </div>

      {/* Password Details */}
      <div className="mt-6">
        <div className="mt-4 space-y-5">
          <RePassInput label="Current Password" name="current Password" />

          <RePassInput label="New Password" name="new Password" />

          <RePassInput label="Confirm Password" name="confirm Password" />
        </div>
      </div>

      <div className="mt-12">
        <ReButton type="submit" className="lg w-full text-white" onClick={handleSaveCard}>
          Save
        </ReButton>
      </div>
    </div>
  );
}
