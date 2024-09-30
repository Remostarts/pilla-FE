import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';
import FileUploadField from '../../shared/FileUploadField';

import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { nigeriaState } from '@/lib/data/nigeriaStates';

export default function ContactForm() {
  const { control } = useFormContext();
  return (
    <div className="mx-auto w-full p-6">
      <Heading heading="Business support details" className="mt-8 text-2xl font-bold" />
      <SubHeading
        subHeading="Enter your business contact Information"
        className="mb-6 text-gray-600"
      />

      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Contact <span className="text-red-500">*</span>
          </h2>

          <div>
            <ReInput
              name="contact.supportEmail"
              label="Support Email *"
              placeholder="Enter your support email"
              type="email"
            />
          </div>

          <div>
            <ReInput
              name="contact.supportNumber"
              label="Support Number *"
              placeholder="+234"
              type="tel"
            />
          </div>

          <div>
            <ReInput
              name="contact.website"
              label="Website"
              placeholder="Enter your website url"
              type="url"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Business Address <span className="text-red-500">*</span>
          </h2>

          <div>
            <ReInput
              name="contact.address"
              label="Address *"
              placeholder="Enter your business address"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <ReSelect
                name="contact.city"
                label="City/Town *"
                placeholder="Select"
                options={[
                  { value: 'city1', label: 'City 1' },
                  { value: 'city2', label: 'City 2' },
                  { value: 'city3', label: 'City 3' },
                ]}
              />
            </div>
            <div>
              <ReSelect
                name="contact.state"
                label="State *"
                placeholder="Select"
                options={nigeriaState}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="proof-of-address">Upload Proof of Address</Label>

            <FileUploadField
              name="contact.proofOfAddress"
              label="Proof of Address"
              control={control}
              placeholder="Upload proof of address"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
