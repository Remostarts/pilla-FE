import { LucideKey } from 'lucide-react';

import ForgetPassForm from './ForgetPassForm';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ForgetPass = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <div className="flex justify-center py-10">
          <LucideKey size={48} />
        </div>
        <CardTitle>Forget your pass ?</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        hello step 2
        <ForgetPassForm />
      </CardContent>
    </div>
  );
};

export default ForgetPass;
