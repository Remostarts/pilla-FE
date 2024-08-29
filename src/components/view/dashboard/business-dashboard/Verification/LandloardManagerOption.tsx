'use client';

import React, { useState } from 'react';
import { Upload } from 'lucide-react';

import { Heading } from '../../shared/Heading';
import { Sidebar } from '../../shared/SideBar';

import IdentityVerification from './document-upload/Identity-verification/IdentityVerification';
import AddressVerification from './document-upload/address-verification/AddressVerification';

import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

interface PersonalInformationProps {
  onSubmit: () => void;
}

export default function LandlordManagerOption({ onSubmit }: PersonalInformationProps) {
  const [gender, setGender] = useState<string>('');
  const [dob, setDob] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [identity, setIdentity] = useState<string>('');
  const [proofOfAddress, setProofOfAddress] = useState<string>('');

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  const handleSelectChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(value);
  };

  return (
    <div>
      <form className="mt-6 space-y-4">
        <Separator className="bg-gray-200" />
        <Heading className="mb-3" heading="Personal Information *" />

        {/* Gender and DOB Inputs */}
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label htmlFor="gender" className="mb-2 block text-sm font-semibold text-gray-700">
              Gender
            </label>
            <Select onValueChange={(value) => handleSelectChange(value, setGender)}>
              <SelectTrigger className="w-full bg-gray-100/60">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="dob" className="mb-2 block text-sm font-semibold text-gray-700">
              DOB
            </label>
            <Input
              type="date"
              id="dob"
              value={dob}
              onChange={handleInputChange(setDob)}
              placeholder="Date of Birth"
              className="mt-1 block w-full bg-gray-100/60"
            />
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Address Inputs */}
        <Heading className="mb-3" heading="Personal Address *" />
        <div>
          <label htmlFor="address" className="mb-2 block text-sm font-semibold text-gray-700">
            Address
          </label>
          <Input
            type="text"
            id="address"
            value={address}
            onChange={handleInputChange(setAddress)}
            placeholder="Enter your address"
            className="mt-1 block w-full bg-gray-100/60"
          />
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-semibold text-gray-700">
              City/Town
            </label>
            <Input
              type="text"
              id="city"
              value={city}
              onChange={handleInputChange(setCity)}
              placeholder="Enter city/town"
              className="mt-1 block w-full bg-gray-100/60"
            />
          </div>

          <div>
            <label htmlFor="state" className="mb-2 block text-sm font-semibold text-gray-700">
              State
            </label>
            <Select onValueChange={(value) => handleSelectChange(value, setState)}>
              <SelectTrigger className="w-full bg-gray-100/60">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="state1">State 1</SelectItem>
                <SelectItem value="state2">State 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Verification Inputs */}
        <Heading className="mb-3" heading="Verification *" />
        <div className="grid grid-cols-2 gap-20">
          <div>
            <label htmlFor="identity" className="mb-2 block text-sm font-semibold text-gray-700">
              Identification Document
            </label>
            <Sidebar.Open opens="identification-document">
              <div className="mb-4 flex cursor-pointer  justify-between rounded-xl border bg-gray-50 p-4">
                Select File
                <Upload />
              </div>
            </Sidebar.Open>
          </div>

          <div>
            <label
              htmlFor="proofOfAddress"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Proof of Address
            </label>
            {/* <Input
            type="file"
            id="proofOfAddress"
            value={proofOfAddress}
            onChange={handleInputChange(setProofOfAddress)}
            placeholder="Upload proof of address"
            className="mt-1 block w-full bg-gray-100/60"
          /> */}
            <Sidebar.Open opens="proof-of-address">
              <div className="mb-4 flex cursor-pointer  justify-between rounded-xl border bg-gray-50 p-4">
                Select File
                <Upload />
              </div>
            </Sidebar.Open>
          </div>
        </div>
      </form>

      <Sidebar.Window name="identification-document">
        <IdentityVerification />
      </Sidebar.Window>

      <Sidebar.Window name="proof-of-address">
        <AddressVerification />
      </Sidebar.Window>
    </div>
  );
}
