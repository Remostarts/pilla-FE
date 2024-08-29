'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function DropZone() {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg'],
      'image/png': ['.png'],
      'application/pdf': ['.pdf'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  return (
    <div
      {...getRootProps()}
      className={`cursor-pointer rounded-md border-2 border-dashed p-16 text-center ${
        isDragActive ? 'border-orange-500 bg-orange-50' : 'border-orange-500'
      }`}
    >
      <input {...getInputProps()} />
      <div className="mb-2 text-orange-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto size-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </div>
      <p className="text-md font-bold text-gray-600">
        Drag & drop files or <span className="text-orange-500">Browse</span>
      </p>
      <p className="mt-1 text-sm text-gray-400">
        Supported formats: .jpg, .pdf, .png must not exceed 5MB
      </p>
      {file && <p className="mt-2 text-sm text-green-600">File uploaded: {file.name}</p>}
    </div>
  );
}
