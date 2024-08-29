'use client';

import React, { useState } from 'react';

import { Heading } from '../../shared/Heading';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

interface PersonalInformationProps {
  onSubmit: () => void;
}

export default function PropertyDeveloperOptionForm({ onSubmit }: PersonalInformationProps) {
  const [businessName, setBusinessName] = useState<string>('');
  const [businessType, setBusinessType] = useState<string>('');
  const [registrationType, setRegistrationType] = useState<string>('');

  const handleSelectChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  return (
    <form className="mt-6 space-y-4">
      <Separator className="bg-gray-200" />
      <Heading className="mb-3" heading="Business Information *" />

      <div>
        <label htmlFor="BusinessName" className="mb-2 block text-sm font-semibold text-gray-700">
          Business Name
        </label>
        <Input
          id="BusinessName"
          type="text"
          value={businessName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBusinessName(e.target.value)}
          className="mt-1 block w-full bg-gray-100/60"
        />
      </div>

      <div className="grid grid-cols-2 gap-20">
        <div>
          <label htmlFor="state" className="mb-2 block text-sm font-semibold text-gray-700">
            Business Type
          </label>
          <Select onValueChange={(value) => handleSelectChange(value, setBusinessType)}>
            <SelectTrigger className="w-full bg-gray-100/60">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="value1">value 1</SelectItem>
              <SelectItem value="value2">value 2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="state" className="mb-2 block text-sm font-semibold text-gray-700">
            Registration Type
          </label>
          <Select onValueChange={(value) => handleSelectChange(value, setRegistrationType)}>
            <SelectTrigger className="w-full bg-gray-100/60">
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="value1">value 1</SelectItem>
              <SelectItem value="value2">value 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </form>
  );
}
