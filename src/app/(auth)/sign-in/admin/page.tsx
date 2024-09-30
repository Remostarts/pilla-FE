import { Metadata } from 'next';

import { SigninAdmin } from '@/components/view/auth/sign-in/SigninAdmin';

export const metadata: Metadata = {
  title: 'Admin Signin',
  description: 'sign in to your account',
};

const SigninPage = () => {
  return (
    <div>
      <SigninAdmin />
    </div>
  );
};

export default SigninPage;
