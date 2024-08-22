import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { BVN_VERIFICATION_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';

export default function BvnVerification() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(BVN_VERIFICATION_WINDOW);
    open(VERIFICATION_SUCCESS_WINDOW);
  };

  return (
    <div className="p-4">
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
        <ReButton size="lg" onClick={handleSubmit}>
          Submit
        </ReButton>
      </div>
    </div>
  );
}
