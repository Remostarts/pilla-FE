import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import Card from '../../getStarted/GetStartedCard';
import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { CardHeader, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import {
  businessInformationSchema,
  TBusinessInformation,
} from '@/lib/validations/business/settings.validation';

const defaultValues = {
  businessName: '',
  businessAddress: '',
  businessType: '',
  industry: '',
  registrationType: '',
};

export default function BusinessInformation() {
  const form = useForm<TBusinessInformation>({
    defaultValues,
    resolver: zodResolver(businessInformationSchema),
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TBusinessInformation) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full max-w-4xl rounded-xl bg-white ">
          <CardHeader>
            <Heading heading="Business Information" className="text-2xl text-[#4D4D4D]" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
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

              <div className="mt-4">
                <ReButton type="submit" className="w-full text-xl text-white">
                  Save
                </ReButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
