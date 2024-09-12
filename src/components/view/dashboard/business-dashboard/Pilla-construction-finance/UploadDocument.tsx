'use client';

import React, { useRef } from 'react';

import { useSidebar } from '../../shared/SideBar';

import { ReButton } from '@/components/re-ui/ReButton';

interface UploadDocumentProps {
  onUpload: (documentName: string, fileName: string) => void;
  documentName: string;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ onUpload, documentName }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { close } = useSidebar();

  const handleSubmit = () => {
    if (fileInputRef.current?.files?.[0]) {
      onUpload(documentName, fileInputRef.current.files[0].name);
    }
    close('upload-document');
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(documentName, file.name);
    }
  };

  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-semibold">Upload Document: {documentName}</h2>
      <div
        className="mb-4 cursor-pointer rounded border-2 border-dashed border-gray-300 p-4 text-center"
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={() => fileInputRef.current?.click()}
      >
        <p>Drag & drop files or Browse</p>
        <p className="text-sm text-gray-500">
          Supported formats: (jpg, jpeg, png) must not exceed 5MB
        </p>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
        accept=".jpg,.jpeg,.png"
      />
      <ReButton onClick={handleSubmit}>Done</ReButton>
    </div>
  );
};

export default UploadDocument;
