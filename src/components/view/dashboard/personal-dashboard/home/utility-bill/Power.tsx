import { Heading } from '../../../shared/Heading';
import { Sidebar, useSidebar } from '../../../shared/SideBar';

import ReInput from '@/components/re-ui/re-input/ReInput';
import ReSelect from '@/components/re-ui/ReSelect';
import { ReButton } from '@/components/re-ui/ReButton';
import { PaymentSummaryProps } from '@/types/payment.type';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';

export default function Power() {
  // Use Sidebar Context
  const { close } = useSidebar();

  // Use Payment Summary Context
  const { openPaymentSummary } = usePaymentSummary();

  // Proceed Btn Handler
  const handleProceedClick = () => {
    const paymentData: PaymentSummaryProps = {
      amount: 2400,
    };
    openPaymentSummary(paymentData);
    close('utility-power');
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
        {/* Open Payment Summary Sidebar + handle Proceed */}
        <Sidebar.Open opens="payment-summary">
          <ReButton size="lg" onClick={handleProceedClick}>
            Proceed
          </ReButton>
        </Sidebar.Open>
      </div>
    </div>
  );
}
