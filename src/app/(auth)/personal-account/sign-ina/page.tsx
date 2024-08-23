import { Metadata } from 'next';

import { Signin } from '@/components/view/auth/sign-in/Signin';

export const metadata: Metadata = {
  title: 'Pilla-signin',
  description: 'sign in to your account',
};

const SigninPage = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default SigninPage;
