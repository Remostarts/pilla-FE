import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../dashboard/shared/Heading';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { ReSwitch } from '@/components/re-ui/ReSwitch';
import { Form } from '@/components/ui/form';
import { AddNewUserSchema, TAddNewUser } from '@/lib/validations/admin/roles.validation';

const defaultValues = {
  access: '',
  fullName: '',
  email: '',
  users: false,
  transactions: false,
  savings: false,
  investment: false,
  website: false,
};

export default function AddNewUser() {
  const form = useForm<TAddNewUser>({
    resolver: zodResolver(AddNewUserSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TAddNewUser) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full  p-6">
          <Heading heading="Add Employee" className="mb-4 text-2xl font-bold" />
          <div className="space-y-6">
            <div>
              <ReSelect
                name="access"
                label="Access"
                placeholder="Select"
                options={[
                  { value: 'view only', label: 'View Only' },
                  { value: 'view and edit', label: 'View and Edit' },
                ]}
              />
            </div>
            <div>
              <ReInput name="fullName" label="Full Name" placeholder="Enter Full Name" />
            </div>
            <div>
              <ReInput name="email" label="Email" placeholder="Enter Email" type="email" />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-700">Select Features</p>
              <div className="space-y-2">
                <ReSwitch name="users" label="Users" />
                <ReSwitch name="transactions" label="Transactions" />
                <ReSwitch name="savings" label="Savings" />
                <ReSwitch name="investment" label="Investment" />
                <ReSwitch name="website" label="Website" />
              </div>
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
