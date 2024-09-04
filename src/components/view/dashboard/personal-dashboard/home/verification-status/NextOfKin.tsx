import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import { NEXT_OF_KIN_SUCCESS_WINDOW, NEXT_OF_KIN_WINDOW } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { nextOfKinSchema, TNextOfKin } from '@/lib/validations/personal/home.validation';
import { nextOfKinVerification } from '@/lib/actions/personal/verification.action';
import { toast } from '@/components/ui/use-toast';

const defaultValues = {
  firstName: '',
  lastName: '',
  gender: '',
  relationship: '',
  phone: '',
  email: '',
  address: '',
  state: '',
  localGovernment: '',
  city: '',
};

export default function NextOfKin() {
  const { open, close } = useSidebar();

  const form = useForm<TNextOfKin>({
    resolver: zodResolver(nextOfKinSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  const onSubmit: SubmitHandler<TNextOfKin> = async (data: TNextOfKin) => {
    try {
      const response = await nextOfKinVerification(data);

      if (response?.success) {
        toast({
          title: 'Success',
          description: 'Next of Kin submitted successfully!',
        });
        close(NEXT_OF_KIN_WINDOW);
        open(NEXT_OF_KIN_SUCCESS_WINDOW);
      } else {
        toast({
          title: 'Error',
          description: response.error,
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Verification error:', error);
      toast({
        title: 'Next of Kin verification failed',
        description: error instanceof Error ? error.message : 'An unexpected error occurred',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading heading="Next of Kin" size="2xl" />
          <SubHeading subHeading="Enter your next of kin information" />
        </div>

        {/* Profile Details */}
        <div className="mt-6">
          <Heading heading="Profile Details" size="lg" />
          <div className="mt-4 space-y-5">
            <ReInput label="First Name" placeholder="Enter your First Name" name="firstName" />

            <ReInput label="Last Name" placeholder="Enter your Last Name" name="lastName" />

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

            <ReInput label="Relationship" name="relationship" />
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8">
          <Heading heading="Contact Information" size="lg" />
          <div className="mt-4 space-y-5">
            <ReInput label="Phone Number" placeholder="Enter your Phone Number" name="phone" />

            <ReInput label="Email Address" placeholder="Enter your Email Address" name="email" />
          </div>
        </div>

        {/* Address Details */}
        <div className="mt-8">
          <Heading heading="Address Details" size="lg" />
          <div className="mt-4 space-y-5">
            <ReInput label="Address" placeholder="Enter your Address" name="address" />

            <ReSelect name="state" label="State" placeholder="Select" options={nigeriaState} />

            <div className="flex justify-between gap-6">
              <div className="w-1/2">
                <ReSelect
                  name="localGovernment"
                  label="Local Government"
                  placeholder="Select"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                  ]}
                />
              </div>

              <div className="w-1/2">
                <ReInput label="City / Town" name="city" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit" isSubmitting={isSubmitting}>
            Submit
          </ReButton>
        </div>
      </form>
    </Form>
  );
}
