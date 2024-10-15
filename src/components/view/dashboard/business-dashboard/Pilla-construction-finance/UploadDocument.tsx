'use client';

import React, { useState, useRef, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { useSidebar } from '../../shared/SideBar';
import { Heading } from '../../shared/Heading';

import { ReButton } from '@/components/re-ui/ReButton';

interface UploadDocumentProps {
  onUpload: (documentName: string, fileName: string) => void;
  documentName: string;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ onUpload, documentName }) => {
  const { close } = useSidebar();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onUpload(documentName, file.name);
    }
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles[0]) {
        const file = acceptedFiles[0];
        setFileName(file.name);
        onUpload(documentName, file.name);
      }
    },
    [onUpload, documentName]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleSubmit = () => {
    if (fileName) {
      close('upload-document');
    }
  };

  return (
    <div className="p-4">
      <Heading heading="Upload Document" className="mb-10 text-2xl font-semibold" />
      <div
        {...getRootProps()}
        className={`mb-4 cursor-pointer rounded border-2 border-dashed p-10 text-center ${
          isDragActive ? 'border-blue-400 bg-blue-50' : 'border-primary-500'
        }`}
        onClick={() => fileInputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={() => fileInputRef.current?.click()}
      >
        <input {...getInputProps()} className="hidden" />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept=".jpg,.jpeg,.png"
        />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>
            Drag & drop files or click to{' '}
            <span className="font-medium text-primary-500 hover:underline">browse</span>
          </p>
        )}
        <p className="text-sm text-gray-500">
          Supported formats: (jpg, jpeg, png) must not exceed 5MB
        </p>
        {fileName && (
          <p className="mt-2 rounded-xl bg-green-200 p-2 text-blue-600">Uploaded: {fileName}</p>
        )}
      </div>
      <ReButton onClick={handleSubmit}>Done</ReButton>
    </div>
  );
};

export default UploadDocument;
