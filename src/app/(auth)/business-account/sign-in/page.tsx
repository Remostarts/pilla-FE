import { Metadata } from 'next';

import { SigninBusiness } from '@/components/view/auth/sign-in/SigninBusiness';

export const metadata: Metadata = {
  title: 'Signin',
  description: 'sign in to your account',
};

const SigninPage = () => {
  return (
    <div>
      <SigninBusiness />
    </div>
  );
};

export default SigninPage;
