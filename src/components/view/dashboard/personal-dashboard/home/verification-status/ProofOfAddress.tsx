import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import SubHeading from '../../../shared/SubHeading';
import { Heading } from '../../../shared/Heading';
import { useSidebar } from '../../../shared/SideBar';

import ReSelect from '@/components/re-ui/ReSelect';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import { PROOF_OF_ADDRESS_WINDOW, VERIFICATION_SUCCESS_WINDOW } from '@/constants/homeData';
import { Form } from '@/components/ui/form';
import { proofOfAddressSchema, TProofOfAddress } from '@/lib/validations/personal/home.validation';
import { proofOfAddressVerification } from '@/lib/actions/personal/verification.action';
import ReImageInput from '@/components/re-ui/re-image/ReImage';

const defaultValues = {
  address: '',
  state: '',
  localGovernment: '',
  city: '',
  documentType: '',
  image: '',
};

export default function ProofOfAddress() {
  const { open, close } = useSidebar();

  const form = useForm<TProofOfAddress>({
    resolver: zodResolver(proofOfAddressSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;
  const { isSubmitting } = formState;

  // const onSubmit: SubmitHandler<TProofOfAddress> = () => {
  //   close(PROOF_OF_ADDRESS_WINDOW);
  //   open(VERIFICATION_SUCCESS_WINDOW);
  // };

  const onSubmit: SubmitHandler<TProofOfAddress> = async (data: TProofOfAddress) => {
    console.log('🌼 🔥🔥 constonSubmit:SubmitHandler<TProofOfAddress>= 🔥🔥 data🌼', data);

    try {
      const response = await proofOfAddressVerification(data);

      if (response?.success) {
        toast.success('Proof of address submitted successfully!');
        close(PROOF_OF_ADDRESS_WINDOW);
        open(VERIFICATION_SUCCESS_WINDOW);
      } else {
        toast.error('Proof of address submission failed');
      }
    } catch (error) {
      toast.error('Proof of address submission failed');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4">
        <div>
          <Heading heading="Proof of Address" size="2xl" />
          <SubHeading subHeading="We would like to confirm your address with a valid utility bill within the last 3 months" />
        </div>

        <div className="mt-6 space-y-5">
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

          <ReSelect
            name="documentType"
            label="Document Type"
            placeholder="Select"
            options={[
              { value: 'electricity_bill', label: 'Electricity Bill' },
              { value: 'water_bill', label: 'Water Bill' },
              { value: 'waste_bill', label: 'Waste Bill' },
              { value: 'cable_bill', label: 'Dstv / Cable Bill' },
            ]}
          />

          {/* <ReImageInput name="image" label="Upload Image" /> */}
          <ReInput name="image" label="Upload Image" />
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
