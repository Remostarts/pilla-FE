import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';

export default function BankTransfer() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Bank Transfer" size="2xl" />
      </div>

      {/* Profile Details */}
      <div className="mt-6">
        <Heading heading="Select Beneficiary" size="lg" />
        <div className="mt-4 space-y-5">
          <ReSelect
            name="bank"
            label="Select Bank"
            placeholder="Select"
            options={[
              { value: 'option 1', label: 'Option 1' },
              { value: 'option 2', label: 'Option 2' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Account Number" placeholder="Enter Account Number" name="accountNumber" />

          <ReInput
            label="Beneficiary Name"
            placeholder="Enter Beneficiary Name"
            name="beneficiaryName"
          />

          <ReInput label="Enter Amount" name="amount" />

          <ReInput label="Narration" name="narration" />
        </div>
      </div>

      <div className="mt-12">
        <ReButton size="lg">Continue</ReButton>
      </div>
    </div>
  );
}
