import React from 'react';

import { Heading } from '../../../../shared/Heading';
import SubHeading from '../../../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

// defining the bank options array
const bankOptions = [
  { value: 'bank1', label: 'Bank 1' },
  { value: 'bank2', label: 'Bank 2' },
  { value: 'bank3', label: 'Bank 3' },
];

export default function BankVerificationForm() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Bank Verification *" size="2xl" />
        <SubHeading subHeading="Enter your bank details" />
      </div>

      <div className="ml-16 mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <ReInput label="Enter BVN" name="bankVerification.bvn" className="bg-gray-100/80" />
          </div>

          <div>
            <ReSelect
              label="Bank Name"
              name="bankVerification.bankName"
              placeholder="select bank"
              className="bg-gray-100/80"
              options={bankOptions}
            />
          </div>

          <div>
            <ReInput
              label="Account Number"
              placeholder="Enter Account Number"
              name="bankVerification.accountNumber"
              className="bg-gray-100/80"
            />
          </div>
        </div>

        <SubHeading subHeading="To help us verify your account, the name on your bank account should match the name you provided on your profile details." />
      </div>
    </div>
  );
}
