import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Heading } from '../../../dashboard/shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { Form } from '@/components/ui/form';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';

const defaultValues = {
  amount: '',
};

const assignCreditLimitSchema = z.object({
  amount: z.string().min(1, 'Amount is required'),
});

type TAssignCreditLimit = z.infer<typeof assignCreditLimitSchema>;

export default function AssignCreditLimit() {
  const form = useForm<TAssignCreditLimit>({
    resolver: zodResolver(assignCreditLimitSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleSubmit } = form;

  const { close } = useSidebar();

  const onSubmit = (data: TAssignCreditLimit) => {
    console.log('form data:', data);
    close('APPROVE_CREDIT');
    close('CHECK_CREDIT_APPLICATION');
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" relative w-full ">
          <div className="mb-4 flex items-center justify-between">
            <Heading heading="Assign Credit Limit" className="mb-6 text-2xl font-semibold" />
          </div>
          <div className="space-y-4">
            <ReInput name="amount" label="Enter Amount" placeholder="0.00" />
            <ReButton type="submit" className="w-full text-lg text-white">
              Submit
            </ReButton>
          </div>
        </div>
      </form>
    </Form>
  );
}
