import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import { PROOF_OF_ADDRESS_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';

export default function ProofOfAddress() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(PROOF_OF_ADDRESS_WINDOW);
    open(VERIFICATION_SUCCESS_WINDOW);
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading="Proof of Address" size="2xl" />
        <SubHeading subHeading="We would like to confirm your address with a valid utility bill within the last 3 months" />
      </div>

      <div className="mt-6 space-y-5">
        <ReInput label="Address" placeholder="Enter your Address" name="address" />

        <ReSelect name="state" label="State" placeholder="Select" options={nigeriaState} />

        <div className="flex justify-between gap-6">
          <div className="w-1/2">
            <ReSelect
              name="localGovernment"
              label="Local Government"
              placeholder="Select"
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
              ]}
            />
          </div>

          <div className="w-1/2">
            <ReInput label="City / Town" name="city" />
          </div>
        </div>

        <ReSelect
          name="docType"
          label="Document Type"
          placeholder="Select"
          options={[
            { value: 'electricityBill', label: 'Electricity Bill' },
            { value: 'waterBill', label: 'Water Bill' },
            { value: 'wasteBill', label: 'Waste Bill' },
            { value: 'cableBill', label: 'Dstv / Cable Bill' },
          ]}
        />

        <ReInput label="Upload Image" name="docImg" placeholder="Select to Choose file" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleSubmit}>
          Submit
        </ReButton>
      </div>
    </div>
  );
}