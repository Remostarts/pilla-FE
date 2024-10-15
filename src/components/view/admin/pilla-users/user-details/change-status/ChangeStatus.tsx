import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../../dashboard/shared/Heading';

import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { statusSchema, TStatus } from '@/lib/validations/admin/pilla-users';
import ReRadioGroup from '@/components/re-ui/ReRadio';

const defaultValues = {
  status: '',
};

export default function ChangeStatus() {
  const form = useForm<TStatus>({
    resolver: zodResolver(statusSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TStatus) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full  p-6">
          <Heading heading="Change Status" className="mb-4 text-2xl font-bold" />
          <div className="space-y-6">
            <ReRadioGroup
              name="status"
              label="Status"
              options={[
                { value: 'Pending', label: 'Pending' },
                { value: 'Active', label: 'Active' },
                { value: 'Suspended', label: 'Suspended' },
              ]}
            />

            <ReButton type="submit" className="w-full  text-lg text-white">
              Save
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
