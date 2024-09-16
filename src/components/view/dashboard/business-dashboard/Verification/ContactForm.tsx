import React from 'react';
import { Upload } from 'lucide-react';

import { Heading } from '../../shared/Heading';
import SubHeading from '../../shared/SubHeading';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { nigeriaState } from '@/lib/data/nigeriaStates';

export default function ContactForm() {
  return (
    <div className="mx-auto w-full p-6">
      <Heading heading="Business support details" className="mt-8 text-2xl font-bold" />
      <SubHeading
        subHeading="Enter your business contact Information"
        className="mb-6 text-gray-600"
      />

      <form className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">
            Contact <span className="text-red-500">*</span>
          </h2>

          <div>
            <ReInput
              name="supportEmail"
              label="Support Email *"
              placeholder="Enter your support email"
              type="email"
            />
          </div>

          <div>
            <ReInput name="supportNumber" label="Support Number *" placeholder="+234" type="tel" />
          </div>

          <div>
            <ReInput
              name="website"
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
            <ReInput name="address" label="Address *" placeholder="Enter your business address" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <ReSelect
                name="city"
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
              <ReSelect name="state" label="State *" placeholder="Select" options={nigeriaState} />
            </div>
          </div>

          <div>
            <Label htmlFor="proof-of-address">Upload Proof of Address</Label>
            <div className="relative mt-1">
              <Input
                id="proof-of-address"
                type="file"
                className="absolute inset-0 size-full cursor-pointer opacity-0"
              />
              <div className="flex items-center justify-between rounded-md border p-2 text-gray-500">
                <span>Select file</span>
                <Upload className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
