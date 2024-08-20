'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

const Security = () => {
  return (
    <div className="size-full rounded-xl bg-white p-6 font-spaceGrotesk">
      <h2 className="mb-4 text-xl font-bold">Security</h2>
      <div className="space-y-4">
        <div className="mb-4 flex cursor-pointer items-center justify-between rounded-xl border bg-gray-50 p-4">
          <span className="text-lg font-bold">Change Password</span>
          <ArrowRight />
        </div>
        <div className="mb-4 flex cursor-pointer items-center justify-between rounded-xl border bg-gray-50 p-4">
          <span className="text-lg font-bold">Change Transaction PIN</span>
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default Security;
