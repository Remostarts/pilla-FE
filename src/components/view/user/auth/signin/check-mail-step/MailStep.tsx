import { MailIcon } from 'lucide-react';

import ResendMail from './ResendMail';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const MailStep = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <div className="flex justify-center py-10">
          <MailIcon size={48} />
        </div>
        <CardTitle>Check Your Email</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        <ResendMail />
      </CardContent>
    </div>
  );
};

export default MailStep;
