import { Upload } from 'lucide-react';

import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';
import IdentityVerification from '../document-upload/Identity-verification/IdentityVerification';
import AddressVerification from '../document-upload/address-verification/AddressVerification';

import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { nigeriaState } from '@/lib/data/nigeriaStates';

export default function RealEstateOptionForm() {
  return (
    <div>
      <form className="mt-6 space-y-4">
        <Separator className="bg-gray-200" />
        <Heading className="mb-3" heading="Personal Information *" />

        {/* Gender and DOB Inputs */}
        <div className="grid grid-cols-2 gap-20">
          <div>
            <ReSelect
              name="gender"
              label="Gender"
              placeholder="Select"
              className="bg-gray-100/80"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </div>

          <div>
            <ReInput
              label="DOB"
              type="date"
              name="dob"
              placeholder="Date of Birth"
              className="bg-gray-100/80"
            />
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Address Inputs */}
        <Heading className="mb-3" heading="Personal Address *" />
        <div>
          <ReInput
            label="Address"
            name="address"
            placeholder="Enter your address"
            className="bg-gray-100/80"
          />
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <ReInput type="text" label="City/Town" name="city" className="bg-gray-100/80" />
          </div>

          <div>
            <ReSelect
              name="state"
              label="State"
              placeholder="Select"
              options={nigeriaState}
              className="bg-gray-100/80"
            />
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Verification Inputs */}
        <Heading className="mb-3" heading="Verification *" />
        <div className="grid grid-cols-2 gap-20">
          <div>
            <Label htmlFor="identity" className="mb-2 block text-sm font-semibold text-gray-700">
              Identification Document
            </Label>
            <Sidebar.Open opens="identification-document">
              <div className="mb-4 flex cursor-pointer  justify-between rounded-xl border bg-gray-50 p-4">
                Select File
                <Upload />
              </div>
            </Sidebar.Open>
          </div>

          <div>
            <Label
              htmlFor="proofOfAddress"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Proof of Address
            </Label>
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
