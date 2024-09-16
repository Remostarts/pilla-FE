import React from 'react';

import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

export default function AccountInformationForm() {
  return (
    <div className="w-full p-6">
      <Heading heading="Business Account Information" className="mt-6 text-2xl font-bold" />
      <SubHeading
        subHeading="Kindly provide the information below"
        className="mb-8 text-gray-600"
      />

      <form className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Bank Information <span className="text-red-500">*</span>
          </h2>

          <div>
            <ReInput name="bvn" label="BVN" placeholder="Enter BVN" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <ReSelect
                name="bankName"
                label="Bank Name"
                placeholder="select bank"
                options={[
                  { value: 'bank1', label: 'bank1' },
                  { value: 'bank2', label: 'bank2' },
                  { value: 'bank3', label: 'bank3' },
                ]}
              />
            </div>
            <div>
              <ReInput
                name="accountNumber"
                label="Account Number"
                placeholder="Enter Account Number"
                type="number"
              />
            </div>
          </div>

          <div>
            <ReInput name="accountName" label="Account Name" placeholder="Enter Account Name" />
          </div>

          <p className="mt-4 text-sm text-gray-600">
            To help us verify your account, the name on your bank account should match the name you
            provided as your business name.
          </p>
        </div>
      </form>
    </div>
  );
}
