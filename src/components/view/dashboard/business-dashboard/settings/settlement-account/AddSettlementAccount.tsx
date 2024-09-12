import React, { useState } from 'react';

import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';

export default function AddSettlementAccount() {
  const [isPrimary, setIsPrimary] = useState(false);
  const { close } = useSidebar();

  const handleSave = () => {
    close('add-settlement-account');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <Heading heading="Add Settlement Account" className="mb-4 text-2xl font-bold" />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <ReSelect
            name="bankName"
            label="Bank Name"
            placeholder="Select Bank"
            className="bg-[#F7F7F7]"
            options={[
              { value: 'GT Bank', label: 'GT Bank' },
              { value: 'Access Bank', label: 'Access Bank' },
              { value: 'Zenith Bank', label: 'Zenith Bank' },
            ]}
          />
        </div>
        <div className="mb-4">
          <ReInput name="accountNumber" label="Account Number" className="bg-[#F7F7F7]" />
        </div>
        <div className="mb-4">
          <ReInput name="nameOnAccount" label="Name on Account" className="bg-[#F7F7F7]" />
        </div>

        <p className="mb-6 text-sm text-[#666666]">
          {' '}
          To help us verify your account, the name on your bank account should match the name you
          provided as the owner of your business
        </p>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary-500 shadow-sm"
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
            />

            <span className="ml-2 text-sm text-gray-600">Make this my primary bank account</span>
          </label>
        </div>
        <ReButton type="submit" className="w-full text-lg text-white" onClick={handleSave}>
          Save
        </ReButton>
      </form>
    </div>
  );
}
