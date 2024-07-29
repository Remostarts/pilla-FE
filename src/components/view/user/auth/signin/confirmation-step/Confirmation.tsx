import ConfirmationButtons from './ConfirmationButtons';

import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Confirmation = () => {
  return (
    <div className="">
      <CardHeader className="text-center">
        <CardTitle>Forget your pass ?</CardTitle>
        <CardDescription>Start resetting.</CardDescription>
      </CardHeader>
      <CardContent>
        <ConfirmationButtons />
      </CardContent>
    </div>
  );
};

export default Confirmation;
