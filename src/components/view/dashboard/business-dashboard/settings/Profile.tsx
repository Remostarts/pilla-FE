'use client';

import React from 'react';

import { Heading } from '../../shared/Heading';

import { CardHeader, CardContent, Card } from '@/components/ui/card';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';

export default function Profile() {
  const handleSubmit = () => {
    console.log('Submitted');
  };
  return (
    <Card className=" w-full max-w-4xl rounded-xl bg-white ">
      <CardHeader>
        <Heading heading="Personal Information" className="text-2xl text-[#4D4D4D]" />
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <ReInput
              label="First Name"
              name="firstName"
              defaultValue="Seun"
              className="bg-[#F7F7F7]"
            />
          </div>
          <div>
            <ReInput
              label="Last Name"
              name="lastName"
              defaultValue="Ogunyemi"
              className="bg-[#F7F7F7]"
            />
          </div>
          <div>
            <ReInput
              label="Email Address"
              name="email"
              defaultValue="seunogunyemi@gmail.com"
              className="bg-[#F7F7F7]"
            />
          </div>
          <div>
            <ReInput
              label="Phone Number"
              name="phoneNumber"
              defaultValue="+234 7012345678"
              className="bg-[#F7F7F7]"
            />
          </div>
          <ReButton type="submit" className="w-full font-spaceGrotesk text-lg text-white">
            Save Changes
          </ReButton>
        </form>
      </CardContent>
    </Card>
  );
}
