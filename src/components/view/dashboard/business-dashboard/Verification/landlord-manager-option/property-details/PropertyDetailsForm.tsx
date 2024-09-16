'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

import { Heading } from '../../../../shared/Heading';
import SubHeading from '../../../../shared/SubHeading';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import ReSelect from '@/components/re-ui/ReSelect';

// defining the types for property input fields
type Property = {
  address: string;
  city: string;
  state: string;
  type: string;
  ownershipProof: File | null;
};

// property type options
const propertyTypesOptions = [
  { value: 'residential', label: 'Residential' },
  { value: 'commercial', label: 'Commercial' },
];

export default function PropertyDetails() {
  const [properties, setProperties] = useState<Property[]>([
    { address: '', city: '', state: '', type: '', ownershipProof: null },
  ]);

  // function to add new Property
  const addProperty = () => {
    setProperties([
      ...properties,
      { address: '', city: '', state: '', type: '', ownershipProof: null },
    ]);
  };

  // function to remove existing property
  const removeProperty = (index: number) => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-10">
      <div className="ml-4">
        <Heading heading="Property Details" />
        <SubHeading subHeading="Enter your property information." />
      </div>
      {properties.map((property, index) => (
        <div key={index} className="mb-6 ml-20 mt-10 space-y-4 rounded-lg border p-4">
          <Heading className="mb-3" heading={`Property ${index + 1} *`} />

          <ReInput
            label="Address"
            name="address"
            placeholder="Address"
            className="bg-gray-100/80"
          />
          <div className="grid grid-cols-2 gap-4">
            <ReInput
              label="City/Town"
              name="city"
              placeholder="City/Town"
              className="bg-gray-100/80"
            />
            <ReSelect
              name="state"
              label="State"
              placeholder="Select"
              options={nigeriaState}
              className="bg-gray-100/80"
            />
          </div>

          <Separator className="bg-gray-200" />

          <Heading className="mb-3" heading="Proof of Ownership *" />
          <div className="grid grid-cols-2 gap-4">
            <ReSelect
              name="type of property"
              label="Type of Property"
              placeholder="Select"
              options={propertyTypesOptions}
              className="bg-gray-100/80"
            />
            <ReInput label="Upload C of O" name="C of O" type="file" className="bg-gray-100/80" />
          </div>

          {index > 0 && (
            <Button
              variant="ghost"
              onClick={() => removeProperty(index)}
              className="mt-2 text-red-500"
            >
              <X /> <span className="ml-2">Remove Property</span>
            </Button>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <Button onClick={addProperty} variant="outline" className="mt-4 content-center ">
          Add More
        </Button>
      </div>
    </div>
  );
}
