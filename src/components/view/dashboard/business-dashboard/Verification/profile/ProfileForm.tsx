'use client';

import React, { useState } from 'react';

import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';
import LandlordManagerOption from '../landlord-manager-option/LandlordManagerOption';
import PropertyDeveloperOptionForm from '../property-developer-option/PropertyDeveloperOptionForm';

import ReRadioGroup from '@/components/re-ui/ReRadio';

// interface for profile form section
interface ProfileFormProps {
  onCategorySelect: (category: 'landlord' | 'developer' | 'realEstate') => void;
}

export default function ProfileForm({ onCategorySelect }: ProfileFormProps) {
  const [category, setCategory] = useState<string>(''); // to store user selected category
  const [showForm, setShowForm] = useState<boolean>(false); // to show form based on user selection

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    onCategorySelect(value as 'landlord' | 'developer' | 'realEstate');
    setShowForm(true);
  };

  return (
    <form>
      <div className="mx-auto mt-10 w-full rounded-xl bg-white">
        <Heading heading="Profile" />
        <SubHeading subHeading="Please tell us about yourself." className="mb-10" />

        <ReRadioGroup
          name="businessCategory"
          label="Categories of Business"
          options={[
            { label: 'Landlord / Property Manager', value: 'landlord' },
            { label: 'Property Developer', value: 'developer' },
            { label: 'Real Estate Professionals', value: 'realEstate' },
          ]}
          onChange={handleCategoryChange}
        />

        {/* conditionally rendering the section as per user select an option */}
        {showForm && (
          <>
            {category === 'landlord' && <LandlordManagerOption />}
            {category === 'developer' && <PropertyDeveloperOptionForm />}
            {category === 'realEstate' && <LandlordManagerOption />}
          </>
        )}
      </div>
    </form>
  );
}
