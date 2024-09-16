import React from 'react';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';

export default function BusinessProfileForm() {
  return (
    <div className="w-full p-6">
      <Heading heading="Business Profile" className="mt-8 text-2xl font-bold" />
      <SubHeading subHeading="Please tell us about you." className="mb-8 text-gray-600" />

      <form className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Business Information <span className="text-red-500">*</span>
          </h2>

          <div>
            <ReInput name="businessName" label="Business Name" placeholder="Enter business name" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <ReSelect
                name="businessType"
                label="Business Type"
                placeholder="Select business type"
                options={[
                  { value: 'incorporated company', label: 'Incorporated Company' },
                  { value: 'business name', label: 'Business Name' },
                ]}
              />
            </div>
            <div>
              <ReSelect
                name="registrationType"
                label="Registration Type"
                placeholder="Select registration type"
                options={[
                  { value: 'not registered', label: 'Not Registered' },
                  { value: 'registered', label: 'Registered' },
                ]}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
