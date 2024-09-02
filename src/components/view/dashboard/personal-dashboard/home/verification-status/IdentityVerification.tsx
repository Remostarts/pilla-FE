import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import OrStrike from '../../../shared/OrStrike';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { IDENTITY_VERIFICATION_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import {
  identityVerificationSchema,
  TIdentityVerification,
} from '@/lib/validations/personal/home.validation';

const defaultValues = {
  ninNumber: '',
  idType: '',
  idNumber: '',
  idImage: '',
};

export default function IdentityVerification() {
  const { open, close } = useSidebar();

  const form = useForm<TIdentityVerification>({
    resolver: zodResolver(identityVerificationSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit: SubmitHandler<TIdentityVerification> = () => {
    close(IDENTITY_VERIFICATION_WINDOW);
    open(VERIFICATION_SUCCESS_WINDOW);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div>
          <Heading heading="Identity Verification" size="2xl" />
          <SubHeading subHeading="Enter your NIN or Upload ID to complete identity verification" />
        </div>

        <div className="mt-6 space-y-5">
          <ReInput label="Enter NIN Number" name="ninNumber" placeholder="Enter NIN Number" />

          <OrStrike />

          <ReSelect
            name="idType"
            label="Select ID"
            placeholder="Select"
            options={[
              { value: 'voter-card', label: "Voter's card" },
              { value: 'driver-license', label: 'Driver License' },
              { value: 'international-passport', label: 'International Passport' },
            ]}
          />

          <ReInput label="Enter ID Number" name="idNumber" placeholder="Enter ID Number" />

          <ReInput label="Upload ID Image" name="idImage" placeholder="Select to choose file" />
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
