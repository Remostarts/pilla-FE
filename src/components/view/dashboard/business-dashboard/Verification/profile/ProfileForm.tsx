'use client';

import React, { useState } from 'react';

import LandlordManagerOption from '../profile/LandlordManagerOption';
import PropertyDeveloperOptionForm from '../profile/PropertyDeveloperOptionForm';
import RealEstateOptionForm from '../profile/RealEstateOptionForm';
import { Heading } from '../../../shared/Heading';
import SubHeading from '../../../shared/SubHeading';

import ReRadioGroup from '@/components/re-ui/ReRadio';

export default function ProfileForm() {
  const [category, setCategory] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
    setShowForm(true);
  };

  return (
    <form>
      <div className="mx-auto size-full  rounded-xl bg-white p-10">
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
          onChange={handleCategoryChange} // Passing the change handler
        />

        {/* conditionally rendering the section as per user select an option */}
        {showForm && (
          <>
            {category === 'landlord' && <LandlordManagerOption />}
            {category === 'developer' && <PropertyDeveloperOptionForm />}
            {category === 'realEstate' && <RealEstateOptionForm />}
          </>
        )}
      </div>
    </form>
  );
}
