import { Dispatch, SetStateAction } from 'react';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';

interface BvnVerificationProps {
  setIsDone: Dispatch<SetStateAction<boolean>>;
}

export default function BvnVerification({ setIsDone }: BvnVerificationProps) {
  return (
    <>
      <div>
        <Heading heading="BVN Verification" size="2xl" />
        <SubHeading subHeading="Enter BVN to complete BVN verification" />
      </div>

      <div className="mt-6 space-y-5">
        <ReInput label="Bank Verification Number" placeholder="Enter BVN" name="bvn" />

        <ReSelect
          name="gender"
          label="Gender"
          placeholder="Select"
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' },
          ]}
        />

        <ReInput label="Date of Birth" placeholder="Select Date" name="dateOfBirth" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={() => setIsDone(true)}>
          Submit
        </ReButton>
      </div>
    </>
  );
}
