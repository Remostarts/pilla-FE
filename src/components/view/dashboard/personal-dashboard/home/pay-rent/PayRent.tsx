import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Heading } from '../../../shared/Heading';
import { Sidebar } from '../../../shared/SideBar';
import SubHeading from '../../../shared/SubHeading';
import PaymentSummary from '../../../shared/summary/PaymentSummary';
import Pin from '../../../shared/Pin';
import { SuccessMessage } from '../../../shared/SuccessMessage';

import ReInput from '@/components/re-ui/re-input/ReInput';
import { ReButton } from '@/components/re-ui/ReButton';
import {
  PAY_RENT_SERVICE_CHARGE,
  PAYMENT_SUMMARY_WINDOW,
  TRANSACTION_PIN_WINDOW,
  TRANSACTION_RECEIPT_WINDOW,
} from '@/constants/homeData';
import { formatNumber } from '@/helpers/utils/formatNumber';
import { usePaymentSummaryAction } from '@/hooks/useSummaryAction';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';
import { Form } from '@/components/ui/form';
import { payRentSchema, TPayRent } from '@/lib/validations/personal/home.validation';

const defaultValues = {
  pillaAccountNumber: '',
  beneficiaryName: '',
  amount: '',
  narration: '',
};

export default function PayRent() {
  const { paymentSummary } = usePaymentSummary();
  const { handlePaymentSummary } = usePaymentSummaryAction();

  const form = useForm<TPayRent>({
    resolver: zodResolver(payRentSchema),
    defaultValues,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = form;

  const onSubmit = () => {
    handlePaymentSummary(2100, PAY_RENT_SERVICE_CHARGE);
  };

  return (
    <Form {...form}>
      <form className="p-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading heading="Pay Rent" size="2xl" />
          <SubHeading subHeading="Effortlessly Pay Rent to your Landlord on Pilla" />
        </div>

        {/* Profile Details */}
        <div className="mt-6">
          <Heading heading="Select Beneficiary" size="lg" />
          <div className="mt-4 space-y-5">
            <ReInput
              label="Pilla Account Number"
              placeholder="Enter Account Number"
              name="pillaAccountNumber"
            />

            <ReInput
              label="Beneficiary Name"
              placeholder="Enter Beneficiary Name"
              name="beneficiaryName"
            />

            <ReInput label="Enter Amount" name="amount" placeholder="0.00" />

            <ReInput label="Narration" name="narration" placeholder="Enter Narration" />
          </div>
        </div>

        <div className="mt-12">
          <ReButton size="lg" type="submit">
            Continue
          </ReButton>
        </div>

        {/* Transfer Payment Summary Window */}
        <Sidebar.Window name={PAYMENT_SUMMARY_WINDOW}>
          <PaymentSummary
            isDestination={true}
            accountHolderName="Test User"
            bankName="Bank of Nigeria"
          />
        </Sidebar.Window>

        {/* Transaction Pin */}
        <Sidebar.Window name={TRANSACTION_PIN_WINDOW}>
          <Pin
            heading="Enter Transaction PIN"
            subHeading="Input your 4 digit passcode to authorize this transaction"
            btnName="Verify"
            opens={TRANSACTION_RECEIPT_WINDOW}
            closes={TRANSACTION_PIN_WINDOW}
          />
        </Sidebar.Window>

        {/* Receipt + Success Message Window */}
        <Sidebar.Window name={TRANSACTION_RECEIPT_WINDOW}>
          <SuccessMessage>
            <SuccessMessage.Title>Transaction Receipt</SuccessMessage.Title>
            <SuccessMessage.Content>
              <SuccessMessage.Description>Rent Pay Successful</SuccessMessage.Description>
            </SuccessMessage.Content>
            <SuccessMessage.AmountAndDate amount={formatNumber(paymentSummary?.finalAmount)} />
            <SuccessMessage.ActionButton onClick={() => console.log('share receipt')}>
              Share Receipt
            </SuccessMessage.ActionButton>
            <SuccessMessage.Button closes={TRANSACTION_RECEIPT_WINDOW}>Done</SuccessMessage.Button>
          </SuccessMessage>
        </Sidebar.Window>
      </form>
    </Form>
  );
}
