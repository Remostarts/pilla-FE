'use client';

import { Heading } from '../../shared/Heading';

import { Switch } from '@/components/ui/switch';

const NotificationSettings = () => {
  return (
    <div className="size-full rounded-xl bg-white p-6 font-spaceGrotesk">
      <Heading heading="Notification Settings" />
      <div className="mt-8 space-y-4">
        <div className="mb-4 flex cursor-pointer items-center justify-between rounded-xl border bg-gray-50 p-4">
          <span className="text-lg font-bold">SMS Notification</span>
          <Switch defaultChecked />
        </div>
        <div className="mb-4 flex cursor-pointer items-center justify-between rounded-xl border bg-gray-50 p-4">
          <span className="text-lg font-bold">Email Notification</span>
          <Switch defaultChecked />
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;
