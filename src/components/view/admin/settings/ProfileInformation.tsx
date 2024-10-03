import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../dashboard/shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import {
  AdminProfileInformationSchema,
  TAdminProfileInformation,
} from '@/lib/validations/admin/settings.validation';

export default function ProfileInformation() {
  const form = useForm<TAdminProfileInformation>({
    defaultValues: {
      fullName: 'Samuel Ajayi',
      email: 'Samuelajayi@pilla.com',
      phoneNumber: '07012345678',
    },
    resolver: zodResolver(AdminProfileInformationSchema),
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TAdminProfileInformation) => {
    console.log('updated data', data);
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Heading heading="Personal Information" className="mb-6 text-2xl font-bold" />
          <div className="space-y-6">
            <div>
              <ReInput
                name="fullName"
                label="Full Name"
                defaultValue="Samuel Ajayi"
                className="mt-1 py-5"
              />
            </div>
            <div>
              <ReInput
                name="email"
                type="email"
                label="Email Address"
                defaultValue="Samuelajayi@pilla.com"
                className="mt-1 py-5"
              />
            </div>
            <div>
              <ReInput
                name="phoneNumber"
                type="tel"
                label="Phone Number"
                defaultValue="07012345678"
                className="mt-1 py-5"
              />
            </div>
            <ReButton type="submit" className="w-full py-6 text-lg text-white ">
              Edit
            </ReButton>
          </div>
        </form>
      </Form>
    </section>
  );
}
