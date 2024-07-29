import { Metadata } from 'next';
import { Suspense } from 'react';

import AllSteps from '@/components/view/user/auth/signin/AllSteps';

export const metadata: Metadata = {
  title: 'Pc-signin',
  description: 'get clean start',
};

const SigninPage = () => {
  return (
    <div>
      <Suspense>
        <AllSteps />
      </Suspense>
    </div>
  );
};

export default SigninPage;
