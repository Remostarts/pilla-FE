import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import { NEXT_OF_KIN_SUCCESS_WINDOW, NEXT_OF_KIN_WINDOW } from '@/constants/homeData';

export default function NextOfKin() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(NEXT_OF_KIN_WINDOW);
    open(NEXT_OF_KIN_SUCCESS_WINDOW);
  };

  return (
    <div className="p-4">
      <div>
        <Heading heading="Next of Kin" size="2xl" />
        <SubHeading subHeading="Enter your next of kin information" />
      </div>

      {/* Profile Details */}
      <div className="mt-6">
        <Heading heading="Profile Details" size="lg" />
        <div className="mt-4 space-y-5">
          <ReInput label="First Name" placeholder="Enter your First Name" name="firstName" />

          <ReInput label="Last Name" placeholder="Enter your Last Name" name="lastName" />

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

          <ReInput label="Relationship" name="relationship" />
        </div>
      </div>

      {/* Contact Information */}
      <div className="mt-8">
        <Heading heading="Contact Information" size="lg" />
        <div className="mt-4 space-y-5">
          <ReInput label="Phone Number" placeholder="Enter your Phone Number" name="phoneNumber" />

          <ReInput label="Email Address" placeholder="Enter your Email Address" name="email" />
        </div>
      </div>

      {/* Address Details */}
      <div className="mt-8">
        <Heading heading="Address Details" size="lg" />
        <div className="mt-4 space-y-5">
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
        </div>
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleSubmit}>
          Submit
        </ReButton>
      </div>
    </div>
  );
}
