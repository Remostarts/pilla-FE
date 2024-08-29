import { useState } from 'react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';
import { toast } from '@/components/ui/use-toast';

export default function FillEmail() {
  const [email, setEmail] = useState('');
  const handleSendCode = useSearchParamsHandler();

  const sendForgetPasswordOtp = async (email: string) => {
    try {
      const response = await fetch(
        `https://pilla-be-two.vercel.app/api/v1/auth/forget-password-otp-send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send verification code');
      }

      toast({
        title: 'Code Sent',
        description: 'A verification code has been sent to your email address.',
      });

      handleSendCode('step', '2');
    } catch (error) {
      console.error('Error sending verification code:', error);
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
      });
    }
  };

  const handleSubmit = () => {
    if (email.trim() === '') {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
      });
      return;
    }

    sendForgetPasswordOtp(email);
  };

  return (
    <>
      <div className="mb-6">
        <h2 className="mb-1 font-spaceGrotesk text-2xl font-bold lg:text-3xl">Forgot Password</h2>
        <p className="font-inter text-gray-600">
          Simply enter your email below, and we&apos;ll send a verification code to the phone number
          linked to your account.
        </p>
      </div>

      <div className="rounded-xl border px-8 py-12">
        <h2 className="mb-4 font-spaceGrotesk text-xl font-bold lg:text-2xl">Email Address</h2>
        <form>
          <div className="mb-8">
            <Input
              name="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 border-gray-300 py-6"
            />
          </div>
          <Button
            type="button"
            onClick={handleSubmit}
            className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
          >
            Send Code
          </Button>
        </form>
      </div>
    </>
  );
}
