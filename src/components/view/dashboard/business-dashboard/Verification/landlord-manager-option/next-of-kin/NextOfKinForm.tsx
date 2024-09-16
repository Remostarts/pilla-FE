import { Heading } from '../../../../shared/Heading';
import SubHeading from '../../../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

export default function NextOfKinForm() {
  return (
    <div className="p-4">
      <div>
        <Heading heading="Next of Kin" size="2xl" />
        <SubHeading subHeading="Enter your next of kin contact information" />
      </div>

      {/* Profile Details */}
      <div className="ml-10 mt-6">
        <Heading heading="Personal Information *" size="lg" />
        <div className="mt-4 space-y-5">
          <div className="grid grid-cols-2 gap-10">
            <ReInput
              label="First Name"
              placeholder="Enter your First Name"
              name="firstName"
              className="bg-gray-100/80"
            />

            <ReInput
              label="Last Name"
              placeholder="Enter your Last Name"
              name="lastName"
              className="bg-gray-100/80"
            />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <ReSelect
              name="gender"
              label="Gender"
              placeholder="Select"
              className="bg-gray-100/80"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
            />

            <ReInput label="Relationship" name="relationship" className="bg-gray-100/80" />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="ml-10 mt-8">
        <Heading heading="Contact *" size="lg" />
        <div className="mt-4 space-y-5">
          <div className="grid grid-cols-2 gap-10">
            <ReInput
              label="Phone Number"
              placeholder="Enter your Phone Number"
              name="phoneNumber"
              className="bg-gray-100/80"
            />

            <ReInput
              label="Email Address"
              placeholder="Enter your Email Address"
              name="email"
              className="bg-gray-100/80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
