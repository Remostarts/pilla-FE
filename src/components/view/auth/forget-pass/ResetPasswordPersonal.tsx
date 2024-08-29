'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { resetPassword } from '@/lib/actions/auth/signup.actions';
import { useOtp } from '@/context/OtpProvider';

export default function ResetPasswordPersonal() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const { otp: emailVerificationCode, email } = useOtp();

  const handleSubmit = async () => {
    if (!email || !emailVerificationCode) {
      toast({
        title: 'Error',
        description: 'Missing email or verification code. Please start the process again.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const response = await resetPassword({
        email,
        emailVerificationCode,
        newPassword,
        confirmNewPassword,
      });

      if (response.success) {
        toast({
          title: 'Success',
          description: 'Your password has been reset successfully.',
        });
        router.push('/personal/done');
      } else {
        toast({
          title: 'Error',
          description: response.error || 'Failed to reset password',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error resetting password:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Reset Password</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Create strong and easy to remember password.
      </p>

      <form>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            name="password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Input
            name="confirmPassword"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
        <div className="mb-10 flex flex-col font-inter text-sm text-gray-600">
          <span>* Password must be at least 8 characters long.</span>
          <span>* Password must contain at least one upper case.</span>
          <span>* Password must contain at least one lower case.</span>
          <span>* Password must contain at least one number or special character.</span>
        </div>

        <Button
          type="button"
          onClick={handleSubmit}
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Reset Password
        </Button>
      </form>
    </div>
  );
}
