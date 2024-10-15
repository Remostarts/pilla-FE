import { useFormContext } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';
import FileUploadField from '../file-upload/DocumentUpload';

import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import ReDatePicker from '@/components/re-ui/ReDatePicker';

export default function LandlordManagerOption() {
  const { control } = useFormContext();
  return (
    <div>
      <div className="mt-4 w-full">
        <Separator className="mb-2 bg-gray-200" />
        <Heading className="mb-3" heading="Personal Information *" />

        {/* Gender and DOB Inputs */}
        <div className="grid grid-cols-2 gap-20">
          <div>
            <ReSelect
              name="profile.landlordManager.gender"
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

          {/* Date of Birth */}
          <div>
            <ReDatePicker
              name="profile.landlordManager.dob"
              label="Date of Birth"
              placeholder="Select date"
            />
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Address Inputs */}
        <Heading className="mb-3" heading="Personal Address *" />
        <div>
          <ReInput
            type="text"
            label="Address"
            name="profile.landlordManager.address"
            placeholder="Enter Your Address"
            className="bg-gray-100/80"
          />
        </div>

        <div className="grid grid-cols-2 gap-20">
          <div>
            <ReInput
              type="text"
              label="City/Town"
              name="profile.landlordManager.city"
              className="bg-gray-100/80"
            />
          </div>

          <div>
            <ReSelect
              label="State"
              name="profile.landlordManager.state"
              placeholder="Select"
              options={nigeriaState}
              className="bg-gray-100/80"
            />
          </div>
        </div>

        <Separator className="mt-4 bg-gray-200" />

        {/* Verification file upload */}
        <Heading className="mb-3" heading="Verification *" />
        <div className="grid grid-cols-2 gap-20">
          {/* Identification Document  */}
          <div>
            <Label className="mb-2 block text-sm font-semibold text-gray-700">
              Identification Document
            </Label>

            <FileUploadField
              name="profile.landlordManager.identificationDocument"
              control={control}
              label="Identification Document"
              options={[
                { value: 'id', label: 'ID Document' },
                { value: 'certificate', label: 'Certificate' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </div>

          {/* Proof of Address */}
          <div>
            <Label className="mb-2 block text-sm font-semibold text-gray-700">
              Proof of Address
            </Label>

            <FileUploadField
              name="profile.landlordManager.proofOfAddress"
              control={control}
              label="Proof of Address"
              options={[
                { value: 'id', label: 'ID Document' },
                { value: 'certificate', label: 'Certificate' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
