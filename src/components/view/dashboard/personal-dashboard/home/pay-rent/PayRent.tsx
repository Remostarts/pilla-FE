import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';

export default function PayRent() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Pay Rent" size="2xl" />
        <SubHeading subHeading="Effortlessly Pay Rent to your Landlord on Pilla" />
      </div>

      {/* Profile Details */}
      <div className="mt-6">
        <Heading heading="Select Beneficiary" size="lg" />
        <div className="mt-4 space-y-5">
          <ReInput
            label="Pilla Account Number"
            placeholder="Enter Account Number"
            name="pillaAccountNumber"
          />

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
