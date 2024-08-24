import { Metadata } from 'next';

import { SigninPersonal } from '@/components/view/auth/sign-in/SigninPersonal';

export const metadata: Metadata = {
  title: 'Signin',
  description: 'sign in to your account',
};

const SigninPage = () => {
  return (
    <div>
      <SigninPersonal />
    </div>
  );
};

export default SigninPage;
