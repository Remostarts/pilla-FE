'use client';

import React, { useState, useRef } from 'react';

import { useSidebar } from '../../shared/SideBar';
import { Heading } from '../../shared/Heading';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Director {
  fullName: string;
  position: string;
  bvn: string;
  document: File | null;
}

interface AddDirectorProps {
  onAddDirector: (director: Director) => void;
}

const AddDirector: React.FC<AddDirectorProps> = ({ onAddDirector }) => {
  const [newDirector, setNewDirector] = useState<Director>({
    fullName: '',
    position: '',
    bvn: '',
    document: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { close } = useSidebar();

  const handleDirectorFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setNewDirector({ ...newDirector, document: file });
    }
  };

  const handleAddDirector = () => {
    if (newDirector.fullName && newDirector.position && newDirector.bvn && newDirector.document) {
      onAddDirector(newDirector);
      setNewDirector({ fullName: '', position: '', bvn: '', document: null });
      close('add-director');
    }
  };

  return (
    <div className="p-4">
      <Heading heading="Add Director" />
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={newDirector.fullName}
            onChange={(e) => setNewDirector({ ...newDirector, fullName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="position">Position</Label>
          <Input
            id="position"
            value={newDirector.position}
            onChange={(e) => setNewDirector({ ...newDirector, position: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="bvn">BVN</Label>
          <Input
            id="bvn"
            value={newDirector.bvn}
            onChange={(e) => setNewDirector({ ...newDirector, bvn: e.target.value })}
          />
        </div>
        <div>
          <Button onClick={() => fileInputRef.current?.click()}>
            {newDirector.document
              ? newDirector.document.name
              : 'Upload Signatory ID card & Passport Photograph'}
          </Button>
          <p className="mt-1 text-sm text-gray-500">
            Supported formats: (jpg, jpeg, png) must not exceed 5MB
          </p>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleDirectorFileChange}
            accept=".jpg,.jpeg,.png"
          />
        </div>
        <Button onClick={handleAddDirector}>Done</Button>
      </div>
    </div>
  );
};

export default AddDirector;
