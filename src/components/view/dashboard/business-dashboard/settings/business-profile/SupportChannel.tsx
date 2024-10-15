import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import {
  supportChannelSchema,
  TSupportChannel,
} from '@/lib/validations/business/settings.validation';

const defaultValues = {
  supportEmail: '',
  supportPhone: '',
};

export default function SupportChannel() {
  const form = useForm<TSupportChannel>({
    resolver: zodResolver(supportChannelSchema),
    mode: 'onChange',
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TSupportChannel) => {
    console.log('form data:', data);
  };
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="mt-10 w-full max-w-4xl rounded-xl bg-white p-6">
          <CardHeader>
            <Heading heading="Support Channel" className=" text-2xl text-[#4D4D4D]" />
          </CardHeader>
          <CardContent>
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
