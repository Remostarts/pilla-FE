import React from 'react';

import DropZone from '../DropZone';
import SelectInput from '../SelectInput';

import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { DOCUMENT_IDENTIFICATION } from '@/constants/businessDashboard';
import { ReButton } from '@/components/re-ui/ReButton';

export default function IdentityVerification() {
  const { open, close } = useSidebar();

  const handleSubmit = () => {
    close(DOCUMENT_IDENTIFICATION);
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="size-full p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="mb-6 font-spaceGrotesk text-2xl font-bold">Identity Verification</h2>
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
