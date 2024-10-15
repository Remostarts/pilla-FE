'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../dashboard/shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Form } from '@/components/ui/form';
import { addSavingPlanSchema, TAddSavingPlan } from '@/lib/validations/admin/savings.validation';

const defaultValues = {
  accountType: '',
  title: '',
  interest: '',
};

export default function AddSavingsPlan() {
  const form = useForm<TAddSavingPlan>({
    resolver: zodResolver(addSavingPlanSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TAddSavingPlan) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" relative w-full p-6">
          <div className="mb-4 flex items-center justify-between">
            <Heading heading="Add Savings Plan" className="bold text-2xl" />
          </div>
          <div className="space-y-4">
            <div>
              <ReSelect
                name="accountType"
                label="Account Type"
                placeholder="Select"
                options={[
                  { label: 'Personal Account', value: 'personal' },
                  { label: 'Business Account', value: 'business' },
                ]}
              />
            </div>
            <div>
              <ReInput name="title" label="Title" placeholder="Enter Title" />
            </div>
            <div>
              <ReInput
                name="interest"
                label="Interest %"
                placeholder="Enter interest %"
                type="number"
              />
            </div>
            <ReButton type="submit" className="w-full  text-lg text-white">
              Create
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
