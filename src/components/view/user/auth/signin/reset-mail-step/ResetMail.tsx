import ResetMailForm from './ResetMailForm';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResetMail = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Forget your pass ?</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResetMailForm />
      </CardContent>
    </div>
  );
};

export default ResetMail;
