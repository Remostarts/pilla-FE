'use client';

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface Director {
  fullName: string;
  position: string;
  bvn: string;
  document: string | null;
}

interface AddDirectorProps {
  onAddDirector: (director: Director) => void;
}

export default function AddDirector({ onAddDirector }: AddDirectorProps) {
  const [newDirector, setNewDirector] = useState<Director>({
    fullName: '',
    position: '',
    bvn: '',
    document: null,
  });

  const { close } = useSidebar();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles[0]) {
      setNewDirector((prev) => ({ ...prev, document: acceptedFiles[0].name }));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleAddDirector = () => {
    if (newDirector.fullName && newDirector.position && newDirector.bvn && newDirector.document) {
      onAddDirector(newDirector);
      setNewDirector({ fullName: '', position: '', bvn: '', document: null });
      close('add-director');
    } else {
      alert('Please fill in all fields and upload a document.');
    }
  };

  return (
    <div className="w-full p-6">
      <Heading heading="Add Director" className="mb-6 text-2xl font-bold" />
      <div className="mt-4 space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            value={newDirector.fullName}
            onChange={(e) => setNewDirector((prev) => ({ ...prev, fullName: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            name="position"
            placeholder="Enter position"
            value={newDirector.position}
            onChange={(e) => setNewDirector((prev) => ({ ...prev, position: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="bvn">BVN</Label>
          <Input
            id="bvn"
            name="bvn"
            placeholder="Enter BVN"
            value={newDirector.bvn}
            onChange={(e) => setNewDirector((prev) => ({ ...prev, bvn: e.target.value }))}
          />
        </div>
        <div
          {...getRootProps()}
          className={`cursor-pointer rounded-lg border-2 border-dashed p-6 text-center transition-colors ${
            isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          {newDirector.document ? (
            <div className="flex items-center justify-center space-x-2">
              <Upload className="size-5 text-green-500" />
              <p className="text-sm text-green-600">{newDirector.document}</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500">
                {isDragActive
                  ? 'Drop the file here'
                  : 'Upload Signatory ID card & Passport Photograph'}
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Supported formats: (jpg, jpeg, png) must not exceed 5MB
              </p>
            </>
          )}
        </div>
        <Button className="w-full" onClick={handleAddDirector}>
          Done
        </Button>
      </div>
    </div>
  );
}
