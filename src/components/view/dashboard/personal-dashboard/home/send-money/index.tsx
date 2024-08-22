import ArrowedActionButton from '../../../shared/ArrowedActionBtn';
import { Heading } from '../../../shared/Heading';
import Pin from '../../../shared/Pin';
import { Sidebar } from '../../../shared/SideBar';
import { SuccessMessage } from '../../../shared/SuccessMessage';
import PaymentSummary from '../../../shared/summary/PaymentSummary';

import BankTransfer from './BankTransfer';
import PillaTransfer from './PillaTransfer';

import { formatNumber } from '@/helpers/utils/formatNumber';
import {
  PAYMENT_SUMMARY_WINDOW,
  TO_BANK_ACCOUNT_WINDOW,
  TO_PILLA_ACCOUNT_WINDOW,
  TRANSACTION_PIN_WINDOW,
  TRANSACTION_RECEIPT_WINDOW,
} from '@/constants/homeData';
import { usePaymentSummary } from '@/context/PaymentSummaryProvider';

const sendMoneyBtnData = [
  {
    id: 1,
    name: 'To Pilla Account',
    window: 'to-pilla-account-window',
  },
  {
    id: 2,
    name: 'To Other Bank Account',
    window: 'to-other-bank-account-window',
  },
];

export default function SendMoneyHome() {
  const { paymentSummary } = usePaymentSummary();

  return (
    <div className="p-4">
      <Heading heading="Send Money" size="2xl" />

      <div className="mt-10 space-y-4">
        {/* Side Open Functionality */}
        {sendMoneyBtnData.map((data) => (
          <Sidebar.Open key={data.id} opens={data.window}>
            <ArrowedActionButton btnName={data.name} />
          </Sidebar.Open>
        ))}
      </div>

      {/* To Pilla Account Window */}
      <Sidebar.Window name={TO_PILLA_ACCOUNT_WINDOW}>
        <PillaTransfer />
      </Sidebar.Window>

      {/* To Other Bank Account Window */}
      <Sidebar.Window name={TO_BANK_ACCOUNT_WINDOW}>
        <BankTransfer />
      </Sidebar.Window>

      {/* Transfer Payment Summary Window */}
      <Sidebar.Window name={PAYMENT_SUMMARY_WINDOW}>
        <PaymentSummary
          isDestination={true}
          accountHolderName="Sourabh Haldar"
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

      {/* Receipt + Succes Message Window */}
      <Sidebar.Window name={TRANSACTION_RECEIPT_WINDOW}>
        <SuccessMessage>
          <SuccessMessage.Title>Transaction Reciept</SuccessMessage.Title>
          <SuccessMessage.Content>
            <SuccessMessage.Description>Money Sent Successful</SuccessMessage.Description>
          </SuccessMessage.Content>
          <SuccessMessage.AmountAndDate amount={formatNumber(paymentSummary?.finalAmount)} />
          <SuccessMessage.ActionButton onClick={() => console.log('share reciept')}>
            Share Receipt
          </SuccessMessage.ActionButton>
          <SuccessMessage.Button closes={TRANSACTION_RECEIPT_WINDOW}>Done</SuccessMessage.Button>
        </SuccessMessage>
      </Sidebar.Window>
    </div>
  );
}
