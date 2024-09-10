import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import { RENT_INFORMATION_WINDOW, WORK_INFORMATION_WINDOW } from '@/constants/pillaRentFinanceData';
import { TWorkInfo, workInfoSchema } from '@/lib/validations/personal/finance.validation';

const defaultValues = {
  employerName: '',
  monthlySalary: '',
  paymentDate: '',
  isWorkEmailPresent: '',
};

export default function WorkInfo() {
  const { open, close } = useSidebar();

  const form = useForm<TWorkInfo>({
    resolver: zodResolver(workInfoSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(WORK_INFORMATION_WINDOW);
    open(RENT_INFORMATION_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Work Information" size="2xl" />

        <div className="mt-2">
          <SubHeading subHeading="Enter Employee Information" />
        </div>

        <div className="mt-8 space-y-5">
          <ReInput
            label="Enter Employer Name"
            placeholder="Enter Employer Name"
            name="employerName"
          />

          <ReInput label="Monthly Salary Amount" placeholder="0.00" name="monthlySalary" />

          <ReInput label="Select Payment Date" placeholder="Select" name="paymentDate" />

          <ReSelect
            name="isWorkEmailPresent"
            label="Do you have a work email address?"
            placeholder="Select"
            options={[
              { value: 'yes', label: 'yes' },
              { value: 'no', label: 'no' },
            ]}
          />
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Proceed
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
