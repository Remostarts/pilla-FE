import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import ReSelect from '@/components/re-ui/ReSelect';
import { Heading } from '@/components/view/dashboard/shared/Heading';
import { useSidebar } from '@/components/view/dashboard/shared/SideBar';
import SubHeading from '@/components/view/dashboard/shared/SubHeading';
import {
  LINK_BANK_ACCOUNT_WINDOW,
  RENT_INFORMATION_WINDOW,
} from '@/constants/pillaRentFinanceData';
import { nigeriaState } from '@/lib/data/nigeriaStates';

export default function RentInfo() {
  const { open, close } = useSidebar();

  const handleProceed = () => {
    close(RENT_INFORMATION_WINDOW);
    open(LINK_BANK_ACCOUNT_WINDOW);
  };

  return (
    <div className="p-4">
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

        <ReInput
          label="Upload pictures of the house?"
          placeholder="Click to upload"
          name="housePictures"
          description="File Type (.jpg, .pdf, .png) must not exceed 2MB"
        />

        <ReInput
          label="Upload evidence for past rent"
          placeholder="Click to upload"
          name="pastRentPictures"
          description="File Type (.jpg, .pdf, .png) must not exceed 5MB"
        />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceed}>
          Proceed
        </ReButton>
      </div>
    </div>
  );
}
