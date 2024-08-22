import { Heading } from '../../../shared/Heading';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { UTILITY_POWER_WINDOW, UTILITY_SERVICE_CHARGE } from '@/constants/homeData';

export default function Power() {
  const { handlePaymentSummary } = usePaymentSummaryAction();

  // Sets a amount and closes itself
  const handleProceedClick = () => {
    handlePaymentSummary(2100, UTILITY_SERVICE_CHARGE, UTILITY_POWER_WINDOW);
  };

  return (
    <div className="p-4">
      <Heading
        heading="Buy Power"
        size="2xl"
        img="/assets/personal-dashboard/home/power-icon.svg"
      />

      <div className="mt-6 space-y-5">
        <ReSelect
          name="biller"
          label="Select Biller"
          placeholder="Select"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'other', label: 'Other' },
          ]}
        />

        <ReInput label="Meter Number" placeholder="00000" name="meterNumber" />

        <ReInput label="Enter Amount" placeholder="0.00" name="amount" />

        <ReInput label="Phone Number" placeholder="+234" name="phoneNumber" />

        <ReInput label="Email Address" placeholder="Enter Email Address" name="email" />
      </div>

      <div className="mt-12">
        <ReButton size="lg" onClick={handleProceedClick}>
          Proceed
        </ReButton>
      </div>
    </div>
  );
}
