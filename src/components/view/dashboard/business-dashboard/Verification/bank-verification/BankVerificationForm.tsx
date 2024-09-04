import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

export default function BankVerificationForm() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Bank Verification *" size="2xl" />
        <SubHeading subHeading="Enter your bank details" />
      </div>

      <div className="ml-16 mt-6 space-y-5">
        <div className="grid grid-cols-2 gap-10">
          <ReInput label="Enter BVN" name="bvn" className="bg-gray-100/80" />

          <ReSelect
            name="bank name"
            label="Bank Name"
            placeholder="select bank"
            className="bg-gray-100/80"
            options={[
              { value: 'bank1', label: 'bank1' },
              { value: 'bank2', label: 'bank2' },
              { value: 'bank3', label: 'bank3' },
            ]}
          />

          <ReInput
            label="Account Number"
            placeholder="Enter Account Number"
            name="account number"
            className="bg-gray-100/80"
          />
        </div>

        <SubHeading subHeading="To help us verify your account, the name on your bank account should match the name you provided on your profile details." />
      </div>
    </div>
  );
}
