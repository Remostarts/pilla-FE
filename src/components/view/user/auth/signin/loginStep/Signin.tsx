import Step1 from './Step1';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const Signin = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Start the journey with us today.</CardDescription>
      </CardHeader>
      <CardContent>
        <Step1 />
      </CardContent>
    </div>
  );
};
