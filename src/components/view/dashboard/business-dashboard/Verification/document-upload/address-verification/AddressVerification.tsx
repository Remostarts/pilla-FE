import React from 'react';

import Button from '../Button';
import DropZone from '../DropZone';
import SelectInput from '../SelectInput';

export default function AddressVerification() {
  return (
    <div className="flex  items-center justify-center">
      <div className="size-full p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-6 font-spaceGrotesk text-2xl font-bold">Address Verification</h2>
        </div>
        <SelectInput
          label="Choose Identification Document"
          options={['Select', 'ID Card', 'Passport']}
        />
        <DropZone />
        <div className="mt-4">
          <Button text="Done" />
        </div>
      </div>
    </div>
  );
}
