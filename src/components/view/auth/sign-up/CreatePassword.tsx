'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ReButton } from '@/components/re-ui/ReButton';
import RePassInput from '@/components/re-ui/re-input/RePassInput';
import { Form } from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { useOtp } from '@/context/OtpProvider';
import { passwordSchema, TPassword } from '@/lib/validations/userAuth.validations';
import { createPassword } from '@/lib/actions/auth/signup.actions';

const defaultValues = {
  password: '',
  confirmPassword: '',
};

export default function CreatePassword() {
  const pathname = usePathname().split('/')[2];
  const router = useRouter();
  const { otp, email } = useOtp();

  const form = useForm<TPassword>({
    resolver: zodResolver(passwordSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<TPassword> = async (data) => {
    try {
      const response = await createPassword({
        email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        emailVerificationCode: otp,
        customerType: pathname,
      });

      if (response?.success) {
        router.push('/sign-in');
        toast({
          title: 'Success',
          description: 'User created successfully!',
        });
      } else {
        toast({
          title: 'Error',
          description: response.error,
          variant: 'destructive',
        });
      }
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.message,
        variant: 'destructive',
      });
      console.log('Error while creating password', e);
    }
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Create Password</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Create strong and easy to remember password.
      </p>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-col-between min-h-[450px] space-y-3 overflow-x-hidden"
        >
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Password
            </label>
            <RePassInput name="password" />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <RePassInput name="confirmPassword" />
          </div>

          <div className="mb-10 flex flex-col font-inter text-sm text-gray-600">
            <span>* Password must be at least 8 characters long.</span>
            <span>* Password must contain at least one upper case.</span>
            <span>* Password must contain at least one lower case.</span>
            <span>* Password must contain at least one number or special character.</span>
          </div>

          <div className="pt-10">
            <ReButton
              type="submit"
              isSubmitting={isSubmitting}
              className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
            >
              Submit
            </ReButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
