import React from 'react';

import DropZone from '../DropZone';
import SelectInput from '../SelectInput';

import { ReButton } from '@/components/re-ui/ReButton';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { ADDRESS_VERIFICATION } from '@/constants/businessDashboard';

export default function AddressVerification() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(ADDRESS_VERIFICATION);
  };

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
          <ReButton type="submit" onClick={handleSubmit}>
            Done
          </ReButton>
        </div>
      </div>
    </div>
  );
}
