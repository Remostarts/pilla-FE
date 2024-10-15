import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../../dashboard/shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { ReTextarea } from '@/components/re-ui/ReTextarea';
import { editProfileSchema, TEditProfile } from '@/lib/validations/admin/pilla-users';

const defaultValues = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  phoneNumber: '',
  address: '',
};

export default function EditProfile() {
  const form = useForm<TEditProfile>({
    resolver: zodResolver(editProfileSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TEditProfile) => {
    console.log('form data:', data);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full  p-6">
          <Heading heading="Edit Profile" className="mb-4 text-2xl font-bold" />
          <div className="space-y-6">
            <div>
              <ReInput name="firstName" label="First Name" placeholder="Enter First Name" />
            </div>
            <div>
              <ReInput name="lastName" label="Last Name" placeholder="Enter Last Name" />
            </div>
            <div>
              <ReInput
                name="emailAddress"
                label="Email Address"
                placeholder="Enter Email"
                type="email"
              />
            </div>
            <div>
              <ReInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="phone number"
                type="tel"
              />
            </div>
            <div>
              <ReTextarea name="address" label="Address" placeholder="Enter Address" />
            </div>

            <ReButton type="submit" className="w-full  text-lg text-white">
              Save
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
