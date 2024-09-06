import React from 'react';

import { Heading } from '../../shared/Heading';

export default function Support() {
  return (
    <div className="w-full rounded-xl bg-white p-6 ">
      <Heading className="mb-4 text-2xl  text-[#4D4D4D]" heading="Support" />
      <div className="space-y-6">
        <div className="rounded-xl border border-[#E5E5E5] px-4 py-8">
          <p className="text-md text-[#666666]">Call Us</p>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">+234 901 234 5678</p>
            <button className="text-primary-500 hover:text-primary-600">Copy</button>
          </div>
        </div>
        <div className="rounded-xl border border-[#E5E5E5] px-4 py-8">
          <p className="text-md text-[#666666]">Email Us</p>
          <div className="flex items-center justify-between">
            <p className="text-xl font-semibold">help@pilla.cc</p>
            <button className="text-primary-500 hover:text-primary-600">Copy</button>
          </div>
        </div>
      </div>
    </div>
  );
}
