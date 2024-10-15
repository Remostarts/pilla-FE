import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import ReImageInput from '@/components/re-ui/re-image/ReImage';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Form } from '@/components/ui/form';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import {
  LINK_BANK_ACCOUNT_WINDOW,
  RENT_INFORMATION_WINDOW,
} from '@/constants/pillaRentFinanceData';
import { nigeriaState } from '@/lib/data/nigeriaStates';
import { rentInfoSchema, TRentInfo } from '@/lib/validations/personal/finance.validation';

const defaultValues = {
  annualRent: '',
  rentDueDate: '',
  typeOfHouse: '',
  houseAddress: '',
  city: '',
  state: '',
  housePictures: '',
  pastRentPictures: '',
};

export default function RentInfo() {
  const { open, close } = useSidebar();

  const form = useForm<TRentInfo>({
    resolver: zodResolver(rentInfoSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    close(RENT_INFORMATION_WINDOW);
    open(LINK_BANK_ACCOUNT_WINDOW);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <Heading heading="Rent Information" size="2xl" />

        <div className="mt-2">
          <SubHeading subHeading="Provide accurate rent information, including monthly amount and landlord details, to complete your credit application." />
        </div>

        <div className="mt-8 space-y-5">
          <ReInput label="How much is your annual rent?" placeholder="0.00" name="annualRent" />

          <ReInput label="Rent Due Date" placeholder="Select" name="rentDueDate" />

          <ReSelect
            name="typeOfHouse"
            label="Type of House"
            placeholder="Select"
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
            ]}
          />

          <ReInput label="House Address" placeholder="Enter Address" name="houseAddress" />

          <ReInput label="City" placeholder="Enter City" name="city" />

          <ReSelect name="state" label="State" placeholder="Select" options={nigeriaState} />

          <ReImageInput
            label="Upload pictures of the house?"
            placeholder="Click to upload"
            name="housePictures"
            description="File Type (.jpg, .pdf, .png) must not exceed 2MB"
          />

          <ReImageInput
            label="Upload evidence for past rent"
            placeholder="Click to upload"
            name="pastRentPictures"
            description="File Type (.jpg, .pdf, .png) must not exceed 5MB"
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
