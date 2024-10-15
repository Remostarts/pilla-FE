'use client';

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Heading } from './Heading';
import { useSidebar } from './SideBar';

import { ReButton } from '@/components/re-ui/ReButton';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { CHANGE_PASSWORD_WINDOW, PASSWORD_CHANGED_WINDOW } from '@/constants/SecurityData';
import {
  changePasswordSchema,
  TChangePassword,
} from '@/lib/validations/personal/settings.validation';
import { Form } from '@/components/ui/form';
import { updatePassword } from '@/lib/actions/personal/settings.action';

const defaultValues = {
  currentPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

export default function ChangePassword() {
  const { open, close } = useSidebar();

  const form = useForm<TChangePassword>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit: SubmitHandler<TChangePassword> = async (data: TChangePassword) => {
    try {
      const response = await updatePassword(data);
      console.log(response);
      if (response?.success) {
        toast.success('Password changed successfully!');
        close(CHANGE_PASSWORD_WINDOW);
        open(PASSWORD_CHANGED_WINDOW);
      } else {
        toast.error('Password change fail');
      }
    } catch (error) {
      console.log(error);
      toast.error('Password change fail');
    }
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading heading="Change Password" className="text-2xl" />
        </div>

        {/* Password Details */}
        <div className="mt-6">
          <div className="mt-4 space-y-5">
            <RePassInput label="Current Password" name="currentPassword" />

            <RePassInput label="New Password" name="newPassword" />

            <RePassInput label="Confirm Password" name="confirmNewPassword" />
          </div>
        </div>

        <div className="mt-12">
          <ReButton type="submit" className="lg w-full text-white">
            Save
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
