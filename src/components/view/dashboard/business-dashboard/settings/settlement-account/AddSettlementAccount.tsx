import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import {
  settlementAccountSchema,
  TSettlementAccount,
} from '@/lib/validations/business/settings.validation';

const defaultValues = {
  bankName: '',
  accountNumber: '',
  accountName: '',
  isPrimary: false,
};

export default function AddSettlementAccount() {
  const [isPrimary, setIsPrimary] = useState(false);
  const { close } = useSidebar();

  const form = useForm<TSettlementAccount>({
    resolver: zodResolver(settlementAccountSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TSettlementAccount) => {
    close('add-settlement-account');
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <Heading heading="Add Settlement Account" className="mb-4 text-2xl font-bold" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <ReSelect
            name="bankName"
            label="Bank Name"
            placeholder="Select Bank"
            className="bg-[#F7F7F7]"
            options={[
              { value: 'GT Bank', label: 'GT Bank' },
              { value: 'Access Bank', label: 'Access Bank' },
              { value: 'Zenith Bank', label: 'Zenith Bank' },
            ]}
          />
        </div>
        <div className="mb-4">
          <ReInput name="accountNumber" label="Account Number" className="bg-[#F7F7F7]" />
        </div>
        <div className="mb-4">
          <ReInput name="accountName" label="Name on Account" className="bg-[#F7F7F7]" />
        </div>

        <p className="mb-6 text-sm text-[#666666]">
          {' '}
          To help us verify your account, the name on your bank account should match the name you
          provided as the owner of your business
        </p>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-primary-500 shadow-sm"
              checked={isPrimary}
              onChange={(e) => setIsPrimary(e.target.checked)}
            />

            <span className="ml-2 text-sm text-gray-600">Make this my primary bank account</span>
          </label>
        </div>
        <ReButton type="submit" className="w-full text-lg text-white">
          Save
        </ReButton>
      </form>
    </Form>
  );
}
