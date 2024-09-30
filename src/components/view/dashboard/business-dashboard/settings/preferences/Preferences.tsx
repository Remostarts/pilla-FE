'use client';

import React from 'react';

import { Heading } from '../../../shared/Heading';

import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function Preferences() {
  return (
    <Card className="w-full  rounded-xl bg-white px-4 py-8">
      <CardContent className="space-y-6">
        <form>
          <div>
            <Heading heading="Notifications" className="mb-6 text-2xl  text-[#4D4D4D]" />
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <Label htmlFor="emailNotification" className="text-lg">
                  Email Notification
                </Label>
                <Switch id="emailNotification" defaultChecked={true} />
              </div>
              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-4">
                <Label htmlFor="smsNotification" className="text-lg">
                  SMS Notification
                </Label>
                <Switch id="smsNotification" defaultChecked={true} />
              </div>
            </div>
          </div>
          <div className="mt-12">
            <Heading heading="Transaction Fees" className="mb-6 text-2xl  text-[#4D4D4D]" />
            <RadioGroup defaultValue="customer">
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="customer"
                  id="customer"
                  className="border border-primary-500 text-primary-500 "
                />
                <Label htmlFor="customer" className="text-lg font-medium">
                  The Customer
                </Label>
              </div>
              <p className="text-md mb-4 ml-6 text-gray-500">
                The transaction fees will be paid by the customer
              </p>
              <div className=" flex items-center space-x-2">
                <RadioGroupItem
                  value="merchant"
                  id="merchant"
                  className="border border-primary-500 text-primary-500"
                />
                <Label htmlFor="merchant" className="text-lg font-medium">
                  I will pay it
                </Label>
              </div>
              <p className="text-md ml-6 text-gray-500">
                All transaction fees will be paid by the merchant.
              </p>
            </RadioGroup>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
