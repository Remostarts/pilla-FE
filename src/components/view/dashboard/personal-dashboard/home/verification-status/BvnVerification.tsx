import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { BVN_VERIFICATION_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import {
  bvnVerificationSchema,
  TBvnVerification,
} from '@/lib/validations/personal/home.validation';

const defaultValues = {
  bvnVerificationNumber: '',
  gender: '',
  dateOfBirth: '',
};

export default function BvnVerification() {
  const { open, close } = useSidebar();

  const form = useForm<TBvnVerification>({
    resolver: zodResolver(bvnVerificationSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit: SubmitHandler<TBvnVerification> = (data) => {
    console.log(data);
    close(BVN_VERIFICATION_WINDOW);
    open(VERIFICATION_SUCCESS_WINDOW);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div>
          <Heading heading="BVN Verification" size="2xl" />
          <SubHeading subHeading="Enter BVN to complete BVN verification" />
        </div>

        <div className="mt-6 space-y-5">
          <ReInput
            label="Bank Verification Number"
            placeholder="Enter BVN"
            name="bvnVerificationNumber"
          />

          <ReSelect
            name="gender"
            label="Gender"
            placeholder="Select"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
          />

          <ReInput label="Date of Birth" placeholder="Select Date" name="dateOfBirth" />
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Submit
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
