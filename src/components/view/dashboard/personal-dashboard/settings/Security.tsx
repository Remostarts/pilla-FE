'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Heading } from '../../shared/Heading';

const Security = () => {
  return (
    <div className="size-full rounded-xl bg-white p-6 font-spaceGrotesk">
      <Heading heading="Security" />
      <div className="mt-8 space-y-4">
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
