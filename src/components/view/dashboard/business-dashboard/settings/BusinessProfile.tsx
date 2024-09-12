'use client';

import React from 'react';

import { Heading } from '../../shared/Heading';

import { CardHeader, CardContent, Card } from '@/components/ui/card';
import ReInput from '@/components/re-ui/re-input/ReInput';

export default function BusinessProfile() {
  return (
    <div>
      <Card className="w-full max-w-4xl rounded-xl bg-white ">
        <CardHeader>
          <Heading heading="Business Information" className="text-2xl text-[#4D4D4D]" />
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <ReInput label="Business Name" name="businessName" className=" bg-[#F7F7F7]" />
            </div>
            <div>
              <ReInput
                label="Business Address"
                name="businessAddress"
                className="mt-1 bg-[#F7F7F7]"
              />
            </div>
            <div>
              <ReInput label="Business Type" name="businessType" className=" bg-[#F7F7F7]" />
            </div>
            <div>
              <ReInput label="Industry" name="industry" className=" bg-[#F7F7F7]" />
            </div>
            <div>
              <ReInput
                label="Registration Type"
                name="registrationType"
                className=" bg-[#F7F7F7]"
              />
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="mt-10 w-full max-w-4xl rounded-xl bg-white p-6">
        <CardHeader>
          <Heading heading="Support Channel" className=" text-2xl text-[#4D4D4D]" />
        </CardHeader>
        <CardContent>
          <form>
            <div>
              <div>
                <ReInput
                  type="email"
                  label="Email Address"
                  name="supportEmail"
                  className="mt-1 bg-[#F7F7F7]"
                />
              </div>
              <div className="mt-2">
                <ReInput
                  type="tel"
                  label="Phone Number"
                  name="supportPhone"
                  defaultValue="+234"
                  className="mt-1 bg-[#F7F7F7]"
                />
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
