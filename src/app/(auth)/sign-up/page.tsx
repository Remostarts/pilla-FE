'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Page() {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, value: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(value);
    }
  };

  const handleSubmit = () => {
    if (selectedValue === '') return;
    if (selectedValue === 'personal') {
      router.push('/sign-up/personal?step=1');
    }
    if (selectedValue === 'business') {
      router.push('/sign-up/business?step=1');
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-2xl px-6 sm:mt-14 md:px-10 lg:px-12">
      <h1 className="mb-8 font-spaceGrotesk text-2xl font-bold md:text-3xl">
        Create a new Pilla account
      </h1>

      <div className="rounded-lg sm:bg-[#f8f8f8] sm:p-12">
        <h1 className="mb-6 font-spaceGrotesk text-xl font-bold md:text-2xl">Select Account</h1>
        <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
          <div className="space-y-4">
            <div
              role="button"
              tabIndex={0}
              className={`flex h-fit cursor-pointer items-center space-x-4 rounded-lg border  pl-6 ${selectedValue === 'personal' ? 'bg-primary-500' : 'bg-white'}`}
              onClick={() => handleSelect('personal')}
              onKeyDown={(event) => handleKeyDown(event, 'personal')}
            >
              <div className="relative">
                <RadioGroupItem value="personal" id="personal" className="size-5" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-black opacity-0 transition-opacity data-[state=checked]:opacity-100" />
                </div>
              </div>
              <Label htmlFor="personal" className="flex cursor-pointer items-center">
                <div>
                  <p
                    className={`mb-1 font-spaceGrotesk font-semibold sm:text-lg ${selectedValue === 'personal' ? 'text-white' : 'text-gray-800'}`}
                  >
                    Personal Account
                  </p>
                  <p
                    className={`font-inter text-xs  sm:text-sm ${selectedValue === 'personal' ? 'text-white' : 'text-gray-500'}`}
                  >
                    Pay your rents, save towards your dream real estate project, awaken your real
                    estate dream with Pilla.
                  </p>
                </div>
              </Label>

              <Image
                src="/assets/auth/user-icon.svg"
                alt="user-icon"
                width={110}
                height={110}
                className="mt-16 w-1/5 sm:mt-14 sm:w-[1/4]"
              />
            </div>

            <div
              role="button"
              tabIndex={0}
              className={`flex h-fit cursor-pointer items-center space-x-4 rounded-lg border pl-6 ${selectedValue === 'business' ? 'bg-primary-500' : 'bg-white'}`}
              onClick={() => handleSelect('business')}
              onKeyDown={(event) => handleKeyDown(event, 'business')}
            >
              <div className="relative">
                <RadioGroupItem value="business" id="business" className="size-5" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <div className="size-2 rounded-full bg-black opacity-0 transition-opacity data-[state=checked]:opacity-100" />
                </div>
              </div>
              <Label htmlFor="business" className="flex cursor-pointer items-center">
                <div>
                  <p
                    className={`mb-1 font-spaceGrotesk font-semibold sm:text-lg ${selectedValue === 'business' ? 'text-white' : 'text-gray-800'}`}
                  >
                    Business Account
                  </p>
                  <p
                    className={`font-inter text-xs  sm:text-sm ${selectedValue === 'business' ? 'text-white' : 'text-gray-500'}`}
                  >
                    Get paid by anyone, anytime and anywhere with a single integration.
                  </p>
                </div>
              </Label>

              <Image
                src="/assets/auth/store-icon.svg"
                alt="store-icon"
                width={110}
                height={110}
                className="mt-14 w-1/5 sm:mt-14 sm:w-[1/4]"
              />
            </div>
          </div>
        </RadioGroup>
        <Button
          className={`mt-10 w-full rounded-full py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg ${selectedValue === '' ? 'bg-[#999999]' : 'bg-primary-500'}`}
          onClick={handleSubmit}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
}
