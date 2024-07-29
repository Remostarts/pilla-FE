import { Metadata } from 'next';
import { Suspense } from 'react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SignupForm from '@/components/view/user/auth/signup/SignupForm';

export const metadata: Metadata = {
  title: 'Pc-signup',
  description: 'get clean start',
};

const SignupPage = () => {
  return (
    <Card className="min-h-[500px] w-[650px]">
      <CardHeader className="text-center">
        <CardTitle>Register</CardTitle>
        <CardDescription>Start the journey with us today.</CardDescription>
      </CardHeader>
      <CardContent>
        <Suspense>
          <SignupForm />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default SignupPage;
