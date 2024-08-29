'use client';

import React, { useState } from 'react';

import LandloardManagerOption from './LandloardManagerOption';
import PropertyDeveloperOptionForm from './PropertyDeveloperOptionForm';
import RealEstateOptionForm from './RealEstateOptionForm';

const ProfileForm: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(true);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    setShowForm(true);
    setIsNextDisabled(false);
  };

  const handleNext = () => {
    console.log('Form submitted');
  };

  return (
    <div className="mx-auto size-full max-w-4xl rounded-xl bg-white p-10">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Profile</h2>
      <p className="mb-6 text-sm text-gray-600">Please tell us about yourself.</p>

      <div className="mb-10">
        <label htmlFor="category" className="text-md mb-4 block font-semibold text-gray-700">
          Categories of business *
        </label>
        <div className="ml-10 space-y-3">
          <div className="flex items-center">
            <input
              id="landlord"
              type="radio"
              name="category"
              value="landlord"
              onChange={handleCategoryChange}
              checked={category === 'landlord'}
              className="form-radio size-6 text-indigo-600"
            />
            <label htmlFor="landlord" className="ml-4 text-lg font-medium text-gray-700">
              Landlord / Property Manager
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="developer"
              type="radio"
              name="category"
              value="developer"
              onChange={handleCategoryChange}
              checked={category === 'developer'}
              className="form-radio size-6 text-indigo-600"
            />
            <label htmlFor="developer" className="ml-4 text-lg font-medium text-gray-700">
              Property Developer
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="realEstate"
              type="radio"
              name="category"
              value="realEstate"
              onChange={handleCategoryChange}
              checked={category === 'realEstate'}
              className="form-radio size-6 text-indigo-600"
            />
            <label htmlFor="realEstate" className="ml-4 text-lg font-medium text-gray-700">
              Real Estate Professionals
            </label>
          </div>
        </div>
      </div>

      {showForm && (
        <>
          {category === 'landlord' && <LandloardManagerOption onSubmit={handleNext} />}
          {category === 'developer' && <PropertyDeveloperOptionForm onSubmit={handleNext} />}
          {category === 'realEstate' && <RealEstateOptionForm onSubmit={handleNext} />}
        </>
      )}

      <div className="mt-4 flex justify-end">
        <button
          type="button"
          onClick={handleNext}
          disabled={isNextDisabled}
          className={`mt-4 w-full rounded-md bg-orange-500 py-2 font-spaceGrotesk font-bold text-white hover:bg-orange-600 lg:w-2/3 ${
            isNextDisabled ? 'cursor-not-allowed bg-gray-500/60 hover:bg-gray-500/50' : ''
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
