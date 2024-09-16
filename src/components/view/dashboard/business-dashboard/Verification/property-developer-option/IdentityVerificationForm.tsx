import React, { useState } from 'react';
import Image from 'next/image';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import ReSelect from '@/components/re-ui/ReSelect';

export default function IdentityVerificationForm() {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // Handle file upload here
      console.log(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full p-6">
      <Heading heading="Identity Verification" className=" mt-8 text-2xl font-bold" />
      <SubHeading subHeading="Provide your valid ID document." className="mb-8 text-gray-600" />

      <div className="space-y-4">
        <div>
          <ReSelect
            name="identity-document"
            label="Choose Identity Document *"
            placeholder="Select"
            options={[
              { value: 'passport', label: 'Passport' },
              { value: 'drivers-license', label: "Driver's License" },
              { value: 'national-id', label: 'National ID' },
            ]}
          />
        </div>

        <div
          className={`rounded-md border-2 border-dashed bg-[#F7F7F7] p-6 text-center ${
            dragActive ? 'border-blue-500 bg-orange-50' : 'border-primary-500'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept=".jpg,.pdf,.png"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                // Handle file upload here
                console.log(e.target.files[0]);
              }
            }}
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            {/* <UploadIcon className="mx-auto mb-4 text-orange-500" /> */}

            <Image
              src="/assets/business-dashboard/upload-icon.svg"
              width={32}
              height={32}
              alt="upload-icon"
              className="mx-auto mb-4"
            />
            <p className="mb-2">
              Drag & drop files or <span className="text-orange-500 underline">Browse</span>
            </p>
            <p className="text-sm text-gray-500">
              Supported formats: (.jpg, .pdf, .png) must not exceed 5MB
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
