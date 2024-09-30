import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';
import LandlordManagerOption from '../landlord-manager-option/LandlordManagerOption';
import PropertyDeveloperOptionForm from '../property-developer-option/PropertyDeveloperOptionForm';

import ReRadioGroup from '@/components/re-ui/ReRadio';
import { FormValues } from '@/lib/validations/business/verification.validation';

// defining the profile props array
interface ProfileFormProps {
  onCategorySelect: (category: 'landlord' | 'developer' | 'realEstate') => void;
}

export default function ProfileForm({ onCategorySelect }: ProfileFormProps) {
  const { watch } = useFormContext<FormValues>();

  // watching the category changes
  const category = watch('profile.category');

  // function to handle category selection
  const handleCategoryChange = (value: string) => {
    onCategorySelect(value as 'landlord' | 'developer' | 'realEstate');
  };

  return (
    <div className="mx-auto mt-10 w-full rounded-xl bg-white">
      <Heading heading="Profile" />
      <SubHeading subHeading="Please tell us about yourself." className="mb-10" />
      <div>
        <ReRadioGroup
          name="profile.category"
          label="Categories of Business"
          options={[
            { label: 'Landlord / Property Manager', value: 'landlord' },
            { label: 'Property Developer', value: 'developer' },
            { label: 'Real Estate Professionals', value: 'realEstate' },
          ]}
          onChange={handleCategoryChange}
        />
      </div>

      {/* // conditional rendering the form based on the category */}
      {category && (
        <>
          {category === 'landlord' && <LandlordManagerOption />}
          {category === 'developer' && <PropertyDeveloperOptionForm />}
          {category === 'realEstate' && <LandlordManagerOption />}
        </>
      )}
    </div>
  );
}
