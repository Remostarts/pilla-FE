import React from 'react';

import DropZone from '../DropZone';

import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import { DOCUMENT_IDENTIFICATION } from '@/constants/businessDashboard';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Heading } from '@/components/view/dashboard/shared/Heading';

interface DocumentUploadNameProps {
  DocumentUploadName: string;
}

export default function DocumentVerificationUpload({
  DocumentUploadName,
}: DocumentUploadNameProps) {
  const { close } = useSidebar();

  const handleSubmit = () => {
    close(DOCUMENT_IDENTIFICATION);
  };

  return (
    <div className="flex  items-center justify-center">
      <div className="w-full p-6">
        <div className="mb-4 flex items-center justify-between">
          <Heading
            heading={`${DocumentUploadName}`}
            className="mb-6 font-spaceGrotesk text-2xl font-bold"
          />
        </div>
        <ReSelect
          name="identificationDocument"
          label="Choose Identification Document"
          placeholder="Select"
          options={[
            {
              value: 'ID Card',
              label: 'ID Card',
            },
            {
              value: 'Passport',
              label: 'Passport',
            },
            {
              value: 'Drivers License',
              label: 'Drivers License',
            },
          ]}
        />
        <DropZone />
        <div className="mt-4">
          <ReButton className="w-full text-white" type="submit" onClick={handleSubmit}>
            Done
          </ReButton>
        </div>
      </div>
    </div>
  );
}
