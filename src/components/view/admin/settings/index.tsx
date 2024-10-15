'use client';

import { useState } from 'react';

import ProfileInformation from './ProfileInformation';
import ChangePassword from './ChangePassword';

import { Button } from '@/components/ui/button';

export default function Settings() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex rounded-xl bg-white p-6">
          <Button
            variant={activeTab === 'profile' ? 'default' : null}
            className={`flex-1 rounded-xl py-6 text-lg font-semibold ${activeTab === 'profile' && 'bg-black text-white'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </Button>
          <Button
            variant={activeTab === 'password' ? 'default' : null}
            className={`flex-1 rounded-xl py-6 text-lg font-semibold ${activeTab === 'password' && 'bg-black text-white'}`}
            onClick={() => setActiveTab('password')}
          >
            Change Password
          </Button>
        </div>

        <div className="rounded-lg bg-white p-8 shadow-sm">
          {activeTab === 'profile' && <ProfileInformation />}

          {activeTab === 'password' && <ChangePassword />}
        </div>
      </div>
    </div>
  );
}
