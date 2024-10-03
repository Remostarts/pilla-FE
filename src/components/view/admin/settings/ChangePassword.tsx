import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Heading } from '../../dashboard/shared/Heading';

import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import {
  AdminChangePasswordSchema,
  TAdminChangePassword,
} from '@/lib/validations/admin/settings.validation';

const defaultValues = {
  oldPassword: '*******',
  newPassword: '*******',
  confirmPassword: '*******',
};

export default function ChangePassword() {
  const form = useForm<TAdminChangePassword>({
    resolver: zodResolver(AdminChangePasswordSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const onSubmit = (data: TAdminChangePassword) => {
    console.log('form data:', data);
  };

  return (
    <section>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Heading heading="Change Password" className="mb-6 text-2xl font-bold" />
            <div className="space-y-6">
              <div>
                <RePassInput name="oldPassword" label="Old Password" />
              </div>

              <div>
                <RePassInput name="newPassword" label="New Password" />
              </div>

              <div>
                <RePassInput name="confirmPassword" label="Confirm Password" />
              </div>

              <ReButton type="submit" className="w-full  py-6 text-lg text-white">
                Save
              </ReButton>
            </div>
          </div>
        </form>
      </Form>
    </section>
  );
}
