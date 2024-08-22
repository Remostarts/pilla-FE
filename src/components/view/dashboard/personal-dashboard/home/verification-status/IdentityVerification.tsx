import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import OrStrike from '../../../shared/OrStrike';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { IDENTITY_VERIFICATION_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';

export default function IdentityVerification() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(IDENTITY_VERIFICATION_WINDOW);
    open(VERIFICATION_SUCCESS_WINDOW);
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading="Identity Verification" size="2xl" />
        <SubHeading subHeading="Enter your NIN or Upload ID to complete identity verification" />
      </div>

      <div className="mt-6 space-y-5">
        <ReInput label="Enter NIN Number" name="ninNumber" placeholder="Enter NIN Number" />

        <OrStrike />

        <ReSelect
          name="docType"
          label="Select ID"
          placeholder="Select"
          options={[
            { value: 'voter-card', label: "Voter's card" },
            { value: 'driver-license', label: 'Driver License' },
            { value: 'international-passport', label: 'International Passport' },
          ]}
        />

        <ReInput label="Enter ID Number" name="idNumber" placeholder="Enter ID Number" />

        <ReInput label="Upload ID Image" name="idImage" placeholder="Select to choose file" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleSubmit}>
          Submit
        </ReButton>
      </div>
    </div>
  );
}
